document.addEventListener("DOMContentLoaded", function () {
    var startButton = document.getElementById("startButton");
    var animationModule = document.getElementById("animationModule");

    startButton.addEventListener("click", function (event) {
        // Prevent the default link behavior
        event.preventDefault();

        // Show the animation module
        animationModule.style.display = "flex";

        // Start your animation logic here
        // Replace the following line with your actual animation code
        simulateAnimationCompletion();
    });

    function simulateAnimationCompletion() {
        // Simulate the completion of your animation
        setTimeout(function () {
            // Hide the animation module after animation completion
            animationModule.style.display = "none";
        }, 3000); // Change 3000 to the actual duration of your animation in milliseconds
    }
});
