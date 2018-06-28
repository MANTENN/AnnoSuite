import React, { Component } from 'react';
import {
    Dimensions,
    Platform,
    View,
    TouchableOpacity,
    Button,
    Text
} from 'react-native';

export default class ActionTab extends Component {
    render () {
        let {title, secondaryTitle} = this.props;
        return (
            <View style={styles.ActionTab}>
                <TouchableOpacity style={styles.ActionButton}>
                    <Text style={styles.ActionButtonText}>{title}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.AlternativeActionButton}>
                    <Text style={styles.AlternativeActionButtonText}>{secondaryTitle}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styleConsts = {
    ActionButton: {
        paddingH: 50,
        paddingV: 15
    }
}
const stylesConsts = {
    tabButton: {
        color: '#707070'
    }
}
const styles = {
    ActionTab: {
        flex: 3,
        flexDirection: 'column'
    },
    ActionButton: {
        backgroundColor: '#2CC354',
        borderRadius: 50,
        paddingTop: styleConsts.ActionButton.paddingV,
        paddingBottom: styleConsts.ActionButton.paddingV,
        paddingLeft: styleConsts.ActionButton.paddingH,
        paddingRight: styleConsts.ActionButton.paddingH
    },
    ActionButtonText: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    AlternativeActionButton: {

    },
    AlternativeActionButtonText: {
        color: stylesConsts.tabButton.color,
        fontSize: 16,
        textAlign: 'center',
        flex: 1
    }
    
}