import React, { Component, EventHandler } from 'react';
import {
    StyleSheet,
    Dimensions,
    Platform,
    View,
    TouchableHighlight,
    TouchableOpacity,
    Button,
    Text
} from 'react-native';

export interface Props {
    title: string,
    _title: string,
    onPress: () => void ,
    _onPress: () => void,
}

export default class ActionTab extends Component<Props> {
    render () {
        let {title, _title, onPress, _onPress} = this.props;
        return (
            <View style={styles.ActionTab}>
                <TouchableOpacity style={styles.AlternativeActionButton} onPress={_onPress}>
                    <Text style={styles.AlternativeActionButtonText}>{_title}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const stylesConsts = {
    tabButton: {
        color: '#707070'
    }
}
const styles = StyleSheet.create({
    ActionTab: {
        flex: 1.75,
        flexDirection: 'column'
    },
    AlternativeActionButton: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 8
    },
    AlternativeActionButtonText: {
        color: stylesConsts.tabButton.color,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    }
    
})