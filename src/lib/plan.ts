import { addDays, format, isAfter, isBefore, startOfDay } from "date-fns";

export type ZoneId = "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10";

export type ZoneInfo = {
  id: ZoneId;
  lastSpring: [number, number];
  firstFall: [number, number];
  winter: { start: [number, number]; end: [number, number] } | null;
  blurb: string;
};

export const ZONES: ZoneInfo[] = [
  {
    id: "3",
    lastSpring: [5, 30],
    firstFall: [9, 10],
    winter: null,
    blurb: "Short season. Sow once, as soon as the soil crumbles. A fall crop rarely finishes.",
  },
  {
    id: "4",
    lastSpring: [5, 15],
    firstFall: [9, 25],
    winter: null,
    blurb: "Late April is the usual start if the bed is no longer mud. Skip a fall sowing.",
  },
  {
    id: "5",
    lastSpring: [4, 30],
    firstFall: [10, 10],
    winter: null,
    blurb: "A classic spring crop. Fall is a gamble unless you use a very fast bush variety.",
  },
  {
    id: "6",
    lastSpring: [4, 15],
    firstFall: [10, 20],
    winter: null,
    blurb: "Spring is the main harvest. A late-summer sowing can still pod before frost.",
  },
  {
    id: "7",
    lastSpring: [4, 1],
    firstFall: [11, 5],
    winter: null,
    blurb: "Spring heats up fast. The late-summer sowing is often the better one.",
  },
  {
    id: "8",
    lastSpring: [3, 15],
    firstFall: [11, 20],
    winter: null,
    blurb: "Sow in late winter, then again in late summer. Fall often outlasts spring.",
  },
  {
    id: "9",
    lastSpring: [2, 15],
    firstFall: [12, 10],
    winter: { start: [10, 15], end: [1, 31] },
    blurb: "Treat peas as a winter crop. Sow October through January and pull them before late-spring heat.",
  },
  {
    id: "10",
    lastSpring: [1, 31],
    firstFall: [12, 20],
    winter: { start: [11, 1], end: [2, 15] },
    blurb: "A winter crop. Sow November through mid-February. Heat, not frost, is what ends it.",
  },
];

export function zoneById(id: ZoneId): ZoneInfo {
  const zone = ZONES.find((item) => item.id === id);
  if (!zone) throw new Error(`Unknown zone ${id}`);
  return zone;
}

export type WindowStatus = "now" | "upcoming" | "past" | "marginal";

export type PlanWindow = {
  id: string;
  label: string;
  rangeLabel: string;
  status: WindowStatus;
  statusLabel: string;
  detail: string;
  harvestNote: string | null;
};

export type Plan = {
  headline: string;
  summary: string;
  placeNote: string;
  windows: PlanWindow[];
  soil: string;
};

export const SOIL_NOTE =
  "Sow when the soil is at least 40°F and crumbles instead of smearing. Germination is best around 50–65°F. Cold mud rots the seed. So does soil above about 75°F.";

type MonthDay = [number, number];

function atMD(year: number, md: MonthDay): Date {
  return startOfDay(new Date(year, md[0] - 1, md[1]));
}

export function parseMonthDay(value: string): MonthDay | null {
  const match = /^(\d{2})-(\d{2})$/.exec(value);
  if (!match) return null;
  const month = Number(match[1]);
  const day = Number(match[2]);
  if (month < 1 || month > 12 || day < 1 || day > 31) return null;
  const probe = new Date(2024, month - 1, day);
  if (probe.getMonth() !== month - 1 || probe.getDate() !== day) return null;
  return [month, day];
}

export function monthDayFromDateInput(value: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return "";
  return parseMonthDay(`${match[2]}-${match[3]}`) ? `${match[2]}-${match[3]}` : "";
}

export function dateInputFromMonthDay(md: string, year: number): string {
  if (!parseMonthDay(md)) return "";
  return `${year}-${md}`;
}

function formatNear(date: Date, today: Date): string {
  if (date.getFullYear() !== today.getFullYear()) return format(date, "MMM d, yyyy");
  return format(date, "MMM d");
}

function formatRange(start: Date, end: Date, today: Date): string {
  const crossYear =
    start.getFullYear() !== today.getFullYear() ||
    end.getFullYear() !== today.getFullYear() ||
    start.getFullYear() !== end.getFullYear();
  if (crossYear) {
    return `${format(start, "MMM d, yyyy")} – ${format(end, "MMM d, yyyy")}`;
  }
  return `${format(start, "MMM d")} – ${format(end, "MMM d")}`;
}

