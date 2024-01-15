"use strict";
{
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.ham-nav'); //navクラスの要素を取得

  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open'); //openクラスを付け外しする
  });
}