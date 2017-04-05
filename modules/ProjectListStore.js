import Dispatcher from './Dispatcher';
import { ReduceStore } from 'flux/utils';

class ProjectListStore extends ReduceStore {
  getInitialState() {
    return [
      { id: 'P0', projectName: 'The best project ever',
        filename: '10k-diabetes-train.csv', createdAt: new Date('2017-04-01'), role: 'Admin' },
      { id: 'P1', projectName: 'Just testing some stuff',
        filename: 'fastiron-sample.csv', createdAt: new Date('2017-01-01'), role: 'Owner' },
      { id: 'P2', projectName: 'Mama, just killed a man',
        filename: 'listofpeopleiwannamurder.csv', createdAt: new Date('2016-08-01'), role: 'Admin' },
      { id: 'P3', projectName: 'My hands are typing',
        filename: 'hdfs://storage.nsa.gov/citizens-browsing-history', createdAt: new Date('2017-04-01'), role: 'Observer' },
      { id: 'P4', projectName: 'This is why I\'m hot',
        filename: 'tinder-big-data.csv', createdAt: new Date('2012-04-01'), role: 'Owner' },
    ];
  }

  reduce(projects, message) {

  }
}

export default new ProjectListStore(Dispatcher);
