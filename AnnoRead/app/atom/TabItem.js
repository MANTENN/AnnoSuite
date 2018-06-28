import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    Text
} from 'react-native';

export default class TabItem extends Component {
    render () {
        let {title, secondaryTitle} = this.props;
        return (
            <View style={styles.TabButton}>
                <TouchableOpacity style={styles.TabButton}>
                    <Image />
                    <Text style={styles.TabButtonText}>{title}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styleConsts = {
    TabButton: {
        paddingH: 50,
        paddingV: 15
    }
}

const styles = {
    TabButton: {
        flex: 3,
        flexDirection: 'column'
    },
    TabButton: {
        backgroundColor: '#2CC354',
        borderRadius: 50,
        paddingTop: styleConsts.TabButton.paddingV,
        paddingBottom: styleConsts.TabButton.paddingV,
        paddingLeft: styleConsts.TabButton.paddingH,
        paddingRight: styleConsts.TabButton.paddingH
    },
    TabButtonText: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    }
}