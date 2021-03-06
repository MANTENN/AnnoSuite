import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export interface Props {
    children: Object,
    bold?: boolean,
    color?: string
}

export default class H2 extends Component<Props> {
    render() {
        let {children, bold, color} = this.props;
        const styles = StyleSheet.create({
            h3: {
                fontWeight: bold ? "bold": null,
                color,
                fontSize: 20
            }
        })
        return (
            <Text {...this.props} style={styles.h3}>
                {children}
            </Text>
        );
    }
}
