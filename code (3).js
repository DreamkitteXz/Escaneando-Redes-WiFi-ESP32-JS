var wifi = require('Wifi');
 
function getScanResult(apList){
  console.log(apList);
}
 
wifi.scan( getScanResult );
 
console.log("Depois do Scan");