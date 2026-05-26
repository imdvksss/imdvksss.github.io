// ============== Sections ==============

function Hero({ t }) {
  const blobRef = React.useRef(null);
  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (blobRef.current) blobRef.current.style.transform = `translateY(calc(-50% + ${y * 0.3}px))`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="hero" className="section hero" data-screen-label="01 Hero">
      <div ref={blobRef} className="hero__blob"></div>
      <InView className="hero__inner">
        <div className="hero__role fade-up" style={{ '--d': '0ms' }}>
          <span className="dot"></span>
          {t.hero.role}
        </div>
        <h1 className="hero__name">
          <RevealWords words={[t.hero.name[0]]} baseDelay={140} />
          <br />
          <RevealWords words={[t.hero.name[1]]} baseDelay={280} />
          <span> </span>
          <span className="reveal-word">
            <span className="reveal-word__inner em" style={{ '--d': '460ms', fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: 'var(--accent)' }}>
              — {t.hero.emWord}
            </span>
          </span>
        </h1>
        <p className="hero__sub fade-up" style={{ '--d': '660ms' }}>{t.hero.sub}</p>
        <div className="hero__meta fade-up" style={{ '--d': '820ms' }}>
          <span>{t.hero.metaLeft}</span>
          <span className="div"></span>
          <span>{t.hero.metaRight}</span>
        </div>
        <div className="hero__scroll fade-up" style={{ '--d': '980ms' }}>
          {t.hero.scroll}
          <div className="arrow"></div>
        </div>
      </InView>
    </section>
  );
}

