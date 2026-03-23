/* ============================
   js/state.js
============================ */
const State = {
  state: Storage.getState(),

  get() {
    return this.state;
  },

  set(newState) {
    this.state = newState;
    Storage.saveState(this.state);
  },

  update(patch) {
    this.state = { ...this.state, ...patch };
    Storage.saveState(this.state);
  },

  reset() {
    this.state = { openDays: {}, theme: Storage.getTheme() };
    Storage.saveState(this.state);
  }
};
