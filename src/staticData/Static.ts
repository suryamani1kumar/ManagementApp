import { dropdown } from '../utils/Type';

const Player: dropdown[] = [
  // { id: 0, name: 'Select Player', value: 0 },
  { id: 1, name: 2, value: 2 },
  { id: 2, name: 3, value: 3 },
  { id: 3, name: 4, value: 4 },
  { id: 4, name: 6, value: 6 },
  { id: 5, name: 7, value: 7 },
  { id: 6, name: 10, value: 10 },
];

const CreateBy: dropdown[] = [
  // { id: 0, value: 'Select field', name: 'Select field' },
  { id: 1, value: 'Own', name: 'Own' },
  { id: 2, value: 'Friend', name: 'Friend' },
  { id: 3, value: 'Telegram', name: 'Telegram' },
  { id: 4, value: 'Own And Friend', name: 'Own And Friend' },
  { id: 5, value: 'Own And Telegram', name: 'Own And Telegram' },
  { id: 6, value: 'Friend And Telegram', name: 'Friend And Telegram' },
];

const staticdata = {
  Player: Player,
  CreateBy: CreateBy,
};

export default staticdata;
