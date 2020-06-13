//Constructor
function Vehicle(make, model, color, year, license, ins) {
    this.make = make; //String
    this.model = model; //String
    this.color = color; //String
    this.year = year; // Number
    this.license = license; //String
    this.isInsured = ins; //Boolean
}



//Array to contain our vehicle objects
let vehicles = [];

//Mimick a database retrieval from our web server
function initializeVehicles() {
    //Add some vehicles to our array
    //JSON way of creating an Object
    var vehicle1 = { //If it says identifier missing that's the = sign before {} the object starts
        make: "Toyota",
        model: "Corolla",
        color: "Red",
        year: 2016,
        license: "CATR-C13",
        isInsured: true
    }
    vehicles.push(vehicle1);

    //Constructor way
    vehicles.push(new Vehicle("Mazda", "Mazda6", "Metallic", 2015, "Q-Dubai-93141", false));
    vehicles.push(new Vehicle("Honda", "Honda Civic", "Silver", 2013, "KYTL-B15", true));
    vehicles.push(new Vehicle("Tesla", "Roadster", "white", 2019, "TESL-XX5", true));
    vehicles.push(new Vehicle("Toyota", "Corolla", "blue", 2008, "AAA2-PU2", false));
    vehicles.push(new Vehicle("Hyundai", "Sante Fe", "silver", 2017, "K16C-URD", true));
    vehicles.push(new Vehicle("Tesla", "Model S", "silver", 2020, "TESL-XX4", true));
    vehicles.push(new Vehicle("Hyundai", "Tuscon", "blue", 2017, "D43G-POY", false));
    vehicles.push(new Vehicle("Honda", "Accord", "red", 2014, "ZGTY-009", false));
    vehicles.push(new Vehicle("Toyota", "Camry", "silver", 2015, "TYPO-990", true));
    vehicles.push(new Vehicle("Honda", "Civic", "red", 2014, "H1CK-1PU", false));
    vehicles.push(new Vehicle("Tesla", "Cybertruck", "green", 2021, "TESL-CR4", false));
    vehicles.push(new Vehicle("Honda", "Civic", "green", 2014, "ZTOT-1G3", true));
    vehicles.push(new Vehicle("Hyundai", "Tuscon", "red", 2019, "CRT4-76Y", true));

}



//Output to the Webpage
function displayVehicles() {

    var theDiv = document.getElementById("dVehicles"); // The output Div
    theDiv.innerHTML = ""; //Clear previous elements always important in the dropdown display

    // Retreiving the checked radio button value (All, Insured, Not Insured)
    //This is a trikcy method for selecting the radio buttons
    var displayFilter = document.querySelector("input[name='rbFilter']:checked").value;
    console.log("Current Filter: " + displayFilter);

    //var displayFilter = document.querySelector("input[name='rbFilter']:checked").value;
    //console.log( "Current Filter: " + displayFilter );


    //Loop through array
    for (var i = 0; i < vehicles.length; i++) {

        //var tempEL = document.createElement("p");
        var tempVehicle = vehicles[i]; //Instead of typing vehicles[i] every time, we can assign to a variable and use that to refer
        //to the properties in our object instead
        //The above method is easier as there's like kinda less code

        //Display based on filter

        if ((tempVehicle.isInsured == true && displayFilter == "Insured") ||
            (tempVehicle.isInsured == false && displayFilter == "Not Insured") ||
            displayFilter == "All") {

            var tempEL = document.createElement("p");
            tempEL.innerText = tempVehicle.make + "" + tempVehicle.model + "" + tempVehicle.color + "" + tempVehicle.year + "" +
                tempVehicle.license + "" + tempVehicle.isInsured + "";


            // style p element with the color of the vehicle
            tempEL.style.border = "1px solid " + tempVehicle.color;

            //Append to the Div
            theDiv.appendChild(tempEL);


        } // end if

    } //end for loop
} // End of the function displayVehicles

