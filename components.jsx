// Shared components & hooks
const { useState, useEffect, useRef, useCallback } = React;

// ============== Custom cursor ==============
function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);

  useEffect(() => {
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;
    let raf;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      }
    };
    const onDown = () => setPress(true);
    const onUp = () => setPress(false);

    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    const onOver = (e) => {
      const t = e.target;
      if (t.closest && t.closest('a, button, .ach__row, .project, .skill, .cta-link, .nav__item, .lang__opt, .side-indicator__dot')) {
        setHover(true);
      } else {
        setHover(false);
      }
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot"></div>
      <div ref={ringRef} className={`cursor-ring ${hover ? 'hover' : ''} ${press ? 'press' : ''}`}></div>
    </>
  );
}

// ============== Reveal helpers ==============
function useInView(threshold = 0.18) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// Reveal words: pass array of words, returns spans that animate up
function RevealWords({ words, emIndex = -1, baseDelay = 0, step = 70, className = '', visible }) {
  return (
    <span className={className}>
      {words.map((w, i) => (
        <React.Fragment key={i}>
          <span className="reveal-word">
            <span
              className={`reveal-word__inner ${i === emIndex ? 'em' : ''}`}
              style={{ '--d': `${baseDelay + i * step}ms` }}
            >
              {w}
            </span>
          </span>
          {i < words.length - 1 && ' '}
        </React.Fragment>
      ))}
    </span>
  );
}

// Generic in-view wrapper that toggles .is-visible
function InView({ children, className = '', threshold = 0.18, as = 'div', ...rest }) {
  const [ref, vis] = useInView(threshold);
  const Tag = as;
  return (
    <Tag ref={ref} className={`${className} ${vis ? 'is-visible' : ''}`} {...rest}>
      {children}
    </Tag>
  );
}

// ============== Nav ==============
function Nav({ lang, setLang, active, t }) {
  const items = [
    { id: 'about', label: t.nav.about },
    { id: 'work', label: t.nav.work },
    { id: 'skills', label: t.nav.skills },
    { id: 'contact', label: t.nav.contact },
  ];
  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <nav className="nav">
      <div className="nav__logo">
        <b>VY</b> / portfolio
      </div>
      <div className="nav__items">
        {items.map((it) => (
          <button
            key={it.id}
            className={`nav__item ${active === it.id ? 'nav__item--active' : ''}`}
            onClick={() => go(it.id)}
          >
            {it.label}
          </button>
        ))}
      </div>
      <div className="lang">
        <button className={`lang__opt ${lang === 'ru' ? 'lang__opt--active' : ''}`} onClick={() => setLang('ru')}>RU</button>
        <button className={`lang__opt ${lang === 'en' ? 'lang__opt--active' : ''}`} onClick={() => setLang('en')}>EN</button>
      </div>
    </nav>
  );
}

// ============== Side indicator ==============
function SideIndicator({ active, sections }) {
  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <div className="side-indicator">
      {sections.map((s) => (
        <div
          key={s.id}
          className={`side-indicator__dot ${active === s.id ? 'side-indicator__dot--active' : ''}`}
          onClick={() => go(s.id)}
        >
          <span className="side-indicator__label">{s.label}</span>
        </div>
      ))}
    </div>
  );
}

Object.assign(window, { CustomCursor, useInView, RevealWords, InView, Nav, SideIndicator });
