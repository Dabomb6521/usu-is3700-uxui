const solution = document.getElementById("solution");

function task1() {
    clearSolution();
    solution.innerHTML = "Running task 1... Turning the solution box red.";
    /* Your Code Here */
    document.getElementById("solution-box").style.backgroundColor = "red";

    /* End of your code */
}

function task2() {
    clearSolution();
    /* Your Code Here */
    // To show your message in the solution box, use the following code:
    // solution.innerHTML = message;
    // I would use a varaible to store the message
    let userName = document.getElementById("user-name").value;
    solution.innerHTML = `Hello, ${userName}!`;
    

    /* End of your code */
}

function task3() {
    clearSolution();
    solution.innerHTML = "Running task 3... Turning all of the h2 elements purple.";
    /* Your Code Here */
    changeHeadings = document.querySelectorAll('h2');
    for (let i = 0; i < changeHeadings.length; i++){
        changeHeadings[i].style.color = "purple";
    }
    



    /* End of your code */
}

function task4() {
    clearSolution();
    solution.innerHTML = "Running task 4...";
    /* Your Code Here */
    const colorArray = ["red, green", "blue", "yellow", "purple", "orange"];
    const randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    document.getElementById("solution-box").style.color = randomColor;

    /* End of your code */
}

function task5() {
    clearSolution();
    solution.innerHTML = "Running task 5...";
    /* Your Code Here */
    // You will need to append the new element to the solution div.
    // Remember, the solution div has the id of "solution"
    const newElement = document.createElement('h2');
    newElement.innerHTML = "My Fancy H2";
    solution.appendChild(newElement);
    

    /* End of your code */
}

function clearSolution() {
    solution.innerHTML = "";
}
