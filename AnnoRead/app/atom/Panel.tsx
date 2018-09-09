import React from 'react'
import { TouchableWithoutFeedback, Text, View, Animated, StyleSheet } from 'react-native'

export interface Props {
    children?: any,
    hideOverlay: Function,
    overlay: Number,
    style: any
}

interface State {
    bottom: any,
    panelHeight?: Number,
    panelText?: String,
}

export default class Panel extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.hideOverlay = this.hideOverlay.bind(this)
    }
    state = {
        bottom: new Animated.Value(-10000)
    }
    hideOverlay() {
        let { hideOverlay } = this.props
        // this.setState({bottom: new Animated.Value(0)})
        Animated.timing(
            this.state.bottom, {
                toValue: -10000,
                duration: 3000
            }
        ).start();
        hideOverlay()
    }
    componentDidMount() {
        Animated.timing(
            this.state.bottom,
            {
                toValue: 60,
                duration: 3000
            }
        ).start();  
    }

    render () {
        let { hideOverlay } = this
        let { bottom } = this.state;
        let { overlay, style } = this.props;
        return overlay ? (
            <Animated.View style={{position: 'absolute', backgroundColor: '#fff', bottom, width: '100%'}}>
                <TouchableWithoutFeedback onPress={hideOverlay}>
                    {this.props.children}
                </TouchableWithoutFeedback>
            </Animated.View>
        ) : (null)
    }
}