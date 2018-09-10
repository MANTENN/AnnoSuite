import React, { Component } from 'react';
import { Text, StyleSheet} from 'react-native';

export interface Props {
    children: any,
    bold?: boolean,
    style?: any,
    color?: string
}

export default class H1 extends Component<Props> {
    render() {
        let {color, children, bold, style} = this.props;
        const styles = StyleSheet.create({
            h1: {
                color,
                fontWeight: bold ? 'bold' : null,
                fontSize: 28,
                marginTop: 10,
                marginBottom: 20
            }
        })
        return (
            <Text {...this.props} style={{...style, ...StyleSheet.flatten(styles.h1)}}>
                {children}
            </Text>
        );
    }
}
