interface Carousel {
  color: string;
  text: string;
}

const carousels: Carousel[] = [
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
let lastCarouselInDom = 3;
const totalCarouselsInDom = 4;

const replaceChildrenDiv = (carousels: Carousel[]) => {
  const parentEl = document.getElementById("carouselWrapper");
  if (parentEl) {
    // Clear existing children
    parentEl.innerHTML = "";

    // Create and append new children
    carousels.forEach(({ text, color }) => {
      const newDiv = document.createElement("div");
      newDiv.className = `h-96 ${color} text-white flex items-center justify-center`;
      newDiv.innerHTML = `<h1 class="text-4xl font-bold text-center">${text}</h1>`;
      parentEl.appendChild(newDiv);
    });
  }
};

const handlePrevious = () => {};

const handleNext = () => {
  const lastIndex = lastCarouselInDom + 1;

  if (lastIndex <= carousels.length) {
    replaceChildrenDiv(carousels.slice(lastIndex - 3, lastIndex + 1));
    lastCarouselInDom += 1;
  }
};

// Function to handle button click
function handleButtonClick(buttonId: string) {
  console.log(`Button with ID ${buttonId} clicked`);
  if (buttonId === "nextButton") {
    handleNext();
  } else if (buttonId === "prevButton") {
    handlePrevious();
  }
}

// Example buttons
const buttons = ["nextButton", "prevButton"];

// Adding event listeners to buttons
buttons.forEach((buttonId) => {
  const button = document.getElementById(buttonId);
  if (button) {
    button.addEventListener("click", () => handleButtonClick(buttonId));
  }
});

const addDiv = (color: string, text: string) => {
  const parentEl = document.getElementById("carouselWrapper");
  // Create a new div element
  const newDiv = document.createElement("div");

  // Set attributes and content for the new div
  newDiv.className = `h-96 ${color} text-white flex items-center justify-center`;
  newDiv.innerHTML = `<h1 class="text-4xl font-bold text-center">${text}</h1>`;

  // Append the new div to the parent element
  if (parentEl) {
    parentEl.appendChild(newDiv);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  lastCarouselInDom = 3;
  carousels.slice(0, lastCarouselInDom + 1).forEach((carousel) => {
    addDiv(carousel.color, carousel.text);
  });
  console.info("Carousels loaded");
});
