/* ============================
   js/ui.js
============================ */
const UI = {
  elements: {
    stats: document.getElementById("stats"),
    app: document.getElementById("app"),
    weekPicker: document.getElementById("weekPicker"),
    bodyWeightInput: document.getElementById("bodyWeightInput"),
    waistInput: document.getElementById("waistInput"),
    energyInput: document.getElementById("energyInput"),
    sleepInput: document.getElementById("sleepInput"),
    weeklyNotesInput: document.getElementById("weeklyNotesInput")
  },

  applyTheme(theme) {
    document.body.classList.toggle("dark", theme === "dark");
  },

  renderSummaryInputs(state) {
    const summary = state.summary || {};

    this.elements.weekPicker.value = State.currentWeek;
    this.elements.bodyWeightInput.value = summary.bodyWeight || "";
    this.elements.waistInput.value = summary.waist || "";
    this.elements.energyInput.value = summary.energy || "";
    this.elements.sleepInput.value = summary.sleep || "";
    this.elements.weeklyNotesInput.value = summary.notes || "";
  },

  renderStats(config, state) {
    const s = Stats.countWorkoutStats(config, state);

    this.elements.stats.innerHTML = `
      <div class="stat-card">
        <div class="stat-label">Progresso da semana</div>
        <div class="stat-value">${s.weeklyProgress}%</div>
      </div>

      <div class="stat-card">
        <div class="stat-label">Dias concluídos</div>
        <div class="stat-value">${s.completedDays}/${config.length}</div>
      </div>

      <div class="stat-card">
        <div class="stat-label">Exercícios concluídos</div>
        <div class="stat-value">${s.completedExercises}</div>
      </div>

      <div class="stat-card">
        <div class="stat-label">Séries marcadas</div>
        <div class="stat-value">${s.checkedSets}</div>
      </div>
    `;
  },

  renderRehabProtocol(state) {
    const box = document.getElementById("rehabProtocolBox");
    if (!box || typeof REHAB_PROTOCOL === "undefined") return;

    const checked = REHAB_PROTOCOL.filter((_, idx) => state[Utils.makeRehabKey(idx)]).length;
    const total = REHAB_PROTOCOL.length;
    const progress = total ? Math.round((checked / total) * 100) : 0;

    box.innerHTML = `
      <div class="rehab-progress">
        <div class="progress-top">
          <span>Progresso do protocolo</span>
          <span>${checked}/${total}</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width:${progress}%"></div>
        </div>
      </div>

      <div class="rehab-list">
        ${REHAB_PROTOCOL.map((item, idx) => `
          <div class="rehab-item">
            <div class="rehab-top">
              <div>
                <div class="rehab-name">${item.name}</div>
                <div class="rehab-reps">${item.reps}</div>
              </div>
            </div>

            ${item.notes ? `<div class="rehab-note">${item.notes}</div>` : ""}

            <label class="rehab-check">
              <input
                type="checkbox"
                data-rehab-key="${Utils.makeRehabKey(idx)}"
                ${state[Utils.makeRehabKey(idx)] ? "checked" : ""}
              />
              Concluído
            </label>
          </div>
        `).join("")}
      </div>
    `;
  },

  renderApp(config, state) {
    this.elements.app.innerHTML = config.map((dayData, dayIndex) => {
      const totalSets = dayData.exercises.reduce((sum, ex) => sum + ex.sets, 0);

      const checkedSets = dayData.exercises.reduce((sum, ex, exerciseIndex) => {
        let count = 0;
        for (let s = 1; s <= ex.sets; s++) {
          if (state[Utils.makeSetKey(dayIndex, exerciseIndex, s)]) {
            count++;
          }
        }
        return sum + count;
      }, 0);

      const progress = totalSets ? Math.round((checkedSets / totalSets) * 100) : 0;
      const completed = !!state[Utils.makeCompletedDayKey(dayIndex)];
      const isOpen = state.openDays?.[dayIndex] ?? false;

      const warmupHtml = (dayData.warmup || []).map(item => `
        <div class="warmup-item">
          <span>${item.name}</span>
          <strong>${item.reps}</strong>
        </div>
      `).join("");

      const exercisesHtml = dayData.exercises.map((exercise, exerciseIndex) => {
        const loadKey = Utils.makeLoadKey(dayIndex, exerciseIndex);
        const noteKey = Utils.makeNoteKey(dayIndex, exerciseIndex);

        const loadLabel = exercise.loadLabel || "Carga (kg)";
        const placeholder = exercise.placeholder || "Ex: 20";
        const reps = exercise.reps || "-";
        const defaultNotes = exercise.notes || "";

        const setsHtml = Array.from({ length: exercise.sets }, (_, idx) => {
          const setNumber = idx + 1;
          const setKey = Utils.makeSetKey(dayIndex, exerciseIndex, setNumber);
          const checked = state[setKey] ? "checked" : "";

          return `
            <label class="set-chip">
              <input type="checkbox" data-key="${setKey}" ${checked} />
              Série ${setNumber}
            </label>
          `;
        }).join("");

        return `
          <div class="exercise-item">
            <div class="exercise-head">
              <div>
                <div class="exercise-name">${exercise.name}</div>
                <div class="exercise-target">Reps alvo: ${reps}</div>
              </div>

              <div class="exercise-load">
                <label>${loadLabel}</label>
                <input
                  type="number"
                  step="0.5"
                  min="0"
                  data-key="${loadKey}"
                  value="${state[loadKey] ?? ""}"
                  placeholder="${placeholder}"
                />
              </div>

              <div class="exercise-note">
                <label>Observação</label>
                <textarea
                  data-key="${noteKey}"
                  placeholder="Ex: subir carga, execução boa, dor, adaptação..."
                >${state[noteKey] ?? ""}</textarea>
              </div>
            </div>

            ${defaultNotes ? `
              <div class="exercise-default-note">
                <strong>Dica técnica:</strong> ${defaultNotes}
              </div>
            ` : ""}

            <div class="sets">
              ${setsHtml}
            </div>

            <div class="exercise-actions">
              <div class="mini-note">Marque as séries concluídas e registre a carga usada.</div>
              <button
                class="btn btn-secondary mark-exercise-btn"
                data-day="${dayIndex}"
                data-exercise="${exerciseIndex}"
              >
                Concluir exercício
              </button>
            </div>
          </div>
        `;
      }).join("");

      return `
        <section class="day-card ${isOpen ? "open" : ""} ${completed ? "completed" : ""}" data-day="${dayIndex}">
          <div class="day-header">
            <div class="day-left">
              <span class="day-name">${dayData.day}</span>
              <span class="day-tag">${dayData.type}</span>
              <span class="done-flag">Dia concluído</span>
            </div>

            <div class="day-meta">
              <div class="progress-wrap">
                <div class="progress-top">
                  <span>Progresso do dia</span>
                  <span>${checkedSets}/${totalSets} séries</span>
                </div>
                <div class="progress-bar">
                  <div class="progress-fill" style="width:${progress}%"></div>
                </div>
              </div>

              <button
                class="btn btn-success hidden-print complete-day-btn"
                data-day="${dayIndex}"
              >
                Concluir dia
              </button>

              <span class="arrow">▼</span>
            </div>
          </div>

          <div class="day-content">
            ${(dayData.warmup && dayData.warmup.length) ? `
              <div class="section-title">Aquecimento</div>
              <div class="warmup-list">
                ${warmupHtml}
              </div>
            ` : ""}

            <div class="section-title">Treino</div>
            <div class="exercise-list">
              ${exercisesHtml}
            </div>
          </div>
        </section>
      `;
    }).join("");
  }
};
