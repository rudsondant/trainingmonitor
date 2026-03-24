/* ============================
   js/config.js
============================ */

const WORKOUT_CONFIG = [
  {
    day: "Segunda",
    type: "Natação",
    warmup: [
      { name: "Círculos de braço", reps: "10" },
      { name: "Rotação de quadril", reps: "10" },
      { name: "Movimento leve no lugar", reps: "1-2 min" }
    ],
    exercises: [
      {
        name: "Natação leve/moderada",
        sets: 1,
        reps: "30-40 min",
        loadLabel: "Tempo (min)",
        placeholder: "Ex: 35",
        notes: "Ritmo confortável, foco em recuperação ativa."
      }
    ]
  },
  {
    day: "Terça",
    type: "Peito + Costas",
    warmup: [
      { name: "Círculos de braço (frente)", reps: "10" },
      { name: "Círculos de braço (trás)", reps: "10" },
      { name: "Band pull-apart", reps: "2 x 15" },
      { name: "Supino leve", reps: "1 x 12" },
      { name: "Supino moderado", reps: "1 x 8" }
    ],
    exercises: [
      {
        name: "Supino com halteres",
        sets: 4,
        reps: "6-8",
        loadLabel: "Carga (kg)",
        placeholder: "Ex: 18",
        notes: "Controle a descida, mantenha os ombros estáveis e não force amplitude dolorosa."
      },
      {
        name: "Puxada frontal",
        sets: 4,
        reps: "8-10",
        loadLabel: "Carga (kg)",
        placeholder: "Ex: 40",
        notes: "Evite compensar com lombar; puxe com foco nas costas."
      },
      {
        name: "Supino inclinado com halteres",
        sets: 3,
        reps: "8-10",
        loadLabel: "Carga (kg)",
        placeholder: "Ex: 16",
        notes: "Mantenha o tronco firme e o movimento controlado."
      },
      {
        name: "Remada baixa máquina ou halter",
        sets: 3,
        reps: "8-10",
        loadLabel: "Carga (kg)",
        placeholder: "Ex: 35",
        notes: "Peito aberto, escápulas ativas e sem girar o tronco."
      },
      {
        name: "Crucifixo máquina ou cabo",
        sets: 3,
        reps: "12",
        loadLabel: "Carga (kg)",
        placeholder: "Ex: 10",
        notes: "Amplitude confortável, sem estressar excessivamente o ombro."
      },
      {
        name: "Face pull",
        sets: 3,
        reps: "12-15",
        loadLabel: "Carga (kg)",
        placeholder: "Ex: 12",
        notes: "Foco em escápulas e deltoide posterior; ótimo para saúde do ombro."
      }
    ]
  },
  {
    day: "Quarta",
    type: "Natação",
    warmup: [
      { name: "Círculos de braço", reps: "10" },
      { name: "Rotação de quadril", reps: "10" },
      { name: "Movimento leve no lugar", reps: "1-2 min" }
    ],
    exercises: [
      {
        name: "Natação leve",
        sets: 1,
        reps: "25-35 min",
        loadLabel: "Tempo (min)",
        placeholder: "Ex: 30",
        notes: "Mantenha intensidade leve para não atrapalhar o treino de pernas na quinta."
      }
    ]
  },
  {
    day: "Quinta",
    type: "Pernas",
    warmup: [
      { name: "Rotação de quadril", reps: "10 cada lado" },
      { name: "Balanço de perna (frente/trás)", reps: "10 cada" },
      { name: "Agachamento sem peso", reps: "2 x 15" },
      { name: "Leg press leve", reps: "1 x 12" },
      { name: "Leg press moderado", reps: "1 x 8" }
    ],
    exercises: [
      {
        name: "Leg press",
        sets: 4,
        reps: "8-10",
        loadLabel: "Carga (kg)",
        placeholder: "Ex: 120",
        notes: "Pés mais altos na plataforma, joelhos alinhados e sem descer além do confortável."
      },
      {
        name: "Agachamento leve/moderado",
        sets: 3,
        reps: "8",
        loadLabel: "Carga (kg)",
        placeholder: "Ex: 20",
        notes: "Use carga moderada, foque em postura e evite amplitude que provoque dor no joelho."
      },
      {
        name: "Stiff com halteres",
        sets: 3,
        reps: "8-10",
        loadLabel: "Carga (kg)",
        placeholder: "Ex: 20",
        notes: "Coluna neutra, quadril para trás e movimento controlado."
      },
      {
        name: "Cadeira extensora",
        sets: 3,
        reps: "12",
        loadLabel: "Carga (kg)",
        placeholder: "Ex: 20",
        notes: "Carga leve a moderada e execução controlada, sem dor no joelho."
      },
      {
        name: "Cadeira flexora",
        sets: 3,
        reps: "12",
        loadLabel: "Carga (kg)",
        placeholder: "Ex: 25",
        notes: "Foco em posterior de coxa para ajudar na proteção do joelho."
      },
      {
        name: "Panturrilha",
        sets: 4,
        reps: "12-15",
        loadLabel: "Carga (kg)",
        placeholder: "Ex: 30",
        notes: "Subida completa e descida lenta."
      },
      {
        name: "Elevação pélvica",
        sets: 3,
        reps: "10-12",
        loadLabel: "Carga (kg)",
        placeholder: "Ex: 40",
        notes: "Segure 1 segundo no topo e ative bem os glúteos."
      }
    ]
  },
  {
    day: "Sexta",
    type: "Ombros + Braços",
    warmup: [
      { name: "Círculos de braço (frente)", reps: "10" },
      { name: "Círculos de braço (trás)", reps: "10" },
      { name: "Elevação lateral leve", reps: "2 x 15" },
      { name: "Rosca leve", reps: "1 x 12" },
      { name: "Desenvolvimento leve", reps: "1 x 12" }
    ],
    exercises: [
      {
        name: "Desenvolvimento com halteres",
        sets: 4,
        reps: "6-8",
        loadLabel: "Carga (kg)",
        placeholder: "Ex: 14",
        notes: "Evite compensar com lombar; abdômen firme o tempo todo."
      },
      {
        name: "Elevação lateral",
        sets: 3,
        reps: "12-15",
        loadLabel: "Carga (kg)",
        placeholder: "Ex: 8",
        notes: "Suba com controle e sem encolher os ombros."
      },
      {
        name: "Rosca direta",
        sets: 3,
        reps: "8-10",
        loadLabel: "Carga (kg)",
        placeholder: "Ex: 12",
        notes: "Cotovelo estável, sem balanço de tronco."
      },
      {
        name: "Tríceps corda",
        sets: 3,
        reps: "8-10",
        loadLabel: "Carga (kg)",
        placeholder: "Ex: 20",
        notes: "Boa opção para poupar cotovelos."
      },
      {
        name: "Rosca alternada",
        sets: 3,
        reps: "10",
        loadLabel: "Carga (kg)",
        placeholder: "Ex: 10",
        notes: "Movimento controlado, foco total no bíceps."
      },
      {
        name: "Tríceps testa leve ou banco",
        sets: 3,
        reps: "10",
        loadLabel: "Carga (kg)",
        placeholder: "Ex: 8",
        notes: "Use carga leve a moderada se houver sensibilidade no cotovelo."
      },
      {
        name: "Prancha",
        sets: 3,
        reps: "20-40 s",
        loadLabel: "Tempo (seg)",
        placeholder: "Ex: 30",
        notes: "Corpo alinhado e abdômen firme, sem deixar a lombar cair."
      }
    ]
  },
  {
    day: "Sábado",
    type: "Superior leve + mobilidade",
    warmup: [
      { name: "Círculos de braço", reps: "10" },
      { name: "Rotação de quadril", reps: "10" },
      { name: "Alongamento dinâmico leve", reps: "2 min" },
      { name: "Supino leve", reps: "1 x 12" },
      { name: "Remada leve", reps: "1 x 12" }
    ],
    exercises: [
      {
        name: "Supino leve",
        sets: 3,
        reps: "10",
        loadLabel: "Carga (kg)",
        placeholder: "Ex: 12",
        notes: "Dia de volume leve e técnica, não de carga máxima."
      },
      {
        name: "Remada leve",
        sets: 3,
        reps: "10",
        loadLabel: "Carga (kg)",
        placeholder: "Ex: 20",
        notes: "Movimento limpo e controlado."
      },
      {
        name: "Elevação lateral leve",
        sets: 3,
        reps: "15",
        loadLabel: "Carga (kg)",
        placeholder: "Ex: 6",
        notes: "Foco em qualidade do movimento."
      },
      {
        name: "Bíceps leve",
        sets: 2,
        reps: "12",
        loadLabel: "Carga (kg)",
        placeholder: "Ex: 8",
        notes: "Sem usar impulso."
      },
      {
        name: "Tríceps leve",
        sets: 2,
        reps: "12",
        loadLabel: "Carga (kg)",
        placeholder: "Ex: 10",
        notes: "Treino leve para circulação e recuperação."
      }
    ]
  }
];

const REHAB_PROTOCOL = [
  {
    name: "Extensão de joelho isométrica",
    reps: "3 x 20-30s por perna",
    notes: "Contraia o quadríceps com a perna estendida, sem dor."
  },
  {
    name: "Elevação de perna reta",
    reps: "3 x 12-15",
    notes: "Suba a perna devagar, mantendo joelho estendido e controle total."
  },
  {
    name: "Abdução de quadril",
    reps: "3 x 12-15",
    notes: "Ative o glúteo médio para ajudar na estabilidade do joelho."
  },
  {
    name: "Bird Dog",
    reps: "3 x 10 cada lado",
    notes: "Braço e perna opostos, segure 2-3 segundos sem girar o tronco."
  },
  {
    name: "Prancha",
    reps: "3 x 20-40s",
    notes: "Corpo alinhado, abdômen contraído e sem compensar na lombar."
  },
  {
    name: "Pallof Press",
    reps: "3 x 10-12",
    notes: "Empurre à frente sem deixar o tronco girar."
  }
];
