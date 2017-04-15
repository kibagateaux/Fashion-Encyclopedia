import React from 'react';
import { Input } from './general';

const onChangeText = (e) => {
   console.log("Search changetext");
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
