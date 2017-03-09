import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'
import { Card, CardSection } from './common'
import StarRating from 'react-native-star-rating';

export default class ProductDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rate: props.product
    };
  }

  
  render() {
    const product = this.props.product;  
    const {
        container,
        text,
        mainContent,
        thumbnailContainerStyle,
        thumbnailStyle
    } = styles

    return (
        <Card>
            <CardSection>
                <View style={container}>
                    <View style={mainContent}>
                    {
                      product ? (          
                      <View>
                        <View style={thumbnailContainerStyle}>
                          <Image style={thumbnailStyle} source={{ uri: product.productImage }} />
                        </View>
                        <Text>Product Name: {product.productName}</Text>
                        <Text>Price: {product.price}</Text>
                        <Text>Short Description: {product.shortDesc}</Text>
                        <Text>Full Description: {product.longDesc}</Text>
                        <Text>Weight: {product.weight}</Text>
                        <Text>Dimension: {product.dimension}</Text>
                        <Text>Rating: {product.rate}</Text>
                        <StarRating disabled={true} maxStars={5} rating={product.rate} />
                      </View>
                      ):null
                    }
                    </View>
                </View>
            </CardSection>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
  text: {
    textAlign: 'center'
  },
  mainContent: {
    margin: 10,
  },
  thumbnailStyle: {
    height: 100,
    width: 100
  },
  thumbnailContainerStyle: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: 10,
    marginRight: 10
  },
})