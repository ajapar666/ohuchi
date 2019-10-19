'use strict'

{
  document.addEventListener('DOMContentLoaded', function(){
    // タブに対してクリックイベントを適用
    const tabs = document.getElementsByClassName('tab');
    for(let i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener('click', tabSwitch, false);
    }
  
    function tabSwitch(){
      // タブのclassの値を変更
      document.getElementsByClassName('is-active')[0].classList.remove('is-active');
      this.classList.add('is-active');
          // コンテンツのclassの値を変更
      document.getElementsByClassName('is-show')[0].classList.remove('is-show');
      const arrayTabs = Array.prototype.slice.call(tabs);
      const index = arrayTabs.indexOf(this);
      document.getElementsByClassName('panel')[index].classList.add('is-show');
    };
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


}