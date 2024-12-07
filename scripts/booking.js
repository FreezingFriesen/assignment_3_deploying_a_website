/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

// Default rate
let dailyRate = 35; 

// Number of selected days
let dayCounter = 0; 

// Assuming days have a class "day-button"
const daysOfWeek = document.querySelectorAll(".day-button"); 

// Clear button
const clearButton = document.querySelector(".clear-days"); 

// Half-day button
const halfDayButton = document.querySelector(".half"); 

// Full-day button
const fullDayButton = document.querySelector(".full"); 

// Element to display total cost
const calculatedCostElement = document.querySelector(".calculated-cost"); 

// Submit button for contact page
const submitButton = document.querySelector(".submit-button"); 

// Contact main container
const contactMain = document.querySelector(".contact main"); 


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

// Function to handle day button click
function handleDayClick(event) {
    const day = event.target;

    // Toggle the "clicked" class and update the dayCounter
    if (day.classList.contains("clicked")) {
        day.classList.remove("clicked");
        dayCounter--;
    } else {
        day.classList.add("clicked");
        dayCounter++;
    }

    // Recalculate the total cost
    calculateTotal(); 
}



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

// Function to clear selected days
function clearDays() {

    // Remove "clicked" class
    daysOfWeek.forEach(day => day.classList.remove("clicked")); 

    // Reset day counter
    dayCounter = 0; 

    // Reset total cost
    calculateTotal(); 
}




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

// Function to set rate to half-day
function setHalfDayRate() {

    // Update rate
    dailyRate = 20; 

    // Highlight half-day button
    halfDayButton.classList.add("clicked"); 

    // Remove highlight from full-day button
    fullDayButton.classList.remove("clicked"); 

    // Recalculate total cost
    calculateTotal(); 
}


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

// Function to set rate to full-day
function setFullDayRate() {

    // Update rate
    dailyRate = 35; 

    // Highlight full-day button
    fullDayButton.classList.add("clicked"); 

    // Remove highlight from half-day button
    halfDayButton.classList.remove("clicked"); 

    // Recalculate total cost
    calculateTotal(); 
}



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateTotal() {
    const totalCost = dailyRate * dayCounter;

    // Display the calculated cost
    calculatedCostElement.innerHTML = `$${totalCost}`; 
}






// Event listeners

// Add click event to each day button
daysOfWeek.forEach(day => day.addEventListener("click", handleDayClick)); 

// Add click event to clear button
clearButton.addEventListener("click", clearDays); 

// Add click event to half-day button
halfDayButton.addEventListener("click", setHalfDayRate); 

// Add click event to full-day button
fullDayButton.addEventListener("click", setFullDayRate); 

// Add click event to submit button
submitButton.addEventListener("click", handleSubmit); 
