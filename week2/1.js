// class Rectangle {
//     constructor(width, height, color) {
//         this.width = width;
//         this.height = height;
//         this.color = color;
//     }

//     area() {
//         const area = this.width * this.height;
//         return area;
//     }

//     paint() {
//         console.log(`Painting with color ${this.color}`);
//     }

// }

// const rect = new Rectangle(2, 4, "red")
// const area = rect.area();
// const paint = rect.paint()
// console.log(area)




// function setTimeoutPromisified(ms) {
//    return new Promise(resolve => setTimeout(resolve, ms));
// }

// function callback() {
//     console.log("3 seconds have passed");
// }

// // setTimeoutPromisified(3000).then(callback);  

// let p = setTimeoutPromisified(3000);
// console.log(p)


function wait2sec(resolve) {
    setTimeout(resolve, 2000);
}

function greet(){
    console.log("Hello");
}

wait2sec(greet);