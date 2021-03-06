// display the word and definition and display gif

var wordFormEl = document.querySelector("#word-form");
var wordDisplayDivEl = document.getElementById('word-display');

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
    })
    .then(function(data) {
        console.log(data);
            for (var i = 0; i < data.definitions.length; i++) {
              var wordItem = document.createElement('h1');
              var definition = document.createElement('p');
              wordItem.textContent = data.word;
              definition.textContent = data.definitions[i].definition;
              wordDisplayDivEl.append(wordItem);
              wordDisplayDivEl.append(definition);
            //     console.log("-----", data.word, data.definitions[i].definition)
            //   var htmlEl = $(`
            //   <div>
            //     <h1>${data.word}</h1>
            //     <p>${data.definitions[i].definition}</p>
            //   </div>
            //   `)

            //   wordDisplayDivEl.append(htmlEl)  

            }
    })
    
    .catch(err => {
        console.error(err);
    });
    
}


function handleSearchFormSubmit(event) {
    event.preventDefault();
    var userInput = document.querySelector('#user-input').value;
    getWord(userInput);
}

wordFormEl.addEventListener('submit', handleSearchFormSubmit);
