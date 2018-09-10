'use strict';

import Realm from 'realm'

class Author extends Realm.Object {}
Author.schema = {
    name: 'Author',
    properties: {
        firstName: 'string',
        middleName: 'string',
        lastName: 'string'
    }
}
class Categories extends Realm.Object {}
Categories.scheme = {
    name: 'Categories',
    properties: {
        id: 'int',
        name: 'string'
    }
}
class Books extends Realm.Object {}
Books.schema = {
    name: 'Books',
    properties: {
        id: 'int',
        image: 'string',
        title: 'string',
        description: 'string',
        author: 'Author'
    }
}

class Searches extends Realm.Object {}
Searches.schema = {
    name: 'Searches',
    properties: {
        value: 'string'
    }
}

export default new Realm({schema: [Author, Books, Searches]})