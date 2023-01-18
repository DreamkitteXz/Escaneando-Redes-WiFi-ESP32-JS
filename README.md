<h2 align='center'>
  Escaneando redes Wifi com o Espruino no ESP32
</h2>
<h3>
  Visão geral 
</h3>
<p>
Voce irá aprender:
<ul>
    <li>Como escanear os Pontos de Acesso WiFi ao redor utilizando <a href="http://www.espruino.com/">Espruino</a>.</li> 
    <li>Como utilizar a biblioteca <a href="http://www.espruino.com/Reference#Wifi">WIFI</a> do Espruino.</li>  
	
</ul>
<h3 align='center'> 
O Código
</h3>
<p>1. Começaremos importando o módulo WiFi mencionado anteriormente. Para importar um módulo no Espruino, basta usar <code>require(“nome do módulo”)</code> e atribuir o resultado a uma variável</p>
<p align='center'><code>var wifi = require('Wifi');</code></p>	
<p>2. Em seguida, para escanear os pontos de acesso ao redor, basta chamar a função de escaneamento  do módulo WiFi.</p>
<p align='center'><pre><p><code>	
function getScanResult(apList){
  console.log(apList);
}
</code></p></pre></p>
<p>3. Vamos então chamar a função scan do módulo WiFi, passando como entrada nossa <code>função getScanResults</code>.</p>
<p align='center'><code>wifi.scan( getScanResult );</code></p>
<p>4. Você pode verificar o código-fonte completo abaixo.</p>
<p align='center'><pre><p><code>var wifi = require('Wifi');
 
function getScanResult(apList){
  console.log(apList);
}
 
wifi.scan( getScanResult );
 
console.log("Após ser escaneado");
</code></p></pre></p>
<h3 align='center'> 
Testando o código
</h3>
<p align='center'><img src="Images\Untitled.png" alt="Screen" width="700" height="300"></P>

<h4 align="center"><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Party%20Popper.png" height="30px">Pronto! Você pode ver as redes vizinhas  com o Espruino no ESP32.<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Party%20Popper.png" height="30px"></h4>
