// Get references to the main image and small images
const mainImg = document.querySelector(".MainImg");
const smallImgs = document.querySelectorAll(".small-img");

// Loop through each small image and add a click event listener
smallImgs.forEach((smallImg) => {
    smallImg.addEventListener("click", () => {
        // Update the source of the main image with the clicked small image
        mainImg.src = smallImg.src;
    });
});


// Function to remove border from all small images
function removeBorder() {
    smallImgs.forEach((smallImg) => {
        smallImg.classList.remove("bordered");
    });
}

// Loop through each small image and add a click event listener
smallImgs.forEach((smallImg) => {
    smallImg.addEventListener("click", () => {
        // Remove border from all small images
        removeBorder();

        // Update the source of the main image with the clicked small image
        mainImg.src = smallImg.src;

        // Add a border to the clicked small image
        smallImg.classList.add("bordered");
    });
});
