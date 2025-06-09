function predecir() {
  const input = document.getElementById('inputs').value;
  const datos = input.split(',').map(n => parseFloat(n)).filter(n => !isNaN(n));
  const ultimos = datos.slice(-5);
  if (ultimos.length === 0) {
    document.getElementById('resultado').innerText = "Ingresa datos válidos";
    return;
  }
  const promedio = ultimos.reduce((a, b) => a + b, 0) / ultimos.length;
  const prediccion = (promedio + (Math.random() * 0.5 - 0.25)).toFixed(2);
  document.getElementById('resultado').innerText = prediccion + "x";
}
