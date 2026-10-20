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
  },
  {
  slug: "catching-gods-vision-for-your-life",
  title: "Catching God's Vision for Your Life",
  date: "2026-10-20",
  scriptureRef: "Matthew 6:22-23",
  scriptureText: "The light of the body is the eye: if therefore thine eye be single, thy whole body shall be full of light. But if thine eye be evil, thy whole body shall be full of darkness. If therefore the light that is in thee be darkness, how great is that darkness!",
  description: "Discover why catching God's vision and plan for your life is essential for direction, focus, and living a fulfilled, un-wasted life.",
  audioSrc: "assets/audio/catching-gods-vision-for-your-life.mp3",
  durationLabel: "45:00",
  points: [
    { 
      title: "The Three Planes of Vision", 
      summary: "Man is a triune being—spirit, soul, and body—and must learn to use spiritual eyes across three dimensions.", 
      body: "We live life on three planes, and we must be able to use our eyes on those three dimensions. Man is a triune being: spirit, soul, and body. Vision is insight into the plan of God for your life, allowing you to see with the eye of the spirit the things that are possible in Christ for you[span_0](start_span)[span_0](end_span)." 
    },
    { 
      title: "Spiritual Insight vs. Surface Value", 
      summary: "Just as crude oil is found deep underground, life-changing vision and purpose are discovered beneath the surface through the Spirit.", 
      body: "You cannot find crude oil on the surface; you must drill kilometers down before you can discover it. Nothing that is life-changing is on the surface—it is in the depth. The Holy Spirit searches all things, yea, the deep things of God concerning your life[span_1](start_span)[span_1](end_span)." 
    },
    { 
      title: "A Reason for Living", 
      summary: "Knowing God's plan for your life gives you a compelling reason for living, preventing you from wasting your time or following the crowd blindly.", 
      body: "Without vision, you will easily give up and follow the bandwagon of what everyone else is doing. Knowing God's plan gives your life direction, focus, and a compelling reason for living so that you do not live a substandard or unfulfilled life[span_2](start_span)[span_2](end_span)." 
    },
    { 
      title: "Your Unique Identity", 
      summary: "God made you distinct with a unique destiny, so you should embrace your individuality rather than copying others.", 
      body: "You were made different to make a difference. Don't try to be like other people; be comfortable in your skin. Your vision and destiny are unique to yourself, and true fulfillment comes from running your own God-set race with patience[span_3](start_span)[span_3](end_span)." 
    }
  ],
  quotes: [
    "Vision is insight into the plan of God for your life.",
    "Nothing that is life-changing is on the surface; they are in the depth.",
    "You were made different to make a difference."
  ],
  applications: [
    "Spend time in prayer and the Word to seek out God's specific plan and vision for your life.",
    "Avoid blindly following societal trends or copying other people's career paths without divine conviction.",
    "Commit your daily activities and long-term goals to aligning with God's ultimate purpose for you."
  ],
  prayerPoints: [
    "Lord, open the eyes of my spirit to see the glorious plan You have prepared for my life.",
    "Father, deliver me from living a wasted or unfocused life driven only by surface pursuits.",
    "Grant me the grace, courage, and steadfastness to run my own unique race and fulfill Your divine will."
  ]
}, 
{
  "slug": "hindsight-insight-and-foresight-part-2",
  "title": "Hindsight, Insight and Foresight (Part 2)",
  "date": "2026-06-07",
  "scriptureRef": "Matthew 6:22-23",
  "scriptureText": "The light of the body is the eye: if therefore thine eye be single, thy whole body shall be full of light. But if thine eye be evil, thy whole body shall be full of darkness. If therefore the light that is in you be darkness, how great is that darkness!",
  "description": "Discovering God's vision and plan for your life brings true purpose, protects you from wasting time, and anchors you in eternal significance.",
  "audioSrc": "assets/audio/Bible_Masterclass_Day_2_Hindsight,_Insight_and_Foresight_Part_2.mp3",
  "durationLabel": "45:00",
  "points": [
    {
      "title": "Catching God's Vision Gives Your Life Direction and Focus",
      "summary": "Speed is not an advantage if you are headed in the wrong direction.",
      "body": "When you catch God's vision for your life, it provides divine direction and focus. Progress cannot be measured merely by activity if you are chasing the wrong things; true purpose ensures you do not waste your life."
    },
    {
      "title": "God's Plan Provides a True Reason for Living",
      "summary": "His purpose for your life should be the ultimate reason why you live.",
      "body": "Discovering God's blueprint gives you an unshakeable reason for existence. It separates eternal significance from temporary, materialistic pursuits that hold no value in the light of eternity."
    },
    {
      "title": "Spiritual Vision Outshines Physical Sight",
      "summary": "Physical sight is inferior to spiritual vision when discerning destiny matters.",
      "body": "In matters of destiny and purpose, physical eyes can only perceive what is temporary. True spiritual insight, revealed by the Holy Spirit, allows you to see things to come and align with God's ultimate design."
    },
    {
      "title": "Preserving Your Works for Eternity",
      "summary": "Your labor and message must be preserved so they continue to bless generations.",
      "body": "A life lived for God leaves a legacy that outlasts physical presence. Just like the preserved works of great fathers of faith, your spiritual impact should endure long after you are gone."
    }
  ],
  "quotes": [
    "Speed is not an advantage if you are headed in the wrong direction.",
    "Anything you do on earth that doesn't matter in the light of eternity is a waste of time.",
    "Vision puts you in the God-class; it gives you insight into the plan of God for your life.",
    "In destiny matters, physical vision and physical sight are inferior to spiritual vision."
  ],
  "applications": [
    "Commit serious time to prayer, asking God to open your spiritual eyes and reveal His specific plan for your life.",
    "Evaluate your current pursuits and career goals against the perspective of eternity rather than temporary worldly validation.",
    "Build a time-saving and eternity-focused lifestyle that prioritizes God's calling above personal ambitions."
  ],
  "prayerPoints": [
    "Lord, open my spiritual eyes and grant me divine insight into Your master plan for my life.",
    "Father, deliver me from chasing the wrong things and wasting my precious time on earth.",
    "Holy Spirit, help me to walk strictly in Your vision and preserve my life's work for Your eternal glory."
  ]
}, 
{
  slug: "renewing-your-mind-and-testing-the-spirit",
  title: "Renewing Your Mind and Testing the Spirit",
  date: "2026-06-06",
  scriptureRef: "Matthew 6:22",
  scriptureText: "The light of the body is the eye: if therefore thine eye be single, thy whole body shall be full of light.",
  description: "A profound exploration of how our spiritual and mental eyes shape our lives, teaching us to filter dreams, thoughts, and guidance through the infallible Word of God.",
  audioSrc: "assets/audio/renewing-your-mind.mp3",
  durationLabel: "45:00",
  points: [
    { 
      title: "The Power of the Mental and Spiritual Eye", 
      summary: "What dominates your mind ultimately dominates and directs your life.", 
      body: "Just as we have physical eyes, we possess spiritual and mental eyes—our imagination and thoughts. Whatever governs your mind will steer the course of your life, which is why controlling and guarding what enters our minds is critical." 
    },
    { 
      title: "Testing Every Source: Word vs. Dream", 
      summary: "Not every dream, vision, or voice is from God; all must be tested by Scripture.", 
      body: "Dreams and divine guidance must always be weighed against the written Word of God. The Word is the most reliable source of truth, and any revelation or impression that contradicts Scripture must be rejected." 
    },
    { 
      title: "Healthy Fear vs. Unhealthy Fear", 
      summary: "While healthy fear provides necessary caution and reverence, destructive fear paralyzes faith.", 
      body: "Fear of consequences, of the future, or of failure can limit us if it rules us. However, proper reverence for God (the beginning of wisdom) and healthy caution protect us, while faith fueled by the Word helps us overcome anxiety." 
    }
  ],
  quotes: [
    "Whatever dominates your mind will dominate your life.",
    "If a dream or vision is not backed by the Word of God, it is not from God.",
    "Fear is a constant factor in life, but you must not let it rule you."
  ],
  applications: [
    "Regularly immerse your mind in the Word of God to program your thoughts with His truth.",
    "Test every spiritual impression, dream, or council against biblical principles before acting on it.",
    "Actively confront fear of the future or failure by aligning your life with God's plans and promises."
  ],
  prayerPoints: [
    "Lord, purify my imagination and let my mind be fully illuminated by Your Word.",
    "Grant me discernment to test every spirit and recognize Your true guidance in my life.",
    "Strip away destructive fear and fill my heart with unwavering faith for the future."
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
