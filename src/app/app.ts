import "../style/style.scss";

class App {
    title: string;

    constructor(name: string) {
        this.title = name;
    }

    showTitle(): string {
        return this.title;
    }
};

let app = new App("D3 Lab");
document.getElementById("appName").innerHTML = app.showTitle();

