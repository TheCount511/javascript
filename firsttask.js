let name = "Fadhil Kehinde Akindele"
let courses = ["html", "css", "javascript", "node.js, design"]

console.log(name);
console.log(courses);

if (courses.length % 2 == 0) {
    for (let i = 1; i <= 200; i++) {
        if (i % 2 == 0) {
         console.log(i);
        }
    }
} else {
    for (let i = 1; i <= 200; i++) {
        if (i % 2 !== 0) {
          console.log(i);
        }
    }
}