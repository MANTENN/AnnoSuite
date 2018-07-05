import React, { Component } from 'react';
import {
  StatusBar,
  Platform,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableWithoutFeedback,
  ScrollView
} from 'react-native';

import H1 from '../atom/typography/H1'

export default class Book extends Component {
    constructor() {
        super()
    }
    state = {
        opened: false
    }
    render() {
        let { opened } = this.state
        let {image, title, author, description} = this.props;

        const styles = opened ?
        StyleSheet.create({
            book: {
                flex: 1,
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 2
            }
        }) :
        StyleSheet.create({
            book: {
                flex: 1,
                height: 450,
                width: '100%',
                marginBottom: 10,
                padding: 10,
                backgroundColor: "#fff",
                shadowColor: 'black',
                shadowOpacity: 0.15,
                shadowRadius: 90,
                borderRadius: 10,
                borderColor: '#ccc',
                borderWidth: 2,
                zIndex: 1,
            }
        })

        return (
            //Perform some action there, styling is messed up
            <TouchableWithoutFeedback onPress={() => false}>
                <View style={styles.book}>
                    <Image source={image}/>
                    <H1 bold>{title}</H1>
                    <Text>{author.firstName + " " + author.middleName + " " + author.lastName}</Text>
                    <Text>{description}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}