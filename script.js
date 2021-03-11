//variables that select the input form and the display portion of the html
var wordFormEl = document.querySelector("#word-form");
var wordDisplayDivEl = document.getElementById('word-display');

// async function
async function getWordAndGif(inputVal) {

    // urls and keys with the user input inserted in the proper place
    var searchTerm = "https://wordsapiv1.p.rapidapi.com/words/" + inputVal + "/definitions?rapidapi-key=7dc5b6a1dcmsh2b1d2a7d90d8d46p129d6fjsn403dc5af20f0&limit=0";
    var searchGif = "https://api.giphy.com/v1/gifs/search?api_key=5nc3H8j6YVO3W8fG5cMOnyc4Sulxh7O7&limit=10&rating=g&q=" + inputVal + "&SameSite=Secure";


    // fetch the word and definition from wordsapi, await pauses code until promise is fulfilled
    var wordData = await fetch(searchTerm, {
        "method": "GET",
    })
    // turns data into json object
    var usableWordData = await wordData.json();

    // fetch the gif from giphy api
    var gifData = await fetch(searchGif, {
        "method": "GET"
    })
    // turns data into json object
    var usableGifData = await gifData.json();

    // creates an h1 and p element to insert 'words' json data into
    var wordItem = document.createElement('h1');
    var definition = document.createElement('p');
    wordItem.textContent = usableWordData.word;
    definition.textContent = usableWordData.definitions[0].definition; // displays only the first result
    wordDisplayDivEl.append(wordItem);
    wordDisplayDivEl.append(definition);

    // displays the gif to the page using jquery
    var theGif = $(`<img src='${usableGifData.data[0].images.original.url}'  />`)
    $("#word-display").append(theGif);
}

// prevents the page from reloading on submit, calls the getWordAndGif function
function handleSearchFormSubmit(event) {
    event.preventDefault();
    var userInput = document.querySelector('#user-input').value;
    getWordAndGif(userInput);
}

// listens for click or enter, runs handleSearchFormSubmit function
wordFormEl.addEventListener('submit', handleSearchFormSubmit);



