import React, { Component } from 'react';
import { Text, StyleSheet} from 'react-native';

export default class H2 extends Component {
    render() {
        let {children} = this.props;
        const styles = StyleSheet.create({
            h2: {
                fontSize: 24
            }
        })
        return (
            <Text {...this.props} style={styles.h1}>
                {children}
            </Text>
        );
    }
}