/*
  // Display based on filter
  if ( (tempVehicle.isInsured == true && displayFilter == "Insured") || 
                  (tempVehicle.isInsured == false && displayFilter == "Not Insured") ||
                   displayFilter == "All")
             {
                 var tempEl = document.createElement("p");                    
                 tempEl.innerText = tempVehicle.make + " " + tempVehicle.model + " " + tempVehicle.color + " " + tempVehicle.year + " " + tempVehicle.license + " " + tempVehicle.isInsured;

                 // style p element with the color of the vehicle
                 tempEl.style.border = "1px solid " + tempVehicle.color;

                 // Append to the div
                 theDiv.appendChild(tempEl);
             } // end if
             
         } //end for
     }

       */






//Call Functions when the page loads on load
initializeVehicles();
displayVehicles();


// TODO: A better approach would use just one function
// Reduce these 4 functions into 1 
//For example by making filter function and then onclick adding onclick ="filter(1)" filter(2) which is in the HTML code

//Event Functions
function filterByMake() {
    let userInput = document.getElementById("tbFilter").value; // textfield
    var theOutputDiv = document.getElementById("dFilteredOutput");
    theOutputDiv.innerHTML = ""; // Clear anything there

    // Loop through array and look for matches
    for (var i = 0; i < vehicles.length; i++) {
        // check for match
        if (vehicles[i].make.toLowerCase() == userInput.toLowerCase()) // force lowercase to allow non case sensitive check 
        {
            var tempEl = document.createElement("p");

            tempEl.innerText = vehicleToString(vehicles[i]); // This external function will return string for output

            tempEl.style.border = "1px solid " + vehicles[i].color;
            theOutputDiv.appendChild(tempEl);
        }
    }

}







function filterByModel() {
    let userInput = document.getElementById("tbFilter").value; // textfield
    var theOutputDiv = document.getElementById("dFilteredOutput");
    theOutputDiv.innerHTML = ""; // Clear anything there

    // Loop through array and look for matches
    for (var i = 0; i < vehicles.length; i++) {
        // check for match
        if (vehicles[i].model.toLowerCase() == userInput.toLowerCase()) // force lowercase to allow non case sensitive check 
        {
            var tempEl = document.createElement("p");

            tempEl.innerText = vehicleToString(vehicles[i]); // This external function will return string for output

            tempEl.style.border = "1px solid " + vehicles[i].color;
            theOutputDiv.appendChild(tempEl);
        }
    }
}









function filterByColor() {
    let userInput = document.getElementById("tbFilter").value; // textfield
    var theOutputDiv = document.getElementById("dFilteredOutput");
    theOutputDiv.innerHTML = ""; // Clear anything there

    // Loop through array and look for matches
    for (var i = 0; i < vehicles.length; i++) {
        // check for match
        if (vehicles[i].color.toLowerCase() == userInput.toLowerCase()) // force lowercase to allow non case sensitive check 
        {
            var tempEl = document.createElement("p");

            tempEl.innerText = vehicleToString(vehicles[i]); // This external function will return string for output

            tempEl.style.border = "1px solid " + vehicles[i].color;
            theOutputDiv.appendChild(tempEl);
        }
    }
}








function filterByPlate() {
    var userInput = document.getElementById("tbFilter").value; // textfield
    var theOutputDiv = document.getElementById("dFilteredOutput");
    theOutputDiv.innerHTML = ""; // Clear anything there

    // Loop through array and look for matches
    for (var i = 0; i < vehicles.length; i++) {
        // check for match
        if (vehicles[i].license.includes(userInput) == true) // See if the license plate includes this string C for example
        //or another letter that you type in there
        //Try to figure out how to add the uppercase in here
        {
            var tempEl = document.createElement("p");

            tempEl.innerText = vehicleToString(vehicles[i]); // This function will return string for output

            tempEl.style.border = "1px solid " + vehicles[i].color;
            theOutputDiv.appendChild(tempEl);
        }
    }
}


// Helper function to return string of object properties
function vehicleToString(v) {
    // In future we will make this a method of the vehicle object
    return v.make + " " + v.model + " " + v.color + " " + v.year + " " + v.license + " " + v.isInsured;
}