/* ============================
   js/stats.js
============================ */
const Stats = {
  countWorkoutStats(config, state) {
    let totalSets = 0;
    let checkedSets = 0;
    let completedExercises = 0;

    config.forEach((day, dayIndex) => {
      day.exercises.forEach((exercise, exerciseIndex) => {
        let allChecked = true;
        for (let s = 1; s <= exercise.sets; s++) {
          totalSets++;
          if (state[Utils.makeSetKey(dayIndex, exerciseIndex, s)]) {
            checkedSets++;
          } else {
            allChecked = false;
          }
        }
        if (allChecked) completedExercises++;
      });
    });

    const progress = totalSets ? Math.round((checkedSets / totalSets) * 100) : 0;
    return { totalSets, checkedSets, completedExercises, progress };
  }
};
