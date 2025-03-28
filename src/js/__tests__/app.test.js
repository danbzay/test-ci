import {healthStatus, regroup, getLevel} from '../app.js';
import fetchData from '../http';

const party = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
];

const partySorted = [
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
  {name: 'мечник', health: 10},
];

test('regroup!', () => {
  expect(regroup(party)).toEqual(partySorted);
});

test('health is important', () => {
  expect(healthStatus({'name':'mage', 'health':90})).toBe('healthy');
  expect(healthStatus({'name':'mage', 'health':40})).toBe('wounded');
  expect(healthStatus({'name':'mage', 'health':10})).toBe('critical');
});

jest.mock('../http');
beforeEach(() => {
  jest.resetAllMocks();
});

test('some calls of user 1', () => {
  fetchData.mockReturnValue({status:'ok', level:'top'});
  expect(getLevel(1)).toBe('Ваш текущий уровень: top');
  fetchData.mockReturnValue({status:'not so ok', level:'hidden'});
  expect(getLevel(1)).toBe('Информация об уровне временно недоступна');
  expect(fetchData).toHaveBeenCalledWith(`https://server/user/1`);
});
