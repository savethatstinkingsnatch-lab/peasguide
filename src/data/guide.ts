export type PeaType = "shelling" | "snap" | "snow";

export type Variety = {
  id: string;
  name: string;
  type: PeaType;
  habit: "bush" | "vine";
  height: string;
  days: number;
  note: string;
};

export const TYPES: {
  id: PeaType;
  label: string;
  aka: string;
  eat: string;
  detail: string;
}[] = [
  {
    id: "shelling",
    label: "Shelling",
    aka: "English or garden peas",
    eat: "Shell the pod. Eat the peas.",
    detail:
      "The familiar sweet pea. The pod is too fibrous to eat. Pick while the peas are plump and still sweet, before they turn starchy.",
  },
  {
    id: "snap",
    label: "Snap",
    aka: "Sugar snaps",
    eat: "Eat the whole pod once it plumps.",
    detail:
      "Thick, crisp pod walls. They string and dull if you wait, unless the variety is stringless. Best the day they snap cleanly.",
  },
  {
    id: "snow",
    label: "Snow",
    aka: "Chinese peas",
    eat: "Eat the pod while it is still flat.",
    detail:
      "Pick before the peas swell. The pod is the crop. Leave it and the pod toughens even if the peas inside look fine.",
  },
];

export const VARIETIES: Variety[] = [
  {
    id: "little-marvel",
    name: "Little Marvel",
    type: "shelling",
    habit: "bush",
    height: "18–20 in",
    days: 62,
    note: "Compact and heavy-setting. The one to grow in a pot or a short row with pea sticks.",
  },
  {
    id: "green-arrow",
    name: "Green Arrow",
    type: "shelling",
    habit: "vine",
    height: "24–30 in",
    days: 68,
    note: "Long pods with 9–11 peas. A reliable mid-height vine. Give it a short trellis.",
  },
  {
    id: "wando",
    name: "Wando",
    type: "shelling",
    habit: "bush",
    height: "24–30 in",
    days: 68,
    note: "More heat-tolerant than most shelling peas. Use it for the last sowing of spring.",
  },
  {
    id: "alderman",
    name: "Alderman",
    type: "shelling",
    habit: "vine",
    height: "5–6 ft",
    days: 74,
    note: "Also called Tall Telephone. Huge yield if the trellis is tall enough. An heirloom.",
  },
  {
    id: "maestro",
    name: "Maestro",
    type: "shelling",
    habit: "vine",
    height: "24–30 in",
    days: 60,
    note: "Resists powdery mildew, so the row keeps picking after other shelling peas quit.",
  },
  {
    id: "sugar-ann",
    name: "Sugar Ann",
    type: "snap",
    habit: "bush",
    height: "20–24 in",
    days: 56,
    note: "The early snap. Best choice for containers and for a tight fall window.",
  },
  {
    id: "sugar-snap",
    name: "Sugar Snap",
    type: "snap",
    habit: "vine",
    height: "5–6 ft",
    days: 68,
    note: "The original. Sweet and crisp, and it develops a string if pods overmature. Needs a tall trellis.",
  },
  {
    id: "super-sugar-snap",
    name: "Super Sugar Snap",
    type: "snap",
    habit: "vine",
    height: "5 ft",
    days: 64,
    note: "Same eating quality as Sugar Snap, with resistance to powdery mildew.",
  },
  {
    id: "cascadia",
    name: "Cascadia",
    type: "snap",
    habit: "bush",
    height: "32 in",
    days: 60,
    note: "Short trellis is enough. Fat pods and mildew resistance. A good all-purpose snap.",
  },
  {
    id: "oregon-sugar-pod-ii",
    name: "Oregon Sugar Pod II",
    type: "snow",
    habit: "bush",
    height: "28 in",
    days: 60,
    note: "The standard snow pea. Mildew resistant, productive, and manageable without a tall fence.",
  },
  {
    id: "mammoth-melting",
    name: "Mammoth Melting Sugar",
    type: "snow",
    habit: "vine",
    height: "4–5 ft",
    days: 70,
    note: "Large, tender pods on a tall vine. Worth a cattle panel. An heirloom.",
  },
  {
    id: "dwarf-grey-sugar",
    name: "Dwarf Grey Sugar",
    type: "snow",
    habit: "bush",
    height: "24–30 in",
    days: 66,
    note: "Purple flowers and good edible shoots. Sow it thick if shoots matter more than pods.",
  },
];

