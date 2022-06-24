$(function () {
  // 시간재생 - 매 1초마다 재생
  setInterval(function () {
    // app.js
    let d = new Date();
    let h = d.getHours(); // 시간
    let m = d.getMinutes(); // 분
    let s = d.getSeconds(); // 초

    // 0 ~ 9까지는 앞에 0을 표시??
    if (h < 10) {
      h = "0" + h;
    }
    if (m < 10) {
      m = "0" + m;
    }
    if (s < 10) {
      s = "0" + s;
    }

    /* 과제
        1) 오전/오후 표시?? - 24시간제 if()
        2) 알람기능: 50분이 되면 '휴식시간' 경고창 띄우기
      */
    if (h < 13) {
      $(".time").html("AM");
    }
    if (h >= 13) {
      $(".time").html("PM");
    }

    // 응용작품 만들기

    // 시간표시

    $(".hour").html(h);
    $(".min").html(m);
    $(".sec").html(s);
  }, 1000);
});
