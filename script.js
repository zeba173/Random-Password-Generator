// from() method of the Array object creates an array from something that looks likes or behaves like an array.
// Using from() we create the array without manual looping. 
// { length : 26} creates an array with length 26 which are empty slots 
const lowerCase = Array.from({ length : 26 }, (_, i) => String.fromCharCode(97 + i));
const upperCase = Array.from({ length : 26 }, (_, i) => String.fromCharCode(65 + i));
const numbers = Array.from({ length : 10 }, (_, i) => i.toString());
const symbols = ['@', '#', '$', '%', '^', '&', '*', '?', '!'];

// Combined all the arrays within an array using spread operator [It becomes an array of arrays]
const allArrays = [lowerCase, upperCase, numbers, symbols];

// flat() method removes the nesting (innner arrays) and returns a new array with all values combined.
const allChars = allArrays.flat(); 

// Create an empty string variables to store the passwords.
let firstPass = "";
let secondPass = "";
let length = 15; 

// Fetch the element using it's id to manipulate it and display the password later on.
let firstPassEl = document.querySelector("#firstPass-el");
let secondPassEl = document.querySelector("#secondPass-el");

// Function to get the random indices of the elements within the array.
function randomIndexOfChars()
{
    let randomIndex = Math.floor(Math.random() * allChars.length)
    return allChars[randomIndex];
} 

// Function to create the random passwords.
function randomPassword()
{
    for(let i = 0; i < length; i++)
    {
        firstPass += randomIndexOfChars();
        secondPass += randomIndexOfChars();
    }

    firstPassEl.textContent = firstPass;
    secondPassEl.textContent = secondPass;
    // empty the password so it does not append to the old one.
    firstPass = ""; 
    secondPass = "";
}

// Reference the toggle button 
const toggleBtn = document.getElementById("toggle-mode");

// Add event listener to listen to click event 
//and when the event occurs it applies the dark-mode class to the body
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Change button text 
    if (document.body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "☀️ Light Mode";
    } else {
        toggleBtn.textContent = "🌙 Dark Mode";
      }
});

// The tooltip to show only when the password element is not empty
const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", () => {
    firstPassEl.setAttribute("data-tooltip", "Click to copy");
    secondPassEl.setAttribute("data-tooltip", "Click to copy");
});


// Adding OnClick Copy Feature 
function copyOnClick (element)
{
    const text = element.textContent;
    if(!text) return;

    navigator.clipboard.writeText(text).then(() => 
    {
        element.setAttribute("data-tooltip", "copied");
        element.classList.add("show-tooltip");
        setTimeout(() => {
            element.setAttribute("data-tooltip", "Click to copy");
        }, 1200);
    });    
}

firstPassEl.addEventListener("click", () => copyOnClick(firstPassEl));
secondPassEl.addEventListener("click", () => copyOnClick(secondPassEl));
