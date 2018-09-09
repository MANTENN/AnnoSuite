import React from 'react'
import { ScrollView, TouchableWithoutFeedback, Text, View, Animated, StyleSheet } from 'react-native'

import Filter from '../component/Panels/Filter'
import Search from '../component/Panels/Search'
import MoreOptions from '../component/Panels/MoreOptions'

import H1 from './typography/H1'

export interface Props {
    title?: string,
    children?: any,
    hideOverlay: Function,
    overlay: Number,
}

interface State {
    bottom: Animated.Value,
    opacity?: Animated.Value,
    panelHeight?: Number,
    panelText?: String,
}

export default class Panel extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.hideOverlay = this.hideOverlay.bind(this)
        this.PanelContent = this.PanelContent.bind(this)
    }
    state = {
        bottom: new Animated.Value(-10000),
        opacity: new Animated.Value(0),
    }
    hideOverlay() {
        let { hideOverlay } = this.props
        // this.setState({bottom: new Animated.Value(0)})
        Animated.parallel([
            Animated.timing(
                this.state.bottom, {
                    toValue: -10000,
                    duration: 500,
                }
            ),
            Animated.timing(
                this.state.opacity, {
                    toValue: 0,
                    duration: 500,
                }
            )
        ]).start();
        hideOverlay()
    }
    componentDidMount() {
        Animated.parallel([
            Animated.timing(
                this.state.bottom,
                {
                    toValue: 0,
                    duration: 500,
                }
            ),  
            Animated.timing(
                this.state.opacity,
                {
                    toValue: 0.25,
                    duration: 500,
                }
            )
        ]).start();  
    }

    PanelContent() {
        let { overlay } = this.props;
        switch(overlay) {
            case 0:
                return null;
            case 1:
                return (
                    <React.Fragment>
                        <H1 bold>Filter</H1>
                        <Filter />
                    </React.Fragment>
                )
            case 2:
                return (
                    <React.Fragment>
                        <H1 bold>More Options</H1>
                        <MoreOptions />
                    </React.Fragment>
                )
            case 3:
                return (
                    <React.Fragment>
                        <Search />
                    </React.Fragment>
                )
            default: 
                return null;

        }
    }
    render () {
        let { hideOverlay, PanelContent } = this
        let { bottom, opacity } = this.state;
        let { title, overlay} = this.props;
        return overlay ? (
            <React.Fragment>
                <TouchableWithoutFeedback onPress={hideOverlay}>
                    <Animated.View style={{position: 'absolute', backgroundColor: '#000', opacity, flex: 1, height: "100%", width: "100%"}} />
                </TouchableWithoutFeedback>
                <Animated.View style={{position: 'absolute', backgroundColor: '#fff', bottom, width: '100%', borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 20}}>
                    <ScrollView>
                        <View>
                            <PanelContent />
                        </View>
                    </ScrollView>
                </Animated.View>
            </React.Fragment>
        ) : null
    }
}

const styles = StyleSheet.create({
    panel: {
        flex: 1,
        width: '100%',
        // height: '100%',
        padding: 10,
        backgroundColor: '#fff',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 20,
        opacity: 1
      }
})