function statusOf(start: Date, end: Date, today: Date): WindowStatus {
  const day = startOfDay(today);
  if (isBefore(day, start)) return "upcoming";
  if (isAfter(day, end)) return "past";
  return "now";
}

function statusLabel(status: WindowStatus): string {
  if (status === "now") return "Sow now";
  if (status === "upcoming") return "Upcoming";
  if (status === "marginal") return "Unreliable";
  return "Passed";
}

type VarietyHint = { name: string; days: number } | null;

function harvestNote(
  status: WindowStatus,
  start: Date,
  end: Date,
  today: Date,
  variety: VarietyHint,
): string | null {
  if (!variety || status === "past" || status === "marginal") return null;
  if (status === "now") {
    const pick = addDays(startOfDay(today), variety.days);
    return `Sow ${variety.name} today and expect first pods around ${formatNear(pick, today)}. Weather can move that by a week.`;
  }
  const first = addDays(start, variety.days);
  const last = addDays(end, variety.days);
  return `${variety.name} sown at the open of this window picks around ${formatNear(first, today)}. Sown on the last day, around ${formatNear(last, today)}.`;
}

function springSlack(id: ZoneId): number {
  if (id === "3" || id === "4" || id === "5" || id === "6") return 14;
  return 0;
}

function springBounds(year: number, last: MonthDay, zoneId: ZoneId) {
  const frost = atMD(year, last);
  return { start: addDays(frost, -42), end: addDays(frost, springSlack(zoneId)) };
}

function fallBounds(year: number, first: MonthDay) {
  const frost = atMD(year, first);
  return { start: addDays(frost, -84), end: addDays(frost, -56) };
}

function chooseUpcoming(today: Date, build: (year: number) => { start: Date; end: Date }) {
  const year = today.getFullYear();
  const current = build(year);
  if (!isAfter(startOfDay(today), current.end)) return current;
  return build(year + 1);
}

function winterBounds(today: Date, startMD: MonthDay, endMD: MonthDay) {
  const year = today.getFullYear();
  const wraps = endMD[0] < startMD[0];
  const candidates = [year - 1, year, year + 1].map((y) => ({
    start: atMD(y, startMD),
    end: atMD(wraps ? y + 1 : y, endMD),
  }));
  const day = startOfDay(today);
  const current = candidates.find((item) => !isBefore(day, item.start) && !isAfter(day, item.end));
  if (current) return current;
  const upcoming = candidates
    .filter((item) => isBefore(day, item.start))
    .sort((a, b) => a.start.getTime() - b.start.getTime())[0];
  return upcoming ?? candidates[candidates.length - 1];
}

