import React from 'react'
import { BackHandler } from '../../node_modules/@types/react-native/index';

interface State {
    mainScreen: boolean
}

export default class Screen extends React.Native<any, State> {
    constructor(props) {
        super(props)
        state = {
            mainScreen: true
        }
    }
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', () => {
            if(!this.state.mainScreen)
                return true;
            return false;
        })
    }
    render() {
        let {children, closeScreen} = this.props;
        return children;
    }
}