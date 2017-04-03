
import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';


import App from './App';
import ProductPage from './ProductPage';
import CategoryPage from './CategoryPage';

  export default class  extends Component{
    constructor(props){
      super(props)
    }

    render(){
      return(
        <Router>
          <Scene key="root">
            <Scene key="App" component={App} title="Fashion Encyclopedia" initial={true} hideNavBar={false}/>
             <Scene key="CategoryPage" component={CategoryPage} title="Category Page"  hideNavBar={false}/>
            <Scene key="ProductPage" component={ProductPage} title="Product Page" hideNavBar={false}/>
          </Scene>
        </Router>
      )
    }

  }

  const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
  header: {
    fontSize: 20,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  subNavItem: {
    padding: 5,
  },
  topic: {
    textAlign: 'center',
    fontSize: 15,
  }
})

