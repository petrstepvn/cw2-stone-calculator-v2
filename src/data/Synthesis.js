import { Infected } from './';

export default [
  {
    attribute: 'stoneReinforcement',
    group: '1dmgAll',
    eqType: ['ring', 'belt'],
    base: [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 7, 8, 9, 10],
    multEq: 1,
    multStone: 0.5,
  },
  ...Infected.map((x) => Object.assign({}, x, { eqType: ['ring', 'belt'] })),
];