export function buildPlan(opts: {
  zoneId: ZoneId;
  today?: Date;
  lastFrostMD?: string;
  firstFrostMD?: string;
  variety?: VarietyHint;
}): Plan {
  const zone = zoneById(opts.zoneId);
  const today = startOfDay(opts.today ?? new Date());
  const customLast = parseMonthDay(opts.lastFrostMD ?? "");
  const customFirst = parseMonthDay(opts.firstFrostMD ?? "");
  const last = customLast ?? zone.lastSpring;
  const first = customFirst ?? zone.firstFall;
  const variety = opts.variety ?? null;
  const windows: Array<PlanWindow & { sort: number }> = [];

  if (zone.winter) {
    const span = winterBounds(today, zone.winter.start, zone.winter.end);
    const status = statusOf(span.start, span.end, today);
    windows.push({
      id: "winter",
      label: "Winter sowing",
      rangeLabel: formatRange(span.start, span.end, today),
      status,
      statusLabel: statusLabel(status),
      detail:
        "This is the main crop. Keep sowing while nights are cool. Stop once days sit in the 70s and the soil stays warm.",
      harvestNote: harvestNote(status, span.start, span.end, today, variety),
      sort: span.start.getTime(),
    });
  } else {
    const spring = chooseUpcoming(today, (year) => springBounds(year, last, zone.id));
    const springStatus = statusOf(spring.start, spring.end, today);
    const hot = zone.id === "7" || zone.id === "8";
    windows.push({
      id: "spring",
      label: "Spring sowing",
      rangeLabel: formatRange(spring.start, spring.end, today),
      status: springStatus,
      statusLabel: statusLabel(springStatus),
      detail: hot
        ? "Opens six weeks before the last frost and closes on that frost date. Later sowings hit heat and drop their flowers."
        : "Opens six weeks before the last frost and stays open about two weeks after it. The date only counts if the soil is workable.",
      harvestNote: harvestNote(springStatus, spring.start, spring.end, today, variety),
      sort: spring.start.getTime(),
    });

    if (zone.id === "3" || zone.id === "4") {
      windows.push({
        id: "fall",
        label: "Fall sowing",
        rangeLabel: "Not recommended",
        status: "marginal",
        statusLabel: "Skip",
        detail:
          "After summer there are not enough cool weeks for pods to fill. Sow a second variety two weeks after the first instead.",
        harvestNote: null,
        sort: Number.MAX_SAFE_INTEGER,
      });
    } else {
      const fall = chooseUpcoming(today, (year) => fallBounds(year, first));
      const marginal = zone.id === "5";
      const calendar = statusOf(fall.start, fall.end, today);
      windows.push({
        id: "fall",
        label: "Fall sowing",
        rangeLabel: formatRange(fall.start, fall.end, today),
        status: calendar,
        statusLabel: marginal ? (calendar === "past" ? "Passed" : "Unreliable") : statusLabel(calendar),
        detail: marginal
          ? "Only with a 55-day bush variety such as Sugar Ann. An early frost often wins in this zone."
          : "Eight to twelve weeks before the first frost. Use a fast bush variety, and shade seedlings if the soil is still hot.",
        harvestNote: marginal ? null : harvestNote(calendar, fall.start, fall.end, today, variety),
        sort: fall.start.getTime(),
      });
    }
  }

  windows.sort((a, b) => a.sort - b.sort);
  const ordered = windows.map(({ sort: _sort, ...item }) => item);

  const live = ordered.find((item) => item.status === "now");
  const next = ordered.find((item) => item.status === "upcoming");
  let headline = "Plan the sowing, then trust the soil more than the calendar.";
  if (live && zone.id === "5" && live.id === "fall") {
    headline = "A fall sowing is possible now, but unreliable in this zone.";
  } else if (live) {
    headline =
      live.id === "winter"
        ? "You are in the winter sowing window."
        : live.id === "fall"
          ? "You are in the fall sowing window."
          : "You are in the spring sowing window.";
  } else if (next && zone.id === "5" && next.id === "fall") {
    headline = `Fall sowing opens ${next.rangeLabel.split(" – ")[0]}, but it is unreliable in this zone.`;
  } else if (next) {
    headline = `${next.label} opens ${next.rangeLabel.split(" – ")[0]}.`;
  }

  const usingCustom = !zone.winter && Boolean(customLast || customFirst);
  const placeNote = zone.winter
    ? `Zones 9 and 10 are timed to cool weather, not the last frost. These are typical dates for zone ${zone.id}.`
    : usingCustom
      ? "Using your frost date — month and day — placed on the coming season. A cold pocket can still shift it by a couple of weeks."
      : `Typical frost dates for USDA zone ${zone.id}. Swap in your own date if you know it. Towns in the same zone are not the same.`;

  return {
    headline,
    summary: zone.blurb,
    placeNote,
    windows: ordered,
    soil: SOIL_NOTE,
  };
}

export function parseISODateLocal(value: string): Date | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return null;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const date = startOfDay(new Date(year, month - 1, day));
  if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) return null;
  return date;
}

export function toDateInputValue(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function daysFromSow(sowDate: string, today: Date): number | null {
  const parsed = parseISODateLocal(sowDate);
  if (!parsed) return null;
  return Math.round((startOfDay(today).getTime() - parsed.getTime()) / 86400000);
}

export function formatShort(date: Date, today: Date): string {
  return formatNear(date, today);
}

export function phaseLabel(elapsed: number, maturity: number): string {
  if (elapsed < 0) {
    const ahead = Math.abs(elapsed);
    return ahead === 1 ? "Sows tomorrow" : `Sows in ${ahead} days`;
  }
  if (elapsed === 0) return "Sown today";
  if (elapsed < 14) return "Germinating";
  if (elapsed < 35) return "Vining";
  if (elapsed < Math.max(35, maturity - 8)) return "Flowering";
  if (elapsed < maturity + 18) return "Picking";
  return "Season finished";
}
