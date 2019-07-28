import React, { Component } from 'react';
import { Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Tab1 from './tab1';
import Tab2 from './tab2';

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="tabbar"
          tabs={true}
          tabBarStyle={{ backgroundColor: '#FFF'}}
          >
          
          <Scene key="tab1" title='tab1' >
            <Scene
              key="tab1"
              title="TITLE"
              component={Tab1}
              initial
            />
          </Scene>

          <Scene key="tab2">
            <Scene
              key="tab2"
              component={Tab2}
            />
          </Scene>


        </Scene>
      </Scene>
    </Router>
  );
}

export default App;