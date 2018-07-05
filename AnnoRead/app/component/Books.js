import React, { Component } from 'react';
import { FlatList, View } from 'react-native';

import H1 from '../atom/typography/H1'
import Book from './Book'

export default class Books extends Component {

    state = {
        books: [{
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
    }

    _keyExtractor = ({id}, key) => "" + id;

    _renderItem = ({item}) => {
        return (
            <Book {...item} />
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
                style={{flex: 1, width: '100%', padding: 20, backgroundColor: '#f1f1f1'}}
                ListHeaderComponent={<H1 bold>Self-Improvement</H1>}
                ListFooterComponent={<View style={{ height: 0, marginBottom: 30 }}></View>}
                data={books}
                extraData={this.state.books}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />
        );
    }
}