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
    onPress: EventHandler,
    _onPress: EventHandler,
}

export default class ActionTab extends Component<Props> {
    render () {
        let {title, _title, onPress, _onPress} = this.props;
        return (
            <View style={styles.ActionTab}>
                <TouchableHighlight style={styles.ActionButton} onPress={onPress} underlayColor={styleConsts.ActionButton.underlayColor}>
                    <Text style={styles.ActionButtonText}>{title}</Text>
                </TouchableHighlight>
                <TouchableOpacity style={styles.AlternativeActionButton} onPress={_onPress}>
                    <Text style={styles.AlternativeActionButtonText}>{_title}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styleConsts = {
    ActionButton: {
        paddingH: 10,
        paddingV: 10,
        underlayColor: '#21B248'
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
    ActionButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2CC354',
        borderRadius: 50,
        marginTop: -30,
        paddingTop: styleConsts.ActionButton.paddingV,
        paddingBottom: styleConsts.ActionButton.paddingV,
        paddingLeft: styleConsts.ActionButton.paddingH,
        paddingRight: styleConsts.ActionButton.paddingH,
        zIndex: 9
    },
    ActionButtonText: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    AlternativeActionButton: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    AlternativeActionButtonText: {
        color: stylesConsts.tabButton.color,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    }
    
})