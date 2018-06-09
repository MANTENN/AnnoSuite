(function() {
    var annoweb = function () {
        //Function Declarations
        this.keyboardTextSelection = function(e) {
            return e.shiftKey && e.keyCode >= 37 && e.keyCode <= 40
        }
        this.mouseDown = function (e) {
            if(this.keyboardTextSelection(e)) {
                console.log("Text selected!");
            }
            console.log(e);
        }
        this.keyDown = function (e) {
            console.log(e);
        }
        this.init = function () {
            console.log("Initializing Annoweb...")
            window.addEventListener("mousedown", annoweb.mouseDown)
            window.addEventListener("keydown", annoweb.mouseDown)
            this.state = {
                'textSelected': false,
                'comments': {
                    'visible': false,
                },
                'highlights': {
                    'visible': false,
                }
            };
            this.config = {
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
        }
        //@TODO: Wrap Individual Elements or Group Wrap
        //@TODO: Implement saving method
        var elementSelector = function () {
            return arguments.map(function(element) {
                return document.getElementById('element');
            });
        }
        this.addHighlight = function (element) {
            //@TODO: Append to the dom, add it to indexed DB
        }
        this.removeHighlight = function (element, id) {
            //@TODO: Remove from the dom, and remove it from indexed DB
        }
        this.addComment = function (comment) {
            //@TODO: Append to the dom, and add it to indexedb
        }
        this.removeComment = function (comment, id) {
            //@TODO: Remove from the dom, and remove it from indexedb
        }
        this.addNotes = function (note) {
            this.storeData({type: 'note', data: note})
        }
        this.removeNote = function (element, noteId) {

        }
        this.storeData = function (item) {
            var itemData = JSON.parse(local.storage.getItem(item.type))
            if(!itemData && itemData.construc) {
                itemData.push(item.data);
                return true;
            }
            return false;
        }
        //based on the precondition that data is sorted
        this.removeData = function(type, id) {
            var itemData = JSON.parse(localStorage.getItem(type))
            if(!itemData) {
                return false
            }
            itemData[id] = false;
            return true;
        }
        console.log(this)
        //Coupling Area
        this.init.bind(this);
        this.mouseDown.bind(this);
        this.keyDown.bind(this);
    };
    annoweb = new annoweb();
    annoweb.init()
})();