export function varietyById(id: string): Variety | undefined {
  return VARIETIES.find((item) => item.id === id);
}

export const FACTS: { label: string; value: string }[] = [
  { label: "Soil temperature", value: "40°F minimum, 50–65°F best" },
  { label: "Depth", value: "1 inch, or 2 if the soil is warm and dry" },
  { label: "In the row", value: "A seed every 1–2 inches" },
  { label: "Between rows", value: "18–24 inches" },
  { label: "Water", value: "About 1 inch a week" },
  { label: "Days to harvest", value: "55–75, by variety" },
  { label: "Soil pH", value: "6.0–7.5" },
  { label: "Rotation", value: "3–4 years before peas return" },
];

export type Chapter = {
  id: string;
  kicker: string;
  title: string;
  lead: string;
  steps: string[];
  aside?: { title: string; body: string };
};

export const CHAPTERS: Chapter[] = [
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
      "Wait three or four years before peas, or other legumes, come back to the same bed. Fusarium and root rots linger in the soil.",
    ],
    aside: {
      title: "What to plant beside them",
      body: "Carrots, radishes, lettuce, spinach, and turnips share the cool season and do not fight the row. Keep onions, garlic, and shallots elsewhere. Alliums can slow peas. A radish sown the same day marks the row and is gone before the vines sprawl.",
    },
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
      "An eight-hour soak can hurry germination in cool soil. Longer than that and the seed splits.",
    ],
    aside: {
      title: "Are the nodules working?",
      body: "When the first flowers open, lift one plant gently. Working nodules are pink to red inside. White, green, or missing nodules mean the inoculant did not take. The plants still grow. They just grow more slowly in a poor bed.",
    },
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
      "Sow another short row every 10–14 days until your spring window closes. Use a more heat-tolerant variety, such as Wando, for the last one.",
    ],
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
      "When a vine reaches the top, pinch the growing tip. You get a few side shoots, less flopping, and the tips are good to eat.",
    ],
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
      "Weed early and shallow. A hoe slipped deep cuts the roots.",
    ],
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
      "Once pods start, pick every other day. A ripe pod left on the vine tells the plant to stop flowering and ripen seed.",
    ],
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
      "Refrigerate unwashed, in a loose bag, and eat within two or three days. To freeze, blanch shelling peas and snaps about 90 seconds, snow peas about 60, chill in ice water, dry, and freeze in one layer.",
    ],
    aside: {
      title: "Pea shoots",
      body: "Once plants are about 6 inches tall you can cut the top 2–4 inches for a salad. Leave most of the plant if you still want pods. For a shoot patch, sow Dwarf Grey Sugar thickly and cut it more than once.",
    },
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
      "Leave a few pods to turn brown and rattle on a healthy plant. Shell them, dry another week on a plate, and store cool, dark, and dry. Use the seed within two years.",
    ],
  },
];

export type Stage = {
  id: string;
  label: string;
  when: string;
  watch: string;
  actions: string[];
};

