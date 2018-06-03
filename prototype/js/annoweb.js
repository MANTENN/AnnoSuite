(function() { 
    var annoweb = function () {
        this.init
    };
    annoweb.init = function () {
        var self = this;
        this.setDefaults = function (commentColor, highlightColor) {
            if(commentColor && highlightColor && commentColor.length == 6 && highlightColor.length == 6) {
                this.config.state.comments.color = commentColor;
                this.config.state.highlights.color = highlightColor;
                return true;
            }
            return false;
        }
        this.config = {
            'state': {
                'comments': {
                    'visible': false,
                    'color': '',
                    'eat': function () {
                        console.log(this);
                    }
                },
                'highlights': {
                    'visible': false,
                    'color': ''
                }
            },
            'comments': {
                'colors': {
                    //@TODO: store hex values
                    'default': {
                        'yellow': 'fdffb3',
                        'purple': 'd5b3ff'
                    },
                }
            },
            'highlights': {
                'colors': {
                    'default': {
                        'yellow': 'fdffb3',
                        'purple': 'd5b3ff'
                    }
                }
        }
    };
    var state = this.setDefaults(this.config.comments.color, this.config.highlights.color);
    console.log(state);
    if(!state) {
        console.log("Initial state failed initialization process.")
    }
    console.log(this.config);

        //@TODO: Initialize Default Configuration
        //@TODO: Add Event Listener on Page Load
    }
    //@TODO: Wrap Individual Elements or Group Wrap
    //@TODO: Implement saving method 
    var elementSelector = function () {
        return arguments.map(function(element) {
            return document.getElementById('element');
        });
    }
    annoweb.addHighlight = function (element) {

    }
    annoweb.removeHighlight = function (element, id) {

    }
    annoweb.addComment = function (comment) {

    }
    annoweb.removeComment = function (comment, id) {

    }
    annoweb.addNotes = function (note) {
        this.storeData({type: 'note', data: note})
    }
    annoweb.removeNote = function (element, noteId) {

    }
    annoweb.storeData = function (item) {
        var itemData = JSON.parse(local.storage.getItem(item.type))
        if(!itemData && itemData.construc) {
            itemData.push(item.data);
            return true;
        }
        return false;
    }
    //based on the precondition that data is sorted
    annoweb.removeData = function(type, id) {
        var itemData = JSON.parse(localStorage.getItem(type))
        if(!itemData) {
            return false
        }
        itemData[id] = false;
        return true;
    }
     annoweb.init();
})();