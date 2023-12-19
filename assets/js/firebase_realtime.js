import { App } from './Firebase/App.js'
import { Database } from './Firebase/Database.js'

const app = await App.init();
const database = new Database(app);

database.write('Sally', { name: 'Sally Huang', age: 10, item: ['a', 'b', 'c', 'd'] })