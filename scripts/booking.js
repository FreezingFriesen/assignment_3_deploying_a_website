/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

// Default rate
let dailyRate = 35; 

// Number of selected days
let dayCounter = 0; 

const daysOfWeek = document.querySelectorAll(".blue-hover"); 
const clearButton = document.querySelector("#clear-button"); 
const halfDayButton = document.querySelector("#half"); 
const fullDayButton = document.querySelector("#full"); 
const calculatedCostElement = document.querySelector("#calculated-cost");



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

// Function to handle day button click
function handleDayClick(event) {
    const day = event.target;
    if (day.classList.contains("clicked")) {
        day.classList.remove("clicked");
        dayCounter--;
    } else {
        day.classList.add("clicked");
        dayCounter++;
    }
    calculateTotal();
}



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

// Function to clear selected days
function clearDays() {
    for (let i = 0; i < daysOfWeek.length; i++) {
        daysOfWeek[i].classList.remove("clicked");
    }
    dayCounter = 0;
    calculateTotal();
}




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

// Function to set rate to half-day
function setHalfDayRate() {
    dailyRate = 20;
    halfDayButton.classList.add("clicked");
    fullDayButton.classList.remove("clicked");
    calculateTotal();
}



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

// Function to set rate to full-day
function setFullDayRate() {
    dailyRate = 35;
    fullDayButton.classList.add("clicked");
    halfDayButton.classList.remove("clicked");
    calculateTotal();
}



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateTotal() {
    const totalCost = dailyRate * dayCounter;
    calculatedCostElement.innerHTML = totalCost + "";
}


// Event listeners
daysOfWeek.forEach(function(day) {
    day.addEventListener("click", handleDayClick);
});

clearButton.addEventListener("click", function() {
    clearDays();
});

halfDayButton.addEventListener("click", function() {
    setHalfDayRate();
});

fullDayButton.addEventListener("click", function() {
    setFullDayRate();
});