import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export interface Props {
    children: Object,
    bold?: boolean,
    color?: string
}

export default class H4 extends Component<Props> {
    render() {
        let {children, bold, color} = this.props;
        const styles = StyleSheet.create({
            h4: {
                color,
                fontWeight: bold ? "bold": null,
                fontSize: 16
            }
        })
        return (
            <Text {...this.props} style={styles.h4}>
                {children}
            </Text>
        );
    }
}
