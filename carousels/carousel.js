var carousels = [
    {
        color: "bg-red-600",
        text: "First Carousel",
    },
    {
        color: "bg-green-600",
        text: "Second Carousel",
    },
    {
        color: "bg-blue-600",
        text: "Third Carousel",
    },
    {
        color: "bg-yellow-600",
        text: "Fourth Carousel",
    },
    {
        color: "bg-indigo-600",
        text: "Fifth Carousel",
    },
    {
        color: "bg-purple-600",
        text: "Sixth Carousel",
    },
    {
        color: "bg-pink-600",
        text: "Seventh Carousel",
    },
    {
        color: "bg-gray-600",
        text: "Eighth Carousel",
    },
    {
        color: "bg-black",
        text: "Ninth Carousel",
    },
    {
        color: "bg-white",
        text: "Tenth Carousel",
    },
];
var lastCarouselInDom = 3;
var totalCarouselsInDom = 4;
var replaceChildrenDiv = function (carousels) {
    var parentEl = document.getElementById("carouselWrapper");
    if (parentEl) {
        // Clear existing children
        parentEl.innerHTML = "";
        // Create and append new children
        carousels.forEach(function (_a) {
            var text = _a.text, color = _a.color;
            var newDiv = document.createElement("div");
            newDiv.className = "h-96 ".concat(color, " text-white flex items-center justify-center");
            newDiv.innerHTML = "<h1 class=\"text-4xl font-bold text-center\">".concat(text, "</h1>");
            parentEl.appendChild(newDiv);
        });
    }
};
var handlePrevious = function () { };
var handleNext = function () {
    var lastIndex = lastCarouselInDom + 1;
    if (lastIndex < carousels.length) {
        replaceChildrenDiv(carousels.slice(lastIndex - 3, lastIndex + 1));
        lastCarouselInDom += 1;
    }
};
// Function to handle button click
function handleButtonClick(buttonId) {
    console.log("Button with ID ".concat(buttonId, " clicked"));
    if (buttonId === "nextButton") {
        handleNext();
    }
    else if (buttonId === "prevButton") {
        handlePrevious();
    }
}
// Example buttons
var buttons = ["nextButton", "prevButton"];
// Adding event listeners to buttons
buttons.forEach(function (buttonId) {
    var button = document.getElementById(buttonId);
    if (button) {
        button.addEventListener("click", function () { return handleButtonClick(buttonId); });
    }
});
var addDiv = function (color, text) {
    var parentEl = document.getElementById("carouselWrapper");
    // Create a new div element
    var newDiv = document.createElement("div");
    // Set attributes and content for the new div
    newDiv.className = "h-96 ".concat(color, " text-white flex items-center justify-center");
    newDiv.innerHTML = "<h1 class=\"text-4xl font-bold text-center\">".concat(text, "</h1>");
    // Append the new div to the parent element
    if (parentEl) {
        parentEl.appendChild(newDiv);
    }
};
document.addEventListener("DOMContentLoaded", function () {
    lastCarouselInDom = 3;
    carousels.slice(0, lastCarouselInDom + 1).forEach(function (carousel) {
        addDiv(carousel.color, carousel.text);
    });
    console.info("Carousels loaded");
});
