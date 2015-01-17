var namae;

function hokan(){

    namae1 = document.aaa.name01.value;
    localStorage.setItem("a" , namae1);

    var kekka101 = parseInt(document.aaa.value0101.value);
    var kekka102 = parseInt(document.aaa.value0102.value);
    var kekka103 = parseInt(document.aaa.value0103.value);
    var kekka104 = parseInt(document.aaa.value0104.value);
    var kekka105 = parseInt(document.aaa.value0105.value);
    var kekka106 = parseInt(document.aaa.value0106.value);
    var kekka107 = parseInt(document.aaa.value0107.value);
    var kekka108 = parseInt(document.aaa.value0108.value);
    var kekka109 = parseInt(document.aaa.value0109.value);
    var kekka110 = parseInt(document.aaa.value0110.value);
    var kekka1 = kekka101 + kekka102  + kekka103 + kekka104 + kekka105 + kekka106 + kekka107 + kekka108 + kekka109 + kekka110;
    String(kekka1);
    localStorage.setItem("aa" , kekka1);

    namae2 = document.aaa.name02.value;
    localStorage.setItem("b" , namae2);

    var kekka201 = parseInt(document.aaa.value0201.value);
    var kekka202 = parseInt(document.aaa.value0202.value);
    var kekka203 = parseInt(document.aaa.value0203.value);
    var kekka204 = parseInt(document.aaa.value0204.value);
    var kekka205 = parseInt(document.aaa.value0205.value);
    var kekka206 = parseInt(document.aaa.value0206.value);
    var kekka207 = parseInt(document.aaa.value0207.value);
    var kekka208 = parseInt(document.aaa.value0208.value);
    var kekka209 = parseInt(document.aaa.value0209.value);
    var kekka210 = parseInt(document.aaa.value0210.value);
    var kekka2 = kekka201 + kekka202  + kekka203 + kekka204 + kekka205 +kekka206 + kekka207 + kekka208  + kekka209 + kekka210;
    String(kekka2);
    localStorge.setItem("bb" , kekka2);

    namae3 = document.aaa.name03.value;
    localStorage.setItem("c" , namae3);

    var kekka301 = parseInt(document.aaa.value0301.value);
    var kekka302 = parseInt(document.aaa.value0302.value);
    var kekka303 = parseInt(document.aaa.value0303.value);
    var kekka304 = parseInt(document.aaa.value0304.value);
    var kekka305 = parseInt(document.aaa.value0305.value);
    var kekka406 = parseInt(document.aaa.value0106.value);
    var kekka407 = parseInt(document.aaa.value0107.value);
    var kekka408 = parseInt(document.aaa.value0108.value);
    var kekka409 = parseInt(document.aaa.value0109.value);
    var kekka410 = parseInt(document.aaa.value0110.value);
    var kekka4 = kekka301 + kekka302  + kekka303 + kekka304 + kekka305;
    String(kekka3);
    localStorage.setItem("cc" , kekka3);

    namae4 = document.aaa.name04.value;
    localStorage.setItem("d" , namae4);

    var kekka401 = parseInt(document.aaa.value0301.value);
    var kekka402 = parseInt(document.aaa.value0302.value);
    var kekka403 = parseInt(document.aaa.value0303.value);
    var kekka404 = parseInt(document.aaa.value0304.value);
    var kekka405 = parseInt(document.aaa.value0305.value);
    var kekka4 = kekka401 + kekka402  + kekka403 + kekka404 + kekka405;
    String(kekka4);
    localStorage.setItem("dd" , kekka4);

    namae5 = document.aaa.name05.value;
    localStorage.setItem("e" , namae5);

    var kekka501 = parseInt(document.aaa.value0501.value);
    var kekka502 = parseInt(document.aaa.value0502.value);
    var kekka503 = parseInt(document.aaa.value0503.value);
    var kekka504 = parseInt(document.aaa.value0504.value);
    var kekka505 = parseInt(document.aaa.value0505.value);
    var kekka5 = kekka501 + kekka502  + kekka503 + kekka504 + kekka505;
    String(kekka5);
    localStorage.setItem("ee" , kekka5);

    namae6 = document.aaa.name06.value;
    localStorage.setItem("f" , namae6);

    var kekka601 = parseInt(document.aaa.value0601.value);
    var kekka602 = parseInt(document.aaa.value0602.value);
    var kekka603 = parseInt(document.aaa.value0603.value);
    var kekka604 = parseInt(document.aaa.value0604.value);
    var kekka605 = parseInt(document.aaa.value0605.value);
    var kekka6 = kekka601 + kekka602  + kekka603 + kekka604 + kekka605;
    String(kekka6);
    localStorage.setItem("ff" , kekka6);


    namae7 = document.aaa.name07.value;
    localStorage.setItem("g" , namae7);

    namae8 = document.aaa.name08.value;
    localStorage.setItem("h" , namae8);

    namae9 = document.aaa.name09.value;
    localStorage.setItem("i" , namae9);

    namae10 = document.aaa.name10.value;
    localStorage.setItem("j" , namae10);






}

function shuturyokuGraph(
  namae1, kekka1,
  namae2, kekka2,
  namae3, kekka3,
  namae4, kekka4,
  namae5, kekka5
){
  var barChartData = {
    labels : [namae1, namae2, namae3, namae4, namae5],
    datasets : [
      {
        fillColor : "rgba(220,220,220,0.5)",
        strokeColor : "rgba(220,220,220,0.8)",
        highlightFill: "rgba(220,220,220,0.75)",
        highlightStroke: "rgba(220,220,220,1)",
        data : [kekka1, kekka2, kekka3, kekka4, kekka5]
      },

    ]

  }
  window.onload = function(){
    var ctx = document.getElementById("canvas").getContext("2d");
    window.myBar = new Chart(ctx).Bar(barChartData, {
      responsive : true
    });
  }
}

function shuturyoku(){

  namae1 = localStorage.getItem("a");
  document.getElementById("output1").innerHTML = namae1 ;

  kekka1 = localStorage.getItem("aa");
  document.getElementById("syuukei1").innerHTML = kekka1;

  namae2 = localStorage.getItem("b");
  document.getElementById("output2").innerHTML = namae2 ;

  kekka2 = localStorage.getItem("bb");
  document.getElementById("syuukei2").innerHTML = kekka2 ;

  namae3 = localStorage.getItem("c");
  document.getElementById("output3").innerHTML = namae3 ;

  kekka3 = localStorage.getItem("cc");
  document.getElementById("syuukei3").innerHTML = kekka3;

  namae4 = localStorage.getItem("d");
  document.getElementById("output4").innerHTML = namae4 ;

  kekka4 = localStorage.getItem("dd");
  document.getElementById("syuukei4").innerHTML = kekka4;

  namae5 = localStorage.getItem("e");
  document.getElementById("output5").innerHTML = namae5 ;

  kekka5 = localStorage.getItem("ee");
  document.getElementById("syuukei5").innerHTML = kekka5;

  shuturyokuGraph(
    namae1, kekka1,
    namae2, kekka2,
    namae3, kekka3,
    namae4, kekka4,
    namae5, kekka5
  );
}
