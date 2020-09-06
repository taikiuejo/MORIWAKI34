$(function () {
  var btn = $(".reserve-bottom-btn");
  // var footerHeight = $(".footer");
  var mainHeight = $(".main");


  btn.hide();
  //スクロールが300に達したらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      btn.fadeIn();
    } 
    else {
      btn.fadeOut();
    }
  });
  // //スクロールしてトップ
  // topBtn.click(function () {
  //   $("body,html").animate(
  //     {
  //       scrollTop: 0,
  //     },
  //     500
  //   );
  //   return false;
  // });
});
