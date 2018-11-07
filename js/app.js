// console.log('test');

// Plain or Vanilla Javascript
// var h1 = document.querySelector('h1');

// h1.style.color = 'red';
// h1.innerText = 'Something Else';


// jQuery

// Do something when the button is clicked

// var $ = 'jQuery';

// console.log($);

// var h1 = 'some title';

// function h1() {

// }

// Actions(methods)
// $('.wrapper span').text('Some text for the span');


// $('body').on('keyup', function() {
//   console.log('key pressed');
// });

// document.getElementById('title').innerText = 'Blah';
// document.getElementsByClassName('title')[0].innerText = 'Something';

function onButtonClick() {
  // $('#title').addClass('animate');

  $('#list li:first-child').text('Changed');

  $('#list').append('<li>Added to the end</li>');

  $('body').append('<h1>I was just added!</h1>');

  // $('body').addClass('animate');

  // $('body').animate({
  //   opacity: 0.2
  // }, 1000, function() {
  //   console.log('done');
  // });
}


// $('.btn').on('click', onButtonClick);

var left = 0;

$('body').on('keyup', function(event) {
  var key = event.key;
  if ( key === 'ArrowRight' ) {
    left += 10;
    $('.pacman').css('left', left + '%');
  }

  if (key === 'ArrowLeft') {
    left -= 10;
    $('.pacman').css('left', left + '%');
  }
});

// function $() {

// }

// $();


// function test(str) {
//   // callback();
//   console.log(str);
// }

// test('some string');


// $('.btn').on('click', function() {
//   $('h1').text('Something Else');
// });

