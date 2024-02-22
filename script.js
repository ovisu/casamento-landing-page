var data = new Date();
var data2 = new Date(2025, 5, 25);
var tempoDia = 24 * 60 * 60 * 1000;
var difDias = Math.round(Math.abs((data - data2) / tempoDia));

diasRes = document.querySelector(".diasRes");
console.log(diasRes);
diasRes.innerText = difDias;
