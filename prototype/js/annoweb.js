(function() {
    var annoweb = function () {
        var prepPage = function () {
            var annoWrapper = document.createElement("div");
            annoWrapper.classList.add("annoweb");
            annoWrapper.classList.add("anno-quick-access-bar");
            annoWrapper.innerHTML = `<div class="annoweb anno-quick-access-bar">
                <div class="annoweb anno-container">
                    <div class="annoweb anno-feature-options">
                        <div class="annoweb anno-feature-container">
                            <div class="annoweb anno-header anno-float">
                                <h1 class="annoweb anno-title anno-fl">Settings</h1>
                                <span class="annoweb anno-close anno-fr">X</span>
                            </div>
                            <div class="annoweb anno-settings anno-settings-section">
                                <div class="annoweb anno-field anno-group">
                                    <h2>Categories</h2>
                                    <div class="annoweb anno-input">
                                        <span class="annoweb anno-tag anno-highlight-filter anno-default-yellow">
                                            Interesting
                                        </span>
                                        <span class="annoweb anno-tag anno-highlight-filter anno-default-purple">
                                            Use case
                                        </span>
    
                                    </div>
                                </div>
                            </div>
                            <div class="annoweb anno-settings anno-settings-section">
                                <div class="annoweb anno-field anno-group">
                                    <h2 style="font-weight:  bold;margin-bottom:  5px;">Colors</h2>
                                    <div class="annoweb anno-input">
                                        <span class="annoweb anno-tag anno-color anno-highlight-filter anno-default-yellow"></span>
                                        <span class="annoweb anno-tag anno-color anno-highlight-filter anno-default-purple"></span>
                                        <span class="annoweb anno-tag anno-color anno-color-add">+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="annoweb anno-panel anno-panel-left">
                        <div class="annoweb anno-group">
    
                            <input type="checkbox" id="annoweb-highlights-opt" class="annoweb anno-checkbox anno-check-slider">
                            <label for="annoweb-highlights-opt" style="
        " title="Hide/Show comments">
                                Highlights
                            </label>
                        </div>
                        <div class="annoweb anno-group">
    
                            <input type="checkbox" id="annoweb-comments-opt" class="annoweb anno-checkbox anno-check-slider">
                            <label for="annoweb-comments-opt">Comments</label>
                        </div>
    
                    </div>
                    <div class="annoweb anno-panel anno-panel-right">
                        Settings
                        <span class="annoweb anno-arrow anno-collapsed">
                            <i class="material-icons">close</i>
                        </span>
                    </div>
                </div>
            </div>`;
                window.onload = function () {
                    var bodyClass = document.body.classList;
                    bodyClass.add("annoweb")
                    bodyClass.add("anno-spacer")
                    document.body.prepend(annoWrapper);
                    console.log(annoWrapper);
            }
        }
        prepPage();
        this.keyboardTextSelection = function(e) {
            return e.shiftKey && e.keyCode >= 37 && e.keyCode <= 40
        }
        this.mouseDown = function (e) {
            var selectedText = window.getSelection();
            if(selectedText.isCollapsed)
            console.log(window.getSelection());
        }
        this.keyDown = function (e) {
            if (this.keyboardTextSelection(e)) {
                console.log("Text selected!");
                console.log(window.getSelection());
            }
        }
        this.init = function () {
            console.log("Initializing Annoweb...")
            window.addEventListener("mousedown", annoweb.mouseDown.bind(this))
            window.addEventListener("keydown", annoweb.mouseDown.bind(this))
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
        this.toggleVisibility = function (type) {

            if(type == "comment") {
                var htmlCommentCollection = document.getElementsByClassName(".annoweb.anno-comment.anno-default-yellow.anno-note")
                console.log(htmlCollection)
                var commentElements = Array.prototype.slice().call(htmlCollection);
                commentElements.map(function (item) {
                    item.toggleClass("anno-visible");
                })
            } else
            if(type == "highlight") {

            }
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