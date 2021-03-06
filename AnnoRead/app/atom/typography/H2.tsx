import React, { Component } from 'react';
import { Text, StyleSheet} from 'react-native';

export interface Props {
    children: Object,
    bold?: boolean
}

export default class H2 extends Component<Props> {
    render() {
        let {children} = this.props;
        const styles = StyleSheet.create({
            h2: {
                fontSize: 24
            }
        })
        return (
            <Text {...this.props} style={styles.h2}>
                {children}
            </Text>
        );
    }
}
