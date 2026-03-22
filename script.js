const workoutData = [
      {
        day: 'Segunda',
        type: 'Natação',
        warmup: [
          { name: 'Círculos de braço', reps: '10' },
          { name: 'Rotação de quadril', reps: '10' },
          { name: 'Movimento leve no lugar', reps: '1-2 min' }
        ],
        exercises: [
          { name: 'Natação leve/moderada', sets: 1, loadLabel: 'Tempo (min)', placeholder: 'Ex: 35' }
        ]
      },
      {
        day: 'Terça',
        type: 'Peito + Costas',
        warmup: [
          { name: 'Círculos de braço (frente)', reps: '10' },
          { name: 'Círculos de braço (trás)', reps: '10' },
          { name: 'Band pull-apart', reps: '2 x 15' },
          { name: 'Supino leve', reps: '1 x 12' },
          { name: 'Supino moderado', reps: '1 x 8' }
        ],
        exercises: [
          { name: 'Supino com halteres', sets: 4 },
          { name: 'Puxada frontal', sets: 4 },
          { name: 'Supino inclinado com halteres', sets: 3 },
          { name: 'Remada baixa máquina ou halter', sets: 3 },
          { name: 'Crucifixo máquina ou cabo', sets: 3 },
          { name: 'Face pull', sets: 3 }
        ]
      },
      {
        day: 'Quarta',
        type: 'Natação',
        warmup: [
          { name: 'Círculos de braço', reps: '10' },
          { name: 'Rotação de quadril', reps: '10' },
          { name: 'Movimento leve no lugar', reps: '1-2 min' }
        ],
        exercises: [
          { name: 'Natação leve', sets: 1, loadLabel: 'Tempo (min)', placeholder: 'Ex: 30' }
        ]
      },
      {
        day: 'Quinta',
        type: 'Pernas',
        warmup: [
          { name: 'Rotação de quadril', reps: '10 cada lado' },
          { name: 'Balanço de perna (frente/trás)', reps: '10 cada' },
          { name: 'Agachamento sem peso', reps: '2 x 15' },
          { name: 'Leg press leve', reps: '1 x 12' },
          { name: 'Leg press moderado', reps: '1 x 8' }
        ],
        exercises: [
          { name: 'Leg press', sets: 4 },
          { name: 'Agachamento leve/moderado', sets: 3 },
          { name: 'Stiff com halteres', sets: 3 },
          { name: 'Cadeira extensora', sets: 3 },
          { name: 'Cadeira flexora', sets: 3 },
          { name: 'Panturrilha', sets: 4 }
        ]
      },
      {
        day: 'Sexta',
        type: 'Ombros + Braços',
        warmup: [
          { name: 'Círculos de braço (frente)', reps: '10' },
          { name: 'Círculos de braço (trás)', reps: '10' },
          { name: 'Elevação lateral leve', reps: '2 x 15' },
          { name: 'Rosca leve', reps: '1 x 12' },
          { name: 'Desenvolvimento leve', reps: '1 x 12' }
        ],
        exercises: [
          { name: 'Desenvolvimento com halteres', sets: 4 },
          { name: 'Elevação lateral', sets: 3 },
          { name: 'Rosca direta', sets: 3 },
          { name: 'Tríceps corda', sets: 3 },
          { name: 'Rosca alternada', sets: 3 },
          { name: 'Tríceps testa leve ou banco', sets: 3 },
          { name: 'Prancha', sets: 3, loadLabel: 'Tempo (seg)', placeholder: 'Ex: 40' }
        ]
      },
      {
        day: 'Sábado',
        type: 'Superior leve + mobilidade',
        warmup: [
          { name: 'Círculos de braço', reps: '10' },
          { name: 'Rotação de quadril', reps: '10' },
          { name: 'Alongamento dinâmico leve', reps: '2 min' },
          { name: 'Supino leve', reps: '1 x 12' },
          { name: 'Remada leve', reps: '1 x 12' }
        ],
        exercises: [
          { name: 'Supino leve', sets: 3 },
          { name: 'Remada leve', sets: 3 },
          { name: 'Elevação lateral leve', sets: 3 },
          { name: 'Bíceps leve', sets: 2 },
          { name: 'Tríceps leve', sets: 2 }
        ]
      }
    ];

    const STORAGE_PREFIX = 'ficha_treino_v2';
    const THEME_KEY = 'ficha_treino_theme';

    const weekPicker = document.getElementById('weekPicker');
    const bodyWeightInput = document.getElementById('bodyWeightInput');
    const waistInput = document.getElementById('waistInput');
    const energyInput = document.getElementById('energyInput');
    const sleepInput = document.getElementById('sleepInput');
    const weeklyNotesInput = document.getElementById('weeklyNotesInput');

    function getCurrentWeekValue() {
      return weekPicker.value || getISOWeekString(new Date());
    }

    function getStorageKey() {
      return `${STORAGE_PREFIX}_${getCurrentWeekValue()}`;
    }

    function getISOWeekString(date) {
      const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
      const dayNum = d.getUTCDay() || 7;
      d.setUTCDate(d.getUTCDate() + 4 - dayNum);
      const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
      const weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
      return `${d.getUTCFullYear()}-W${String(weekNo).padStart(2, '0')}`;
    }

    function getSavedState() {
      const saved = localStorage.getItem(getStorageKey());
      return saved ? JSON.parse(saved) : { summary: {}, openDays: {} };
    }

    function saveState(state) {
      localStorage.setItem(getStorageKey(), JSON.stringify(state));
    }

    function makeSetKey(dayIndex, exerciseIndex, setIndex) {
      return `d${dayIndex}_e${exerciseIndex}_s${setIndex}`;
    }

    function makeLoadKey(dayIndex, exerciseIndex) {
      return `d${dayIndex}_e${exerciseIndex}_load`;
    }

    function makeNoteKey(dayIndex, exerciseIndex) {
      return `d${dayIndex}_e${exerciseIndex}_note`;
    }

    function makeCompletedDayKey(dayIndex) {
      return `d${dayIndex}_completed`;
    }

    function renderSummary() {
      const state = getSavedState();
      const summary = state.summary || {};
      bodyWeightInput.value = summary.bodyWeight || '';
      waistInput.value = summary.waist || '';
      energyInput.value = summary.energy || '';
      sleepInput.value = summary.sleep || '';
      weeklyNotesInput.value = summary.notes || '';
    }

    function saveSummary() {
      const state = getSavedState();
      state.summary = {
        bodyWeight: bodyWeightInput.value,
        waist: waistInput.value,
        energy: energyInput.value,
        sleep: sleepInput.value,
        notes: weeklyNotesInput.value
      };
      saveState(state);
      updateGlobalStats();
    }

    function renderApp() {
      const app = document.getElementById('app');
      const state = getSavedState();

      app.innerHTML = workoutData.map((dayData, dayIndex) => {
        const totalSets = dayData.exercises.reduce((sum, ex) => sum + ex.sets, 0);
        const checkedSets = dayData.exercises.reduce((sum, ex, exerciseIndex) => {
          let count = 0;
          for (let s = 1; s <= ex.sets; s++) {
            if (state[makeSetKey(dayIndex, exerciseIndex, s)]) count++;
          }
          return sum + count;
        }, 0);
        const progress = totalSets ? Math.round((checkedSets / totalSets) * 100) : 0;
        const completed = !!state[makeCompletedDayKey(dayIndex)];
        const isOpen = state.openDays?.[dayIndex] ?? false;

        const warmupHtml = dayData.warmup.map(item => `
          <div class="warmup-item">
            <span>${item.name}</span>
            <strong>${item.reps}</strong>
          </div>
        `).join('');

        const exercisesHtml = dayData.exercises.map((exercise, exerciseIndex) => {
          const setsHtml = Array.from({ length: exercise.sets }, (_, idx) => {
            const setNumber = idx + 1;
            const setKey = makeSetKey(dayIndex, exerciseIndex, setNumber);
            const checked = state[setKey] ? 'checked' : '';
            return `
              <label class="set-chip">
                <input type="checkbox" data-key="${setKey}" ${checked} />
                Série ${setNumber}
              </label>
            `;
          }).join('');

          const loadKey = makeLoadKey(dayIndex, exerciseIndex);
          const noteKey = makeNoteKey(dayIndex, exerciseIndex);
          const loadLabel = exercise.loadLabel || 'Carga (kg)';

          return `
            <div class="exercise-item">
              <div class="exercise-head">
                <div class="exercise-name">${exercise.name}</div>
                <div>
                  <label>${loadLabel}</label>
                  <input type="number" step="0.5" min="0" data-key="${loadKey}" value="${state[loadKey] ?? ''}" placeholder="${exercise.placeholder || 'Ex: 20'}" />
                </div>
                <div>
                  <label>Observação</label>
                  <textarea data-key="${noteKey}" placeholder="Ex: subir carga, execução boa, ombro cansado...">${state[noteKey] ?? ''}</textarea>
                </div>
              </div>
              <div class="sets">${setsHtml}</div>
              <div class="exercise-actions">
                <div class="mini-note">Marque as séries concluídas e registre a carga usada.</div>
                <button class="btn secondary mark-exercise-btn" data-day="${dayIndex}" data-exercise="${exerciseIndex}">Concluir exercício</button>
              </div>
            </div>
          `;
        }).join('');

        return `
          <section class="day-card ${isOpen ? 'open' : ''} ${completed ? 'completed' : ''}" data-day="${dayIndex}">
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
                <button class="btn success hidden-print complete-day-btn" data-day="${dayIndex}">Concluir dia</button>
                <span class="arrow">▼</span>
              </div>
            </div>
            <div class="day-content">
              <div class="section-title">Aquecimento</div>
              <div class="warmup-list">${warmupHtml}</div>
              <div class="section-title">Treino</div>
              <div class="exercise-list">${exercisesHtml}</div>
            </div>
          </section>
        `;
      }).join('');

      bindEvents();
      updateGlobalStats();
    }

    function bindEvents() {
      const state = getSavedState();

      document.querySelectorAll('.day-header').forEach(header => {
        header.addEventListener('click', (e) => {
          if (e.target.closest('button')) return;
          const card = header.closest('.day-card');
          const dayIndex = card.dataset.day;
          card.classList.toggle('open');
          state.openDays = state.openDays || {};
          state.openDays[dayIndex] = card.classList.contains('open');
          saveState(state);
        });
      });

      document.querySelectorAll('input[type="checkbox"][data-key]').forEach(input => {
        input.addEventListener('change', (e) => {
          const latest = getSavedState();
          latest[e.target.dataset.key] = e.target.checked;
          saveState(latest);
          renderApp();
        });
      });

      document.querySelectorAll('input[type="number"][data-key], textarea[data-key]').forEach(el => {
        const eventName = el.tagName === 'TEXTAREA' ? 'input' : 'input';
        el.addEventListener(eventName, (e) => {
          const latest = getSavedState();
          latest[e.target.dataset.key] = e.target.value;
          saveState(latest);
          updateGlobalStats();
        });
      });

      document.querySelectorAll('.complete-day-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const latest = getSavedState();
          const dayIndex = btn.dataset.day;
          const key = makeCompletedDayKey(dayIndex);
          latest[key] = !latest[key];
          saveState(latest);
          renderApp();
        });
      });

      document.querySelectorAll('.mark-exercise-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const latest = getSavedState();
          const dayIndex = Number(btn.dataset.day);
          const exerciseIndex = Number(btn.dataset.exercise);
          const exercise = workoutData[dayIndex].exercises[exerciseIndex];
          for (let s = 1; s <= exercise.sets; s++) {
            latest[makeSetKey(dayIndex, exerciseIndex, s)] = true;
          }
          saveState(latest);
          renderApp();
        });
      });
    }

    function updateGlobalStats() {
      const state = getSavedState();
      let totalSets = 0;
      let checkedSets = 0;
      let completedExercises = 0;
      let totalExercises = 0;
      let completedDays = 0;

      workoutData.forEach((day, dayIndex) => {
        if (state[makeCompletedDayKey(dayIndex)]) completedDays++;

        day.exercises.forEach((exercise, exerciseIndex) => {
          totalExercises++;
          let allChecked = true;
          for (let s = 1; s <= exercise.sets; s++) {
            totalSets++;
            if (state[makeSetKey(dayIndex, exerciseIndex, s)]) {
              checkedSets++;
            } else {
              allChecked = false;
            }
          }
          if (allChecked) completedExercises++;
        });
      });

      const weeklyProgress = totalSets ? Math.round((checkedSets / totalSets) * 100) : 0;
      document.getElementById('weeklyProgressValue').textContent = `${weeklyProgress}%`;
      document.getElementById('completedDaysValue').textContent = `${completedDays}/${workoutData.length}`;
      document.getElementById('completedExercisesValue').textContent = String(completedExercises);
      document.getElementById('checkedSetsValue').textContent = String(checkedSets);
    }

    function clearCurrentWeek(confirmMessage, keepSummary = false) {
      const ok = confirm(confirmMessage);
      if (!ok) return;
      if (keepSummary) {
        const state = getSavedState();
        const summary = state.summary || {};
        localStorage.removeItem(getStorageKey());
        saveState({ summary, openDays: {} });
      } else {
        localStorage.removeItem(getStorageKey());
      }
      renderSummary();
      renderApp();
    }

    function setInitialWeek() {
      weekPicker.value = getISOWeekString(new Date());
    }

    function applySavedTheme() {
      const theme = localStorage.getItem(THEME_KEY) || 'light';
      document.body.classList.toggle('dark', theme === 'dark');
    }

    document.getElementById('themeToggleBtn').addEventListener('click', () => {
      const dark = document.body.classList.toggle('dark');
      localStorage.setItem(THEME_KEY, dark ? 'dark' : 'light');
    });

    document.getElementById('expandAllBtn').addEventListener('click', () => {
      const state = getSavedState();
      state.openDays = {};
      workoutData.forEach((_, idx) => state.openDays[idx] = true);
      saveState(state);
      renderApp();
    });

    document.getElementById('collapseAllBtn').addEventListener('click', () => {
      const state = getSavedState();
      state.openDays = {};
      workoutData.forEach((_, idx) => state.openDays[idx] = false);
      saveState(state);
      renderApp();
    });

    document.getElementById('exportPdfBtn').addEventListener('click', () => {
      window.print();
    });

    document.getElementById('saveSummaryBtn').addEventListener('click', saveSummary);
    document.getElementById('clearWeekBtn').addEventListener('click', () => clearCurrentWeek('Deseja limpar toda esta semana, incluindo resumo, cargas e marcações?'));
    document.getElementById('resetCurrentWeekBtn').addEventListener('click', () => clearCurrentWeek('Deseja resetar apenas as marcações e cargas desta semana, mantendo o resumo semanal?', true));
    document.getElementById('scrollTopBtn').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    [bodyWeightInput, waistInput, energyInput, sleepInput, weeklyNotesInput].forEach(el => {
      el.addEventListener('input', saveSummary);
    });

    weekPicker.addEventListener('change', () => {
      renderSummary();
      renderApp();
    });

    setInitialWeek();
    applySavedTheme();
    renderSummary();
    renderApp();
