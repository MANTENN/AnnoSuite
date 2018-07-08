import React , { Component } from 'react'
import { TouchableWithoutFeedback, Text, View, Animated, StyleSheet } from 'react-native'

export default class Panel extends Component {
    constructor(props) {
        super(props)
        this.hideOverlay = this.hideOverlay.bind(this)
    }
    state = {
        bottom: new Animated.Value(-10000)
    }
    hideOverlay() {
        let { hideOverlay } = this.props
        this.setState({bottom: new Animated.Value(0)})
        Animated.timing(
            this.state.bottom, {
                toValue: -10000,
                duration: 1000
            }
        ).start();
        hideOverlay()
    }
    componentDidMount() {
        Animated.timing(
            this.state.bottom,
            {
                toValue: 100,
                duration: 1000
            }
        ).start();  
    }
    render () {
        let { hideOverlay } = this
        let { bottom } = this.state;
        let { overlay, style } = this.props;
        return overlay ? (
            <Animated.View style={{...StyleSheet.flatten(style), bottom}}>
                <TouchableWithoutFeedback onPress={hideOverlay}>
                    <View style={{flex: 1}}>
                        <Text>Panel</Text>  
                    </View>
                </TouchableWithoutFeedback>
            </Animated.View>
        ) : (null)
    }
}