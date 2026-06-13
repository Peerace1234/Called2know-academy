import { useState } from "react";
import "./App.css";

const modules = [
  {
    title: "Academic Discipleship",
    text: "Learn why study is worship, why your mind is a talent, and why your course can become a platform for serving God.",
  },
  {
    title: "Daniel Pods",
    text: "Join small accountability groups where Christian students pray, study, check in, and grow together.",
  },
  {
    title: "Upper Room Study Hall",
    text: "Participate in focused study sprints mixed with prayer, reflection, and academic accountability.",
  },
  {
    title: "The Art of Passing Exams",
    text: "Learn examiner psychology, exam strategy, clarity, integrity, and how to handle pressure during exams.",
  },
  {
    title: "Integrity Pledge",
    text: "Commit to honest preparation, honest writing, honest research, and refusal of cheating or shortcuts.",
  },
  {
    title: "Course-to-Kingdom",
    text: "Discover how your discipline can solve real human problems and become a field of kingdom service.",
  },
];

const programs = [
  {
    title: "7-Day Academic Awakening",
    audience: "For students who need to understand why academics matters to God.",
    lessons: [
      "My mind belongs to God",
      "My course is not secular",
      "My degree is my pulpit",
      "Excellence is love",
      "Discipline is worship",
      "Integrity is witness",
      "My field is my mission",
    ],
  },
  {
    title: "30-Day Daniel Discipline Challenge",
    audience: "For students who need structure, consistency, discipline, and accountability.",
    lessons: [
      "Theology of study",
      "Building study rhythms",
      "Exam and assignment mastery",
      "Service through academic excellence",
    ],
  },
  {
    title: "The Art of Passing Exams",
    audience: "For students preparing for tests, exams, carryovers, and academic recovery.",
    lessons: [
      "The psychology of the examiner",
      "The pressure on the examiner",
      "Exam as strategic battle",
      "How to show understanding",
      "Why you should not cheat",
      "The power of teaching others",
      "How to predict your teacher",
      "What to do after exams",
      "How to handle blank-outs",
    ],
  },
  {
    title: "Failure Is Not Final",
    audience: "For students who failed a course or feel overwhelmed by academic shame.",
    lessons: [
      "I failed a course, not my destiny",
      "Conviction is not condemnation",
      "What failed: me or my system?",
      "How to rebuild after failure",
      "How to study a course you once failed",
      "From shame to testimony",
    ],
  },
];

const fields = [
  {
    name: "Engineering",
    description:
      "Engineering serves God by creating safe systems, infrastructure, tools, energy solutions, and technologies that improve human life.",
    problems: [
      "Electricity access",
      "Clean water systems",
      "Safe buildings",
      "Affordable medical devices",
      "Communication systems",
    ],
    formation: [
      "Precision",
      "Patience",
      "Safety consciousness",
      "Systemic thinking",
      "Integrity in calculations",
    ],
  },
  {
    name: "Medicine",
    description:
      "Medicine serves God by participating in healing, compassion, diagnosis, public health, and the preservation of life.",
    problems: [
      "Disease prevention",
      "Maternal health",
      "Mental health",
      "Rural healthcare",
      "Health education",
    ],
    formation: [
      "Compassion",
      "Diligence",
      "Attention to detail",
      "Emotional steadiness",
      "Respect for human life",
    ],
  },
  {
    name: "Law",
    description:
      "Law serves God by promoting justice, protecting the vulnerable, resisting oppression, and defending truth.",
    problems: [
      "Human rights",
      "Corruption",
      "Land disputes",
      "Family justice",
      "Policy reform",
    ],
    formation: [
      "Discernment",
      "Courage",
      "Fairness",
      "Clear reasoning",
      "Love for truth",
    ],
  },
  {
    name: "Computer Science",
    description:
      "Computer science serves God by building tools that improve communication, education, security, truth, and productivity.",
    problems: [
      "Fraud detection",
      "Educational technology",
      "Cybersecurity",
      "Data systems",
      "AI for social good",
    ],
    formation: [
      "Logical thinking",
      "Patience in debugging",
      "Creativity",
      "System design",
      "Ethical responsibility",
    ],
  },
];

