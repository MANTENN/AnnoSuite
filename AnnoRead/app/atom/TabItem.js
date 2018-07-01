import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class TabItem extends Component {
    render () {
        let {title, icon, onPress, active} = this.props;
        return (
            <View style={styles.TabItem}>
                <TouchableOpacity onPress={onPress} style={styles.TabButton}>
                    <Icon name={icon} color={styleConsts.TabButtonText.color} style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}/>
                    <Text style={styles.TabButtonText}>{title}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styleConsts = {
    TabButton: {
        paddingH: 10,
        paddingV: 19
    },
    TabButtonText: {
        color: '#707070'
    }
}

const styles = StyleSheet.create({
    TabItem: {
        flex: 1,
        justifyContent: 'center'
    },
    TabButton: {
        paddingTop: styleConsts.TabButton.paddingV,
        paddingBottom: styleConsts.TabButton.paddingV,
        paddingLeft: styleConsts.TabButton.paddingH,
        paddingRight: styleConsts.TabButton.paddingH
    },
    TabIcon: {
        flex: 1
    },
    TabButtonText: {
        fontSize: 16,
        color: styleConsts.TabButtonText.color,
        textAlign: 'center',
        fontWeight: 'bold',
    }
})