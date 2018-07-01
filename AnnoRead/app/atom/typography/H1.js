import React, { Component } from 'react';
import { Text, StyleSheet} from 'react-native';

export default class H1 extends Component {
    render() {
        let {children, bold} = this.props;
        const styles = StyleSheet.create({
            h1: {
                fontWeight: bold ? 'bold' : null,
                fontSize: 28
            }
        })
        return (
            <Text {...this.props} style={styles.h1}>
                {children}
            </Text>
        );
    }
}
