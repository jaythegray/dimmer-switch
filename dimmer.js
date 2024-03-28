const slider = document.querySelector('.slider-input');
const themeKey = 'selectedTheme';

function getThemeName(value) {
    return ['light', 'dim', 'dark'][value];
}

const savedTheme = localStorage.getItem(themeKey);
if (savedTheme !== null) {
    slider.value = savedTheme;
    const themeName = getThemeName(savedTheme);
    switchTheme(themeName);
}

slider.addEventListener('change', function(e) {
    const value = e.target.value;
    const themeName = getThemeName(value);
    localStorage.setItem(themeKey, value);
    switchTheme(themeName);
});

function switchTheme(themeName) {
    document.getElementById('theme-light').disabled = themeName !== 'light';
    document.getElementById('theme-dim').disabled = themeName !== 'dim';
    document.getElementById('theme-dark').disabled = themeName !== 'dark';
}