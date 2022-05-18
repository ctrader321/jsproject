
// rectangle class
class Rectangle {
    constructor(public width: number, public height: number) {
    }

    // add a div type Rectangle to the DOM and display the perimeter
    draw() {
        let div = document.createElement('div');
        div.innerHTML = this.toString();
        document.body.appendChild(div);
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return (this.width + this.height) * 2;
    }

    toString() {
        return `[Rectangle ${this.width}x${this.height}]`;
    }
}
