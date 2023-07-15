/*
Variable naming convention: <object>_<action>_<objectname>; Example -> Button_click_b1;
*/

//Variables (BE CAREFUL THESE MIGHT BE USED IN OTHER JS FILES TOO)
var inp_as = document.getElementById('a_size'); // selecting arraysize
var array_size = inp_as.value; //what value you get as the arraay size 
var inp_gen = document.getElementById("a_generate"); //for generating an array
var pausearr = document.getElementById("pause"); //for generating an array
var resumearr = document.getElementById("resume"); //for generating an array
var inp_aspeed = document.getElementById("a_speed"); // speed set by user
//var array_speed=document.getElementById('a_speed').value;

var butts_algos = document.querySelectorAll(".algos button"); //selecting all algo buttons

var div_sizes = [];
var divs = [];
var margin_size;
var cont = document.getElementById("array_container"); //middle part of array where dynamically array will visible
cont.style = "flex-direction:row"; // all the array will in one row


//Array generation and updation.

inp_gen.addEventListener("click", generate_array); //when click event in the generate array run this function
inp_as.addEventListener("input", update_array_size); // fire when the size of array changed


function generate_array() {
    cont.innerHTML = ""; //clears the content of the cont element before generating a new array.

    for (var i = 0; i < array_size; i++) {
        //randomly generate arrays till array size
        div_sizes[i] = Math.floor(Math.random() * 0.5 * (inp_as.max - inp_as.min)) + 10;//random fun use to create a random var and the size should be small to 10
        divs[i] = document.createElement("div"); //method creates an element node of div.
        cont.appendChild(divs[i]); //insert div
        margin_size = 0.1; //set the size of div


        // The code starts by setting the margin size to 0% and then sets the background color to blue
        // It then calculates how wide the div should be, based on 100/array_size-2*margin_size) and sets that width.
        // The height is set based on div_sizes[i].

        divs[i].style = " margin:0% " + margin_size + "%; background-color:blue; width:" + (100 / array_size - (2 * margin_size)) + "%; height:" + (div_sizes[i]) + "%;";

        // Add the number as text within the div
        divs[i].textContent = div_sizes[i];
    }
}

//function to update array
function update_array_size() {
    array_size = inp_as.value;
    // call gen array to new ly create anouther array
    generate_array();
}

// The code will execute the update_array_size() function when the window is loaded.
window.onload = update_array_size(); 

//Running the appropriate algorithm.
// The code sets up a function that will be
// called every time the user clicks on an "Algo" button.

for (var i = 0; i < butts_algos.length; i++) {
    butts_algos[i].addEventListener("click", runalgo);
}

function disable_buttons() {
    for (var i = 0; i < butts_algos.length; i++) {
        // loops through all the buttons in the game and sets their classList to an empty array
        butts_algos[i].classList = [];
        // It then adds a "butt_locked" class to each of these objects and makes it so that they are disabled by setting their disabled property to true.
        butts_algos[i].classList.add("butt_locked");
        butts_algos[i].disabled = true;
        inp_as.disabled = true;
        inp_gen.disabled = true;
        inp_aspeed.disabled = true;
    }
}


// The code starts by declaring a function called runalgo.
// The first line of the function is to disable all buttons so that only one button can be selected at a time.
// Then, inside the switch statement, it will call different functions depending on which button was clicked.
// The code attempts to disable buttons that are not currently being used.
function runalgo() {
    disable_buttons();

    this.classList.add("butt_selected");
    switch (this.innerHTML) {
        case "Bubble":
            Bubble();
            break;
        case "Selection":
            Selection_sort();
            break;
        case "Insertion":
            Insertion();
            break;
        case "Merge":
            Merge();
            break;
        case "Quick":
            Quick();
            break;
        case "Heap":
            Heap();
            break;
    }
}