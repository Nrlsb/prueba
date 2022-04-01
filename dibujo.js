var usuario = prompt("Cuanto tenes disponible?");
var moneda = prompt("Que crypto queres comprar? 1 para btc, 2 para eth");
var peso = parseFloat(usuario);
var arg = 0.005;
var btc = 47989.24
var eth = 4018.58
var peso_final;
var nombre;
if(moneda == 1)
{
  peso_final = peso * arg / btc;
  nombre = "btc";
}
else if(moneda == 2)
{
  peso_final = peso * arg / eth;
  nombre = "eth";
}
peso_final = parseFloat(peso_final);
document.write("Lo que vas a obtener en " + nombre + " es " + peso_final);
