import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import ProductItem from './ProductItem';
import { productRequest } from '../actions/ProductActions';
import { Header } from './common';

class ProductList extends Component {
    
  componentWillMount() {
    this.props.productList();
    if(this.props.appData && this.props.appData.products.length > 0 ){
        this.createDataSource(this.props.appData.products);
    }
  }

  componentWillReceiveProps(nextProps) {
      this.createDataSource(nextProps);
  }

  createDataSource({ products }) {
    if(products){
        const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(products);
    }
  }

  renderRow(productItem) {
      return <ProductItem products={productItem} />;
  }

  render() {
    const {
        container,
        mainContent,
        loadingContent
    } = styles
    
    const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    });
    console.log('kkkkkkkk'+JSON.stringify(this.props))
    return (
      <View style={container}>
        <View style={mainContent}>
        { this.props.appData.isLoading && <ActivityIndicator style={loadingContent}
        size="large"/>}
        { this.props.appData && this.props.appData.products.length ?
         <ListView
           enableEmptySections
           dataSource={ds.cloneWithRows(this.props.appData)}
           renderRow={this.renderRow}
         /> : null
         }
        </View>
      </View>
      );

    /*const props = this.props;
  
    const {
        container,
        mainContent
    } = styles

    return (
        <View style={container}>
        <View style={mainContent}>
      {
        props.appData.isLoading && <Text>Loading</Text>
      }
      { props.appData && props.appData.products.length &&
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        }
      </View>
    </View>
    );*/
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
  mainContent: {
    margin: 10,
  },
  loadingContent:{
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 100
  }
})

function mapStateToProps (state) {
  return {
    appData: state.productReducer
  }
}

function mapDispatchToProps (dispatch) {
  return {
    productList: () => dispatch(productRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)