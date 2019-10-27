'use strict'

{
// スライダー開始

  const images = [
    'img/pic00.png',
    'img/pic01.png',
    'img/pic02.png',
    'img/pic03.png',
    'img/pic04.png',
    'img/pic05.png',
    'img/pic06.png',
    'img/pic07.png',
  ];

  let currentNum = 0;

  function setMainImage(image) {
    document.querySelector('main img').src = image;
  }

  setMainImage(images[currentNum]);

  function removeCurrentClass() {
    document.querySelectorAll('.thumbnails li')[currentNum].classList.remove('current');
  }

  function addCurrentClass() {
    document.querySelectorAll('.thumbnails li')[currentNum].classList.add('current');
  }

  const thumbnails = document.querySelector('.thumbnails');
  images.forEach((image, index) => {
    const li = document.createElement('li');
    if (index === currentNum) {
      li.classList.add('current');
    }

    li.addEventListener('click', () => {
      setMainImage(image);
      removeCurrentClass();
      currentNum = index;
      addCurrentClass();
    });

    const img = document.createElement('img');
    img.src = image;
    li.appendChild(img);
    thumbnails.appendChild(li);
    
  });

  const next = document.getElementById('next');
  next.addEventListener('click', () => {
    removeCurrentClass();
    currentNum++;
    if (currentNum === images.length) {
      currentNum = 0;
    }
    addCurrentClass();
    setMainImage(images[currentNum ]);
  });

  const prev = document.getElementById('prev');
  prev.addEventListener('click', () => {
    removeCurrentClass();
    currentNum--;
    if (currentNum < 0) {
      currentNum = images.length - 1;
    }
    addCurrentClass();
    setMainImage(images[currentNum ]);
  });

  let timeoutId;

  function playSlideshow() {
    timeoutId = setTimeout(() => {
      next.click();
      playSlideshow();
    }, 1000);
  }

  const play = document.getElementById('play');
  const pause = document.getElementById('pause');

  play.addEventListener('click', () => {
    play.classList.add('hidden');
    pause.classList.remove('hidden');
    playSlideshow();
  });

  pause.addEventListener('click', () => {
    play.classList.remove('hidden');
    pause.classList.add('hidden');
    clearTimeout(timeoutId);
  });
  // スライダー終了
}

$(function () {
  /*初期表示*/
  $('.panel').hide();
  $('.panel').eq(0).show();
  $('.tab-index').eq(0).addClass('is-active');
  /*クリックイベント*/
  $('.tab-index').each(function () {
    $(this).on('click', function () {
      const index = $('.tab-index').index(this);
      $('.tab-index').removeClass('is-active');
      $(this).addClass('is-active');
      $('.panel').hide();
      $('.panel').eq(index).show();
    });
  });
});

$(function() {
  $('.signup-show').click(function() {
    $('#signup-modal').fadeIn();
  });
  $('#close-modal').click(function() {
    $('#signup-modal').fadeOut();
  });
});

$(function(){
  //.accordion1の中のp要素がクリックされたら
  $('.accordion1 p').click(function(){

    //クリックされた.accordion1の中のp要素に隣接するul要素が開いたり閉じたりする。
    $(this).next('ul').slideToggle();
  });
});

$('.menu-trigger').on('click',function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active');
    $('main').removeClass('open');
    $('.menu').removeClass('open');
    $('.overlay').removeClass('open');
  } else {
    $(this).addClass('active');
    $('main').addClass('open');
    $('.menu').addClass('open');
    $('.overlay').addClass('open');
  }
});

$('.overlay').on('click',function(){
  if($(this).hasClass('open')){
    $(this).removeClass('open');
    $('.menu-trigger').removeClass('active');
    $('main').removeClass('open');
    $('.menu').removeClass('open');      
  }
});



