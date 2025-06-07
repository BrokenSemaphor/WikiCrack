import React, { useEffect, useState, useRef } from "react";

const baseColors = {
  red: "#ef4444",
  redHover: "#dc2626",
  grayText: "#6b7280",
  grayTextHover: "#374151",
  linkGray: "#9ca3af",
  linkGrayHover: "#6b7280",
  bg: "#f9fafb",
  white: "#fff",
  border: "#e5e7eb",
  darkText: "#111827",
  bodyText: "#374151",
};

const UNUSUAL_ARTICLES = [
  "List of inventors killed by their own inventions",
  "Akon City",
  "List of people who disappeared mysteriously",
  "Exploding whale",
  "Emu War",
  "Toilet paper orientation",
  "Bielefeld Conspiracy",
  "Monty Hall problem",
  "Longest word in English",
  "Chicken (joke)",
  "Bal des Ardents",
  "Burned house horizon",
  "Cadaver Synod",
  "Cagots",
  "Complaint tablet to Ea-nāṣir",
  "Criterion of embarrassment",
  "Roman von Ungern‑Sternberg",
  "United Nations Temporary Executive Authority (Western New Guinea)",
  "United States involvement in regime change",
  "John Zegrus",
  "Cottage cheese boycott",
  "Dean scream",
  "Rudi Dekkers",
  "Great Canadian Maple Syrup Heist",
  "Uday Hussein",
  "Laser Kiwi flag",
  "Norwegian butter crisis",
  "John P. O'Neill",
  "Pepsi fruit juice flood",
  "Anophthalmus hitleri",
  "Aptostichus barackobamai",
  "Aptostichus stephencolberti",
  "Bill Gates’ flower fly",
  "Colon (beetle genus)",
  "Funny valentine (gene)",
  "Gaga (plant genus)",
  "Gamergate (ant breeding)",
  "Harryplax",
  "Kimjongilia",
  "Kinda baboon",
  "Makes caterpillars floppy",
  "Mini (frog genus)",
  "Mothers against decapentaplegic",
  "Mountain chicken",
  "Neopalpa donaldtrumpi",
  "Pachygnatha zappa",
  "Pikachurin",
  "Setaceous Hebrew character",
  "Spongiforma squarepantsii",
  "Strigiphilus garylarsoni",
  "Synalpheus pinkfloydi",
  "Thaumatodryinus tuukkaraski",
  "Zombie taxon",
  "Zoosphaerium darthvaderi",
  "Zyzyxia lundellii",
  "Zyzzyzus warreni",
  "Bialbero di Casorzo",
  "Chandelier Tree",
  "Echinopsis lageniformis",
  "Eisenhower Tree",
  "Golfballia ambusta",
  "Mimosa pudica",
  "Moon tree",
  "Nepenthes lowii",
  "Old Man of the Lake",
  "Olympic oaks",
  "Pando",
  "Plant arithmetic",
  "Pomato",
  "Radiotrophic fungus",
  "Tendril perversion",
  "Tom Cruise Purple",
  "Tree of Knowledge (Australia)",
  "Tree of Ténéré",
  "Tree That Owns Itself",
  "Absurdistan",
  "Bagism",
  "Beard Liberation Front",
  "Berners Street hoax",
  "Birth tourism",
  "Frank Chu",
  "Correspondence between the Ottoman sultan and the Cossacks",
  "Crypt of Civilization",
  "Cutting in line",
  "Eggplant emoji",
  "Peach emoji",
  "Elaine Davidson",
  "Erika Eiffel",
  "Elvavrålet",
  "Escalator etiquette",
  "Fat men's club",
  "Female husband",
  "Jenaro Gajardo Vera",
  "Justo Gallego Martínez",
  "11 foot 8 Bridge",
  "33 Thomas Street",
  "Sentinel Peak",
  "Agloe, New York",
  "Alcohol and Drug Abuse Lake",
  "Aroma of Tacoma",
  "Aquarius Reef Base",
  "Badlands Guardian",
  "Beatosu and Goblu",
  "Big Blue Bug",
  "Bishop Castle",
  "Boston Citgo sign",
  "Borscht Belt",
  "Bubblegum Alley",
  "Bubbly Creek",
  "Adrian Carton de Wiart",
  "Angels of Mons",
  "Michael Angelo Aquino",
  "Vasily Arkhipov",
  "Bolivian Navy",
  "Boot Monument",
  "List of camoufleurs",
  "Caspian Sea Monster",
  "1956 Olympic flame hoax",
  "Apopudobalia",
  "Artistic roller skating",
  "Dreamachine",
  "Electronic voice phenomenon",
  "Friendly Floatees",
  "Gun‑powered mousetrap",
  "Hitler teapot",
  "Marvin Heemeyer",
  "History of perpetual motion machines",
  "Hitachi Magic Wand",
  "I‑Doser",
  "Jibba Jabber",
  "Klerksdorp sphere",
  "Zbigniew Libera",
  "Love chair",
  "Mengenlehreuhr",
  "Moo box",
  "Mosquito laser",
  "Museum of Failure",
  "My Friend Cayla",
  "One red paperclip",
  "Parking chair",
  "Pigeon photography",
  "Predictions of the end of Wikipedia",
  "Project Cybersyn",
  "Pythagorean cup",
  "Quartz crisis",
  "Radio hat",
  "Iglesia Maradoniana",
  "Incident (Scientology)",
  "International date line in Judaism",
  "Jerusalem syndrome",
  "Jewish pope Andreas",
  "Johnson cult",
  "Judeo‑Masonic conspiracy theory",
  "Kachera",
  "Kapo (mythology)",
  "Khecarī mudrā",
  "List of games that Buddha would not play",
  "List of UFO religions",
  "Lou de Palingboer",
  "Jesús Malverde",
  "Matshishkapeu",
  "Missionary Church of Kopimism",
  "Mizab al‑Rahma",
  "Oomoto",
  "Prince Philip movement",
  "Pseudoskepticism",
  "Raël",
  "Religion in Antarctica"
];


