
//  for loop -dictionary gallery
const dictionary = [
  ['images/VIDEO01.jpg', 'https://youtu.be/OW3CdpmD3w4'],
  ['images/VIDEO02.jpg', 'https://youtu.be/OW3CdpmD3w4'],
  ['images/VIDEO03.jpg', 'https://youtu.be/OW3CdpmD3w4'],
  ['images/VIDEO04.jpg', 'https://youtu.be/OW3CdpmD3w4'],
  ['images/VIDEO05.jpg', 'https://youtu.be/OW3CdpmD3w4'],
  ['images/VIDEO06.jpg', 'https://youtu.be/OW3CdpmD3w4'],
  ['images/VIDEO07.jpg', 'https://youtu.be/OW3CdpmD3w4'],
  ['images/VIDEO08.jpg', 'https://youtu.be/OW3CdpmD3w4'],
  ['images/VIDEO09.jpg', 'https://youtu.be/OW3CdpmD3w4'],
  ['images/VIDEO10.jpg', 'https://youtu.be/OW3CdpmD3w4'],
  ['images/VIDEO11.jpg', 'https://youtu.be/OW3CdpmD3w4'],
  ['images/VIDEO12.jpg', 'https://youtu.be/OW3CdpmD3w4'],
]

const vids = $('.videos')

for (const entry of dictionary) {
    const entryElem = $(`<div class="video" style="background-image: url(${entry[0]})">
        <a class="venobox" data-autoplay="true" data-vbtype="video" href="${entry[1]}" data-gall="myGallery">
        <i class="fas fa-play-circle"></i></a>
    </div>`)
    vids.append(entryElem)
 }