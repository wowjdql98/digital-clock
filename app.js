
$(function () {
    //시간재생 - 매 1초마다 재생
    setInterval(function () {
        let d = new Date();
        let h = d.getHours(); //시간
        let m = d.getMinutes(); //분
        let s = d.getSeconds(); //초

        //0 ~ 9 까지는 0을 앞에 표시하기
        if (s < 10) {
            s = '0' +  5;
        }
        
        if (h < 10) {
            h = '0' +  5;
        }
        if (m < 10) {
            m = '0' +  5;
        }
        
        //오전 오후 표시

        if (h < 13) {
            $('.time').html('AM');
        }
        if (h > 13) {
            $('.time').html('PM');
        }

        //알람기능 - 50분이되면 경고창 : <휴식시간>
     
        
        //시간표시
        $('.hour').html(h);
        $('.min').html(m);
        $('.sec').html(s); 
    })
    })


