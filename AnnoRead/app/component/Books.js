import React, { Component } from 'react';
import { FlatList, View } from 'react-native';

import H1 from '../atom/typography/H1'
import Book from './Book'

import Realm from 'realm'

export default class Books extends Component {

    state = {
        books: []
    }
    
    componentWillMount() {
        Realm.open({
            schema: [
                {
                    name: 'Book',
                    properties: {
                        id: 'int',
                        image: 'string',
                        title: 'string',
                        description: 'string',
                        author: 'Author'
                    }
                },
                {
                    name: 'Author',
                    properties: {
                        firstName: 'string',
                        middleName: 'string',
                        lastName: 'string'
                    }
                }
            ]
        }).then(realm => {
            realm.write(() => {
                realm.create('Book', {
                    id: 1,
                    image: '',
                    title: 'The American Revolution',
                    description: 'Lorem ipsum...',
                    author: {
                        firstName: 'John',
                        middleName: 'Shorty',
                        lastName: 'Stanford'
                    }
                })
                realm.create('Book', {
                    id: 2,
                    image: '',
                    title: 'The American Civil War',
                    description: 'Lorem ipsum...',
                    author: {
                        firstName: 'John',
                        middleName: 'Isakov',
                        lastName: 'Frugher'
                    }
                })
                realm.create('Book', {
                    id: 3,
                    image: '',
                    title: 'The Rise of America',
                    description: 'Lorem ipsum...',
                    author: {
                        firstName: 'Lenin',
                        middleName: 'Vladimirov',
                        lastName: 'Smugoskiy'
                    }
                })
            })
            this.setState({books: realm})
        })
    }

    _keyExtractor = ({id}, key) => "" + id;

    _renderItem = ({item}) => {
        return (
            <Book {...item} style={{flex: 1}}
/>
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
                    padding: 20,
                    backgroundColor: '#f1f1f1'
                }}
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