fetch(new Request("https://blockchain.info/ticker"))
.then(function(resp){
  return resp.json();
})
.then(function(data){
  document.getElementById('USD').innerHTML =  JSON.stringify(data.USD["15m"]);
  document.getElementById('EUR').innerHTML =  JSON.stringify(data.EUR["15m"]);
  document.getElementById('JPY').innerHTML =  JSON.stringify(data.JPY["15m"]);
  document.getElementById('GBP').innerHTML =  JSON.stringify(data.GBP["15m"]);
  document.getElementById('AUD').innerHTML =  JSON.stringify(data.AUD["15m"]);
  document.getElementById('CAD').innerHTML =  JSON.stringify(data.CAD["15m"]);
  document.getElementById('CHF').innerHTML =  JSON.stringify(data.CHF["15m"]);
  document.getElementById('CNY').innerHTML =  JSON.stringify(data.CNY["15m"]);
  document.getElementById('HKD').innerHTML =  JSON.stringify(data.HKD["15m"]);
  document.getElementById('NZD').innerHTML =  JSON.stringify(data.NZD["15m"]);
  document.getElementById('SEK').innerHTML =  JSON.stringify(data.SEK["15m"]);
  document.getElementById('KRW').innerHTML =  JSON.stringify(data.KRW["15m"]);
  document.getElementById('SGD').innerHTML =  JSON.stringify(data.SGD["15m"]);
  document.getElementById('INR').innerHTML =  JSON.stringify(data.INR["15m"]);
  document.getElementById('RUB').innerHTML =  JSON.stringify(data.RUB["15m"]);
  document.getElementById('ZAR').innerHTML =  JSON.stringify(data.ZAR["15m"]);
  document.getElementById('TRY').innerHTML =  JSON.stringify(data.TRY["15m"]);
  document.getElementById('BRL').innerHTML =  JSON.stringify(data.BRL["15m"]);
})
a