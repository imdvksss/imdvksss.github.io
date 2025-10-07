document.addEventListener('DOMContentLoaded', () => {
    const skillItems = document.querySelectorAll('.skill-item');

    // Сохраним исходные тексты уровней
    const originalSkillLevels = {};
    skillItems.forEach(item => {
        const skillName = item.dataset.skill;
        originalSkillLevels[skillName] = item.querySelector('.skill-level').textContent;
    });

    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const skillName = item.dataset.skill;
            const skillLevelSpan = item.querySelector('.skill-level');

            // Добавляем класс для запуска CSS-анимации
            item.classList.add('animate');

            // Меняем текст уровня
            switch (skillName) {
                case 'react':
                    skillLevelSpan.textContent = 'Мастер Компонентов!';
                    break;
                case 'nodejs':
                    skillLevelSpan.textContent = 'Серверный Гуру!';
                    break;
                case 'python':
                    skillLevelSpan.textContent = 'Повелитель Скриптов!';
                    break;
                case 'git':
                    skillLevelSpan.textContent = 'Версионный Архитектор!';
                    break;
                // Добавьте кейсы для других навыков
                default:
                    skillLevelSpan.textContent = 'Уровень: В пути к просветлению';
            }
        });

        item.addEventListener('mouseleave', () => {
            const skillName = item.dataset.skill;
            const skillLevelSpan = item.querySelector('.skill-level');

            // Удаляем класс после задержки, чтобы анимация успела завершиться
            // Длительность задержки должна быть чуть больше длительности самой длинной анимации
            setTimeout(() => {
                item.classList.remove('animate');
            }, 800); // 800ms, так как ReactRotateJump и PythonSlither ~0.8s

            // Возвращаем исходный текст уровня
            skillLevelSpan.textContent = originalSkillLevels[skillName];
        });
    });
});
