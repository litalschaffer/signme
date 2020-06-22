
//  for loop -dictionary gallery
const dictionary = [
  ['how are you?','images/VIDEO01.jpg', 'https://youtu.be/OW3CdpmD3w4'],
  ['happy','images/VIDEO02.jpg', 'https://youtu.be/OW3CdpmD3w4'],
  ['yes','images/VIDEO03.jpg', 'https://youtu.be/OW3CdpmD3w4'],
  ['ok','images/VIDEO04.jpg', 'https://youtu.be/OW3CdpmD3w4'],
  ['ok2','images/VIDEO05.jpg', 'https://youtu.be/OW3CdpmD3w4'],
  ['day','images/VIDEO06.jpg', 'https://youtu.be/OW3CdpmD3w4'],
  ['quiet','images/VIDEO07.jpg', 'https://youtu.be/OW3CdpmD3w4'],
  ['gfb','images/VIDEO08.jpg', 'https://youtu.be/OW3CdpmD3w4'],
  ['yes2','images/VIDEO09.jpg', 'https://youtu.be/OW3CdpmD3w4'],
  ['how are you?2','images/VIDEO10.jpg', 'https://youtu.be/OW3CdpmD3w4'],
  ['ok3','images/VIDEO11.jpg', 'https://youtu.be/OW3CdpmD3w4'],
  ['feeling','images/VIDEO12.jpg', 'https://youtu.be/OW3CdpmD3w4'],
]

const vids = $('.videos')

for (const entry of dictionary) {
    const entryElem = $(`<div class="video" style="background-image: url(${entry[1]})">
        <a class="venobox" data-autoplay="true" data-vbtype="video" href="${entry[2]}" data-gall="myGallery">
        <i class="fas fa-play-circle"></i></a>
    </div>`)
    vids.append(entryElem)
 }