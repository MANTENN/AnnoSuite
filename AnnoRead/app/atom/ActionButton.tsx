import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'

export default class ActionButton extends React.Component {
    render() {
        let { onPress, children } = this.props;
        return (
            <View style={styles.actionBtnContainer}>
                <TouchableHighlight style={styles.ActionButton} onPress={onPress} underlayColor={styleConsts.ActionButton.underlayColor}>
                    <Text style={styles.ActionButtonText}>{children}</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styleConsts = {
    ActionButton: {
        paddingH: 30,
        paddingV: 15,
        underlayColor: '#21B248'
    }
}
const stylesConsts = {
    tabButton: {
        color: '#707070'
    }
}
const styles = StyleSheet.create({
    actionBtnContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 30,
        right: 0,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    ActionTab: {
        flex: 1.75,
        flexDirection: 'column'
    },
    ActionButton: {
        backgroundColor: '#2CC354',
        borderRadius: 50,
        paddingVertical: 15,
        paddingHorizontal: 30
    },
    ActionButtonText: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    }
})