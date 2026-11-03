import { useState } from 'react'
import { Github, Linkedin, Mail, ArrowUpRight, ArrowDown, Menu, X, Code2, Database, Monitor, ExternalLink, Sparkles } from 'lucide-react'
const profile = {
  name: 'John Dale Javier',
  initials: 'JD',
  role: 'Frontend Developer & Creative Thinker',
  email: 'hello@example.com',
  github: 'https://github.com/',
  linkedin: 'https://www.linkedin.com/',
  location: 'Philippines',
  about: "I'm a passionate developer who enjoys turning ideas into clean, functional, and meaningful digital experiences. I love learning new technologies and building projects that solve real problems.",
}
const projects = [
  {
    number: '01',
    title: 'E-Skwela',
    category: 'Education Platform',
    description: 'An offline-first e-learning concept designed to make educational resources accessible to students with limited internet connectivity.',
    tags: ['React', 'JavaScript', 'Education'],
    icon: '📚',
    gradient: 'purple',
    link: ''
  },

  {
    number: '02',
    title: 'Inventory Management System',
    category: 'Web Application',
    description: 'A stock monitoring and inventory management concept with product tracking, low-stock alerts, and useful reports.',
    tags: ['React', 'Dashboard', 'Inventory'],
    icon: '📦',
    gradient: 'blue',
    link: ''
  },
  {
    number: '03',
    title: 'Personal Portfolio',
    category: 'Website',
    description: 'A modern, responsive portfolio built to showcase my work, technical skills, and journey as a developer.',
    tags: ['React', 'Vite', 'CSS'],
    icon: '💻',
    gradient: 'pink',
    link: ''
  },
]
const skills = [
  {
    icon: <Code2 size={23} />,
    title: 'Frontend',
    items: 'HTML, CSS, JavaScript, React'
  },

  {
    icon: <Database size={23} />,
    title: 'Backend & Data',
    items: 'Node.js, SQL, REST APIs'
  },
  {
    icon: <Monitor size={23} />,
    title: 'Tools & Workflow',
    items: 'Git, GitHub, VS Code, Figma'
  },
]
const links = [{
  label: 'Home',
  href: '#home'
},
{
  label: 'About',
  href: '#about'
},
{
  label: 'Projects',
  href: '#projects'
},
{
  label: 'Skills',
  href: '#skills'
},
{
  label: 'Contact',
  href: '#contact'
}]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return <div className="site">
    <header className="header">
      <div className="container nav">
        <a href="#home" className="logo">
          <span className="logo-mark">&lt;/&gt;</span>
          {profile.name}
          <span className="dot">.</span>
        </a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>{links.map(l => <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
        )}
        </nav>
        <a className="nav-cta" href={`mailto:${profile.email}`}>Let's talk <ArrowUpRight size={16} />
        </a>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />
        }
        </button>
      </div>
    </header>
    <main>
      <section className="hero container" id="home">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="pulse" /> AVAILABLE FOR OPPORTUNITIES</div>
          <p className="intro">Hey there, I'm <span></span>
          </p>
          <h1>{profile.name}<span className="period">.</span>
          </h1>
          <h2>I build <span className="gradient-text">digital experiences</span> that matter.</h2>
          <p className="hero-desc">{profile.role} based in {profile.location}. I create modern, responsive, and user-friendly web experiences with thoughtful design and clean code.</p>
          <div className="hero-actions">
            <a className="btn primary" href="#projects">Explore my work <ArrowUpRight size={18} />
            </a>
            <a className="btn secondary" href={`mailto:${profile.email}`}>Get in touch <Mail size={18} />
            </a>
          </div>
          <div className="socials"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={20} /></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <Mail size={20} /></a><span className="social-rule" />
            <span>FOLLOW MY JOURNEY</span></div></div><div className="hero-art" aria-hidden="true">
          <div className="art-glow" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="art-card">
            <div className="art-top">
              <span />
              <span />
              <span />
            </div>
            <div className="code-lines">
              <div><em>const</em> developer = {'{'}</div><div>&nbsp;&nbsp;name: <strong>'{profile.name}'</strong>,
              </div>
              <div>&nbsp;&nbsp;passion: <strong>'building things'</strong>,</div><div>&nbsp;&nbsp;coffee: <b>true</b>,</div><div>&nbsp;&nbsp;status: <strong>'always learning'</strong></div><div>{'}'};</div></div></div><div className="floating-badge badge-one">✦ Creative coder</div><div className="floating-badge badge-two">⚡ Problem solver</div></div><a href="#about" className="scroll-hint"><ArrowDown size={16} /> SCROLL TO EXPLORE</a></section>
      <section className="section section-alt" id="about"><div className="container about-grid"><div><div className="section-label">01 / ABOUT ME</div><h2 className="section-title">A little about <span>myself.</span></h2><div className="about-visual"><span className="about-symbol">{'{ }'}</span><span className="about-caption">CREATING WITH PURPOSE ✳</span></div></div><div className="about-content"><div className="mini-heading"><Sparkles size={18} /> WHO I AM</div><p>{profile.about}</p><p>For me, development is about more than writing code. It's about creating something useful, making complex things feel simple, and continuously improving along the way.</p><div className="about-facts"><div><span>LOCATION</span><strong>{profile.location}</strong></div><div><span>FOCUS</span><strong>Web Development</strong></div><div><span>INTERESTS</span><strong>Design & Technology</strong></div></div><a className="text-link" href="#contact">Let's connect <ArrowUpRight size={18} /></a></div></div></section>
      <section className="section" id="projects"><div className="container"><div className="section-label">02 / SELECTED WORK</div><div className="section-heading-row"><h2 className="section-title">Featured <span>projects.</span></h2><p>A collection of ideas brought to life through design, code, and curiosity.</p></div><div className="project-grid">{projects.map(p => <article className="project-card" key={p.number}><div className={`project-art ${p.gradient}`}><div className="project-art-inner"><span className="project-icon">{p.icon}</span><span className="project-art-label">{p.category}</span></div><span className="project-number">{p.number}</span></div><div className="project-body"><div className="project-category">{p.category}</div><h3>{p.title}</h3><p>{p.description}</p><div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>{p.link ? <a href={p.link} target="_blank" rel="noreferrer" className="project-link">View project <ExternalLink size={16} /></a> : <span className="project-note">Project showcase</span>}</div></article>)}</div></div></section>
      <section className="section section-alt" id="skills"><div className="container"><div className="section-label">03 / MY TOOLKIT</div><h2 className="section-title">Skills & <span>technologies.</span></h2><p className="skills-intro">The tools and technologies I use to turn ideas into real-world applications.</p><div className="skill-grid">{skills.map(s => <div className="skill-card" key={s.title}><div className="skill-icon">{s.icon}</div><h3>{s.title}</h3><p>{s.items}</p></div>)}</div></div></section>
      <section className="section contact-section" id="contact"><div className="container contact-inner"><div className="section-label">04 / GET IN TOUCH</div><h2>Have an idea?<br /><span>Let's make it happen.</span></h2><p>I'm always open to interesting projects, collaborations, and conversations. Feel free to reach out!</p><a href={`mailto:${profile.email}`} className="btn primary contact-button">Say hello <ArrowUpRight size={20} /></a><div className="contact-email">{profile.email}</div></div></section></main>
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#home" className="logo">
          <span className="logo-mark">&lt;/&gt;</span>
          {profile.name}<span className="dot">.
          </span>
        </a>
        <span>© {new Date().getFullYear()} {profile.name}. Built with React + Vite.</span>
        <a href="#home" className="back-top">Back to top ↑</a></div></footer>
  </div>
}
export default App
