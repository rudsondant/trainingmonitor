/* ============================
   js/utils.js
============================ */
const Utils = {
  makeSetKey(dayIndex, exerciseIndex, setIndex) {
    return `d${dayIndex}_e${exerciseIndex}_s${setIndex}`;
  },

  makeLoadKey(dayIndex, exerciseIndex) {
    return `d${dayIndex}_e${exerciseIndex}_load`;
  },

  makeNoteKey(dayIndex, exerciseIndex) {
    return `d${dayIndex}_e${exerciseIndex}_note`;
  },

  toggleBodyClass(className) {
    document.body.classList.toggle(className);
  }
};
