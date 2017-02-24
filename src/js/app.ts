class ShowTitle {
    constructor(public title: string) { }
    show() {
        return "<h1>" + this.title + "</h1>";
    }
};

var title = new ShowTitle(window.document.title);
    
document.body.innerHTML = title.show();