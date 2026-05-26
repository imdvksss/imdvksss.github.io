// Main app
const { useState: uS, useEffect: uE } = React;

function App() {
  const [lang, setLang] = uS(() => localStorage.getItem('vy_lang') || 'ru');
  const [active, setActive] = uS('hero');
  const t = window.I18N[lang];

  uE(() => { localStorage.setItem('vy_lang', lang); document.documentElement.lang = lang; }, [lang]);

  uE(() => {
    const ids = ['hero', 'about', 'work', 'projects', 'skills', 'contact'];
    const map = { hero: 'hero', about: 'about', work: 'work', projects: 'work', skills: 'skills', contact: 'contact' };
    const obs = new IntersectionObserver(
      (entries) => {
        // pick the most visible entry
        let best = null;
        entries.forEach((e) => {
          if (e.isIntersecting) {
            if (!best || e.intersectionRatio > best.intersectionRatio) best = e;
          }
        });
        if (best) setActive(map[best.target.id] || best.target.id);
      },
      { threshold: [0.3, 0.5, 0.7] }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const sideSections = [
    { id: 'hero', label: 'Intro' },
    { id: 'about', label: t.nav.about },
    { id: 'work', label: t.nav.work },
    { id: 'skills', label: t.nav.skills },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <>
      <CustomCursor />
      <Nav lang={lang} setLang={setLang} active={active} t={t} />
      <SideIndicator active={active} sections={sideSections} />
      <main>
        <Hero t={t} />
        <About t={t} />
        <Achievements t={t} />
        <Projects t={t} lang={lang} />
        <Skills t={t} />
        <Contact t={t} />
      </main>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