export const STAGES: Stage[] = [
  {
    id: "seed",
    label: "Seed",
    when: "Day 0",
    watch: "The row looks empty. Mice and birds know it is not.",
    actions: [
      "Firm the soil so each seed touches moisture.",
      "Cover with wire or fabric until shoots are up.",
      "The trellis is already in. Do not tell yourself you will add it later.",
    ],
  },
  {
    id: "emerge",
    label: "Emergence",
    when: "Day 7–14",
    watch: "A hooked stem breaks the crust. Cold soil makes this slower. That is normal.",
    actions: [
      "If a crust has sealed the row, scratch it. Do not bury the shoot.",
      "Take the cover off once plants are sturdy and pests have lost interest.",
      "Missing patches are usually rot, old seed, or something that dug. Dig one spot and look.",
    ],
  },
  {
    id: "vine",
    label: "Vine",
    when: "Day 14–35",
    watch: "Tendrils search for a hold. This is the week they either find the mesh or flop.",
    actions: [
      "Tuck stray vines into the netting once. They take it from there.",
      "Weed shallow. Mulch after the soil has warmed and plants are 4 inches tall.",
      "Aphids start on the soft tips. Look before the cluster is obvious.",
    ],
  },
  {
    id: "flower",
    label: "Flower",
    when: "Day 35–55",
    watch: "White flowers, self-fertile. The crop is decided in these two weeks.",
    actions: [
      "Keep the water steady. A dry spell now means empty pods later.",
      "If days are already over 80°F, this sowing is nearly done. The next one has to be earlier, or in fall.",
      "Pink nodules on a lifted root mean the inoculant took.",
    ],
  },
  {
    id: "pod",
    label: "Pod",
    when: "Day 50–75",
    watch: "Pods fill fast. Two days changes a snap from perfect to starchy.",
    actions: [
      "Pick every other day. Hold the vine, pinch the pod.",
      "Snow peas while flat. Snaps while glossy. Shelling peas while sweet, not mealy.",
      "Eat or chill them the same day. The sugar does not wait.",
    ],
  },
  {
    id: "finish",
    label: "Finish",
    when: "After the flush",
    watch: "The vine yellows, mildew arrives, or the heat shuts the flowers. That is the end of the sowing, not a mistake.",
    actions: [
      "Pull healthy vines and compost them. Trash anything wilted from the base.",
      "Write down which variety actually got eaten. That is the one to reorder.",
      "Leave the bed for a non-legume next season.",
    ],
  },
];

export type Trouble = {
  id: string;
  name: string;
  severity: "common" | "sometimes" | "serious";
  signs: string;
  fix: string;
  prevent: string;
};

