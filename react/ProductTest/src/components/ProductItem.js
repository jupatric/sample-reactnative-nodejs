import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection, Card } from './common';

export default class ProductItem extends Component {
  onRowPress = product => () => { 
    Actions.productDetail({ product: product });
  }

  render() {
    const { products } = this.props;
    const {container} = styles

    return (
        <View style={container}>
        { products && products.length ? (
             products.map((product, i) => {
                return (
                    <TouchableWithoutFeedback key={i} onPress={this.onRowPress(product)}>
                        <View>
                            <Card>
                                <CardSection>                 
                                    <View>
                                        <Text>Product Name: {product.productName}</Text>
                                        <Text>Price: {product.price}</Text>
                                        <Text>Description: {product.shortDesc}</Text>
                                        <Text>Rating: {product.rate}</Text>
                                    </View>
                                </CardSection>
                            </Card>
                        </View>
                    </TouchableWithoutFeedback>
                    )
                })
            ):null
        }
        </View>
        );
  }
}

const styles = {
  container: {
    marginTop: 10
  },
  text: {
    textAlign: 'center'
  }
};