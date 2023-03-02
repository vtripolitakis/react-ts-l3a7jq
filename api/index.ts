import { transformData } from '../util';
import { IChartData } from '../interfaces';

const data = {
  'John Doe': {
    age: 80,
    firstName: 'John',
    lastName: 'Doe',
    city: 'New York',
  },

  'Bill Smith': {
    age: 35,
    firstName: 'Bill',
    lastName: 'Smith',
    city: 'London',
  },
  'Sheldon Cooper': {
    age: 29,
    firstName: 'Sheldon',
    lastName: 'Cooper',
    city: 'Pasadena',
  },
};

const apiGetData = (): IChartData[] => {
  // preprocess and check for invalid data
  return transformData(data);
};

export { apiGetData };
