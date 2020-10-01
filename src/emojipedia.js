const emojipedia = [
  {
    id: 1,
    emoji: "💪",
    name: "Tense Biceps",
    meaning:
      "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym.",
  },
  {
    id: 2,
    emoji: "🙏",
    name: "Person With Folded Hands",
    meaning:
      "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you.",
  },
  {
    id: 3,
    emoji: "🤣",
    name: "Rolling On The Floor, Laughing",
    meaning:
      "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“.",
  },
  {
    id: 4,
    emoji: "😎",
    name: "Face With Sunglasses",
    meaning:
      "I'm the king of the world! Mr. Cool Smiley with sunglasses. Is totally self-assured and relaxed. Everything is absolutely easy and cool. Also a symbol for sun, summer holidays, and holidays on the beach.“.",
  },
  {
    id: 5,
    emoji: "😉",
    name: "Winking Face",
    meaning:
      "A yellow face with a slight smile shown winking, usually its left eye. May signal a joke, flirtation, hidden meaning, or general positivity. Tone varies, including playful, affectionate, suggestive, or ironic.“.",
  },
  {
    id: 6,
    emoji: "😐 ",
    name: "Neutral Face",
    meaning:
      "A yellow face with simple, open eyes and a flat, closed mouth. Intended to depict a neutral sentiment but often used to convey mild irritation and concern or a deadpan sense of humor.“.",
  },
  {
    id: 7,
    emoji: "😷 ",
    name: "Face with Medical Mask",
    meaning:
      "A yellow face with closed eyes wearing a white surgical mask, as used by health workers in hospitals. Also worn to avoid sickness or spreading airborne diseases.“.",
  },
  {
    id: 8,
    emoji: "💔",
    name: "Broken Heart",
    meaning:
      "A love heart, broken in two. This emoji represents the aching one feels when they are missing the  person they love.“.",
  },
  {
    id: 9,
    emoji: "♊",
    name: "Gemini",
    meaning:
      "The Gemini astrological sign in the Zodiac. This Zodiac Symbol represents Twins.“.",
  },
  {
    id: 10,
    emoji: "🙈",
    name: " See-No-Evil Monkey",
    meaning:
      "The see no evil monkey, called Mizaru (Japanese for “see not”), one of the Three Wise Monkeys. Depicted as the brown 🐵 Monkey Face with tan or pinkish hands covering its eyes.“.",
  },
  {
    id: 11,
    emoji: "🤮",
    name: "Face Vomiting",
    meaning:
      "A yellow face with scrunched eyes spewing birght-green vomit. This emoji represents illness or disgust.“.",
  },
  {
    id: 12,
    emoji: "🥰",
    name: "Smiling Face with Hearts",
    meaning:
      "A yellow face with smiling eyes, a closed smile, rosy cheeks, and several hearts floating around its head. Expresses a range of happy, affectionate feelings, especially being in love.",
  },
  {
    id: 13,
    emoji: "🥺",
    name: "Pleading Face",
    meaning:
      "A yellow face with furrowed eyebrows, a small frown, and large, “puppy dog” eyes, as if begging or pleading. May also represent adoration or feeling touched by a loving gesture.",
  },
  {
    id: 14,
    emoji: "🤓",
    name: "NERD Face",
    meaning:
      "Aaah look! We just found you. A yellow face smiling with thick, black-rimmed eyeglasses and buck teeth on most platforms. Styled after a stereotypical nerd.",
  },
  {
    id: 15,
    emoji: "💩",
    name: "Poop",
    meaning:
      "A swirl of brown poop, shaped like soft-serve ice cream with large, excited eyes and a big, friendly smile. Yes, you can't unread it - 'soft serve ice-cream'",
  },
  {
    id: 16,
    emoji: "✨",
    name: "Sparkles/Glitter/Shiny",
    meaning:
      "The glittering flashes of sparkles. Generally depicted as a cluster of three, yellow four-point stars, with one large sparkle and two small ones to its left or right.",
  },
  {
    id: 17,
    emoji: "🥰",
    name: "In love face",
    meaning:
      "Expresses a range of happy, affectionate feelings, especially being in love. The number of hearts (three or more) varies by platform.",
  },
  {
    id: 18,
    emoji: "🥶",
    name: "Cold Face",
    meaning:
      "An icy-blue face with gritted teeth usually depicted with icicles clinging to its cheeks or jaw, as if frozen from extreme cold. May also represent unfriendliness (slang, cold) or excellence.",
  },
  {
    id: 19,
    emoji: "😬",
    name: "Awkward",
    meaning:
      "Represents a range of negative or tense emotions, especially nervousness, embarrassment, or awkwardness (e.g., Eek!).",
  },
  {
    id: 20,
    emoji: "😘",
    name: "Face Blowing a Kiss",
    meaning:
      "A yellow face winking with puckered lips blowing a kiss, depicted as a small, red heart. May represent a kiss goodbye or good night and convey feelings of love and affection more generally.",
  },
  {
    id: 21,
    emoji: "😂",
    name: "Face with Tears of Joy",
    meaning:
      "A yellow face with a big grin, uplifted eyebrows, and smiling eyes, each shedding a tear from laughing so hard. Widely used to show something is funny or pleasing.",
  },
  {
    id: 22,
    emoji: "💂‍♀️",
    name: "Woman Guard",
    meaning:
      "A royal british female guard. A strict person who is not allowed to show any emotion. May stand guard outside the Buckingham Palace and not move an inch unless required.",
  },
  {
    id: 23,
    emoji: "💂‍♂️",
    name: "Man Guard",
    meaning:
      "A royal british male guard. A strict person who is not allowed to show any emotion. May stand guard outside the Buckingham Palace and not move an inch unless required.",
  },
  {
    id: 24,
    emoji: "🔥",
    name: "Fire",
    meaning:
      "A flame, as produced when something is on fire. Depicted as a red, orange, and yellow flickering flame.",
  },
  {
    id: 25,
    emoji: "💌",
    name: "Love Letter",
    meaning:
      "The back of an envelope, generally shown in white and sealed with a red heart. Represents a love letter or note, valentine, or affectionate greeting card. Commonly used to convey various feelings or messages of love and happiness.",
  },
  {
    id: 26,
    emoji: "💣",
    name: "Bomb",
    meaning: `A cartoon-styled bomb, depicted as a black ball with a burning fuse. Commonly used for various figurative bombs or explosions, e.g., slang bomb, a “home run” in baseball or softball; "excellent" or "attractive." Sometimes applied in contexts of war, weapons, or violence.`,
  },
  {
    id: 27,
    emoji: "🧱",
    name: "Brick",
    meaning: `A red brick or bricks. Depicted in a loose stack, a single object with holes, or as built into wall, as of a house, school, or other structure. Commonly used for various content concerning building and construction. May also be used for figurative bricks, e.g., slang brick, “extremely cold (weather).”`,
  },
  {
    id: 28,
    emoji: "🧭",
    name: "Compass",
    meaning:
      "A magnetic compass, as used for navigation. Generally depicted in a silver or gold case with a compass rose and a red-tipped needle. Commonly used for various content concerning traveling and exploring as well as metaphorical compasses (e.g., moral compass).",
  },
  {
    id: 29,
    emoji: "⏰",
    name: "Alarm Clock",
    meaning:
      "A timepiece set in advance to startle a person awake at the designated time with its two bells. That is, before hitting snooze. Appearance varies across platforms, but depicted as a classic, wind-up, bedside alarm clock, often red in color. May be used for various content concerning alarms, alerts, sleeping, waking, and time more generally.",
  },
  {
    id: 30,
    emoji: "🧏",
    name: "Deaf Woman",
    meaning: "The sign used for showing a deaf person when she is a female.",
  },
  {
    id: 31,
    emoji: "👆",
    name: "Backhand Finger Pointing Upwards",
    meaning:
      "The emoji could be used as a symbol of agreement with the person messaging or commenting above you as well as for pointing upwards when used with other emoji.",
  },
  {
    id: 32,
    emoji: "✍️",
    name: "Writing Hand",
    meaning:
      "The gesture could be used to tell someone that you’re paying attention or taking down the points, but could be used to depict a promise of writing back.",
  },
  {
    id: 33,
    emoji: "🙅",
    name: "Woman Gesturing No",
    meaning:
      "You know when saying yes would land you or someone else into trouble, being a villain and saying no is the best practice and this straightforward emoji could be really useful.",
  },
  {
    id: 34,
    emoji: "🍆",
    name: "Eggplant",
    meaning:
      "A purple eggplant. First debuted in 2010, the eggplant emoji is really just an eggplant.",
  },
  {
    id: 35,
    emoji: "🎉",
    name: "Party popper",
    meaning:
      "A gold colored cone popper with blue and red confetti about to burst into the air. Can be used normally when congratulating someone.",
  },
  {
    id: 36,
    emoji: "🧨",
    name: "Firecracker",
    meaning:
      "A red tube with a burning fuse. This emoji is often used in celebratory dates like New Year's eve.",
  },
  {
    id: 37,
    emoji: "🎯",
    name: "Bullseye",
    meaning:
      "A blue dart hitting the center of a board. Used for example when an incredibly accurate shot has been made.",
  },
  {
    id: 38,
    emoji: "😇",
    name: "Smiling Face with Halo",
    meaning:
      "A yellow face with smiling eyes, closed smile, and halo, usually blue, overhead. Often represents angels, prayers, and blessings. May also convey angelic behavior, e.g., doing good deeds.",
  },
  {
    id: 39,
    emoji: "😭",
    name: "Loudly Crying Face",
    meaning:
      "A yellow face with an open mouth wailing and streams of heavy tears flowing from closed eyes. May convey inconsolable grief but also other intense feelings, such as uncontrollable laughter or overwhelming joy.",
  },
  {
    id: 40,
    emoji: "😲",
    name: "Astonished Face",
    meaning:
      "A yellow face with open eyes, raised eyebrows, and an open mouth, as if gasping in shock or surprise. Often depicted showing its upper teeth. May convey a wide range of emotions, including awe, amazement, admiration, disbelief, excitement, or concern.",
  },
  {
    id: 41,
    emoji: "🤔",
    name: "Thinking Face",
    meaning:
      "A yellow face with furrowed eyebrows looking upwards with thumb and index finger resting on its chin. Intended to show a person pondering or deep in thought. Often used to question or scorn something or someone, as if saying Hmm, I don't know about that.",
  },
  {
    id: 42,
    emoji: "❤️",
    name: "Red Heart",
    meaning:
      "A classic love heart emoji, used for expressions of love. Displayed in various shades of red on most platforms. ",
  },
  {
    id: 43,
    emoji: "😍",
    name: "Smiling Face with Heart-Eyes",
    meaning:
      "A yellow face with an open smile, sometimes showing teeth, and red, cartoon-styled hearts for eyes. Often conveys enthusiastic feelings of love, infatuation, and adoration. e",
  },
  {
    id: 44,
    emoji: "😒",
    name: "Graceless face",
    meaning:
      "A yellow face with slightly raised eyebrows, a frown, and eyes looking to the side. May convey a variety of negative emotions, including irritation, displeasure, grumpiness, and skepticism",
  },
];

export default emojipedia;
