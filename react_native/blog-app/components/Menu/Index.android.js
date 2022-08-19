import React, { useState, useEffect } from 'react';
import { DrawerLayoutAndroid, TouchableNativeFeedback, View } from 'react-native';

import ListDrawerLayout from './ListDrawerLayout';
import HeaderDrawerLayout from './HeaderDrawerLayout';

const Menu = (props) => {
  const [State, setState] = useState({
    selectedItem: ''
  });

  let newItem;
  if(props.initialEntry){
    newItem = props.initialEntry;
  }else{
    newItem = props.entries[0].id;
  }
  
  useEffect(() => {
    setState({
      selectedItem: newItem
    });
  }, []);
  const _onSectionChange = (section) => {

  }
  const _openMenu = () => {

  }
  const _renderNavigationView = () => {

  }
  const _renderContent = () => {

  }
  
  return (
    <DrawerLayoutAndroid
      ref={ref => { _drawer = ref }}
      {...props}
      renderNavigationView={_renderNavigationView}
    >
      {_renderContent()}
    </DrawerLayoutAndroid>
  )
}