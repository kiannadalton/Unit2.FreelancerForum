// freelancer arrays
const freelancers = [
    { Name: "Alice", Price: 30, Occupation: "Writer" },
    { Name: "Bob", Price: 50, Occupation: "Teacher" },
    { Name: "Carol", Price: 70, Occupation: "Programmer" },
  ];

  const newFreelancers = [
    { Name: "Celine", Price: 100, Occupation: "Singer" },
    { Name: "Alan", Price: 50, Occupation: "Programmer" },
    { Name: "Vincent", Price: 80, Occupation: "Artist" },
    { Name: "Michael", Price: 90, Occupation: "Photographer" },
    { Name: "John", Price: 30, Occupation: "Instructor" },
    { Name: "Kyle", Price: 20, Occupation: "Consultant" },
  ];


function init(){
    // used to select existing DOM element using DOM selector
    // uses querySelector to access root ID element within index.html
    const root = document.querySelector("#root");

// Add Freelancer Forum as h1
    // creates the tag
    // fills tag with text
    // connects tag to parent (#root div)
    const freelancerTitle = document.createElement("h1");
    freelancerTitle.innerText = "Freelancer Forum";
    root.append(freelancerTitle);

// Add 'The average starting price is ${price}' p
    // creates the tag
    // fills tag with text
    // connects tag to parent (#root div)
    const freelancerAveragePrice = document.createElement("p");
    freelancerAveragePrice.innerText = `The average starting price is ${freelancerAveragePrice}.`;
    root.append(freelancerAveragePrice);

// Add Available Freelancers as h2
    // creates the tag
    // fills tag with text
    // connects tag to parent (#root div)
    const freelancerTableTitle = document.createElement("h2");
    freelancerTableTitle.innerText = "Available Freelancers";
    root.append(freelancerTableTitle);

// Create foundation of the table
    // Creates something similar in HTMl to:
        // <table> 
            // <thead>
                // <tbody> etc..
    const freelancerTable = document.createElement("table")
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

// Create table with Keys: Name, Price, Occupation
    // this loop goes through the keys [0] of object freelanders 
    // Creates 'th' for each key
    // append pushes them to be visible > child of thead parent  
    for (let key of Object.keys(freelancers[0])){
        // key = name, price, occupation
        const th = document.createElement("th");
        // key is the placeholder for the looped keys
        th.innerText = key; 
        thead.appendChild(th);
    }

    // You add 2 things to freelanceTable
    // Adds thead to freelancerTable
    freelancerTable.appendChild(thead);
    // Adds tbody to freelanderTable
    freelancerTable.appendChild(tbody);
        // Adds freelancerTable to root
    root.appendChild(freelancerTable);


    // Calls nect created function
    // Ask Jessica why you add it into the init function instead of render function
    renderFreelancers();
   

}


function renderFreelancers() {
    const freelancerTable = document.querySelector("tbody");

    const freelancerElements = freelancers.map((freelancer) => {

        const row = document.createElement("tr");

        // Had to capitalize key names since they were capitalized in array
        const f_name = document.createElement("td");
        f_name.innerText = freelancer.Name;
    
        const f_price = document.createElement("td");
        f_price.innerText = freelancer.Price;
    
        const f_occupation = document.createElement("td");
        f_occupation.innerText = freelancer.Occupation;
    
        // Had to connect row to table to get this to how
        // Ask Jessica why we didn't have to in demo 
        freelancerTable.appendChild(row);
        row.appendChild(f_name);
        row.appendChild(f_price);
        row.appendChild(f_occupation);
        
    
        return row;
    });

    // note it is replaceChildREN, not replaceCHILD. replaceCHILD causes an error to occur.
    freelancerTable.replaceChildren(...freelancerElements);

    }




// add new random freelancers
function addFreelancer() {

    if (freelancers.length > 8) {
        return;
    }

    let newFreelancer = newFreelancers[Math.floor(Math.random() * newFreelancers.length)];
    newFreelancer = newFreelancers.pop();

    // adds to the end of the first array
    freelancers.push(newFreelancer);

    renderFreelancers();

}



// Create function that finds ${price}

function freelancerAveragePrice(){

    let totalPrices = 0

    freelancers.forEach(freelancersListed =>{

        const freelancerPrice = freelancers.find(listedFreelancerPrice => listedFreelancerPrice.Price == freelancersListed)
        TotalPrice = (TotalPrice + freelancerPrice.Price)/freelancers

    });

    return totalPrice;

}


// find total of each price of array / array.length
// averagePrice.replaceChildren(...freelancerElements)
    // look at class video



setInterval(addFreelancer, 2000);

    // Call init function
init();





