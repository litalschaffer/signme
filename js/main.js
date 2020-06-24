
//  for loop -dictionary gallery
const dictionary = [
  ['how are you?','images/VIDEO01.jpg', 'https://youtu.be/f2_HuZa75tI'],
  ['happy','images/VIDEO02.jpg', 'https://youtu.be/NXQbHHr_FTQ'],
  ['a_break','images/VIDEO03.jpg', 'https://youtu.be/ln4_qxWN1aQ'],
  ['ok','images/VIDEO04.jpg', 'https://youtu.be/x5a-aawbj8U'],
  ['today','images/VIDEO05.jpg', 'https://youtu.be/ewDJ1VfZo0k'],
  ['day','images/VIDEO06.jpg', 'https://youtu.be/jAVWIWTGbdU'],
  ['quiet','images/VIDEO07.jpg', 'https://youtu.be/8xvU6l4B4cI'],
  ['when','images/VIDEO08.jpg', 'https://youtu.be/NjQPNh5Fb-s'],
  ['love','images/VIDEO09.jpg', 'https://youtu.be/UOI8HJLm8_k'],
  ['hello','images/VIDEO10.jpg', 'https://youtu.be/KGiiyvdq7Io'],
  ['GFB','images/VIDEO11.jpg', 'https://youtu.be/PepJ3T0Ke_M'],
  ['feeling','images/VIDEO12.jpg', 'https://youtu.be/ybmuyvsW21M'],
  ['great','images/VIDEO13.jpg', 'https://youtu.be/93ViGIv40yE'],
  ['lecture','images/VIDEO14.jpg', 'https://youtu.be/DJsfK5AgM1A'],
  ['right','images/VIDEO15.jpg', 'https://youtu.be/4KHwTjr4Ajo'],
  ['man','images/VIDEO16.jpg', 'https://youtu.be/QYTO8TBkQD4'],
]

const vids = $('.videos')

for (const entry of dictionary) {
    const entryElem = $(`<div class="video" style="background-image: url(${entry[1]})">
        <a class="venobox" data-autoplay="true" data-vbtype="video" href="${entry[2]}" data-gall="myGallery">
        <i class="fas fa-play-circle"></i></a>
    </div>`)
    vids.append(entryElem)
 }