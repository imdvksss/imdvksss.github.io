// Bilingual content
const I18N = {
  ru: {
    nav: { about: 'Обо мне', work: 'Работы', skills: 'Стек', contact: 'Контакт' },
    hero: {
      role: 'Game developer · ВШЭ · 2026',
      name: ['Вадим', 'Янковский'],
      emWord: 'делаю',
      sub: 'Учусь во ВШЭ на «Программирование и инженеринг компьютерных игр». Делаю мобильные игры и Telegram-проекты — от пазлов до настолок-в-боте.',
      metaLeft: 'Москва, RU',
      metaRight: 'Открыт к проектам',
      scroll: 'Скролль вниз',
    },
    about: {
      label: '01 — Кто я',
      title: ['Делаю', 'игры.', 'Учусь', 'делать', 'лучше.'],
      emIndex: 0,
      body: 'Студент НИУ ВШЭ, направление «Программирование и инженеринг компьютерных игр». Кодирую, проектирую механики и довожу идеи до играбельных прототипов — от мобильных пазлов до тематических ботов. Учусь системно: каждый проект — рабочий способ освоить новый стек.',
      facts: [
        { label: 'Университет', value: 'НИУ ВШЭ' },
        { label: 'Направление', value: 'GameDev' },
        { label: 'База', value: 'Москва' },
        { label: 'Статус', value: 'Студент / open' },
      ],
      photoCap: ['№001 — Аватар', 'YYYY.MM'],
    },
    ach: {
      label: '02 — Достижения',
      title: ['То,', 'что', 'уже', 'на', 'счету'],
      emIndex: 4,
      items: [
        {
          tag: 'Mobile · Puzzle',
          name: 'HexaSort — клон',
          desc: 'С нуля воспроизвёл механики популярного мобильного пазла: сортировка гексагональных стопок, генерация уровней, фидбек и анимации. Учебный проект, доведённый до играбельного состояния.',
        },
        {
          tag: 'Telegram · Party',
          name: 'Бункер в Telegram',
          desc: 'Цифровая адаптация настольной игры «Бункер»: раздача карточек, ведение раунда, голосование между игроками. Полноценная игровая сессия внутри чата.',
        },
      ],
    },
    proj: {
      label: '03 — Кейсы',
      title: ['Проекты', 'крупным', 'планом'],
      emIndex: 1,
      items: [
        {
          name: 'HexaSort',
          year: '2025',
          desc: 'Клон-реплика мобильного пазла. Реализован игровой цикл, генерация уровней, анимации стопок, состояние победы/поражения. Цель — пройти весь путь геймплейного программирования: от прототипа механики до полировки.',
          stack: ['Unity', 'C#', 'DOTween', 'URP'],
          meta: [
            { label: 'Роль', value: 'Solo dev' },
            { label: 'Время', value: '~2 мес.' },
            { label: 'Платформа', value: 'Mobile' },
          ],
          visual: 'hex',
        },
        {
          name: 'Бункер · TG',
          year: '2025',
          desc: 'Telegram-версия настольной игры «Бункер»: персонажи, профессии, биология, инвентарь, голосование и логика катастрофы. Поддерживает сессии на компанию игроков прямо в чате.',
          stack: ['Python', 'aiogram', 'SQLite', 'FSM'],
          meta: [
            { label: 'Роль', value: 'Solo dev' },
            { label: 'Время', value: '~1 мес.' },
            { label: 'Платформа', value: 'Telegram' },
          ],
          visual: 'bunker',
        },
      ],
    },
    skills: {
      label: '04 — Стек',
      title: ['Чем', 'работаю'],
      emIndex: 1,
      items: [
        { name: 'C#', cat: 'Language', lvl: 75 },
        { name: 'Unity', cat: 'Engine', lvl: 70 },
        { name: 'Python', cat: 'Language', lvl: 78 },
        { name: 'aiogram', cat: 'Telegram', lvl: 72 },
        { name: 'Git', cat: 'Tools', lvl: 65 },
        { name: 'C++', cat: 'Language', lvl: 50 },
        { name: 'Game design', cat: 'Craft', lvl: 60 },
        { name: 'SQLite', cat: 'Data', lvl: 55 },
      ],
    },
    contact: {
      label: '05 — Связаться',
      title: ['Давай', 'сделаем', 'игру.'],
      emIndex: 2,
      sub: 'Открыт к коллабам, фриланс-задачам, командным проектам, геймджемам и интересным учебным затеям. Пиши — отвечу.',
      links: [
        { plat: 'Telegram', handle: '@imdvksss', href: 'https://t.me/imdvksss' },
        { plat: 'GitHub', handle: 'imdvksss', href: 'https://github.com/imdvksss' },
      ],
      footerL: '© 2026 Yankovsky',
      footerR: 'Made with care, not AI slop',
    },
  },
  en: {
    nav: { about: 'About', work: 'Work', skills: 'Stack', contact: 'Contact' },
    hero: {
      role: 'Game developer · HSE · 2026',
      name: ['Vadim', 'Yankovsky'],
      emWord: 'builds',
      sub: 'Studying Game Programming & Engineering at HSE. Building mobile games and Telegram experiments — from puzzles to board-games-in-a-bot.',
      metaLeft: 'Moscow, RU',
      metaRight: 'Open to work',
      scroll: 'Scroll down',
    },
    about: {
      label: '01 — Who I am',
      title: ['I', 'build', 'games.', 'Learning', 'to build', 'better.'],
      emIndex: 1,
      body: "Student at HSE — Game Programming & Engineering. I code, design mechanics and push ideas all the way to playable prototypes — from mobile puzzles to themed bots. Each project is a deliberate way to pick up a new stack.",
      facts: [
        { label: 'University', value: 'HSE' },
        { label: 'Major', value: 'Game dev' },
        { label: 'Base', value: 'Moscow' },
        { label: 'Status', value: 'Student / open' },
      ],
      photoCap: ['№001 — Avatar', 'YYYY.MM'],
    },
    ach: {
      label: '02 — Wins',
      title: ['Things', "I've", 'shipped', 'so', 'far'],
      emIndex: 2,
      items: [
        {
          tag: 'Mobile · Puzzle',
          name: 'HexaSort clone',
          desc: 'Recreated the mechanics of a popular mobile puzzle from scratch: hex-stack sorting, level generation, feedback, animations. A study project taken all the way to a playable state.',
        },
        {
          tag: 'Telegram · Party',
          name: 'Bunker on Telegram',
          desc: 'A digital adaptation of the board game "Bunker": card dealing, round management, in-chat voting. A full game session inside a Telegram chat.',
        },
      ],
    },
    proj: {
      label: '03 — Cases',
      title: ['Projects,', 'up', 'close'],
      emIndex: 0,
      items: [
        {
          name: 'HexaSort',
          year: '2025',
          desc: 'Replica of a mobile puzzle. Full gameplay loop, level generation, stack animations, win/lose states. The point: walk the whole gameplay-programming path, from prototype to polish.',
          stack: ['Unity', 'C#', 'DOTween', 'URP'],
          meta: [
            { label: 'Role', value: 'Solo dev' },
            { label: 'Time', value: '~2 mo' },
            { label: 'Platform', value: 'Mobile' },
          ],
          visual: 'hex',
        },
        {
          name: 'Bunker · TG',
          year: '2025',
          desc: 'A Telegram port of the "Bunker" board game: characters, profession, biology, inventory, voting and disaster logic. Sessions run inside a chat with a full group.',
          stack: ['Python', 'aiogram', 'SQLite', 'FSM'],
          meta: [
            { label: 'Role', value: 'Solo dev' },
            { label: 'Time', value: '~1 mo' },
            { label: 'Platform', value: 'Telegram' },
          ],
          visual: 'bunker',
        },
      ],
    },
    skills: {
      label: '04 — Stack',
      title: ['Tools', 'I', 'use'],
      emIndex: 0,
      items: [
        { name: 'C#', cat: 'Language', lvl: 75 },
        { name: 'Unity', cat: 'Engine', lvl: 70 },
        { name: 'Python', cat: 'Language', lvl: 78 },
        { name: 'aiogram', cat: 'Telegram', lvl: 72 },
        { name: 'Git', cat: 'Tools', lvl: 65 },
        { name: 'C++', cat: 'Language', lvl: 50 },
        { name: 'Game design', cat: 'Craft', lvl: 60 },
        { name: 'SQLite', cat: 'Data', lvl: 55 },
      ],
    },
    contact: {
      label: '05 — Reach out',
      title: ["Let's", 'make a', 'game.'],
      emIndex: 1,
      sub: "Open to collabs, freelance gigs, team projects, game jams and curious student experiments. Drop a line — I'll reply.",
      links: [
        { plat: 'Telegram', handle: '@imdvksss', href: 'https://t.me/imdvksss' },
        { plat: 'GitHub', handle: 'imdvksss', href: 'https://github.com/imdvksss' },
      ],
      footerL: '© 2026 Yankovsky',
      footerR: 'Made with care, not AI slop',
    },
  },
};

window.I18N = I18N;
