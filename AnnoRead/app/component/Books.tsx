import React, { Component } from 'react';
import { FlatList, View } from 'react-native';

import H1 from '../atom/typography/H1'
import Book from './Book'

import realm from './Realm'

interface book {
    name: string,
    properties: Object
}
export interface State {
    books: book[],
}

export default class Books extends Component<any, State> {

    state = {
        books: realm.objects('Books')
    }


    _keyExtractor = ({id}: any, key: Number) => "" + id;

    _renderItem = ({item} : any) => {
        return (
            <View style={{marginLeft: 20, marginRight: 20}}>
                <Book {...item} style={{flex: 1}} />
            </View>
        )
    }
    render() {
        const books = [{
                id: 1,
                image: null,
                title: "The American Revolution",
                description: "Lorem ipsum...",
                author: {
                    firstName: "John",
                    middleName: "Shorty",
                    lastName: "Stanford"
                }
            },
            {
                id: 2,
                image: null,
                title: "The American Revolution",
                description: "Lorem ipsum...",
                author: {
                    firstName: "John",
                    middleName: "Shorty",
                    lastName: "Stanford"
                }
            },
            {
                id: 3,
                image: null,
                title: "The American Revolution",
                description: "Lorem ipsum...",
                author: {
                    firstName: "John",
                    middleName: "Shorty",
                    lastName: "Stanford"
                }
            }
        ]
        return (
            <FlatList
                style={{
                    flex: 1,
                    width: '100%',
                    backgroundColor: '#f1f1f1'
                }}
                ListHeaderComponent={<H1 bold style={{padding: 20}}>Self-Improvement</H1>}
                ListFooterComponent={<View style={{ height: 0, marginBottom: 30}}></View>}
                data={this.state.books}
                extraData={this.state.books}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />
        );
    }
}