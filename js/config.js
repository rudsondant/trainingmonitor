/* ============================
   js/config.js
============================ */
const WORKOUT_CONFIG = [
  {
    day: 'Segunda',
    type: 'Natação',
    warmup: [
      { name: 'Círculos de braço', reps: '10' },
      { name: 'Rotação de quadril', reps: '10' },
      { name: 'Movimento leve no lugar', reps: '1-2 min' }
    ],
    exercises: [
      { name: 'Natação leve/moderada', sets: 1, loadLabel: 'Tempo (min)' }
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
      { name: 'Natação leve', sets: 1, loadLabel: 'Tempo (min)' }
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
      { name: 'Prancha', sets: 3, loadLabel: 'Tempo (seg)' }
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
