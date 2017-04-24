import data from '../data';
import _ from 'lodash';


   // what does the search interface look like?
   // self-implementation
  // loop keyword array / desc and see if word is included
    // hella inefficient
  // see if query has word to narrow search down initially
    // e.g. if it containts shoes, can narrow search to shoes
    // automatically drastically reducing search field
// Lazy way
   // must be an npm package for object searches
   //
const categoryKeys = {}
const classKeys = (Object.keys(data).map(key => {
    categoryKeys[key] = data[key].map(x => x.name);
    return key
  }))
const searchKeys = () => {
  //search class keys first to narrow serach immediately
  // if class is not mentioned than loop of category keys
  //
}

searchKeys()

 // console.log(searchKeys());
 console.log("searchKeys categories");
  console.log(categoryKeys);
   console.log("searchKeys classes");
  console.log(classKeys);
// object where each value is classType
//  value is array of all nested objects
// e.g. shoes : [boots, sneaks, converse]

const search = (query: string) => {


}
