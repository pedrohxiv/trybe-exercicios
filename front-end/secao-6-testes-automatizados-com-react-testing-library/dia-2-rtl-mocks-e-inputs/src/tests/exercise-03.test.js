import rollMultipleDice from '../service/rollMultipleDice';
import attackEnemy from '../service/attackEnemy';

jest.mock('../service/rollMultipleDice');

it('testa uma vitória na função `attackEnemy`', () => {
  rollMultipleDice.mockReturnValueOnce(40);
  const funcAttackEnemy = attackEnemy(2, 20, { name: 'Coringa', defensePoints: 30 });
  expect(funcAttackEnemy.success).toBe(true);
  expect(rollMultipleDice).toHaveBeenCalledTimes(1);
});

it('testa uma derrota na função `attackEnemy`', () => {
  rollMultipleDice.mockReturnValueOnce(20);
  const funcAttackEnemy = attackEnemy(2, 20, { name: 'Coringa', defensePoints: 30 });
  expect(funcAttackEnemy.success).toBe(false);
  expect(rollMultipleDice).toBeCalledTimes(1);
});

it('testa um empate nos dados, gerando derrota no `attackEnemy`', () => {
  rollMultipleDice.mockReturnValueOnce(30);
  const funcAttackEnemy = attackEnemy(2, 20, { name: 'Coringa', defensePoints: 30 });
  expect(funcAttackEnemy.success).toBe(false);
  expect(rollMultipleDice).toBeCalledTimes(1);
});