const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: baseColors.bg,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    padding: "48px 24px",
    color: baseColors.bodyText,
    display: "flex",
    justifyContent: "center",
  },
  inner: {
    maxWidth: "720px",
    width: "100%",
  },
  header: {
    marginBottom: "32px",
  },
  title: {
    fontSize: "32px",
    fontWeight: "600",
    color: baseColors.darkText,
    margin: "0 0 8px 0",
  },
  subtitle: {
    fontSize: "18px",
    color: baseColors.grayText,
    margin: 0,
  },
  article: {
    backgroundColor: baseColors.white,
    border: `1px solid ${baseColors.border}`,
    borderRadius: "12px",
    padding: "32px 28px",
    boxShadow: "0 3px 12px rgba(0,0,0,0.07)",
    marginBottom: "36px",
    transition: "box-shadow 0.3s ease",
  },
  articleHover: {
    boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
  },
  articleTitle: {
    fontSize: "26px",
    fontWeight: "600",
    color: baseColors.darkText,
    margin: "0 0 24px 0",
    lineHeight: 1.3,
  },
  articleText: {
    fontSize: "18px",
    lineHeight: 1.6,
    marginBottom: "32px",
    color: baseColors.bodyText,
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  saveButton: {
    backgroundColor: baseColors.red,
    color: baseColors.white,
    border: "none",
    borderRadius: "8px",
    padding: "12px 28px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    userSelect: "none",
    transition: "background-color 0.3s ease",
  },
  nextButton: {
    background: "none",
    border: "none",
    color: baseColors.grayText,
    padding: "12px 20px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    userSelect: "none",
    transition: "color 0.3s ease",
  },
  linkButton: {
    marginLeft: "auto",
    color: baseColors.linkGray,
    textDecoration: "none",
    fontSize: "20px",
    padding: "8px",
    transition: "color 0.3s ease",
  },
  progress: {
    fontSize: "14px",
    color: baseColors.linkGray,
    textAlign: "center",
  },
  loading: {
    minHeight: "100vh",
    backgroundColor: baseColors.bg,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontSize: "18px",
    color: baseColors.grayText,
  },
  savedList: {
    backgroundColor: baseColors.white,
    border: `1px solid ${baseColors.border}`,
    borderRadius: "12px",
    padding: "24px 20px",
    marginTop: "40px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
  },
  savedTitle: {
    fontSize: "22px",
    fontWeight: "600",
    color: baseColors.darkText,
    marginBottom: "16px",
  },
  savedItem: {
    marginBottom: "12px",
    fontSize: "16px",
  },
};

function Hoverable({ children, style, hoverStyle, ...props }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ ...style, ...(hovered ? hoverStyle : {}) }}
      {...props}
    >
      {children}
    </div>
  );
}

function useSimpleSwipe(onSwipeLeft, onSwipeRight) {
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;

    if (distance > minSwipeDistance) {
      onSwipeLeft();
    } else if (distance < -minSwipeDistance) {
      onSwipeRight();
    }
  };

  // Mouse support
  const mouseDownX = useRef(null);
  const mouseUpX = useRef(null);
  const isMouseDown = useRef(false);

  const onMouseDown = (e) => {
    isMouseDown.current = true;
    mouseDownX.current = e.clientX;
  };

  const onMouseMove = (e) => {
    if (!isMouseDown.current) return;
    mouseUpX.current = e.clientX;
  };

  const onMouseUp = () => {
    if (!isMouseDown.current) return;
    isMouseDown.current = false;
    if (!mouseDownX.current || mouseUpX.current === null) return;
    const distance = mouseDownX.current - mouseUpX.current;

    if (distance > minSwipeDistance) {
      onSwipeLeft();
    } else if (distance < -minSwipeDistance) {
      onSwipeRight();
    }
  };

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onMouseDown,
    onMouseMove,
    onMouseUp,
  };
}

