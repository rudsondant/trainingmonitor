/* ============================
   js/storage.js
============================ */
const Storage = {
  getState() {
    const raw = localStorage.getItem(APP_CONSTANTS.STORAGE_KEY);
    return raw ? JSON.parse(raw) : { openDays: {}, theme: 'light' };
  },

  saveState(state) {
    localStorage.setItem(APP_CONSTANTS.STORAGE_KEY, JSON.stringify(state));
  },

  clear() {
    localStorage.removeItem(APP_CONSTANTS.STORAGE_KEY);
  },

  getTheme() {
    return localStorage.getItem(APP_CONSTANTS.THEME_KEY) || 'light';
  },

  saveTheme(theme) {
    localStorage.setItem(APP_CONSTANTS.THEME_KEY, theme);
  }
};
