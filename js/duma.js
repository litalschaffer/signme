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

// loop from dictionary array(main.js)
const words = $('#wordCon')
var idic= Math.floor(Math.random(Date.getDate) *dictionary.length);

    const entryElem = $(`<div class="video" style="background-image: url(${dictionary[idic][1]})">
        <a class="venobox" data-autoplay="true" data-vbtype="video" href="${dictionary[idic][2]}" data-gall="myGallery">
        <i class="fas fa-play-circle"></i></a>
    </div>`)
    words.append(entryElem)

// Fade in the image and text
$(document).ready(function() {
    placeImage();
    getDate();
    // theWord().then(pronounceIt);
    // $('img').css('opacity', 1);
    // $('body').css('opacity', 1);
});
