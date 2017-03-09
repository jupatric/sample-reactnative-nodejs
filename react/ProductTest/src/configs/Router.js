import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import ProductList from '../components/ProductList';
import ProductDetail from '../components/ProductDetail';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 30 }}>
      <Scene key="main">
        <Scene
          key="productList"
          component={ProductList}
          title="Products"
          initial
        />
        <Scene key="productDetail" component={ProductDetail} title="Product Detail" />
        </Scene>
    </Router>
  );
};

export default RouterComponent;
