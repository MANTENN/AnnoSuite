import React from 'react'
import { View, ScrollView, Text, TextInput } from 'react-native'
import realm from '../Realm'

import H3 from '../../atom/typography/H3'
import H4 from '../../atom/typography/H4'


export default class Search extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = {
            searches: realm.objects('Searches'),
            searchQuery: ""
        }
        this.handleSearch = this.handleSearch.bind(this)
    }
    handleSearch() {
        let { searchQuery } = this.state
        try {
            realm.write(() => {
                realm.create('Searches', {
                    value: searchQuery
                })
            })
        }
        catch(e) {
            console.error("Error", e)
        }
        this.setState({searches: realm.objects('Searches'), searchQuery: ""})
    }
    render() {
        let categories = [0,0,0,0,0,0,0,0,0,0]
        let { searches } = this.state;
        return (
            <View>
                <H3 color={"#383838"} bold>Quick Search</H3>
                <H4 color={"#00ACF8"} bold>By Category</H4>
                <ScrollView horizontal style={{flex: 1, flexDirection: 'row',paddingVertical: 20}}>
                    {categories.map((catName, id) => (
                        <View key={id} style={{height: 50, width: 50, borderRadius: 50, borderColor: '#000', borderWidth: 1, marginLeft: 10, flex: 1, justifyContent: 'center', alignContent: 'center'}}>
                            <Text>
                                {catName}
                            </Text>
                        </View>
                    ))}
                </ScrollView >
                <H4 color={"#00ACF8"} bold>Previous Searches</H4>
                <ScrollView style={{flex: 1, flexDirection: 'row',paddingVertical: 20}}>
                    {Object.keys(searches).map((key, id) => (
                        <View key={id} style={{ marginLeft: 10, paddingVertical: 5}}>
                            <H4>
                                {searches[key].value}
                            </H4>
                        </View>
                    ))}
                </ScrollView >
                <TextInput
                    underlineColorAndroid={'rgba(0,0,0,0)'}
                    style={{height: 40, borderColor: "#ccc", borderWidth: 2, borderRadius: 10, paddingHorizontal: 10}}
                    value={this.state.searchQuery}
                    onChangeText={
                        (searchQuery) => this.setState({searchQuery})
                    }
                    placeholder={"What book are we looking for?"}
                    blurOnSubmit
                    onSubmitEditing={this.handleSearch}
                />
            </View>
        )
    }
}