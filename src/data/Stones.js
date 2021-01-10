// helper func [...Array(11)].fill(0).map((_,i) => i * 20)

export default [
  {
    id: 100,
    name: 'penetration',
    attribute: 'piercing',
    eqType: ['weapon'],
    refinementLevel: [1, 2, 3, 5, 8, 9, 10, 12, 14, 15, 20, 23, 25],
    stoneGrade: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    multEq: 1,
    multStone: 1,
  },
  {
    id: 101,
    name: 'deathblow',
    attribute: 'critical',
    eqType: ['weapon'],
    refinementLevel: [1, 2, 3, 5, 8, 9, 10, 12, 14, 15, 20, 23, 25],
    stoneGrade: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    multEq: 1,
    multStone: 1,
  },
  {
    id: 102,
    name: 'cooldown',
    attribute: 'castingSpeed',
    eqType: ['weapon'],
    refinementLevel: [5, 8, 12, 17, 25, 26, 27, 28, 29, 30, 32, 35, 40],
    stoneGrade: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    multEq: 1,
    multStone: 1,
  },
  {
    id: 103,
    name: 'warrior',
    attribute: 'warrior',
    eqType: ['weapon'],
    refinementLevel: [5, 8, 12, 17, 25, 26, 27, 28, 29, 30, 32, 35, 40],
    stoneGrade: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    multEq: 1,
    multStone: 1,
  },
  {
    id: 104,
    name: 'ninja',
    attribute: 'ninja',
    eqType: ['weapon'],
    refinementLevel: [5, 8, 12, 17, 25, 26, 27, 28, 29, 30, 32, 35, 40],
    stoneGrade: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    multEq: 1,
    multStone: 1,
  },
  {
    id: 105,
    name: 'sura',
    attribute: 'sura',
    eqType: ['weapon'],
    refinementLevel: [5, 8, 12, 17, 25, 26, 27, 28, 29, 30, 32, 35, 40],
    stoneGrade: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    multEq: 1,
    multStone: 1,
  },
  {
    id: 106,
    name: 'shaman',
    attribute: 'shaman',
    eqType: ['weapon'],
    refinementLevel: [5, 8, 12, 17, 25, 26, 27, 28, 29, 30, 32, 35, 40],
    stoneGrade: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    multEq: 1,
    multStone: 1,
  },
  {
    id: 107,
    name: 'monster',
    attribute: 'monster',
    eqType: ['weapon'],
    refinementLevel: [1, 2, 3, 5, 8, 11, 13, 15, 17, 19, 25, 30, 35],
    stoneGrade: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
    multEq: 3,
    multStone: 2,
  },
  {
    id: 110,
    name: 'evasion',
    attribute: 'blockMelee',
    eqType: ['armor'],
    refinementLevel: [1, 2, 3, 5, 8, 9, 10, 11, 12, 13, 14, 17, 20],
    stoneGrade: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    multEq: 1,
    multStone: 1,
  },
  {
    id: 111,
    name: 'ducking',
    attribute: 'blockRange',
    eqType: ['armor'],
    refinementLevel: [1, 2, 3, 5, 8, 10, 15, 20, 22, 24, 26, 28, 35],
    stoneGrade: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    multEq: 1,
    multStone: 1,
  },
  {
    id: 112,
    name: 'magic',
    attribute: 'spAbsorb',
    eqType: ['armor'],
    refinementLevel: [1, 2, 3, 5, 8, 9, 10, 11, 12, 13, 17, 20, 25],
    stoneGrade: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    multEq: 1,
    multStone: 1,
  },
  {
    id: 113,
    name: 'vitality',
    attribute: 'hp',
    eqType: ['armor'],
    refinementLevel: [
      250,
      500,
      750,
      1000,
      1250,
      1500,
      2000,
      2500,
      3000,
      3500,
      5000,
      6000,
      8000,
    ],
    stoneGrade: [
      0,
      1000,
      2000,
      3000,
      4000,
      5000,
      6000,
      7000,
      8000,
      9000,
      10000,
    ],
    multEq: 1000,
    multStone: 1000,
  },
  {
    id: 114,
    name: 'defence',
    attribute: 'defense',
    eqType: ['armor'],
    refinementLevel: [2, 4, 6, 10, 15, 18, 23, 25, 30, 35, 50, 100, 150],
    stoneGrade: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
    multEq: 1,
    multStone: 5,
  },
  {
    id: 115,
    name: 'haste',
    attribute: 'movementSpeed',
    attribute2: 'speedOfLight',
    eqType: ['armor'],
    refinementLevel: [5, 10, 15, 20, 30, 33, 36, 40, 43, 46, 49, 52, 55],
    stoneGrade: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
    multEq: 1,
    multStone: 5,
    note: 'haste',
  },
  {
    id: 116,
    name: 'agility',
    attribute: 'criticalResistance',
    eqType: ['armor'],
    refinementLevel: [12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60],
    stoneGrade: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
    multEq: 1,
    multStone: 4,
  },
  {
    id: 120,
    name: 'empower',
    attribute: 'stoneReinforcement',
    eqType: ['weapon', 'armor'],
    refinementLevel: [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5],
    stoneGrade: [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5],
    multEq: 0.5,
  },
  {
    id: 130,
    name: 'recovery',
    attribute: 'hpRegen',
    eqType: ['ring'],
    refinementLevel: [1, 3, 6, 9, 12, 15, 20, 25, 30, 35, 40, 45, 50],
    stoneGrade: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
    multEq: 1,
    multStone: 5,
  },
  {
    id: 131,
    name: 'silence',
    attribute: 'spRegen',
    eqType: ['ring'],
    refinementLevel: [1, 3, 6, 9, 12, 15, 20, 25, 30, 35, 40, 45, 50],
    stoneGrade: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
    multEq: 1,
    multStone: 5,
  },
  {
    id: 132,
    name: 'frost',
    attribute: 'resIce',
    eqType: ['ring'],
    refinementLevel: [2, 3, 4, 5, 6, 9, 12, 15, 18, 21, 24, 27, 30],
    stoneGrade: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    multEq: 0,
    multStone: 1,
  },
  {
    id: 133,
    name: 'gladiator',
    attribute: 'human',
    eqType: ['ring'],
    refinementLevel: [2, 3, 4, 5, 6, 9, 12, 15, 18, 21, 24, 27, 30],
    stoneGrade: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
    multEq: 1,
    multStone: 2,
  },
  {
    id: 134,
    name: 'leech',
    attribute: 'hpAbsorb',
    eqType: ['ring'],
    refinementLevel: [1, 2, 3, 4, 5, 6, 8, 10, 12, 14, 16, 18, 20],
    stoneGrade: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
    multEq: 1,
    multStone: 2,
  },
  {
    id: 135,
    name: 'hunter',
    attribute: 'monster',
    eqType: ['ring'],
    refinementLevel: [4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40],
    stoneGrade: [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
    multEq: 3,
    multStone: 3,
  },
  {
    id: 136,
    name: 'universality',
    attribute: 'universtality',
    eqType: ['ring'],
    refinementLevel: [2, 3, 4, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20],
    stoneGrade: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
    multEq: 1,
    multStone: 2,
  },
  {
    id: 137,
    name: 'luck',
    attribute: 'criticalResistance',
    eqType: ['ring'],
    refinementLevel: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 15],
    stoneGrade: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
    multEq: 1,
    multStone: 2,
  },
  {
    id: 140,
    name: 'power',
    attribute: 'attackValue',
    eqType: ['belt'],
    refinementLevel: [
      20,
      40,
      60,
      80,
      100,
      120,
      140,
      150,
      160,
      170,
      180,
      190,
      200,
    ],
    stoneGrade: [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300],
    multEq: 10,
    multStone: 30,
  },
  {
    id: 141,
    name: 'wildness',
    attribute: 'petAttr',
    eqType: ['belt'],
    refinementLevel: [2, 4, 6, 8, 10, 15, 20, 25, 30, 35, 40, 45, 50],
    stoneGrade: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
    multEq: 1,
    multStone: 2,
  },
  {
    id: 142,
    name: 'snake',
    attribute: 'resPoison',
    eqType: ['belt'],
    refinementLevel: [2, 3, 4, 5, 6, 9, 12, 15, 18, 21, 24, 27, 30],
    stoneGrade: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    multEq: 1,
    multStone: 1,
  },
  {
    id: 143,
    name: 'fury',
    attribute: 'fks',
    eqType: ['belt'],
    refinementLevel: [2, 3, 4, 5, 6, 7, 9, 11, 13, 16, 19, 22, 25],
    stoneGrade: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
    multEq: 1,
    multStone: 2,
  },
  {
    id: 144,
    name: 'might',
    attribute: 'dds',
    eqType: ['belt'],
    refinementLevel: [2, 3, 4, 5, 6, 7, 9, 11, 13, 16, 19, 22, 25],
    stoneGrade: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
    multEq: 1,
    multStone: 2,
  },
  {
    id: 145,
    name: 'nature',
    attribute: 'resEarth',
    eqType: ['belt'],
    refinementLevel: [2, 3, 4, 6, 8, 9, 12, 15, 18, 21, 24, 27, 30],
    stoneGrade: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    multEq: 0,
    multStone: 1,
  },
  {
    id: 146,
    name: 'moon',
    attribute: 'mk',
    eqType: ['belt'],
    refinementLevel: [2, 3, 4, 6, 8, 9, 12, 15, 18, 21, 24, 27, 30],
    stoneGrade: [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
    multEq: 1,
    multStone: 3,
  },
  {
    id: 150,
    name: 'synthesis',
    eqType: ['belt', 'ring']
  }
];
