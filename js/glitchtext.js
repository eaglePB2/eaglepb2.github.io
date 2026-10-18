var glitchTexts = [];
var possibleChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/;\[]=-~!@#$%^&*()+{}:?><€¡¥×«»¶¿çµñ©æáßðøöóíúüþéåä";
var glitchStrength = 20; 
var glitchSpeed = 10; 
var glitchDuration = 500; 
var glitchLeave = false; 
var timeouts = [];

// 适配主页的 .top_nav 导航按钮
$('.top_nav').each(function(index, el) {
  var txt = $(this).text().trim();
  glitchTexts.push(txt);
});

$('.top_nav').hover(function() {
  var index = $('.top_nav').index(this);
  var originalText = glitchTexts[index];
  var times = glitchSpeed * (glitchDuration / 1000);
  var charArr = $(this).text().trim().split("");
  var strength = Math.ceil(charArr.length / (100 / glitchStrength));
  for(var i = 0; i < times; i++) {
    var speed = 1000 / glitchSpeed;
    timeouts.push(setTimeout(function(){
      for(var j = 0; j < strength; j++) {
        var randChar = possibleChar.charAt(Math.floor(Math.random() * possibleChar.length));
        var indexOfChar = Math.floor(Math.random() * charArr.length);
        charArr[indexOfChar] = randChar;
        var newText = charArr.join("");
        $(this).text(newText);
      }
    }.bind(this), (i * speed)));
  };
}, function() {
  if(!glitchLeave) {
    $.each(timeouts, function(i, el){
      clearTimeout(el);
      delete timeouts[i];
    });
    var index = $('.top_nav').index(this);
    $(this).text(glitchTexts[index]);
  }
});