const testimonies = [
  {
    name: "Recovered Student",
    title: "I failed a course, but not my destiny",
    text: "I stopped hiding, found a mentor, rebuilt my study rhythm, and passed the course I once feared.",
  },
  {
    name: "Integrity Story",
    title: "I refused exam malpractice",
    text: "Everyone around me was planning shortcuts, but I chose honesty. It strengthened my confidence and my walk with God.",
  },
  {
    name: "Academic Worship",
    title: "I started seeing my course as worship",
    text: "My assignments stopped feeling useless when I realized my discipline could become service to people.",
  },
];

function Header({ activePage, setActivePage }) {
  const navItems = [
    "Home",
    "Start Here",
    "Academics as Worship",
    "Programs",
    "Dashboard",
    "Daniel Pods",
    "Study Hall",
    "Exam Mastery",
    "Course-to-Kingdom",
    "Testimonies",
  ];

  return (
    <header className="site-header">
      <div className="logo" onClick={() => setActivePage("Home")}>
        <span className="logo-mark">C2K</span>
        <div>
          <h1>Called2Know</h1>
          <p>Academy</p>
        </div>
      </div>

      <nav className="nav">
        {navItems.map((item) => (
          <button
            key={item}
            className={activePage === item ? "nav-link active" : "nav-link"}
            onClick={() => setActivePage(item)}
          >
            {item}
          </button>
        ))}
      </nav>
    </header>
  );
}

