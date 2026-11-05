import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { a as addDays, i as startOfDay, n as isAfter, r as format, t as isBefore } from "../_libs/date-fns.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-XO9ooJ6q.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TASKS = [
	{
		id: "inoculant",
		label: "Inoculant on the seed"
	},
	{
		id: "support",
		label: "Support in at sowing"
	},
	{
		id: "cover",
		label: "Covered until established"
	},
	{
		id: "mulch",
		label: "Mulched once the soil warmed"
	},
	{
		id: "picking",
		label: "Picking every other day"
	}
];
function emptyTasks() {
	return {
		inoculant: false,
		support: false,
		cover: false,
		mulch: false,
		picking: false
	};
}
var useJournal = create()(persist((set) => ({
	zoneId: "6",
	lastFrost: "",
	firstFrost: "",
	plannerVarietyId: "",
	plantings: [],
	setZoneId: (zoneId) => set({ zoneId }),
	setLastFrost: (lastFrost) => set({ lastFrost }),
	setFirstFrost: (firstFrost) => set({ firstFrost }),
	setPlannerVarietyId: (plannerVarietyId) => set({ plannerVarietyId }),
	addPlanting: (input) => set((state) => ({ plantings: [{
		id: crypto.randomUUID(),
		varietyId: input.varietyId,
		sowDate: input.sowDate,
		bed: input.bed.trim(),
		notes: input.notes.trim(),
		tasks: emptyTasks()
	}, ...state.plantings].slice(0, 24) })),
	removePlanting: (id) => set((state) => ({ plantings: state.plantings.filter((item) => item.id !== id) })),
	toggleTask: (id, task) => set((state) => ({ plantings: state.plantings.map((item) => item.id === id ? {
		...item,
		tasks: {
			...emptyTasks(),
			...item.tasks,
			[task]: !item.tasks?.[task]
		}
	} : item) })),
	setNotes: (id, notes) => set((state) => ({ plantings: state.plantings.map((item) => item.id === id ? {
		...item,
		notes
	} : item) }))
}), {
	name: "pea-plot",
	skipHydration: true,
	version: 1
}));
function useRehydrateJournal() {
	(0, import_react.useEffect)(() => {
		useJournal.persist.rehydrate();
	}, []);
}
var TYPES = [
	{
		id: "shelling",
		label: "Shelling",
		aka: "English or garden peas",
		eat: "Shell the pod. Eat the peas.",
		detail: "The familiar sweet pea. The pod is too fibrous to eat. Pick while the peas are plump and still sweet, before they turn starchy."
	},
	{
		id: "snap",
		label: "Snap",
		aka: "Sugar snaps",
		eat: "Eat the whole pod once it plumps.",
		detail: "Thick, crisp pod walls. They string and dull if you wait, unless the variety is stringless. Best the day they snap cleanly."
	},
	{
		id: "snow",
		label: "Snow",
		aka: "Chinese peas",
		eat: "Eat the pod while it is still flat.",
		detail: "Pick before the peas swell. The pod is the crop. Leave it and the pod toughens even if the peas inside look fine."
	}
];
var VARIETIES = [
	{
		id: "little-marvel",
		name: "Little Marvel",
		type: "shelling",
		habit: "bush",
		height: "18–20 in",
		days: 62,
		note: "Compact and heavy-setting. The one to grow in a pot or a short row with pea sticks."
	},
	{
		id: "green-arrow",
		name: "Green Arrow",
		type: "shelling",
		habit: "vine",
		height: "24–30 in",
		days: 68,
		note: "Long pods with 9–11 peas. A reliable mid-height vine. Give it a short trellis."
	},
	{
		id: "wando",
		name: "Wando",
		type: "shelling",
		habit: "bush",
		height: "24–30 in",
		days: 68,
		note: "More heat-tolerant than most shelling peas. Use it for the last sowing of spring."
	},
	{
		id: "alderman",
		name: "Alderman",
		type: "shelling",
		habit: "vine",
		height: "5–6 ft",
		days: 74,
		note: "Also called Tall Telephone. Huge yield if the trellis is tall enough. An heirloom."
	},
	{
		id: "maestro",
		name: "Maestro",
		type: "shelling",
		habit: "vine",
		height: "24–30 in",
		days: 60,
		note: "Resists powdery mildew, so the row keeps picking after other shelling peas quit."
	},
	{
		id: "sugar-ann",
		name: "Sugar Ann",
		type: "snap",
		habit: "bush",
		height: "20–24 in",
		days: 56,
		note: "The early snap. Best choice for containers and for a tight fall window."
	},
	{
		id: "sugar-snap",
		name: "Sugar Snap",
		type: "snap",
		habit: "vine",
		height: "5–6 ft",
		days: 68,
		note: "The original. Sweet and crisp, and it develops a string if pods overmature. Needs a tall trellis."
	},
	{
		id: "super-sugar-snap",
		name: "Super Sugar Snap",
		type: "snap",
		habit: "vine",
		height: "5 ft",
		days: 64,
		note: "Same eating quality as Sugar Snap, with resistance to powdery mildew."
	},
	{
		id: "cascadia",
		name: "Cascadia",
		type: "snap",
		habit: "bush",
		height: "32 in",
		days: 60,
		note: "Short trellis is enough. Fat pods and mildew resistance. A good all-purpose snap."
	},
	{
		id: "oregon-sugar-pod-ii",
		name: "Oregon Sugar Pod II",
		type: "snow",
		habit: "bush",
		height: "28 in",
		days: 60,
		note: "The standard snow pea. Mildew resistant, productive, and manageable without a tall fence."
	},
	{
		id: "mammoth-melting",
		name: "Mammoth Melting Sugar",
		type: "snow",
		habit: "vine",
		height: "4–5 ft",
		days: 70,
		note: "Large, tender pods on a tall vine. Worth a cattle panel. An heirloom."
	},
	{
		id: "dwarf-grey-sugar",
		name: "Dwarf Grey Sugar",
		type: "snow",
		habit: "bush",
		height: "24–30 in",
		days: 66,
		note: "Purple flowers and good edible shoots. Sow it thick if shoots matter more than pods."
	}
];
function varietyById(id) {
	return VARIETIES.find((item) => item.id === id);
}
var FACTS = [
	{
		label: "Soil temperature",
		value: "40°F minimum, 50–65°F best"
	},
	{
		label: "Depth",
		value: "1 inch, or 2 if the soil is warm and dry"
	},
	{
		label: "In the row",
		value: "A seed every 1–2 inches"
	},
	{
		label: "Between rows",
		value: "18–24 inches"
	},
	{
		label: "Water",
		value: "About 1 inch a week"
	},
	{
		label: "Days to harvest",
		value: "55–75, by variety"
	},
	{
		label: "Soil pH",
		value: "6.0–7.5"
	},
	{
		label: "Rotation",
		value: "3–4 years before peas return"
	}
];
var CHAPTERS = [
	{
		id: "site",
		kicker: "Before you sow",
		title: "Site and soil",
		lead: "Peas want sun, cool air, and a bed that drains in a day. They fix their own nitrogen. A rich manure bed grows leaves, not pods.",
		steps: [
			"Give them six hours of sun or more. Where spring turns hot early, light afternoon shade buys a few extra days of flowers.",
			"Aim for pH 6.0–7.5. If you have never tested the bed, a test beats another bag of something.",
			"Loosen the top 8–10 inches. If water sits after rain, raise the row. Compost improves structure. Sand alone does not.",
			"Work in about an inch of finished compost. Skip fresh manure and any high-nitrogen fertilizer.",
			"Wait three or four years before peas, or other legumes, come back to the same bed. Fusarium and root rots linger in the soil."
		],
		aside: {
			title: "What to plant beside them",
			body: "Carrots, radishes, lettuce, spinach, and turnips share the cool season and do not fight the row. Keep onions, garlic, and shallots elsewhere. Alliums can slow peas. A radish sown the same day marks the row and is gone before the vines sprawl."
		}
	},
	{
		id: "seed",
		kicker: "The seed",
		title: "Seed and inoculant",
		lead: "Pea seed is at its best for about two years. Older seed comes up in patches, which looks like a soil problem and is not.",
		steps: [
			"Buy fresh seed, or use last year's only if it was stored cool and dry. Ten seeds on a damp paper towel will tell you the germination rate in a week.",
			"Direct sow. The root is a taproot and it resents transplanting. If mice force your hand, start in deep pots and move them before the second true leaf, pot and all if it is paper.",
			"Inoculate if this bed has not grown peas or vetch in the last few years. Use pea and vetch inoculant, Rhizobium leguminosarum biovar viciae. Bean inoculant is the wrong bacterium.",
			"Dampen the seed, dust it until every seed is coated, and sow the same day. Store the packet cool and check the date. Dead inoculant looks the same as live inoculant.",
			"An eight-hour soak can hurry germination in cool soil. Longer than that and the seed splits."
		],
		aside: {
			title: "Are the nodules working?",
			body: "When the first flowers open, lift one plant gently. Working nodules are pink to red inside. White, green, or missing nodules mean the inoculant did not take. The plants still grow. They just grow more slowly in a poor bed."
		}
	},
	{
		id: "sow",
		kicker: "In the ground",
		title: "Sowing",
		lead: "The usual failure is seed sown too deep into cold, wet soil. A light frost on a seedling is fine. Mud is not.",
		steps: [
			"Plant 1 inch deep in early spring. Go to 2 inches only if the soil is warm and drying out.",
			"A seed every 1 to 2 inches. Do not thin for pods. Peas like company. Thin only where seedlings are stacked on each other.",
			"Bush types: rows 18–24 inches apart. Vining types: a double row, one line about 3 inches to each side of the trellis, with trellises 3 feet apart.",
			"Firm the soil so the seed touches moisture, then water once. Do not flood the furrow every day afterward. That is how seed rots.",
			"Birds, mice, and voles will pull the row apart. Chicken wire or a row cover, until the shoots are 3 inches tall, is the fix that works.",
			"Sow another short row every 10–14 days until your spring window closes. Use a more heat-tolerant variety, such as Wando, for the last one."
		]
	},
	{
		id: "support",
		kicker: "Before they fall over",
		title: "Support",
		lead: "Put the trellis in the day you sow. Driving stakes through a rooted row snaps the plants you waited two weeks for.",
		steps: [
			"Anything under about 2 feet, such as Little Marvel or Sugar Ann, will stand with twiggy pea sticks pushed along the row.",
			"Vines from 4 to 6 feet want netting, string, or a cattle panel. Tendrils grab things thinner than a pencil more readily than a fat stake. Run twine or mesh across the frame.",
			"Alderman, Mammoth Melting Sugar, and Sugar Snap waste themselves on a 4-foot fence. Match the support to the height on the packet.",
			"When a vine reaches the top, pinch the growing tip. You get a few side shoots, less flopping, and the tips are good to eat."
		]
	},
	{
		id: "water",
		kicker: "While they grow",
		title: "Water, mulch, and feeding",
		lead: "Uneven water during flowering is the usual reason pods come out empty. The roots are shallow. The top few inches of soil are the whole story.",
		steps: [
			"About 1 inch of water a week, rain included. More in sand, and more once they flower and fill pods.",
			"Water the soil in the morning. Leaves that stay wet overnight invite powdery mildew and botrytis.",
			"Mulch with straw or shredded leaves once plants are 4 inches tall and the soil has warmed. Two inches is enough. Keep it off the stems.",
			"Do not side-dress with nitrogen. If leaves are pale and the nodules failed, a light compost mulch is the correction, not lawn fertilizer.",
			"Weed early and shallow. A hoe slipped deep cuts the roots."
		]
	},
	{
		id: "flower",
		kicker: "The turn",
		title: "From flower to pod",
		lead: "Peas pollinate themselves. You do not need bees, though they visit. Heat is what stops the crop, not a shortage of pollinators.",
		steps: [
			"Flowers abort, and pods stay empty, when days sit above about 80°F or the plant dries out at bloom.",
			"Powdery mildew shows up with warm days and cool nights late in the season. Cascadia, Super Sugar Snap, Oregon Sugar Pod II, and Maestro keep going longer.",
			"Check new growth for aphids. A hard spray of water, repeated, is enough on a small row. Pinch off a tip that is already crowded with them.",
			"Once pods start, pick every other day. A ripe pod left on the vine tells the plant to stop flowering and ripen seed."
		]
	},
	{
		id: "harvest",
		kicker: "The point of it",
		title: "Harvest and keeping",
		lead: "Sugar in a pea starts turning to starch the hour it is picked. The flavor people remember is a same-day flavor.",
		steps: [
			"Snow peas: pick while the pod is flat and the seeds are only bumps. A plump snow pea is a tough snow pea.",
			"Snap peas: pick when the pod is round, glossy, and snaps. Seeds inside should still be modest. Sugar Snap develops a string as it ages. Stringless varieties do not.",
			"Shelling peas: the pod should look bright and feel full. Open one. Sweet and tender means pick the row. Hard and mealy means you waited.",
			"Hold the stem with one hand and pinch the pod with the other. A yank pulls the plant out. The roots are shallow.",
			"Refrigerate unwashed, in a loose bag, and eat within two or three days. To freeze, blanch shelling peas and snaps about 90 seconds, snow peas about 60, chill in ice water, dry, and freeze in one layer."
		],
		aside: {
			title: "Pea shoots",
			body: "Once plants are about 6 inches tall you can cut the top 2–4 inches for a salad. Leave most of the plant if you still want pods. For a shoot patch, sow Dwarf Grey Sugar thickly and cut it more than once."
		}
	},
	{
		id: "after",
		kicker: "The rest of the year",
		title: "Pots, fall crops, and seed",
		lead: "Bush peas are the container crop. A tall snap in a pot works only if the pot is heavy and the trellis is anchored in the pot, not in the breeze.",
		steps: [
			"Use a container at least 12 inches deep, about 5 gallons for six to eight bush plants. Potting mix, not garden clay. Inoculate.",
			"Do not let the pot dry out. Flower drop in containers is almost always a missed watering.",
			"For fall, count back 8–12 weeks from the first frost and use a fast bush variety. In hot zones, shade the seedlings for the first two weeks.",
			"Peas self-pollinate, so saved seed comes fairly true if varieties are 10–20 feet apart. Farther if you want stricter purity. Do not save seed from an F1 hybrid.",
			"Leave a few pods to turn brown and rattle on a healthy plant. Shell them, dry another week on a plate, and store cool, dark, and dry. Use the seed within two years."
		]
	}
];
var STAGES = [
	{
		id: "seed",
		label: "Seed",
		when: "Day 0",
		watch: "The row looks empty. Mice and birds know it is not.",
		actions: [
			"Firm the soil so each seed touches moisture.",
			"Cover with wire or fabric until shoots are up.",
			"The trellis is already in. Do not tell yourself you will add it later."
		]
	},
	{
		id: "emerge",
		label: "Emergence",
		when: "Day 7–14",
		watch: "A hooked stem breaks the crust. Cold soil makes this slower. That is normal.",
		actions: [
			"If a crust has sealed the row, scratch it. Do not bury the shoot.",
			"Take the cover off once plants are sturdy and pests have lost interest.",
			"Missing patches are usually rot, old seed, or something that dug. Dig one spot and look."
		]
	},
	{
		id: "vine",
		label: "Vine",
		when: "Day 14–35",
		watch: "Tendrils search for a hold. This is the week they either find the mesh or flop.",
		actions: [
			"Tuck stray vines into the netting once. They take it from there.",
			"Weed shallow. Mulch after the soil has warmed and plants are 4 inches tall.",
			"Aphids start on the soft tips. Look before the cluster is obvious."
		]
	},
	{
		id: "flower",
		label: "Flower",
		when: "Day 35–55",
		watch: "White flowers, self-fertile. The crop is decided in these two weeks.",
		actions: [
			"Keep the water steady. A dry spell now means empty pods later.",
			"If days are already over 80°F, this sowing is nearly done. The next one has to be earlier, or in fall.",
			"Pink nodules on a lifted root mean the inoculant took."
		]
	},
	{
		id: "pod",
		label: "Pod",
		when: "Day 50–75",
		watch: "Pods fill fast. Two days changes a snap from perfect to starchy.",
		actions: [
			"Pick every other day. Hold the vine, pinch the pod.",
			"Snow peas while flat. Snaps while glossy. Shelling peas while sweet, not mealy.",
			"Eat or chill them the same day. The sugar does not wait."
		]
	},
	{
		id: "finish",
		label: "Finish",
		when: "After the flush",
		watch: "The vine yellows, mildew arrives, or the heat shuts the flowers. That is the end of the sowing, not a mistake.",
		actions: [
			"Pull healthy vines and compost them. Trash anything wilted from the base.",
			"Write down which variety actually got eaten. That is the one to reorder.",
			"Leave the bed for a non-legume next season."
		]
	}
];
var TROUBLES = [
	{
		id: "no-sprout",
		name: "The seed never comes up",
		severity: "common",
		signs: "Bare stretches a fortnight after sowing. Neighbors in the row may be fine.",
		fix: "Dig carefully. Hollow shells mean rot or a pest. Intact, hard seed means it was too cold, too dry, or dead. Resow once the soil crumbles, with fresher seed if the packet is old.",
		prevent: "Sow into workable soil, 1 inch deep, and cover the row from birds and mice until emergence."
	},
	{
		id: "clipped",
		name: "Seedlings clipped at the soil",
		severity: "common",
		signs: "The shoot is gone or lying next to a clean cut. Often overnight.",
		fix: "Resow the gap and protect it. A collar of cardboard helps against cutworms. A row cover or net helps against birds.",
		prevent: "Cover the row at sowing. Clear weeds at the base, which is where cutworms sit."
	},
	{
		id: "notches",
		name: "Notches along the leaf edges",
		severity: "sometimes",
		signs: "Neat scallops on the margins, as if something took a bite from the side. Plants otherwise look fine.",
		fix: "On plants that are already growing, this is the pea leaf weevil and it is mostly cosmetic. You do not need to spray a healthy row.",
		prevent: "A row cover from sowing until the plants are established keeps the adults off the next crop."
	},
	{
		id: "aphids",
		name: "Aphids clustered on the tips",
		severity: "common",
		signs: "Green or gray insects packed on new growth and flower stems. Leaves curl. A sticky film may follow.",
		fix: "Knock them off with a firm spray of water, and repeat every couple of days. Pinch off a tip that is already solid with them. Insecticidal soap is the next step on a bad infestation, on a cool morning, not in full sun.",
		prevent: "Do not overfeed with nitrogen. Check the growing tips when you pick."
	},
	{
		id: "mildew",
		name: "White dust on the leaves",
		severity: "common",
		signs: "A pale powder on leaves and pods, usually late, when days are warm and nights are cool. Older leaves go first.",
		fix: "Pick what is ready. The powder is powdery mildew, and on a spring crop it often means the season is over. Sulfur or potassium bicarbonate can slow it on a crop you still want to keep. Do not compost a badly infected row if you are about to sow peas again nearby.",
		prevent: "Sow earlier, water at the soil, give the row air, and choose a resistant variety: Maestro, Cascadia, Super Sugar Snap, or Oregon Sugar Pod II."
	},
	{
		id: "wilt",
		name: "A plant wilts from the base",
		severity: "serious",
		signs: "One plant or a patch collapses. The stem at the soil line is brown, soft, or streaked. The rest of the row may look normal.",
		fix: "Pull the plant, roots and all, and trash it. Do not compost it. Fusarium wilt and root rots such as Aphanomyces are soil-borne. Watering more will not save a plant whose stem is already dead.",
		prevent: "Drainage, a raised row, and three to four years before legumes return. Where this has happened before, move the crop."
	},
	{
		id: "yellow",
		name: "Yellow leaves, few flowers",
		severity: "sometimes",
		signs: "The row is pale, soft, and leafy, or it yellows from the bottom while sitting in wet soil.",
		fix: "If the bed is wet, stop watering and open the soil to air. If you fed it like a tomato, stop. Peas with failed nodules in a poor soil want compost, not more nitrogen.",
		prevent: "A drained bed, inoculant on new ground, and no high-nitrogen fertilizer."
	},
	{
		id: "drop",
		name: "Flowers fall and pods do not set",
		severity: "common",
		signs: "Plenty of bloom, then nothing. Or pods that stay flat and empty. Often in the last weeks of a spring crop.",
		fix: "You cannot talk a heat-stressed plant into podding. Pick any pods that did set, and plan the next sowing for the cool window. Steady water helps only if the problem was drought, not a week of 85°F days.",
		prevent: "Sow inside the window for your zone. In hot-spring climates, the fall or winter sowing is the reliable one."
	},
	{
		id: "worms",
		name: "A caterpillar inside the pod",
		severity: "sometimes",
		signs: "A small caterpillar and frass in the pod. More a problem in Britain and parts of Europe than in most of the United States. A hole in a dried seed is a different insect, the pea weevil, and it matters most if you save seed.",
		fix: "Discard affected pods. Row cover from first flower until picking keeps pea moth off a bush crop. It is awkward on a tall trellis.",
		prevent: "An earlier sowing can set pods before the moth is flying. Do not save seed from infested pods."
	},
	{
		id: "late",
		name: "Pods are stringy or starchy",
		severity: "common",
		signs: "Snow pods are bumpy. Snap pods have lost their gloss and grown a string. Shelling peas are hard and mealy.",
		fix: "Pick smaller tomorrow. The next flush, if the weather is still cool, will be better. Starchy peas are still edible in soup. They will not taste like a raw snap.",
		prevent: "Walk the row every other day once the first pod sizes up. The change is quick."
	},
	{
		id: "mold",
		name: "Gray mold in a crowded, wet row",
		severity: "sometimes",
		signs: "Flowers or pods turn fuzzy and gray in still, damp weather. Botrytis likes a dense canopy.",
		fix: "Pick off affected pods, thin a few stems if you can do it without wrecking the trellis, and water early so the row dries.",
		prevent: "Spacing, a trellis that lets air through, and morning irrigation."
	}
];
var SEVERITY_LABEL = {
	common: "Common",
	sometimes: "Sometimes",
	serious: "Act fast"
};
var ZONES = [
	{
		id: "3",
		lastSpring: [5, 30],
		firstFall: [9, 10],
		winter: null,
		blurb: "Short season. Sow once, as soon as the soil crumbles. A fall crop rarely finishes."
	},
	{
		id: "4",
		lastSpring: [5, 15],
		firstFall: [9, 25],
		winter: null,
		blurb: "Late April is the usual start if the bed is no longer mud. Skip a fall sowing."
	},
	{
		id: "5",
		lastSpring: [4, 30],
		firstFall: [10, 10],
		winter: null,
		blurb: "A classic spring crop. Fall is a gamble unless you use a very fast bush variety."
	},
	{
		id: "6",
		lastSpring: [4, 15],
		firstFall: [10, 20],
		winter: null,
		blurb: "Spring is the main harvest. A late-summer sowing can still pod before frost."
	},
	{
		id: "7",
		lastSpring: [4, 1],
		firstFall: [11, 5],
		winter: null,
		blurb: "Spring heats up fast. The late-summer sowing is often the better one."
	},
	{
		id: "8",
		lastSpring: [3, 15],
		firstFall: [11, 20],
		winter: null,
		blurb: "Sow in late winter, then again in late summer. Fall often outlasts spring."
	},
	{
		id: "9",
		lastSpring: [2, 15],
		firstFall: [12, 10],
		winter: {
			start: [10, 15],
			end: [1, 31]
		},
		blurb: "Treat peas as a winter crop. Sow October through January and pull them before late-spring heat."
	},
	{
		id: "10",
		lastSpring: [1, 31],
		firstFall: [12, 20],
		winter: {
			start: [11, 1],
			end: [2, 15]
		},
		blurb: "A winter crop. Sow November through mid-February. Heat, not frost, is what ends it."
	}
];
function zoneById(id) {
	const zone = ZONES.find((item) => item.id === id);
	if (!zone) throw new Error(`Unknown zone ${id}`);
	return zone;
}
var SOIL_NOTE = "Sow when the soil is at least 40°F and crumbles instead of smearing. Germination is best around 50–65°F. Cold mud rots the seed. So does soil above about 75°F.";
function atMD(year, md) {
	return startOfDay(new Date(year, md[0] - 1, md[1]));
}
function parseMonthDay(value) {
	const match = /^(\d{2})-(\d{2})$/.exec(value);
	if (!match) return null;
	const month = Number(match[1]);
	const day = Number(match[2]);
	if (month < 1 || month > 12 || day < 1 || day > 31) return null;
	const probe = new Date(2024, month - 1, day);
	if (probe.getMonth() !== month - 1 || probe.getDate() !== day) return null;
	return [month, day];
}
function monthDayFromDateInput(value) {
	const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
	if (!match) return "";
	return parseMonthDay(`${match[2]}-${match[3]}`) ? `${match[2]}-${match[3]}` : "";
}
function dateInputFromMonthDay(md, year) {
	if (!parseMonthDay(md)) return "";
	return `${year}-${md}`;
}
function formatNear(date, today) {
	if (date.getFullYear() !== today.getFullYear()) return format(date, "MMM d, yyyy");
	return format(date, "MMM d");
}
function formatRange(start, end, today) {
	if (start.getFullYear() !== today.getFullYear() || end.getFullYear() !== today.getFullYear() || start.getFullYear() !== end.getFullYear()) return `${format(start, "MMM d, yyyy")} – ${format(end, "MMM d, yyyy")}`;
	return `${format(start, "MMM d")} – ${format(end, "MMM d")}`;
}
function statusOf(start, end, today) {
	const day = startOfDay(today);
	if (isBefore(day, start)) return "upcoming";
	if (isAfter(day, end)) return "past";
	return "now";
}
function statusLabel(status) {
	if (status === "now") return "Sow now";
	if (status === "upcoming") return "Upcoming";
	if (status === "marginal") return "Unreliable";
	return "Passed";
}
function harvestNote(status, start, end, today, variety) {
	if (!variety || status === "past" || status === "marginal") return null;
	if (status === "now") {
		const pick = addDays(startOfDay(today), variety.days);
		return `Sow ${variety.name} today and expect first pods around ${formatNear(pick, today)}. Weather can move that by a week.`;
	}
	const first = addDays(start, variety.days);
	const last = addDays(end, variety.days);
	return `${variety.name} sown at the open of this window picks around ${formatNear(first, today)}. Sown on the last day, around ${formatNear(last, today)}.`;
}
function springSlack(id) {
	if (id === "3" || id === "4" || id === "5" || id === "6") return 14;
	return 0;
}
function springBounds(year, last, zoneId) {
	const frost = atMD(year, last);
	return {
		start: addDays(frost, -42),
		end: addDays(frost, springSlack(zoneId))
	};
}
function fallBounds(year, first) {
	const frost = atMD(year, first);
	return {
		start: addDays(frost, -84),
		end: addDays(frost, -56)
	};
}
function chooseUpcoming(today, build) {
	const year = today.getFullYear();
	const current = build(year);
	if (!isAfter(startOfDay(today), current.end)) return current;
	return build(year + 1);
}
function winterBounds(today, startMD, endMD) {
	const year = today.getFullYear();
	const wraps = endMD[0] < startMD[0];
	const candidates = [
		year - 1,
		year,
		year + 1
	].map((y) => ({
		start: atMD(y, startMD),
		end: atMD(wraps ? y + 1 : y, endMD)
	}));
	const day = startOfDay(today);
	const current = candidates.find((item) => !isBefore(day, item.start) && !isAfter(day, item.end));
	if (current) return current;
	return candidates.filter((item) => isBefore(day, item.start)).sort((a, b) => a.start.getTime() - b.start.getTime())[0] ?? candidates[candidates.length - 1];
}
function buildPlan(opts) {
	const zone = zoneById(opts.zoneId);
	const today = startOfDay(opts.today ?? /* @__PURE__ */ new Date());
	const customLast = parseMonthDay(opts.lastFrostMD ?? "");
	const customFirst = parseMonthDay(opts.firstFrostMD ?? "");
	const last = customLast ?? zone.lastSpring;
	const first = customFirst ?? zone.firstFall;
	const variety = opts.variety ?? null;
	const windows = [];
	if (zone.winter) {
		const span = winterBounds(today, zone.winter.start, zone.winter.end);
		const status = statusOf(span.start, span.end, today);
		windows.push({
			id: "winter",
			label: "Winter sowing",
			rangeLabel: formatRange(span.start, span.end, today),
			status,
			statusLabel: statusLabel(status),
			detail: "This is the main crop. Keep sowing while nights are cool. Stop once days sit in the 70s and the soil stays warm.",
			harvestNote: harvestNote(status, span.start, span.end, today, variety),
			sort: span.start.getTime()
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
			detail: hot ? "Opens six weeks before the last frost and closes on that frost date. Later sowings hit heat and drop their flowers." : "Opens six weeks before the last frost and stays open about two weeks after it. The date only counts if the soil is workable.",
			harvestNote: harvestNote(springStatus, spring.start, spring.end, today, variety),
			sort: spring.start.getTime()
		});
		if (zone.id === "3" || zone.id === "4") windows.push({
			id: "fall",
			label: "Fall sowing",
			rangeLabel: "Not recommended",
			status: "marginal",
			statusLabel: "Skip",
			detail: "After summer there are not enough cool weeks for pods to fill. Sow a second variety two weeks after the first instead.",
			harvestNote: null,
			sort: Number.MAX_SAFE_INTEGER
		});
		else {
			const fall = chooseUpcoming(today, (year) => fallBounds(year, first));
			const marginal = zone.id === "5";
			const calendar = statusOf(fall.start, fall.end, today);
			windows.push({
				id: "fall",
				label: "Fall sowing",
				rangeLabel: formatRange(fall.start, fall.end, today),
				status: calendar,
				statusLabel: marginal ? calendar === "past" ? "Passed" : "Unreliable" : statusLabel(calendar),
				detail: marginal ? "Only with a 55-day bush variety such as Sugar Ann. An early frost often wins in this zone." : "Eight to twelve weeks before the first frost. Use a fast bush variety, and shade seedlings if the soil is still hot.",
				harvestNote: marginal ? null : harvestNote(calendar, fall.start, fall.end, today, variety),
				sort: fall.start.getTime()
			});
		}
	}
	windows.sort((a, b) => a.sort - b.sort);
	const ordered = windows.map(({ sort: _sort, ...item }) => item);
	const live = ordered.find((item) => item.status === "now");
	const next = ordered.find((item) => item.status === "upcoming");
	let headline = "Plan the sowing, then trust the soil more than the calendar.";
	if (live && zone.id === "5" && live.id === "fall") headline = "A fall sowing is possible now, but unreliable in this zone.";
	else if (live) headline = live.id === "winter" ? "You are in the winter sowing window." : live.id === "fall" ? "You are in the fall sowing window." : "You are in the spring sowing window.";
	else if (next && zone.id === "5" && next.id === "fall") headline = `Fall sowing opens ${next.rangeLabel.split(" – ")[0]}, but it is unreliable in this zone.`;
	else if (next) headline = `${next.label} opens ${next.rangeLabel.split(" – ")[0]}.`;
	const usingCustom = !zone.winter && Boolean(customLast || customFirst);
	const placeNote = zone.winter ? `Zones 9 and 10 are timed to cool weather, not the last frost. These are typical dates for zone ${zone.id}.` : usingCustom ? "Using your frost date — month and day — placed on the coming season. A cold pocket can still shift it by a couple of weeks." : `Typical frost dates for USDA zone ${zone.id}. Swap in your own date if you know it. Towns in the same zone are not the same.`;
	return {
		headline,
		summary: zone.blurb,
		placeNote,
		windows: ordered,
		soil: SOIL_NOTE
	};
}
function parseISODateLocal(value) {
	const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
	if (!match) return null;
	const year = Number(match[1]);
	const month = Number(match[2]);
	const day = Number(match[3]);
	const date = startOfDay(new Date(year, month - 1, day));
	if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) return null;
	return date;
}
function toDateInputValue(date) {
	return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
function daysFromSow(sowDate, today) {
	const parsed = parseISODateLocal(sowDate);
	if (!parsed) return null;
	return Math.round((startOfDay(today).getTime() - parsed.getTime()) / 864e5);
}
function formatShort(date, today) {
	return formatNear(date, today);
}
function phaseLabel(elapsed, maturity) {
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
var fieldClass$1 = "h-11 w-full rounded-md border border-line bg-card px-3 text-ink outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pea";
function JournalPanel() {
	const plantings = useJournal((state) => state.plantings);
	const addPlanting = useJournal((state) => state.addPlanting);
	const [today, setToday] = (0, import_react.useState)(null);
	const [varietyId, setVarietyId] = (0, import_react.useState)(VARIETIES[0].id);
	const [sowDate, setSowDate] = (0, import_react.useState)("");
	const [bed, setBed] = (0, import_react.useState)("");
	const [notes, setNotes] = (0, import_react.useState)("");
	const [formError, setFormError] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const now = /* @__PURE__ */ new Date();
		setToday(now);
		setSowDate(toDateInputValue(now));
	}, []);
	function onSubmit(event) {
		event.preventDefault();
		if (!varietyById(varietyId)) {
			setFormError("Choose a variety.");
			return;
		}
		if (!parseISODateLocal(sowDate)) {
			setFormError("Choose a sowing date.");
			return;
		}
		if (plantings.length >= 24) {
			setFormError("The journal holds 24 sowings. Remove one to add another.");
			return;
		}
		addPlanting({
			varietyId,
			sowDate,
			bed,
			notes
		});
		setBed("");
		setNotes("");
		setFormError("");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "journal",
		className: "border-t border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-5 py-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg text-pea italic",
							children: "Your rows"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-3xl text-ink sm:text-4xl",
							children: "A journal that stays on this device"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted",
							children: "Log a sowing and the page counts days to the catalog harvest. Nothing is sent anywhere. Clearing this browser clears the notes."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "mt-8 grid gap-4 rounded-2xl border border-line bg-card p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-sm font-medium text-ink",
								children: ["Variety", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: `${fieldClass$1} mt-2`,
									value: varietyId,
									onChange: (event) => setVarietyId(event.target.value),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("optgroup", {
											label: "Shelling",
											children: VARIETIES.filter((item) => item.type === "shelling").map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: item.id,
												children: item.name
											}, item.id))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("optgroup", {
											label: "Snap",
											children: VARIETIES.filter((item) => item.type === "snap").map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: item.id,
												children: item.name
											}, item.id))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("optgroup", {
											label: "Snow",
											children: VARIETIES.filter((item) => item.type === "snow").map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: item.id,
												children: item.name
											}, item.id))
										})
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-sm font-medium text-ink",
								children: ["Sowing date", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: `${fieldClass$1} mt-2`,
									type: "date",
									value: sowDate,
									onChange: (event) => setSowDate(event.target.value),
									required: true
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-sm font-medium text-ink",
							children: ["Bed or pot", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: `${fieldClass$1} mt-2`,
								value: bed,
								onChange: (event) => setBed(event.target.value),
								placeholder: "North row, east fence",
								maxLength: 80
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-sm font-medium text-ink",
							children: ["Note", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								className: "mt-2 min-h-24 w-full rounded-md border border-line bg-paper px-3 py-2 text-ink outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pea",
								value: notes,
								onChange: (event) => setNotes(event.target.value),
								placeholder: "Inoculant batch, how thick you sowed, what the soil felt like.",
								maxLength: 400
							})]
						}),
						formError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-danger",
							role: "alert",
							children: formError
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "h-11 rounded-md bg-pea px-4 text-sm font-medium text-paper outline-none hover:bg-pea-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pea",
							children: "Log this sowing"
						})
					]
				}),
				plantings.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-muted",
					children: "No sowings yet. Add the row the day you plant it. The harvest estimate uses the variety’s catalog days, counted from that date."
				}) : today ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 grid gap-3",
					children: plantings.map((planting) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlantingCard, {
						planting,
						today
					}, planting.id))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-muted",
					children: "Opening the journal."
				})
			]
		})
	});
}
function PlantingCard({ planting, today }) {
	const variety = varietyById(planting.varietyId);
	const removePlanting = useJournal((state) => state.removePlanting);
	const toggleTask = useJournal((state) => state.toggleTask);
	const setNotes = useJournal((state) => state.setNotes);
	const [confirming, setConfirming] = (0, import_react.useState)(false);
	const elapsed = daysFromSow(planting.sowDate, today);
	const sow = parseISODateLocal(planting.sowDate);
	if (!variety || elapsed === null || !sow) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "rounded-2xl border border-line bg-card p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted",
			children: "This entry is missing its variety or date."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "mt-3 h-11 rounded-md px-3 text-sm font-medium text-danger",
			onClick: () => removePlanting(planting.id),
			children: "Remove it"
		})]
	});
	const harvest = addDays(sow, variety.days);
	const done = TASKS.filter((task) => planting.tasks?.[task.id]).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "rounded-2xl border border-line bg-card p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium capitalize text-pea",
						children: variety.type
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-2xl text-ink",
						children: variety.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted",
						children: [
							planting.bed ? `${planting.bed} · ` : "",
							"Sown ",
							formatShort(sow, today)
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-left sm:text-right",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium tabular-nums text-ink",
							children: elapsed > 0 ? `Day ${elapsed}` : phaseLabel(elapsed, variety.days)
						}),
						elapsed > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: phaseLabel(elapsed, variety.days)
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-ink",
							children: ["Pods around ", formatShort(harvest, today)]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-sm text-muted",
				children: [
					done,
					" of ",
					TASKS.length,
					" done"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 flex flex-wrap gap-2",
				children: TASKS.map((task) => {
					const on = Boolean(planting.tasks?.[task.id]);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-pressed": on,
						onClick: () => toggleTask(planting.id, task.id),
						className: "h-11 rounded-md border px-3 text-sm font-medium outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pea " + (on ? "border-pea bg-pea text-paper" : "border-line bg-paper text-ink"),
						children: task.label
					}) }, task.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-4 block text-sm font-medium text-ink",
				children: ["Note", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					className: "mt-2 min-h-20 w-full rounded-md border border-line bg-paper px-3 py-2 font-normal text-ink outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pea",
					defaultValue: planting.notes,
					maxLength: 400,
					onBlur: (event) => {
						if (event.target.value !== planting.notes) setNotes(planting.id, event.target.value);
					}
				}, planting.notes)]
			}),
			confirming ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "h-11 rounded-md bg-ink px-4 text-sm font-medium text-paper",
					onClick: () => removePlanting(planting.id),
					children: "Remove this sowing"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "h-11 rounded-md border border-line px-4 text-sm font-medium text-ink",
					onClick: () => setConfirming(false),
					children: "Keep it"
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-3 h-11 rounded-md px-1 text-sm font-medium text-muted hover:text-ink",
				onClick: () => setConfirming(true),
				children: "Remove"
			})
		]
	});
}
function Method() {
	const [stageId, setStageId] = (0, import_react.useState)(STAGES[0].id);
	const stage = STAGES.find((item) => item.id === stageId) ?? STAGES[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "method",
		className: "border-t border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-5 py-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg text-pea italic",
							children: "How to grow them"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-3xl text-ink sm:text-4xl",
							children: "From seed to the last picking"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted",
							children: "Follow a stage if a row is already in the ground. Read the chapters if you are still choosing the bed."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex flex-wrap gap-2",
					role: "group",
					"aria-label": "Growth stage",
					children: STAGES.map((item) => {
						const selected = item.id === stage.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-pressed": selected,
							onClick: () => setStageId(item.id),
							className: "h-11 rounded-md border px-3 text-sm font-medium outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pea " + (selected ? "border-pea bg-pea text-paper" : "border-line bg-card text-ink hover:border-pea"),
							children: item.label
						}, item.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "mt-3 rounded-2xl border border-line bg-card p-5",
					"aria-live": "polite",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-pea",
							children: stage.when
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-1 text-2xl text-ink",
							children: stage.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-2xl text-muted",
							children: stage.watch
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 grid gap-3",
							children: stage.actions.map((action) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3 text-ink",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-2 size-2 shrink-0 rounded-full bg-pea",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: action })]
							}, action))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12",
					children: CHAPTERS.map((chapter, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "border-t border-line py-8 md:grid md:grid-cols-[11rem_1fr] md:gap-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm font-medium text-muted",
							children: [String(index + 1).padStart(2, "0"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block font-display text-lg text-ink italic",
								children: chapter.kicker
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-2xl text-ink",
								children: chapter.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-2xl text-muted",
								children: chapter.lead
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 grid max-w-2xl gap-3",
								children: chapter.steps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-2 size-2 shrink-0 rounded-full bg-pea",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: step })]
								}, step))
							}),
							chapter.aside ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 max-w-2xl rounded-md border border-line bg-card px-4 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium text-ink",
									children: chapter.aside.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: chapter.aside.body
								})]
							}) : null
						] })]
					}, chapter.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-4 text-2xl text-ink",
					children: "Numbers worth memorizing"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-4 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2",
					children: FACTS.map((fact) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-card px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-sm text-muted",
							children: fact.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "font-medium text-ink",
							children: fact.value
						})]
					}, fact.label))
				})
			]
		})
	});
}
var fieldClass = "h-11 w-full rounded-md border border-line bg-card px-3 text-ink outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pea";
function Planner() {
	const zoneId = useJournal((state) => state.zoneId);
	const setZoneId = useJournal((state) => state.setZoneId);
	const lastFrost = useJournal((state) => state.lastFrost);
	const firstFrost = useJournal((state) => state.firstFrost);
	const setLastFrost = useJournal((state) => state.setLastFrost);
	const setFirstFrost = useJournal((state) => state.setFirstFrost);
	const plannerVarietyId = useJournal((state) => state.plannerVarietyId);
	const setPlannerVarietyId = useJournal((state) => state.setPlannerVarietyId);
	const [today, setToday] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setToday(/* @__PURE__ */ new Date());
	}, []);
	const zone = ZONES.find((item) => item.id === zoneId) ?? ZONES[3];
	const variety = varietyById(plannerVarietyId);
	const plan = today ? buildPlan({
		zoneId,
		today,
		lastFrostMD: lastFrost,
		firstFrostMD: firstFrost,
		variety: variety ? {
			name: variety.name,
			days: variety.days
		} : null
	}) : null;
	const year = today?.getFullYear() ?? (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "planner",
		className: "mx-auto max-w-5xl px-5 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg text-pea italic",
						children: "When to sow"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-3xl text-ink sm:text-4xl",
						children: "A window, not a single date"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted",
						children: "Peas are a cool-season crop. Pick the zone closest to home, or replace the typical frost date with yours. The page dates the sowing from that."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					id: "zone-label",
					className: "text-sm font-medium text-ink",
					children: "USDA zone"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 grid grid-cols-4 gap-2 sm:grid-cols-8",
					role: "group",
					"aria-labelledby": "zone-label",
					children: ZONES.map((item) => {
						const selected = item.id === zoneId;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-pressed": selected,
							onClick: () => setZoneId(item.id),
							className: "h-11 rounded-md border text-sm font-medium outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pea " + (selected ? "border-pea bg-pea text-paper" : "border-line bg-card text-ink hover:border-pea"),
							children: item.id
						}, item.id);
					})
				})]
			}),
			zone.winter ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-sm text-muted",
				children: "In zones 9 and 10 the crop runs through the cool months. A last-frost date does not set the sowing window, so those fields stay hidden."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-4 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-sm font-medium text-ink",
						children: [
							"Last spring frost",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block font-normal text-muted",
								children: "Optional. Month and day are what count."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: `${fieldClass} mt-2`,
								type: "date",
								value: dateInputFromMonthDay(lastFrost, year),
								onChange: (event) => setLastFrost(monthDayFromDateInput(event.target.value))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-sm font-medium text-ink",
						children: [
							"First fall frost",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block font-normal text-muted",
								children: "Optional. Used for the fall window."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: `${fieldClass} mt-2`,
								type: "date",
								value: dateInputFromMonthDay(firstFrost, year),
								onChange: (event) => setFirstFrost(monthDayFromDateInput(event.target.value))
							})
						]
					}),
					(lastFrost || firstFrost) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "h-11 justify-self-start rounded-md px-3 text-sm font-medium text-pea underline-offset-2 hover:underline",
						onClick: () => {
							setLastFrost("");
							setFirstFrost("");
						},
						children: "Use typical zone dates"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-4 block max-w-md text-sm font-medium text-ink",
				children: ["Estimate a harvest for", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					className: `${fieldClass} mt-2`,
					value: plannerVarietyId,
					onChange: (event) => setPlannerVarietyId(event.target.value),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: "No variety selected"
					}), VARIETIES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
						value: item.id,
						children: [
							item.name,
							" · ",
							item.days,
							" days"
						]
					}, item.id))]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 rounded-2xl border border-line bg-card p-5",
				"aria-live": "polite",
				children: plan ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-2xl text-ink",
						children: plan.headline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl text-muted",
						children: plan.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl text-sm text-muted",
						children: plan.placeNote
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 grid gap-3",
						children: plan.windows.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-md border border-line bg-paper px-4 py-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-baseline justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium text-ink",
										children: item.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium " + (item.status === "now" ? "text-pea" : item.status === "marginal" ? "text-muted" : "text-ink"),
										children: item.statusLabel
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-display text-xl text-ink",
									children: item.rangeLabel
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted",
									children: item.detail
								}),
								item.harvestNote ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-ink",
									children: item.harvestNote
								}) : null
							]
						}, item.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-2xl text-sm text-muted",
						children: plan.soil
					})
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted",
					children: "Checking the calendar for this zone."
				})
			})
		]
	});
}
function Troubles() {
	const [query, setQuery] = (0, import_react.useState)("");
	const [openId, setOpenId] = (0, import_react.useState)(TROUBLES[0]?.id ?? null);
	const needle = query.trim().toLowerCase();
	const matches = (0, import_react.useMemo)(() => {
		if (!needle) return TROUBLES;
		return TROUBLES.filter((item) => [
			item.name,
			item.signs,
			item.fix,
			item.prevent
		].join(" ").toLowerCase().includes(needle));
	}, [needle]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "troubles",
		className: "border-t border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-5 py-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg text-pea italic",
							children: "When something looks wrong"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-3xl text-ink sm:text-4xl",
							children: "Troubles, named plainly"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted",
							children: "Most pea problems are timing, water, or a pest you can see. Wilt from the base is the one to take seriously and remove."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-8 block max-w-md text-sm font-medium text-ink",
					children: ["Search signs or names", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "mt-2 h-11 w-full rounded-md border border-line bg-card px-3 text-ink outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pea",
						value: query,
						onChange: (event) => setQuery(event.target.value),
						placeholder: "Aphids, mildew, empty pods",
						type: "search"
					})]
				}),
				matches.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-muted",
					children: "Nothing matches. Try aphid, mildew, or wilt."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 divide-y divide-line border-y border-line",
					children: matches.map((item) => {
						const open = openId === item.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "flex w-full items-start justify-between gap-4 py-4 text-left outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pea",
							"aria-expanded": open,
							onClick: () => setOpenId(open ? null : item.id),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-medium text-ink",
								children: item.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-sm " + (item.severity === "serious" ? "font-medium text-danger" : "text-muted"),
								children: SEVERITY_LABEL[item.severity]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "pt-1 text-sm font-medium text-pea",
								children: open ? "Close" : "Read"
							})]
						}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 pb-5 sm:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm font-medium text-ink",
									children: "What you see"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-sm text-muted",
									children: item.signs
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm font-medium text-ink",
									children: "What to do"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-sm text-muted",
									children: item.fix
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm font-medium text-ink",
									children: "Next time"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-sm text-muted",
									children: item.prevent
								})] })
							]
						}) : null] }, item.id);
					})
				})
			]
		})
	});
}
function Varieties() {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const shown = filter === "all" ? VARIETIES : VARIETIES.filter((item) => item.type === filter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "varieties",
		className: "border-t border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-5 py-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg text-pea italic",
							children: "What to grow"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-3xl text-ink sm:text-4xl",
							children: "Three peas, eaten three ways"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted",
							children: "Days are what seed catalogs usually print. Your season will move them. Habit matters more than the name: a 6-foot vine on a 4-foot fence is a wasted packet."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-3 md:grid-cols-3",
					children: TYPES.map((type) => {
						const selected = filter === type.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							"aria-pressed": selected,
							onClick: () => setFilter(selected ? "all" : type.id),
							className: "rounded-2xl border p-5 text-left outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pea " + (selected ? "border-pea bg-pea text-paper" : "border-line bg-card text-ink"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm " + (selected ? "text-paper" : "text-muted"),
									children: type.aka
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block font-display text-2xl",
									children: type.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-2 block text-sm " + (selected ? "text-paper" : "text-muted"),
									children: type.eat
								})
							]
						}, type.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted",
					children: "Select a type to filter the list. Select it again to show all."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 grid gap-3 sm:grid-cols-2",
					children: shown.map((item) => {
						const type = TYPES.find((entry) => entry.id === item.type);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-2xl border border-line bg-card p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium text-pea",
									children: type?.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 text-2xl text-ink",
									children: item.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-sm font-medium tabular-nums text-ink",
									children: [
										item.days,
										" days · ",
										item.habit === "bush" ? "Bush" : "Vine",
										" · ",
										item.height
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-muted",
									children: item.note
								})
							]
						}, item.id);
					})
				}),
				filter !== "all" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-sm text-muted",
					children: TYPES.find((type) => type.id === filter)?.detail
				}) : null
			]
		})
	});
}
var LINKS = [
	{
		href: "#planner",
		label: "When"
	},
	{
		href: "#varieties",
		label: "Varieties"
	},
	{
		href: "#method",
		label: "Method"
	},
	{
		href: "#troubles",
		label: "Troubles"
	},
	{
		href: "#journal",
		label: "Journal"
	}
];
function Home() {
	useRehydrateJournal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-20 border-b border-line bg-paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#top",
						className: "font-display text-xl text-ink",
						children: "Pea Plot"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						"aria-label": "Guide",
						className: "flex flex-wrap gap-1",
						children: LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: link.href,
							className: "inline-flex h-11 items-center rounded-md px-3 text-sm font-medium text-muted hover:text-ink",
							children: link.label
						}, link.href))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mx-auto max-w-5xl px-5 pt-12 pb-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-lg text-pea italic",
							children: ["A field guide · ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-ink",
								children: "Pisum sativum"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 max-w-3xl text-5xl text-ink sm:text-6xl",
							children: "Growing peas"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-2xl text-lg text-muted",
							children: "Shelling, snap, and snow peas want cool weather, a trellis put in early, and a picker who does not wait. Sugar starts turning to starch the hour the pod comes off the vine."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4",
							children: FACTS.slice(0, 4).map((fact) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-card px-4 py-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-sm text-muted",
									children: fact.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1 font-medium text-ink",
									children: fact.value
								})]
							}, fact.label))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Planner, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Varieties, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Method, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Troubles, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JournalPanel, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-5xl px-5 py-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-2xl text-sm text-muted",
						children: "Pea Plot is a field guide, not a substitute for a local extension frost table. Zone dates are typical, and variety days follow common catalog listings. Your soil, the week’s weather, and the seed lot will move the harvest."
					})
				})
			})
		]
	});
}
//#endregion
export { Home as component };