function App() {
  const [feed, setFeed] = useState([]);
  const [liked, setLiked] = useState([]);
  const [seenTitles, setSeenTitles] = useState(new Set());
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const article = feed[index];

  const handlers = useSimpleSwipe(
    () => handleSkip(article),
    () => handleLike(article)
  );

  useEffect(() => {
    loadFeed();
  }, []);

  const loadFeed = async () => {
    setLoading(true);
    const unusualSample = UNUSUAL_ARTICLES.sort(() => 0.5 - Math.random()).slice(0, 3);
    const unusualResults = await Promise.all(unusualSample.map(fetchSummary));
    const randomResults = await Promise.all(Array(10).fill().map(fetchRandomSummary));
    const allResults = [...unusualResults, ...randomResults].filter(
      (a) => a && a.title && a.extract && a.title !== "Undefined" && !seenTitles.has(a.title)
    );
    const mixed = shuffle(allResults).slice(0, 8);
    setFeed(mixed);
    setIndex(0);
    setLoading(false);
  };

  const fetchSummary = async (title) => {
    try {
      const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`);
      if (!res.ok) return null;
      return await res.json();
    } catch {
      return null;
    }
  };

  const fetchRandomSummary = async () => {
    try {
      const res = await fetch("https://en.wikipedia.org/api/rest_v1/page/random/summary");
      if (!res.ok) return null;
      return await res.json();
    } catch {
      return null;
    }
  };

  const shuffle = (arr) => arr.sort(() => 0.5 - Math.random());

  const markAsSeen = (title) => {
    setSeenTitles((prev) => new Set([...prev, title]));
  };

  const handleLike = (article) => {
    if (!article) return;
    setLiked((prev) => [...prev, article]);
    markAsSeen(article.title);
    next();
  };

  const handleSkip = (article) => {
    if (!article) return;
    markAsSeen(article.title);
    next();
  };

  const next = () => {
    if (index + 1 < feed.length) {
      setIndex(index + 1);
    } else {
      loadFeed();
    }
  };

  if (loading) {
    return <div style={styles.loading}>Loading...</div>;
  }

  if (!article) {
    return (
      <div style={styles.loading}>
        <button
          onClick={loadFeed}
          style={{ ...styles.nextButton, color: "#3b82f6", fontWeight: "700" }}
        >
          Load articles
        </button>
      </div>
    );
  }

  return (
    <div
      style={styles.container}
      onTouchStart={handlers.onTouchStart}
      onTouchMove={handlers.onTouchMove}
      onTouchEnd={handlers.onTouchEnd}
      onMouseDown={handlers.onMouseDown}
      onMouseMove={handlers.onMouseMove}
      onMouseUp={handlers.onMouseUp}
    >
      <div style={styles.inner}>
        <header style={styles.header}>
          <h1 style={styles.title}>WikiCrack</h1>
          <p style={styles.subtitle}>{liked.length} articles saved</p>
        </header>

        <Hoverable style={styles.article} hoverStyle={styles.articleHover}>
          <h2 style={styles.articleTitle}>{article.title}</h2>
          <p style={styles.articleText}>{article.extract}</p>
          <div style={styles.buttonContainer}>
            <button
              onClick={() => handleLike(article)}
              style={styles.saveButton}
              aria-label={`Save ${article.title}`}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = baseColors.redHover)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = baseColors.red)}
            >
              ♥ Save
            </button>
            <button
              onClick={() => handleSkip(article)}
              style={styles.nextButton}
              aria-label="Next article"
              onMouseEnter={(e) => (e.currentTarget.style.color = baseColors.grayTextHover)}
              onMouseLeave={(e) => (e.currentTarget.style.color = baseColors.grayText)}
            >
              Next →
            </button>
            <a
              href={`https://en.wikipedia.org/wiki/${encodeURIComponent(article.title)}`}
              target="_blank"
              rel="noreferrer"
              style={styles.linkButton}
              aria-label={`Open Wikipedia article for ${article.title}`}
              onMouseEnter={(e) => (e.currentTarget.style.color = baseColors.linkGrayHover)}
              onMouseLeave={(e) => (e.currentTarget.style.color = baseColors.linkGray)}
            >
              ↗
            </a>
          </div>
        </Hoverable>

        <div style={styles.progress}>
          Article {index + 1} of {feed.length}
        </div>

        {liked.length > 0 && (
          <div style={styles.savedList}>
            <h3 style={styles.savedTitle}>Saved Articles</h3>
            {liked.map((item, i) => (
              <div key={i} style={styles.savedItem}>
                <a
                  href={`https://en.wikipedia.org/wiki/${encodeURIComponent(item.title)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.title}
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