export const TROUBLES: Trouble[] = [
  {
    id: "no-sprout",
    name: "The seed never comes up",
    severity: "common",
    signs: "Bare stretches a fortnight after sowing. Neighbors in the row may be fine.",
    fix: "Dig carefully. Hollow shells mean rot or a pest. Intact, hard seed means it was too cold, too dry, or dead. Resow once the soil crumbles, with fresher seed if the packet is old.",
    prevent: "Sow into workable soil, 1 inch deep, and cover the row from birds and mice until emergence.",
  },
  {
    id: "clipped",
    name: "Seedlings clipped at the soil",
    severity: "common",
    signs: "The shoot is gone or lying next to a clean cut. Often overnight.",
    fix: "Resow the gap and protect it. A collar of cardboard helps against cutworms. A row cover or net helps against birds.",
    prevent: "Cover the row at sowing. Clear weeds at the base, which is where cutworms sit.",
  },
  {
    id: "notches",
    name: "Notches along the leaf edges",
    severity: "sometimes",
    signs: "Neat scallops on the margins, as if something took a bite from the side. Plants otherwise look fine.",
    fix: "On plants that are already growing, this is the pea leaf weevil and it is mostly cosmetic. You do not need to spray a healthy row.",
    prevent: "A row cover from sowing until the plants are established keeps the adults off the next crop.",
  },
  {
    id: "aphids",
    name: "Aphids clustered on the tips",
    severity: "common",
    signs: "Green or gray insects packed on new growth and flower stems. Leaves curl. A sticky film may follow.",
    fix: "Knock them off with a firm spray of water, and repeat every couple of days. Pinch off a tip that is already solid with them. Insecticidal soap is the next step on a bad infestation, on a cool morning, not in full sun.",
    prevent: "Do not overfeed with nitrogen. Check the growing tips when you pick.",
  },
  {
    id: "mildew",
    name: "White dust on the leaves",
    severity: "common",
    signs: "A pale powder on leaves and pods, usually late, when days are warm and nights are cool. Older leaves go first.",
    fix: "Pick what is ready. The powder is powdery mildew, and on a spring crop it often means the season is over. Sulfur or potassium bicarbonate can slow it on a crop you still want to keep. Do not compost a badly infected row if you are about to sow peas again nearby.",
    prevent: "Sow earlier, water at the soil, give the row air, and choose a resistant variety: Maestro, Cascadia, Super Sugar Snap, or Oregon Sugar Pod II.",
  },
  {
    id: "wilt",
    name: "A plant wilts from the base",
    severity: "serious",
    signs: "One plant or a patch collapses. The stem at the soil line is brown, soft, or streaked. The rest of the row may look normal.",
    fix: "Pull the plant, roots and all, and trash it. Do not compost it. Fusarium wilt and root rots such as Aphanomyces are soil-borne. Watering more will not save a plant whose stem is already dead.",
    prevent: "Drainage, a raised row, and three to four years before legumes return. Where this has happened before, move the crop.",
  },
  {
    id: "yellow",
    name: "Yellow leaves, few flowers",
    severity: "sometimes",
    signs: "The row is pale, soft, and leafy, or it yellows from the bottom while sitting in wet soil.",
    fix: "If the bed is wet, stop watering and open the soil to air. If you fed it like a tomato, stop. Peas with failed nodules in a poor soil want compost, not more nitrogen.",
    prevent: "A drained bed, inoculant on new ground, and no high-nitrogen fertilizer.",
  },
  {
    id: "drop",
    name: "Flowers fall and pods do not set",
    severity: "common",
    signs: "Plenty of bloom, then nothing. Or pods that stay flat and empty. Often in the last weeks of a spring crop.",
    fix: "You cannot talk a heat-stressed plant into podding. Pick any pods that did set, and plan the next sowing for the cool window. Steady water helps only if the problem was drought, not a week of 85°F days.",
    prevent: "Sow inside the window for your zone. In hot-spring climates, the fall or winter sowing is the reliable one.",
  },
  {
    id: "worms",
    name: "A caterpillar inside the pod",
    severity: "sometimes",
    signs: "A small caterpillar and frass in the pod. More a problem in Britain and parts of Europe than in most of the United States. A hole in a dried seed is a different insect, the pea weevil, and it matters most if you save seed.",
    fix: "Discard affected pods. Row cover from first flower until picking keeps pea moth off a bush crop. It is awkward on a tall trellis.",
    prevent: "An earlier sowing can set pods before the moth is flying. Do not save seed from infested pods.",
  },
  {
    id: "late",
    name: "Pods are stringy or starchy",
    severity: "common",
    signs: "Snow pods are bumpy. Snap pods have lost their gloss and grown a string. Shelling peas are hard and mealy.",
    fix: "Pick smaller tomorrow. The next flush, if the weather is still cool, will be better. Starchy peas are still edible in soup. They will not taste like a raw snap.",
    prevent: "Walk the row every other day once the first pod sizes up. The change is quick.",
  },
  {
    id: "mold",
    name: "Gray mold in a crowded, wet row",
    severity: "sometimes",
    signs: "Flowers or pods turn fuzzy and gray in still, damp weather. Botrytis likes a dense canopy.",
    fix: "Pick off affected pods, thin a few stems if you can do it without wrecking the trellis, and water early so the row dries.",
    prevent: "Spacing, a trellis that lets air through, and morning irrigation.",
  },
];

export const SEVERITY_LABEL: Record<Trouble["severity"], string> = {
  common: "Common",
  sometimes: "Sometimes",
  serious: "Act fast",
};
