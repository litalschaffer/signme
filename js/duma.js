"use strict"

// Resize the image to fit the user's screen
function placeImage(w, h) {
    w = window.screen.availWidth;
    h = window.screen.availHeight;

    $('body').append($('<img src=' + '"https://source.unsplash.com/collection/10578792/' + w + 'x' + h + '"' + ' id="bg" alt="">'))
}

//  Get the date and place it at the top
function getDate() {
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var date = new Date();
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    var marker = "th";
    if (day === 1 || day === 21) {
        marker = "st";
    } else if (day === 2 || day === 22) {
        marker = "nd";
    } else if (day === 3 || day === 23) {
        marker = "rd";
    } 

    document.getElementById('date').innerHTML = monthNames[monthIndex] + ' ' + day + marker + ' ' + year;
}

// Use the Wordnik API to get the word of the day and its definition
function theWord(callback) {
    var baseUrl = "https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=";
    var apiKey = "1380d58b8b5c33325130c0e8f340be6bc6fba6f7bb65bfc6f";
    var apiUrl = baseUrl + apiKey;

    //A promise is needed here, as without it the second API call would return before pronounceIt() can execute the callback, and we would get, well, nothing, instead of the actual word.
    return new Promise(function(resolve, reject) {
        
      $.ajax({
          type: "GET",
          url: apiUrl,
          dataType: "json",
          success: function(data) {
              $("#word").append(data.word);
              $("#defin").append(data.definitions[0].text);
              resolve();
          }
      });

    });
}

// loop from dictionary array(main.js)
const words = $('#wordCon')
var idic= Math.floor(Math.random(Date.getDate) *dictionary.length);

    const entryElem = $(`<div class="video" style="background-image: url(${dictionary[idic][1]})">
        <a class="venobox" data-autoplay="true" data-vbtype="video" href="${dictionary[idic][2]}" data-gall="myGallery">
        <i class="fas fa-play-circle"></i></a>
    </div>`)
    words.append(entryElem)
 


//  Use the Wordnik API to get the pronunciation of the word
function pronounceIt() {
    var baseUrl = "https://api.wordnik.com/v4/word.json/"
    var apiKey = "1380d58b8b5c33325130c0e8f340be6bc6fba6f7bb65bfc6f";
  
}


// Fade in the image and text
$(document).ready(function() {
    placeImage();
    getDate();
    theWord().then(pronounceIt);
    $('img').css('opacity', 1);
    $('body').css('opacity', 1);
});
