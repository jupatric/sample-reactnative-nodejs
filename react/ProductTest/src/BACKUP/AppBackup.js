import React, {Component} from 'react'
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native'

import { connect } from 'react-redux'
import { productRequest } from '../actions/ProductActions'


class App extends Component{

onPress = () => {
  this.props.productList();
  console.log(this.props);
}

componentWillMount() {
    this.props.productList();
  }

render() 
{ 
  const props = this.props;
  
  const {
    container,
    text,
    button,
    buttonText,
    mainContent
  } = styles

  return (
    <View style={container}>
      <Text style={text}>Product</Text>
      {/*<TouchableHighlight style={button} onPress={this.onPress}>
        <Text style={buttonText}>Load Data</Text>
      </TouchableHighlight>*/}
      <View style={mainContent}>
      {
        props.appData.isLoading && <Text>Loading</Text>
      }
      {
        props.appData && props.appData.products.length ? (
          props.appData.products.map((product, i) => {
            return <View key={i} >
              <Text>Product Name: {product.productName}</Text>
              <Text>Price: {product.price}</Text>
              <Text>Description: {product.longDesc}</Text>
              <Text>Weight: {product.weight}</Text>
              <Text>Dimension: {product.dimension}</Text>
              <Text>Rating: {product.rate}</Text>
            </View>
          })
        ) : null
      }
      </View>
    </View>
  )
}
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100
  },
  text: {
    textAlign: 'center'
  },
  button: {
    height: 60,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff'
  },
  buttonText: {
    color: 'white'
  },
  mainContent: {
    margin: 10,
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

export default connect(mapStateToProps, mapDispatchToProps)(App)