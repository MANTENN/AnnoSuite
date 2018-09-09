import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'

export default class ActionButton extends React.Component {
    render() {
        let { onPress, title } = this.props;
        return (
            <View style={styles.actionBtnContainer}>
                <View style={styles.actionBtnTab}>
                    <TouchableHighlight style={styles.ActionButton} onPress={onPress} underlayColor={styleConsts.ActionButton.underlayColor}>
                        <Text style={styles.ActionButtonText}>{title}</Text>
                    </TouchableHighlight>
                </View>
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
        // flex: .75,
        // flexDirection: 'column'
        position: 'absolute',
        margin: 'auto',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    ActionTab: {
        flex: 1.75,
        flexDirection: 'column'
    },
    ActionButton: {
        position: 'absolute',
        margin: 'auto',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: '#2CC354',
        borderRadius: 50,
        // bottom: 30,
        paddingTop: styleConsts.ActionButton.paddingV,
        paddingBottom: styleConsts.ActionButton.paddingV,
        paddingLeft: styleConsts.ActionButton.paddingH,
        paddingRight: styleConsts.ActionButton.paddingH,
        zIndex: 100
    },
    ActionButtonText: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    }
})