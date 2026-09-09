/**
 * Success International Church — Sermon Data
 * ---------------------------------------------------------------
 * Single source of truth for every sermon on the site.
 * To add a new sermon once the pastor sends one:
 *   1. Drop the audio file into /assets/audio/
 *   2. Copy one entry below and fill in the fields
 *   3. Duplicate /sermons/_template.html, rename it to the new slug,
 *      and update the notes content inside it
 * The homepage's "Latest Message" section and any future sermon
 * library UI both read from this array — nothing about a sermon
 * should need to be hardcoded into index.html directly.
 */

const SERMONS = [
  {
    slug: "sign-posts-on-the-road-to-success",
    title: "Sign Posts on the Road to Success",
    date: "2026-09-06",
    scriptureRef: "3 John 2",
    scriptureText:
      "Beloved, I wish above all things that thou mayest prosper and be in health, even as thy soul prospereth.",
    description:
      "Success isn't an accident. It begins the moment you can see what God wants you to see, and it's sustained by the willingness to work for it. This message lays out two sign posts on that road: vision and diligence.",
    audioSrc: "assets/audio/sign-posts-on-the-road-to-success.m4a",
    durationLabel: "33:12",
    points: [
      {
        title: "Vision",
        summary:
          "Vision is insight into the plan of God for your life. Every distinction begins with vision.",
        body: "Success is achieving God's purpose for your life — and that starts with constantly seeing pictures of a better tomorrow. Vision is a mental picture of a preferred, better future. If you can see what God wants you to see, you'll be where God wants you to be."
      },
      {
        title: "Diligence",
        summary:
          "Working hard with sense. There can't be success without work.",
        body: "Work is how you create value. God blesses the work of your hand — but there has to be work for Him to bless. God's own principle is six days of work and one day of rest."
      }
    ],
    quotes: [
      "Vision is a mental picture of a preferred future. If you can see it, you can reach it.",
      "There can't be success without work. Diligence is how you create value.",
      "God blesses the work of your hand — so there has to be work."
    ],
    applications: [
      "Write down one clear picture of what a better version of your next year looks like — not a wish, a specific picture.",
      "Audit your week: are there six days of real, valuable work, or is diligence missing from the rhythm?",
      "Trade one hour this week you'd normally spend idle for one hour spent building toward the vision you wrote down."
    ],
    prayerPoints: [
      "Ask God to open your eyes to His specific plan for your life — not a generic dream, but His picture.",
      "Pray for grace to work with diligence, not just activity, and for God to bless the work of your hands.",
      "Ask for the discipline to rest on the day God has appointed, trusting Him with the work undone."
    ]
  }
];

// Convenience helpers used by the homepage / future library UI
function getLatestSermon() {
  return SERMONS.slice().sort((a, b) => new Date(b.date) - new Date(a.date))[0];
}

function getSermonBySlug(slug) {
  return SERMONS.find((s) => s.slug === slug);
}

function formatDate(isoDate) {
  const d = new Date(isoDate + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}
