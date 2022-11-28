// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { SearchData } = initSchema(schema);

export {
  SearchData
};