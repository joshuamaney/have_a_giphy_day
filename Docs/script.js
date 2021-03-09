var wordFormEl = document.querySelector("#word-form");
var wordDisplayDivEl = document.getElementById('word-display');

// function getWord(inputVal) {
//     var searchTerm = "https://wordsapiv1.p.rapidapi.com/words/" + inputVal + "/definitions?rapidapi-key=7dc5b6a1dcmsh2b1d2a7d90d8d46p129d6fjsn403dc5af20f0&limit=0";
//     var searchGif = "https://api.giphy.com/v1/gifs/search?api_key=5nc3H8j6YVO3W8fG5cMOnyc4Sulxh7O7&limit=10&rating=g&q=" + inputVal + "&SameSite=Secure";
//     fetch(searchTerm, {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-key": "7dc5b6a1dcmsh2b1d2a7d90d8d46p129d6fjsn403dc5af20f0",
//             "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
//             "limit":1
//         }
//     }).then(response => {
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data);
//             for (var i = 0; i < data.definitions.length; i++) {
//               var wordItem = document.createElement('h1');
//               var definition = document.createElement('p');
//               wordItem.textContent = data.word;
//               definition.textContent = data.definitions[i].definition;
//               wordDisplayDivEl.append(wordItem);
//               wordDisplayDivEl.append(definition);
//             }
//     })
    
//     .catch(err => {
//         console.error(err);
//     });

//     fetch(searchGif, {
//         "method": "GET"
//     }).then(response => {
//         return response.json();
//     })
//     .then(function(data) {
//         console.log("gif", data);
//             // for (var i = 0; i < data.search.length; i++) {
            
//             // }
//     })
    

// }

async function getWordAndGif(inputVal) {

    var searchTerm = "https://wordsapiv1.p.rapidapi.com/words/" + inputVal + "/definitions?rapidapi-key=7dc5b6a1dcmsh2b1d2a7d90d8d46p129d6fjsn403dc5af20f0&limit=0";
    var searchGif = "https://api.giphy.com/v1/gifs/search?api_key=5nc3H8j6YVO3W8fG5cMOnyc4Sulxh7O7&limit=10&rating=g&q=" + inputVal + "&SameSite=Secure";



    var wordData = await fetch(searchTerm, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "7dc5b6a1dcmsh2b1d2a7d90d8d46p129d6fjsn403dc5af20f0",
            "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
            "limit":1
        }
    })

    var usableWordData = await wordData.json();


    var gifData = await fetch(searchGif, {
        "method": "GET"
    })

    var usableGifData = await gifData.json();

    console.log(usableGifData);

    var wordItem = document.createElement('h1');
    var definition = document.createElement('p');
    wordItem.textContent = usableWordData.word;
    definition.textContent = usableWordData.definitions[0].definition;
    wordDisplayDivEl.append(wordItem);
    wordDisplayDivEl.append(definition);

    var theGif = $(`<img src='${usableGifData.data[0].images.original.url}'  />`)
    $("#word-display").append(theGif);
}

function handleSearchFormSubmit(event) {
    event.preventDefault();
    var userInput = document.querySelector('#user-input').value;
    // getWord(userInput);
    getWordAndGif(userInput);
}

wordFormEl.addEventListener('submit', handleSearchFormSubmit);



