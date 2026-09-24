// This is where your JS goes!

// You can fetch data from https://cs571api.cs.wisc.edu/rest/s25/ice/chili
// When you are complete, you should also be able to fetch data from...
//  https://cs571api.cs.wisc.edu/rest/s25/ice/pasta
//  https://cs571api.cs.wisc.edu/rest/s25/ice/pizza

let reviewNum = 0;
const REVIEWS = [
    "A burst of warmth and flavor in every spoonful; simple yet irresistible!",
    "The perfect blend of spice and comfort, an easy go-to chili recipe.",
    "Loved the hearty texture and rich taste - a new family favorite!",
    "Quick, flavorful, and satisfying - this chili hits all the right notes!"
];

// Gathers the original amounts of each ingredient.
let ingrs = document.getElementById("ingredients-body").getElementsByTagName("tr");
let originalAmounts = [];
for (let ingr of ingrs) {
    let amn = ingr.getElementsByTagName("td")[0].innerText;
    let amnNum = parseFloat(amn);
    originalAmounts.push(amnNum);
}

// TODO Implement the update yield!
function updateYield() {
    let selector = document.getElementById("serving-selector");
    console.log(selector.value);
    console.log(typeof selector.value);
    let num = parseInt(selector.options[selector.selectedIndex].text);
    for (let i = 0; i < ingrs.length; i++) {
        let ingr = ingrs[i];
        ingr.getElementsByTagName("td")[0].innerText = originalAmounts[i] * num;
    }
    // console.log(selector);
}

// TODO Implement the display review!
function displayReview() {
    // alert("I should display a review!");
    alert(REVIEWS[reviewNum]);
    reviewNum = (reviewNum + 1) % REVIEWS.length;
}
