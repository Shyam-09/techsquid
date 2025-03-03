const correctAnswers = {
    q1: "1",
    q2: "2",
    q3: "3",
    q4: "4",
    q5: "5",
    q6: "6",
    q7: "7",
    q8: "8",
    q9: "9",
    q10: "10"
};


document.getElementById("quizForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    let allCorrect = true;

    for (let key in correctAnswers) {
        let inputField = document.querySelector(`input[name="${key}"]`);
        let errorField = document.getElementById(`${key}-error`);

        if (inputField.value.trim().toLowerCase() === correctAnswers[key].toLowerCase()) {
            errorField.textContent = "";
            inputField.style.border = "2px solid limegreen"; // Green border for correct answers
            inputField.style.backgroundColor = "rgba(0, 255, 0, 0.1)"; // Light green background
        } else {
            inputField.style.border = "2px solid red"; // Red border for incorrect answers
            inputField.style.backgroundColor = "rgba(255, 0, 0, 0.1)"; // Light red background
            allCorrect = false;
        }
    }

    if (allCorrect) {
        window.location.href = "/key";
    }
});
