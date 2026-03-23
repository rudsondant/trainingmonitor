/* ============================
   js/ui.js
============================ */
const UI = {
  renderStats(config, state) {
    const statsEl = document.getElementById('stats');
    const stats = Stats.countWorkoutStats(config, state);

    statsEl.innerHTML = `
      <div class="stat-card">
        <div class="stat-label">Progresso geral</div>
        <div class="stat-value">${stats.progress}%</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Séries marcadas</div>
        <div class="stat-value">${stats.checkedSets}</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Exercícios concluídos</div>
        <div class="stat-value">${stats.completedExercises}</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Total de séries</div>
        <div class="stat-value">${stats.totalSets}</div>
      </div>
    `;
  },

  renderApp(config, state) {
    const appEl = document.getElementById('app');

    appEl.innerHTML = config.map((dayData, dayIndex) => {
      const daySets = dayData.exercises.reduce((sum, ex) => sum + ex.sets, 0);
      const checkedDaySets = dayData.exercises.reduce((sum, ex, exerciseIndex) => {
        let count = 0;
        for (let s = 1; s <= ex.sets; s++) {
          if (state[Utils.makeSetKey(dayIndex, exerciseIndex, s)]) count++;
        }
        return sum + count;
      }, 0);

      const dayProgress = daySets ? Math.round((checkedDaySets / daySets) * 100) : 0;
      const isOpen = state.openDays?.[dayIndex] ?? false;

      const warmupHtml = dayData.warmup.map(item => `
        <div class="warmup-item">
          <span>${item.name}</span>
          <strong>${item.reps}</strong>
        </div>
      `).join('');

      const exercisesHtml = dayData.exercises.map((exercise, exerciseIndex) => {
        const loadKey = Utils.makeLoadKey(dayIndex, exerciseIndex);
        const noteKey = Utils.makeNoteKey(dayIndex, exerciseIndex);
        const loadLabel = exercise.loadLabel || 'Carga (kg)';

        const setsHtml = Array.from({ length: exercise.sets }, (_, idx) => {
          const setIndex = idx + 1;
          const setKey = Utils.makeSetKey(dayIndex, exerciseIndex, setIndex);
          const checked = state[setKey] ? 'checked' : '';
          return `
            <label class="set-chip">
              <input type="checkbox" data-key="${setKey}" ${checked} />
              Série ${setIndex}
            </label>
          `;
        }).join('');

        return `
          <div class="exercise-item">
            <div class="exercise-head">
              <div class="exercise-name">${exercise.name}</div>
              <div class="exercise-load">
                <input type="number" min="0" step="0.5" data-key="${loadKey}" value="${state[loadKey] ?? ''}" placeholder="${loadLabel}" />
              </div>
            </div>
            <div class="sets">${setsHtml}</div>
            <div class="exercise-note">
              <textarea data-key="${noteKey}" placeholder="Observações do exercício...">${state[noteKey] ?? ''}</textarea>
            </div>
          </div>
        `;
      }).join('');

      return `
        <section class="day-card ${isOpen ? 'open' : ''}" data-day="${dayIndex}">
          <div class="day-header">
            <div class="day-title">
              <span class="day-name">${dayData.day}</span>
              <span class="day-tag">${dayData.type}</span>
            </div>
            <div class="day-progress">
              <div class="progress-top">
                <span>${checkedDaySets}/${daySets} séries</span>
                <span>${dayProgress}%</span>
              </div>
              <div class="progress-bar">
                <div class="progress-fill" style="width: ${dayProgress}%"></div>
              </div>
            </div>
          </div>
          <div class="day-content">
            <div class="section-title">Aquecimento</div>
            ${warmupHtml}
            <div class="section-title">Treino</div>
            ${exercisesHtml}
          </div>
        </section>
      `;
    }).join('');
  },

  applyTheme(theme) {
    document.body.classList.toggle('dark', theme === 'dark');
  }
};
