var namae;

function hokan(){

    namae1 = document.aaa.name01.value;
    localStorage.setItem("a" , namae1);

    namae2 = document.aaa.name02.value;
    localStorage.setItem("b" , namae2);

}

function shuturyoku(){

  namae1 = localStorage.getItem("a")
  document.getElementById("output").innerHTML = namae1 ;

  namae2 = localStorage.getItem("b")
  document.getElementById("output2").innerHTML = namae2 ;


}
