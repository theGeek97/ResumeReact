import { useState } from 'react';
import photo from './assets/profile.jpg';
import {
  flowSources, profile, stats, about, jobs, results, certs, education, nav,
  info, rings, checklist, services,
} from './data.js';

const printPage = () => window.print();

function Ring({ pct, text, label }) {
  const c = 2 * Math.PI * 22;
  return (
    <div className="ring">
      <svg viewBox="0 0 56 56" role="img" aria-label={`${text} ${label}`}>
        <circle className="track" cx="28" cy="28" r="22" fill="none" strokeWidth="3" />
        <circle className="bar" cx="28" cy="28" r="22" fill="none" strokeWidth="3" strokeLinecap="round"
          strokeDasharray={`${(c * pct) / 100} ${c}`} transform="rotate(-90 28 28)" />
        <text x="28" y="31.5">{text}</text>
      </svg>
      {label}
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="side">
      <div className="profile">
        <div className="avatar"><img src={photo} alt={profile.name} width="90" height="90" /></div>
        <h1>{profile.name}</h1>
        <p>{profile.title}</p>
      </div>
      <hr className="rule" />
      <dl className="info">
        {info.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
      </dl>
      <hr className="rule" />
      <div className="rings">
        {rings.map(([pct, text, label]) => <Ring key={label} pct={pct} text={text} label={label} />)}
      </div>
      <hr className="rule" />
      <ul className="check">{checklist.map((c) => <li key={c}>{c}</li>)}</ul>
      <hr className="rule" />
      <button className="dl no-print" type="button" onClick={printPage}>Save as PDF ↓</button>
      <div className="social">
        <a href={profile.linkedin} rel="noopener" aria-label="LinkedIn">in</a>
        <a href={`mailto:${profile.email}`} aria-label="Email">
          <svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
        </a>
        <a href={`tel:${profile.phone}`} aria-label="Phone">
          <svg viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></svg>
        </a>
      </div>
    </aside>
  );
}

function Flow() {
  const [i, setI] = useState(0);
  const [run, setRun] = useState(0);
  const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ys = flowSources.map((_, n) => 30 + n * 54);
  const route = (n) => `M98 ${ys[n]} C126 ${ys[n]} 126 115 150 115`;
  const pick = (n) => { setI(n); setRun((r) => r + 1); };
  return (
    <figure className="flow" style={{ margin: 0 }}>
      <div className="hint">Click a source system</div>
      <svg viewBox="0 0 360 230" aria-label="Interactive diagram: pick a source system to follow a request through a Mule application to APIs and consumers">
        {flowSources.map((s, n) => <path key={s.name} className={'wire' + (n === i ? ' on' : '')} d={route(n)} />)}
        <path className="wire on" d="M220 115 H262" />
        <rect className="node core" x="150" y="70" width="70" height="90" rx="12" />
        <text className="lbl on" x="185" y="111">Mule 4</text><text className="lbl on" x="185" y="128">DataWeave</text>
        <rect className="node" x="262" y="85" width="90" height="60" rx="10" />
        <text className="lbl" x="307" y="112">APIs &amp;</text><text className="lbl" x="307" y="128">consumers</text>
        {flowSources.map((s, n) => (
          <g key={s.name} className={'src' + (n === i ? ' on' : '')} role="button" tabIndex={0} aria-pressed={n === i}
            onClick={() => pick(n)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(n); } }}>
            <rect x="8" y={ys[n] - 18} width="90" height="36" rx="8" />
            <text x="53" y={ys[n] + 4}>{s.name}</text>
          </g>
        ))}
        {!reduce && (
          <circle key={run} r="5" className="packet">
            <animateMotion dur="1.8s" fill="freeze" path={`${route(i)} L262 115`} />
          </circle>
        )}
      </svg>
      <figcaption aria-live="polite"><b>{flowSources[i].name}</b> {flowSources[i].text}</figcaption>
    </figure>
  );
}

function ListCard({ title, items }) {
  return (
    <div>
      <h2 className="sec">{title}</h2>
      <ul className="plain card">
        {items.map(([name, detail]) => <li key={name}>{name}<small>{detail}</small></li>)}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <nav className="topbar" aria-label="Primary">
          <ul>{nav.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ul>
        </nav>
        <main id="top">
          <div className="hero">
            <div>
              <h2>I build the APIs that connect enterprise systems.</h2>
              <p className="code"><b>&lt;code&gt;</b> Legacy in. APIs out. 99.95% uptime. <b>&lt;/code&gt;</b></p>
              <a className="btn" href="#contact">Get in touch</a>
            </div>
            <Flow />
          </div>

          <dl className="stats">
            {stats.map(([v, l]) => <div key={l}><dt>{v}</dt><dd>{l}</dd></div>)}
          </dl>

          <section id="about">
            <h2 className="sec">About</h2>
            <div className="card">{about.map((p) => <p key={p} style={{ color: 'var(--muted)', marginBottom: '.8rem' }}>{p}</p>)}</div>
          </section>

          <section id="services">
            <h2 className="sec">What I do</h2>
            <div className="cards">
              {services.map(([title, text, href, cta]) => (
                <div className="card" key={title}>
                  <h3>{title}</h3><p>{text}</p>
                  <a className="more" href={href}>{cta} ›</a>
                </div>
              ))}
            </div>
          </section>

          <section id="experience">
            <h2 className="sec">Experience</h2>
            {jobs.map((j) => (
              <article className="card job" key={j.title + j.when}>
                <header>
                  <div><h3>{j.title}</h3><div className="org">{j.org}</div></div>
                  <div className="when">{j.when}</div>
                </header>
                <ul>{j.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
              </article>
            ))}
          </section>

          <section id="results">
            <h2 className="sec">Results</h2>
            <div className="scroll">
              <table className="results">
                <thead><tr><th scope="col">Measure</th><th scope="col">Before</th><th scope="col">After</th></tr></thead>
                <tbody>
                  {results.map(([m, b, a]) => <tr key={m}><th scope="row">{m}</th><td>{b}</td><td>{a}</td></tr>)}
                </tbody>
              </table>
            </div>
          </section>

          <section id="credentials" className="two">
            <ListCard title="Certifications" items={certs} />
            <ListCard title="Education" items={education} />
          </section>

          <section id="contact" className="contact">
            <h2 className="sec">Contact</h2>
            <div className="card">
              <a className="big" href={`mailto:${profile.email}`}>{profile.email}</a>
              <ul>
                <li><a href={`tel:${profile.phone}`}>{profile.phoneDisplay}</a></li>
                <li><a href={profile.linkedin} rel="noopener">LinkedIn</a></li>
                <li>{profile.location}</li>
              </ul>
              <button className="btn no-print" type="button" onClick={printPage}>Save résumé as PDF</button>
            </div>
          </section>
        </main>
        <footer>© {new Date().getFullYear()} {profile.name}</footer>
      </div>
    </div>
  );
}
