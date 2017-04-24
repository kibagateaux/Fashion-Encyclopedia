import React from 'react';
import { Input } from './general';
import SearchFunctions from '../lib/SearchFunctions';

const search = (query) => {


}
const onChangeText = (e) => {
   console.log("Search changetext");
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
   return;
}
export default (props) => {
   console.log("Search box rendered");
  return (
    <Input
      placeholder="Search"
      onChangeText={onChangeText}
      label=""
    />
  )
}
