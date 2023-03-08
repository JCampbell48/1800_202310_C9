// Sample key values of bus routes.
const routes = [
    { name: 'R4 UBC' },
    { name: '2 Downtown - Burrard Station' },
    { name: '3 Downtown - Waterfront Station' },
    { name: '4 UBC' },
    { name: '5 Downtown - Cambie at Dunsmuir' },
    { name: '130 Metrotown Station ' },
    { name: '134 Brentwood Station' },
    { name: '209 Burrard Station' },
    { name: '210 Burrard Station' },
    { name: '212 Phibbs Exchange' },
    { name: '222 Metrotown Station' },
    { name: '227 Phibbs Exchange' },
    { name: '228 Lonsdale Quay' },
    { name: '229 Lonsdale Quay' },
    { name: '232 Grouse Mountain' },
    { name: '240 Downtown - Cambie at Georgia' }
]


// search input button
const searchInput = document.querySelector('.input')

// Event listener for click.
searchInput.addEventListener("input", (e) => {
    // 1. declare and assign the value of the event's target to a variable
    // I.E., whatever is typed in the search bar
    let value = e.target.value

    // 2. check: if input exists and if input is larger than 0
    if (value && value.trim().length > 0) {
        // 3. redefine 'value' to exclude white space and change input to all lowercase
        value = value.trim().toLowerCase()
        // 4. return the results only if the value of the search is included in the bus name
        // we need to write code (a function for filtering through our data to include the search input value)
    } else {
        // 5. return nothing
        // input is invalid -- show an error message or show no results

    }

})

// Search clear button
const clearButton = document.getElementById('clear')

clearButton.addEventListener("click", () => {
    // 1. Function that removes any previous results from the page
    function setList(results) {

        for (const bus of results) {
            // creating a li element for each result item
            const resultItem = document.createElement('li')

            // adding a class to each item of the results
            resultItem.classList.add('result-item')

            // grabbing the name of the current point of the loop and adding the name as the list item's text
            const text = document.createTextNode(bus.name)

            // appending the text to the result item
            resultItem.appendChild(text)

            // appending the result item to the list
            list.appendChild(resultItem)
        }
    }
})

// creating and declaring a function called "setList"
// setList takes in a param of "results"
function setList(results) {

    for (const bus of results) {
        // creating a li element for each result item
        const resultItem = document.createElement('li')

        // adding a class to each item of the results
        resultItem.classList.add('result-item')

        // grabbing the name of the current point of the loop and adding the name as the list item's text
        const text = document.createTextNode(bus.name)

        // appending the text to the result item
        resultItem.appendChild(text)

        // appending the result item to the list
        list.appendChild(resultItem)
    }
}


/** call "setList()" and pass in routes array, but not the whole array, 
* to filter through the routes array and only use the items of "routes" 
* whose name value's include the value of the search input.*/
searchInput.addEventListener("input", (e) => {
    let value = e.target.value

    if (value && value.trim().length > 0) {
        value = value.trim().toLowerCase()

        //returning only the results of setList if the value of the search is included in the bus name
        setList(routes.filter(bus => {
            return bus.name.includes(value)
        }))
    }
})

// Remove the results from the page
function clearList() {
    list.innerHTML = ''
  }
  

// Event listener to clear list on click via user input
clearButton.addEventListener("click", () => {
    clearList()
})


// function that returns 'no results' dialog to user for searches with no matches.
function noResults() {
    // create an element for the error; a list item ("li")
    const error = document.createElement('li')
    // adding a class name of "error-message" to our error element
    error.classList.add('error-message')

    // creating text for our element
    const text = document.createTextNode('No results found')
    // appending the text to our element
    error.appendChild(text)
    // appending the error to our list element
    list.appendChild(error)
}


function setList(results) {
    clearList()
    for (const bus of results) {
        const resultItem = document.createElement('li')
        resultItem.classList.add('result-item')
        const text = document.createTextNode(bus.name)
        resultItem.appendChild(text)
        list.appendChild(resultItem)
    }

    if (results.length === 0) {
        noResults()
    }
}

