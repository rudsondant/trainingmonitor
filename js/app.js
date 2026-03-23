/* ============================
   js/app.js
============================ */
const App = {
  init() {
    UI.applyTheme(Storage.getTheme());
    this.render();
    this.bindGlobalEvents();
  },

  render() {
    const state = State.get();
    UI.renderStats(WORKOUT_CONFIG, state);
    UI.renderApp(WORKOUT_CONFIG, state);
    this.bindDynamicEvents();
  },

  bindGlobalEvents() {
    document.getElementById('expandAllBtn').addEventListener('click', () => {
      const state = State.get();
      state.openDays = {};
      WORKOUT_CONFIG.forEach((_, idx) => {
        state.openDays[idx] = true;
      });
      State.set(state);
      this.render();
    });

    document.getElementById('collapseAllBtn').addEventListener('click', () => {
      const state = State.get();
      state.openDays = {};
      WORKOUT_CONFIG.forEach((_, idx) => {
        state.openDays[idx] = false;
      });
      State.set(state);
      this.render();
    });

    document.getElementById('clearAllBtn').addEventListener('click', () => {
      const confirmed = confirm('Deseja limpar todas as marcações, cargas e observações?');
      if (!confirmed) return;
      State.reset();
      this.render();
    });

    document.getElementById('themeToggleBtn').addEventListener('click', () => {
      const currentTheme = Storage.getTheme();
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      Storage.saveTheme(nextTheme);
      UI.applyTheme(nextTheme);
    });

    document.getElementById('exportBtn').addEventListener('click', () => {
      window.print();
    });
  },

  bindDynamicEvents() {
    document.querySelectorAll('.day-header').forEach(header => {
      header.addEventListener('click', (e) => {
        if (e.target.closest('input') || e.target.closest('textarea')) return;
        const card = header.closest('.day-card');
        const dayIndex = card.dataset.day;
        const state = State.get();
        state.openDays = state.openDays || {};
        state.openDays[dayIndex] = !state.openDays[dayIndex];
        State.set(state);
        this.render();
      });
    });

    document.querySelectorAll('input[type="checkbox"][data-key]').forEach(input => {
      input.addEventListener('change', (e) => {
        const state = State.get();
        state[e.target.dataset.key] = e.target.checked;
        State.set(state);
        this.render();
      });
    });

    document.querySelectorAll('input[type="number"][data-key], textarea[data-key]').forEach(el => {
      el.addEventListener('input', (e) => {
        const state = State.get();
        state[e.target.dataset.key] = e.target.value;
        State.set(state);
        UI.renderStats(WORKOUT_CONFIG, state);
      });
    });
  }
};

App.init();
