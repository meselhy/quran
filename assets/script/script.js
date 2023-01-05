var turntable = $('.player');
var tooltip = $('.tooltip');
var playBtn = $('button.play');
var volume = $(".top");
var a = $(".radio_list");

$(function () {
  var r;
  Draggable.create(volume, {
    type: "rotation",
    throwProps: !0,
    bounds: {
      minRotation: -160,
      maxRotation: 160
    },
    liveSnap: function (r) {
      var t = .5;
      return 0 == r ? $(".radio_list").prop("volume", t) : $(".radio_list").prop("volume", r / 320 + t), 20 * Math.round(r / 20)
    }
  });

  i = 0;
  var playlist1 = new Array("assets/audio/pl1/1.mp3", "assets/audio/pl1/2.mp3", "assets/audio/pl1/3.mp3", "assets/audio/pl1/4.mp3", "assets/audio/pl1/5.mp3", "assets/audio/pl1/6.mp3", "assets/audio/pl1/7.mp3", "assets/audio/pl1/8.mp3", "assets/audio/pl1/9.mp3", );
  var playlist2 = new Array("assets/audio/pl2/abdulbaset.mp3");

  playBtn.on('click', function () {
    tooltip.remove();
    if ($("#q1").hasClass("qselectd1")) {
      pl1();
    } else if ($("#q2").hasClass("qselectd2")) {
      pl2();
    } else if ($("#q3").hasClass("qselectd3")) {
      pl3();
    } else
      pl1();
  });

  function pl1() {
    if (!turntable.hasClass('is-playing')) {
      turntable
        .removeClass('is-stopped')
        .addClass('is-playing');
      document.addEventListener('ended', function () {
        i = ++i < playlist1.length ? i : 0;
        (t = playlist1[i], a.attr("src", t).trigger("play"));
      }, true);
      (t = playlist1[i], a.attr("src", t).trigger("play"));
    } else {
      turntable
        .removeClass('is-playing')
        .addClass('is-stopped');
      $(".radio_list").trigger("pause");
    }
  }

  function pl2() {
    if (!turntable.hasClass('is-playing')) {
      turntable
        .removeClass('is-stopped')
        .addClass('is-playing');
      document.addEventListener('ended', function () {
        i = ++i < playlist2.length ? i : 0;
        console.log(i)
          (t = playlist2[i], a.attr("src", t).trigger("play"));
      }, true);
      (t = playlist2[i], a.attr("src", t).trigger("play"));
    } else {
      turntable
        .removeClass('is-playing')
        .addClass('is-stopped');
      $(".radio_list").trigger("pause");
    }
  }

  function pl3() {
    if (!turntable.hasClass('is-playing')) {
      turntable
        .removeClass('is-stopped')
        .addClass('is-playing');
      (t = "https://n13.radiojar.com/8s5u5tpdtwzuv?rj-ttl=5&rj-tok=AAABgbF1Y-MAjZvgtlxbH1hZmw", a.attr("src", t).trigger("play"));
    } else {
      turntable
        .removeClass('is-playing')
        .addClass('is-stopped');
      $(".radio_list").trigger("pause");
    }
  }

});

$('.q1').click(function () {
  $(this).toggleClass('q1');
  $(this).toggleClass('qselectd1');
  $('#q2').addClass('q2');
  $('#q3').addClass('q3');
  $('#q2').removeClass('qselectd2');
  $('#q3').removeClass('qselectd3');
  if ($('.green_light1').hasClass("power_glow1")) {
    $('.green_light1').removeClass('power_glow1');
    $('.green_light2').removeClass('power_glow2');
    $('.green_light3').removeClass('power_glow3');
  } else {
    $('.green_light1').addClass('power_glow1')
    $('.green_light2').removeClass('power_glow2')
    $('.green_light3').removeClass('power_glow3')
  };
});

$('.q2').click(function () {
  $(this).toggleClass('q2');
  $(this).toggleClass('qselectd2');
  $('#q1').addClass('q1');
  $('#q3').addClass('q3');
  $('#q1').removeClass('qselectd1');
  $('#q3').removeClass('qselectd3');
  if ($('.green_light2').hasClass("power_glow2")) {
    $('.green_light2').removeClass('power_glow2');
    $('.green_light1').removeClass('power_glow1');
    $('.green_light3').removeClass('power_glow3')
  } else {
    $('.green_light2').addClass('power_glow2');
    $('.green_light1').removeClass('power_glow1');
    $('.green_light3').removeClass('power_glow3')
  }
});

$('.q3').click(function () {
  $(this).toggleClass('q3');
  $(this).toggleClass('qselectd3');
  $('#q1').addClass('q1');
  $('#q2').addClass('q2');
  $('#q1').removeClass('qselectd1');
  $('#q2').removeClass('qselectd2');
  if ($('.green_light3').hasClass("power_glow3")) {
    $('.green_light3').removeClass('power_glow3');
    $('.green_light1').removeClass('power_glow1');
    $('.green_light2').removeClass('power_glow2');
  } else {
    $('.green_light3').addClass('power_glow3');
    $('.green_light1').removeClass('power_glow1');
    $('.green_light2').removeClass('power_glow2');
  }
});