function Home({ setActivePage }) {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Christian Academic Mentorship</p>
          <h2>Your Degree Is Your Pulpit</h2>
          <p className="hero-text">
            We mentor Christian students to turn academic discipline into
            worship, excellence, resilience, integrity, leadership, and service
            to God and man.
          </p>

          <div className="hero-actions">
            <button
              className="primary-btn"
              onClick={() => setActivePage("Start Here")}
            >
              Start Your Journey
            </button>
            <button
              className="secondary-btn"
              onClick={() => setActivePage("Daniel Pods")}
            >
              Join a Daniel Pod
            </button>
          </div>
        </div>

        <div className="hero-card">
          <h3>Today's Formation Thought</h3>
          <p>
            Academic discipline is not separate from your walk with God. The
            way you read, think, write, research, prepare, and serve can become
            worship.
          </p>
          <div className="mini-stats">
            <div>
              <strong>6</strong>
              <span>Formation Pillars</span>
            </div>
            <div>
              <strong>30</strong>
              <span>Days of Discipline</span>
            </div>
            <div>
              <strong>4–5</strong>
              <span>Students per Pod</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section problem-section">
        <p className="eyebrow">The Problem</p>
        <h2>Many Christian students love God but struggle academically</h2>

        <div className="grid five-grid">
          {[
            "The sacred-secular lie",
            "Academic lethargy",
            "Exam fear and failure",
            "Cheating culture",
            "No link between course and calling",
          ].map((item) => (
            <div className="card" key={item}>
              <h3>{item}</h3>
              <p>
                Called2Know helps students confront this issue through teaching,
                accountability, discipline, and practical mentorship.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Our Solution</p>
        <h2>We build academic disciples, not just better students</h2>

        <div className="grid four-grid">
          <div className="card accent">
            <h3>Theology of Study</h3>
            <p>Study becomes worship when done with faith and humility.</p>
          </div>
          <div className="card accent">
            <h3>Discipline of Excellence</h3>
            <p>Students learn habits, structure, planning, and exam wisdom.</p>
          </div>
          <div className="card accent">
            <h3>Integrity of Witness</h3>
            <p>Students reject cheating, plagiarism, and dishonest shortcuts.</p>
          </div>
          <div className="card accent">
            <h3>Service Through Mastery</h3>
            <p>Students connect their courses to real problems and service.</p>
          </div>
        </div>
      </section>

      <section className="section journey">
        <p className="eyebrow">Transformation Path</p>
        <h2>From lethargy to life mission</h2>

        <div className="journey-line">
          {["Awaken", "Repent", "Discipline", "Excel", "Serve", "Mentor"].map(
            (step, index) => (
              <div className="journey-step" key={step}>
                <span>{index + 1}</span>
                <h3>{step}</h3>
              </div>
            )
          )}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Core Modules</p>
        <h2>Everything needed to grow academically and spiritually</h2>
        <div className="grid three-grid">
          {modules.map((module) => (
            <div className="card module-card" key={module.title}>
              <h3>{module.title}</h3>
              <p>{module.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function StartHere({ setActivePage }) {
  const paths = [
    ["I am struggling with laziness", "7-Day Academic Awakening"],
    ["I failed a course", "Failure Is Not Final"],
    ["I want to improve my CGPA", "Academic Excellence Pathway"],
    ["I am tempted to cheat", "Integrity Pledge"],
    ["I do not see the purpose of my course", "Course-to-Kingdom"],
    ["I want mentorship", "Daniel Pods"],
  ];

  return (
    <main className="page">
      <section className="section page-intro">
        <p className="eyebrow">Start Here</p>
        <h2>Welcome to Academic Discipleship</h2>
        <p>
          This platform helps you stop separating your walk with God from your
          academic life. You are called to pray, worship, think, study, design,
          research, solve, build, and serve with excellence.
        </p>
      </section>

      <section className="section">
        <h2>Choose your current situation</h2>
        <div className="grid three-grid">
          {paths.map(([problem, path]) => (
            <div className="card" key={problem}>
              <h3>{problem}</h3>
              <p>Recommended pathway: {path}</p>
              <button
                className="small-btn"
                onClick={() =>
                  path.includes("Course")
                    ? setActivePage("Course-to-Kingdom")
                    : path.includes("Daniel")
                    ? setActivePage("Daniel Pods")
                    : setActivePage("Programs")
                }
              >
                Open Pathway
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="section commitment">
        <h2>The 5 Commitments</h2>
        <ol>
          <li>I will see my studies as worship.</li>
          <li>I will prepare diligently and not presume on grace.</li>
          <li>I will reject cheating and academic dishonesty.</li>
          <li>I will connect my course to service.</li>
          <li>I will eventually mentor others.</li>
        </ol>
      </section>
    </main>
  );
}

function AcademicsAsWorship() {
  return (
    <main className="page">
      <section className="section page-intro">
        <p className="eyebrow">Theological Foundation</p>
        <h2>God Is Lord of the Classroom Too</h2>
        <p>
          Academic excellence is not a distraction from God. It is one of the
          ways a Christian student stewards the mind, pursues truth, loves
          people, and prepares for faithful service.
        </p>
      </section>

      <section className="section">
        <div className="grid two-grid">
          <div className="card">
            <h3>The Mind Is a Talent</h3>
            <p>
              Your intelligence, curiosity, memory, imagination, and reasoning
              ability are gifts to be cultivated, not buried.
            </p>
          </div>
          <div className="card">
            <h3>All Truth Belongs to God</h3>
            <p>
              Mathematics, engineering, medicine, law, economics, and art are
              not outside God's concern.
            </p>
          </div>
          <div className="card">
            <h3>Study Can Be Worship</h3>
            <p>
              When done with humility, diligence, integrity, and service,
              academic work becomes an offering to God.
            </p>
          </div>
          <div className="card">
            <h3>Excellence Is Love</h3>
            <p>
              People can be harmed by careless work. Excellence prepares you to
              serve others responsibly.
            </p>
          </div>
        </div>
      </section>

      <section className="section teaching-series">
        <h2>Four-Week Teaching Series</h2>
        <div className="timeline">
          <div>
            <span>Week 1</span>
            <h3>Your Brain Is a Talent</h3>
            <p>Intellect as stewardship.</p>
          </div>
          <div>
            <span>Week 2</span>
            <h3>Daniel vs Babylon</h3>
            <p>Prayer plus rigorous learning.</p>
          </div>
          <div>
            <span>Week 3</span>
            <h3>Truth for a Broken World</h3>
            <p>Knowledge as service to human problems.</p>
          </div>
          <div>
            <span>Week 4</span>
            <h3>Grace + Effort</h3>
            <p>Grace empowers disciplined action.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

function Programs() {
  return (
    <main className="page">
      <section className="section page-intro">
        <p className="eyebrow">Programs</p>
        <h2>Guided pathways for academic and spiritual formation</h2>
        <p>
          Each program is designed to move students from lethargy, shame, fear,
          and confusion into discipline, excellence, purpose, and service.
        </p>
      </section>

      <section className="section">
        <div className="grid two-grid">
          {programs.map((program) => (
            <div className="card program-card" key={program.title}>
              <h3>{program.title}</h3>
              <p>{program.audience}</p>
              <ul>
                {program.lessons.map((lesson) => (
                  <li key={lesson}>{lesson}</li>
                ))}
              </ul>
              <button className="small-btn">Start Program</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function Dashboard() {
  const [checkIn, setCheckIn] = useState({
    course: "",
    topic: "",
    reason: "",
    distraction: "",
    score: "3",
  });

  function updateField(e) {
    setCheckIn({
      ...checkIn,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <main className="page dashboard-page">
      <section className="section page-intro">
        <p className="eyebrow">Student Dashboard</p>
        <h2>Welcome back. How will you worship God with your mind today?</h2>
      </section>

      <section className="dashboard-grid">
        <div className="panel large-panel">
          <h3>Today's Mind + Spirit Check-In</h3>

          <label>
            What course will you study today?
            <input
              name="course"
              value={checkIn.course}
              onChange={updateField}
              placeholder="Example: Circuit Theory"
            />
          </label>

          <label>
            What topic will you focus on?
            <input
              name="topic"
              value={checkIn.topic}
              onChange={updateField}
              placeholder="Example: Thevenin theorem"
            />
          </label>

          <label>
            Why does this matter to God?
            <textarea
              name="reason"
              value={checkIn.reason}
              onChange={updateField}
              placeholder="Connect today's study to worship, service, or future usefulness."
            />
          </label>

          <label>
            What distraction must you resist today?
            <input
              name="distraction"
              value={checkIn.distraction}
              onChange={updateField}
              placeholder="Example: Social media, sleepiness, procrastination"
            />
          </label>

          <label>
            Stewardship score today: {checkIn.score}/5
            <input
              type="range"
              min="1"
              max="5"
              name="score"
              value={checkIn.score}
              onChange={updateField}
            />
          </label>

          <button className="primary-btn">Submit Check-In</button>
        </div>

        <div className="panel">
          <h3>Today's Study Plan</h3>
          <p>
            Course: <strong>{checkIn.course || "Not set"}</strong>
          </p>
          <p>
            Topic: <strong>{checkIn.topic || "Not set"}</strong>
          </p>
          <p>
            Output: Solve examples, summarize, and teach one person.
          </p>
        </div>

        <div className="panel">
          <h3>Daniel Pod</h3>
          <p>Pod: Engineering Daniel Pod A</p>
          <p>Members checked in today: 3/5</p>
          <button className="small-btn">I am praying for my pod</button>
        </div>

        <div className="panel">
          <h3>Discipline Streak</h3>
          <div className="streak-number">12</div>
          <p>days of study check-ins</p>
        </div>

        <div className="panel">
          <h3>This Week's Formation Focus</h3>
          <p>
            Perseverance when study becomes boring. Boredom is not proof that
            God is absent; sometimes it is the gym where endurance is trained.
          </p>
        </div>
      </section>
    </main>
  );
}

function DanielPods() {
  return (
    <main className="page">
      <section className="section page-intro">
        <p className="eyebrow">Daniel Pods</p>
        <h2>Small groups for academic discipleship</h2>
        <p>
          A Daniel Pod is a group of 4–5 Christian students committed to prayer,
          study, accountability, integrity, and excellence.
        </p>
      </section>

      <section className="section">
        <div className="grid two-grid">
          <div className="card">
            <h3>Weekly Pod Rhythm</h3>
            <ul>
              <li>Monday: Set academic and spiritual goals.</li>
              <li>Tuesday–Thursday: Daily check-in and prayer support.</li>
              <li>Friday: Teach one concept to the group.</li>
              <li>Saturday: Study sprint or review session.</li>
              <li>Sunday: Academic testimony and reflection.</li>
            </ul>
          </div>

          <div className="card">
            <h3>Pod Rules</h3>
            <ul>
              <li>No mockery of struggling students.</li>
              <li>No cheating support.</li>
              <li>No malpractice materials.</li>
              <li>Every member teaches something small weekly.</li>
              <li>Excellence must remain humble.</li>
            </ul>
          </div>
        </div>

        <div className="pod-form">
          <h3>Join a Pod</h3>
          <input placeholder="Full name" />
          <input placeholder="Department" />
          <input placeholder="Level" />
          <select>
            <option>Choose your main need</option>
            <option>Consistency</option>
            <option>Exam preparation</option>
            <option>Failed course recovery</option>
            <option>Course-to-calling clarity</option>
          </select>
          <button className="primary-btn">Request Pod Placement</button>
        </div>
      </section>
    </main>
  );
}

function StudyHall() {
  return (
    <main className="page">
      <section className="section page-intro">
        <p className="eyebrow">Upper Room Study Hall</p>
        <h2>Study together. Pray together. Grow together.</h2>
        <p>
          Defeat isolation and lethargy through live study sprints mixed with
          prayer and reflection.
        </p>
      </section>

      <section className="section study-hall-layout">
        <div className="timer-card">
          <h3>Current Study Sprint</h3>
          <div className="timer">25:00</div>
          <p>Focus deeply. Study as worship.</p>
          <button className="primary-btn">Join Live Room</button>
        </div>

        <div className="card">
          <h3>Weekly Schedule</h3>
          <ul>
            <li>Monday: General Study Hall</li>
            <li>Tuesday: Engineering and Science</li>
            <li>Wednesday: Medical and Health Sciences</li>
            <li>Thursday: Law, Arts, and Education</li>
            <li>Friday: Exam Preparation</li>
            <li>Saturday: Carryover Recovery Clinic</li>
          </ul>
        </div>

        <div className="card">
          <h3>Reflection Prompt</h3>
          <p>What did I understand better?</p>
          <p>What confused me?</p>
          <p>How did this session honor God?</p>
          <p>Who can I teach this to?</p>
        </div>
      </section>
    </main>
  );
}

function ExamMastery() {
  return (
    <main className="page">
      <section className="section page-intro">
        <p className="eyebrow">Exam Mastery</p>
        <h2>Pass exams with wisdom, integrity, and strategy</h2>
        <p>
          Learn how to prepare, answer clearly, understand examiner
          expectations, avoid panic, and refuse malpractice.
        </p>
      </section>

      <section className="section">
        <div className="grid three-grid">
          {[
            "Understand the examiner",
            "Read instructions carefully",
            "Start with your best question",
            "Show understanding clearly",
            "Refuse cheating",
            "Handle blank-outs calmly",
          ].map((item) => (
            <div className="card" key={item}>
              <h3>{item}</h3>
              <p>
                This lesson trains students to approach exams with preparation,
                confidence, clarity, and integrity.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section checklist">
        <h2>Exam Hall Checklist</h2>
        <div className="checklist-grid">
          {[
            "I prayed without presumption.",
            "I read all instructions.",
            "I chose my best question first.",
            "I allocated time wisely.",
            "I avoided panic.",
            "I wrote clearly.",
            "I showed method.",
            "I answered subparts together.",
            "I refused malpractice.",
          ].map((item) => (
            <label key={item}>
              <input type="checkbox" />
              {item}
            </label>
          ))}
        </div>
      </section>
    </main>
  );
}

function CourseToKingdom() {
  const [selectedField, setSelectedField] = useState(fields[0]);

  return (
    <main className="page">
      <section className="section page-intro">
        <p className="eyebrow">Course-to-Kingdom</p>
        <h2>Your course can become a field of service</h2>
        <p>
          Choose your discipline and see how academic excellence can become
          worship, service, problem-solving, and kingdom influence.
        </p>
      </section>

      <section className="section course-layout">
        <div className="field-list">
          {fields.map((field) => (
            <button
              key={field.name}
              className={
                selectedField.name === field.name
                  ? "field-button active"
                  : "field-button"
              }
              onClick={() => setSelectedField(field)}
            >
              {field.name}
            </button>
          ))}
        </div>

        <div className="field-detail">
          <h3>{selectedField.name}</h3>
          <p>{selectedField.description}</p>

          <div className="grid two-grid">
            <div className="card">
              <h4>Kingdom Problems</h4>
              <ul>
                {selectedField.problems.map((problem) => (
                  <li key={problem}>{problem}</li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h4>Spiritual Formation</h4>
              <ul>
                {selectedField.formation.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="service-challenge">
            <h4>Service Challenge</h4>
            <p>
              Identify one problem in your campus, church, department, or
              community that your discipline can help solve. Write a one-page
              kingdom service proposal.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function Testimonies() {
  return (
    <main className="page">
      <section className="section page-intro">
        <p className="eyebrow">Academic Testimonies</p>
        <h2>Let academic faithfulness become visible</h2>
        <p>
          We celebrate not only spiritual testimonies, but also testimonies of
          discipline, recovery, integrity, discovery, and academic growth.
        </p>
      </section>

      <section className="section">
        <div className="grid three-grid">
          {testimonies.map((testimony) => (
            <div className="card testimony-card" key={testimony.title}>
              <p className="testimony-name">{testimony.name}</p>
              <h3>{testimony.title}</h3>
              <p>{testimony.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section testimony-form">
        <h2>Share Your Testimony</h2>
        <input placeholder="Your name" />
        <input placeholder="Testimony title" />
        <select>
          <option>Choose category</option>
          <option>I overcame laziness</option>
          <option>I stopped cheating</option>
          <option>I passed a failed course</option>
          <option>I improved my CGPA</option>
          <option>I found purpose in my course</option>
          <option>I saw God in my research</option>
        </select>
        <textarea placeholder="Write your testimony..." />
        <button className="primary-btn">Submit Testimony</button>
      </section>
    </main>
  );
}

function App() {
  const [activePage, setActivePage] = useState("Home");

  function renderPage() {
    switch (activePage) {
      case "Home":
        return <Home setActivePage={setActivePage} />;
      case "Start Here":
        return <StartHere setActivePage={setActivePage} />;
      case "Academics as Worship":
        return <AcademicsAsWorship />;
      case "Programs":
        return <Programs />;
      case "Dashboard":
        return <Dashboard />;
      case "Daniel Pods":
        return <DanielPods />;
      case "Study Hall":
        return <StudyHall />;
      case "Exam Mastery":
        return <ExamMastery />;
      case "Course-to-Kingdom":
        return <CourseToKingdom />;
      case "Testimonies":
        return <Testimonies />;
      default:
        return <Home setActivePage={setActivePage} />;
    }
  }

  return (
    <div className="app">
      <Header activePage={activePage} setActivePage={setActivePage} />
      {renderPage()}

      <footer className="footer">
        <div>
          <h3>Called2Know Academy</h3>
          <p>
            Discipling the Christian student's mind for excellence, purpose,
            and service.
          </p>
        </div>

        <p className="footer-note">
          Your mind is a talent. Your course is a field. Your excellence can
          become service.
        </p>
      </footer>
    </div>
  );
}

export default App;