function About({ t }) {
  const photoRef = React.useRef(null);
  React.useEffect(() => {
    const onScroll = () => {
      if (!photoRef.current) return;
      const rect = photoRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const center = rect.top + rect.height / 2 - vh / 2;
      const offset = -center * 0.06;
      photoRef.current.style.transform = `translateY(${offset}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="about" className="section about" data-screen-label="02 About">
      <InView className="about__grid">
        <div>
          <div className="section__label fade-up" style={{ '--d': '0ms' }}>{t.about.label}</div>
          <h2 className="about__title">
            <RevealWords words={t.about.title} emIndex={t.about.emIndex} baseDelay={120} />
          </h2>
          <p className="about__body fade-up" style={{ '--d': '500ms' }}>{t.about.body}</p>
          <div className="about__facts">
            {t.about.facts.map((f, i) => (
              <div key={i} className="fact fade-up" style={{ '--d': `${640 + i * 80}ms` }}>
                <div className="fact__label">{f.label}</div>
                <div className="fact__value">{f.value}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="fade-up" style={{ '--d': '300ms' }}>
          <div ref={photoRef} className="about__photo parallax">
            <img src="assets/photo.jpeg" alt="Vadim" />
            <div className="about__photo__caption">
              <span>{t.about.photoCap[0]}</span>
              <span>{t.about.photoCap[1]}</span>
            </div>
          </div>
        </div>
      </InView>
    </section>
  );
}

function Achievements({ t }) {
  return (
    <section id="work" className="section ach" data-screen-label="03 Achievements">
      <InView>
        <div className="section__label fade-up" style={{ '--d': '0ms' }}>{t.ach.label}</div>
        <h2 className="ach__title">
          <RevealWords words={t.ach.title} emIndex={t.ach.emIndex} baseDelay={120} />
        </h2>
        <div className="ach__list">
          {t.ach.items.map((it, i) => (
            <div key={i} className="ach__row fade-up" style={{ '--d': `${500 + i * 120}ms` }}>
              <div className="ach__num">№ {String(i + 1).padStart(2, '0')}</div>
              <div className="ach__name">{it.name}</div>
              <div className="ach__desc">{it.desc}</div>
              <div className="ach__tag">{it.tag}</div>
            </div>
          ))}
        </div>
      </InView>
    </section>
  );
}

function HexVisual() {
  // hardcoded layout, with colored stack tiles
  const cells = [
    'b1','stack','b2','stack','b3',
    'stack','b2','stack','b4','stack',
    'b3','stack','b1','stack','b2',
    'stack','b4','stack','b3','b1',
  ];
  return (
    <div className="hex-board">
      <div className="hex-grid">
        {cells.map((c, i) => <div key={i} className={`hex ${c}`}></div>)}
      </div>
    </div>
  );
}

function BunkerVisual({ lang }) {
  const ru = lang === 'ru';
  return (
    <div className="bunker-vis">
      <div className="tg-card">
        <div className="tg-card__head"><span>P2</span><span>HP 100</span></div>
        <div className="tg-card__title">{ru ? 'Игрок 2' : 'Player 2'}</div>
        <div className="tg-card__row">{ru ? 'Проф.' : 'Job'} · <b>{ru ? 'Врач' : 'Doctor'}</b></div>
        <div className="tg-card__row">{ru ? 'Биол.' : 'Bio'} · <b>32, ж</b></div>
        <div className="tg-card__row">{ru ? 'Хобби' : 'Hobby'} · <b>{ru ? 'Шахматы' : 'Chess'}</b></div>
      </div>
      <div className="tg-card featured">
        <div className="tg-card__head"><span>P1 · YOU</span><span>HP 100</span></div>
        <div className="tg-card__title">{ru ? 'Игрок 1' : 'Player 1'}</div>
        <div className="tg-card__row">{ru ? 'Проф.' : 'Job'} · <b>{ru ? 'Инженер' : 'Engineer'}</b></div>
        <div className="tg-card__row">{ru ? 'Биол.' : 'Bio'} · <b>24, м</b></div>
        <div className="tg-card__row">{ru ? 'Факт' : 'Fact'} · <b>{ru ? 'Имунитет' : 'Immune'}</b></div>
      </div>
      <div className="tg-card">
        <div className="tg-card__head"><span>P3</span><span>HP 100</span></div>
        <div className="tg-card__title">{ru ? 'Игрок 3' : 'Player 3'}</div>
        <div className="tg-card__row">{ru ? 'Проф.' : 'Job'} · <b>{ru ? 'Пилот' : 'Pilot'}</b></div>
        <div className="tg-card__row">{ru ? 'Биол.' : 'Bio'} · <b>41, м</b></div>
        <div className="tg-card__row">{ru ? 'Фобия' : 'Phobia'} · <b>{ru ? 'Темнота' : 'Dark'}</b></div>
      </div>
    </div>
  );
}

function Projects({ t, lang }) {
  return (
    <section id="projects" className="section projects" data-screen-label="04 Projects">
      <InView>
        <div className="section__label fade-up" style={{ '--d': '0ms' }}>{t.proj.label}</div>
        <h2 className="ach__title">
          <RevealWords words={t.proj.title} emIndex={t.proj.emIndex} baseDelay={120} />
        </h2>
        <div className="projects__list">
          {t.proj.items.map((p, i) => (
            <div key={i} className="project fade-up" style={{ '--d': `${480 + i * 140}ms` }}>
              <div className="project__visual">
                {p.visual === 'hex' ? <HexVisual /> : <BunkerVisual lang={lang} />}
              </div>
              <div className="project__body">
                <div className="project__top">
                  <div className="project__name">{p.name}</div>
                  <div className="project__year">{p.year}</div>
                </div>
                <p className="project__desc">{p.desc}</p>
                <div className="project__stack">
                  {p.stack.map((s, j) => <span key={j} className="chip">{s}</span>)}
                </div>
                <div className="project__meta">
                  {p.meta.map((m, j) => (
                    <div key={j} className="project__meta__item">
                      <div className="project__meta__label">{m.label}</div>
                      <div className="project__meta__value">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </InView>
    </section>
  );
}

function Skills({ t }) {
  return (
    <section id="skills" className="section skills" data-screen-label="05 Skills">
      <InView>
        <div className="section__label fade-up" style={{ '--d': '0ms' }}>{t.skills.label}</div>
        <h2 className="skills__title">
          <RevealWords words={t.skills.title} emIndex={t.skills.emIndex} baseDelay={120} />
        </h2>
        <div className="skills__grid">
          {t.skills.items.map((s, i) => (
            <SkillCard key={s.name} skill={s} delay={400 + i * 80} />
          ))}
        </div>
      </InView>
    </section>
  );
}

function SkillCard({ skill, delay }) {
  const [ref, vis] = useInView(0.3);
  return (
    <div ref={ref} className={`skill fade-up ${vis ? 'is-visible' : ''}`} style={{ '--d': `${delay}ms`, '--lvl': `${skill.lvl}%` }}>
      <div className="skill__name">{skill.name}</div>
      <div className="skill__cat">{skill.cat}</div>
      <div className="skill__bar">
        <div className="skill__bar__fill" style={{ width: vis ? `${skill.lvl}%` : 0, transitionDelay: `${delay + 200}ms` }}></div>
      </div>
      <div className="skill__lvl">
        <span>level</span>
        <span>{skill.lvl}%</span>
      </div>
    </div>
  );
}

function Contact({ t }) {
  return (
    <section id="contact" className="section contact" data-screen-label="06 Contact">
      <InView className="contact__inner">
        <div className="section__label fade-up" style={{ '--d': '0ms', justifyContent: 'center' }}>{t.contact.label}</div>
        <h2 className="contact__title">
          <RevealWords words={t.contact.title} emIndex={t.contact.emIndex} baseDelay={120} />
        </h2>
        <p className="contact__sub fade-up" style={{ '--d': '560ms' }}>{t.contact.sub}</p>
        <div className="contact__links">
          {t.contact.links.map((l, i) => (
            <a key={i} className="cta-link fade-up" href={l.href} target="_blank" rel="noopener" style={{ '--d': `${680 + i * 100}ms` }}>
              <div>
                <span className="cta-link__plat">{l.plat}</span>
                <span className="cta-link__handle">{l.handle}</span>
              </div>
              <span className="cta-link__arrow">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          ))}
        </div>
        <div className="footer fade-up" style={{ '--d': '960ms' }}>
          <span>{t.contact.footerL}</span>
          <span>{t.contact.footerR}</span>
        </div>
      </InView>
    </section>
  );
}

Object.assign(window, { Hero, About, Achievements, Projects, Skills, Contact });
