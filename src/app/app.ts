import "../style/style.scss";

class App {
    private title: string;

    constructor(name: string) {
        this.title = name;
    }

    public showTitle(): string {
        return this.title;
    }
};

let app: any = new App("D3 Lab");
document.getElementById("appName").innerHTML = app.showTitle();
