import React, { Component } from 'react';
import {
  StatusBar,
  Platform,
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView
} from 'react-native';

import H1 from '../atom/typography/H1'

export default class Book extends Component {
    constructor() {
        super()
    }
    render() {
        let {image, title, author, description} = this.props;

        const styles = StyleSheet.create({
            book: {
                flex: 1,
                marginBottom: 10,
                padding: 10,
                backgroundColor: "#fff",
                shadowColor: 'black',
                shadowOpacity: 0.25,
                shadowRadius: 90,
                borderRadius: 10,
            }
        })

        return (
            <View style={styles.book}>
                <Image source={image}/>
                <H1 bold>{title}</H1>
                <Text>{author.firstName + " " + author.middleName + " " + author.lastName}</Text>
                <Text>{description}</Text>
            </View>
        );
    }
}