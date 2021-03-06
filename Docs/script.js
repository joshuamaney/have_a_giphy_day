// submit function
// handleSubmit - prevent default

// display the word and definition and display gif


var wordFormEl = document.querySelector("#word-form")
var resultTextEl = document.querySelector('#sec-0ce7');

function getWord(inputVal) {
    var searchTerm = "https://wordsapiv1.p.rapidapi.com/words/" + inputVal + "/definitions?rapidapi-key=7dc5b6a1dcmsh2b1d2a7d90d8d46p129d6fjsn403dc5af20f0";
    fetch(searchTerm, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "7dc5b6a1dcmsh2b1d2a7d90d8d46p129d6fjsn403dc5af20f0",
            "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
        }
    }).then(response => {
        return response.json();
    }).then(function(data) {
              var listItem = document.createElement('h2');
              listItem.textContent = data[i].html_url;
              resultTextEl.appendChild(listItem);
    })
    
    .catch(err => {
        console.error(err);
    })
    
}


function handleSearchFormSubmit(event) {
    event.preventDefault();
    var userInput = document.querySelector('#user-input').value;
    getWord(userInput);
}

wordFormEl.addEventListener('submit', handleSearchFormSubmit);
