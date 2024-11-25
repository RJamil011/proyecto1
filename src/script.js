const preciosMinerales = {
    "Oro": 86807.1,
    "Plata": 1052.83,
    "Cobre": 9400,
    "Hierro": 120
};

function actualizarPrecio() {
    const mineral = document.getElementById('mineral').value;
    document.getElementById('precioMineral').value = mineral ? preciosMinerales[mineral].toFixed(2) : "";
}

function calcularViabilidad() {
    const ley = parseFloat(document.getElementById('ley').value) / 100;
    const recuperacion = parseFloat(document.getElementById('recuperacion').value) / 100;
    const tonelajeDiario = parseFloat(document.getElementById('tonelajeDiario').value);
    const costosExtraccion = parseFloat(document.getElementById('costosExtraccion').value);
    const costosPlanta = parseFloat(document.getElementById('costosPlanta').value);
    const costoMaquinaria = parseFloat(document.getElementById('costoMaquinaria').value);
    const costoMantenimiento = parseFloat(document.getElementById('costoMantenimiento').value);
    const costosOperativos = parseFloat(document.getElementById('costosOperativos').value);
    const stripRatio = parseFloat(document.getElementById('stripRatio').value);
    const costoMinado = parseFloat(document.getElementById('costoMinado').value);
    const costoProcesamiento = parseFloat(document.getElementById('costoProcesamiento').value);
    const costosGenerales = parseFloat(document.getElementById('costosGenerales').value);
    const costosRefinamiento = parseFloat(document.getElementById('costosRefinamiento').value);
    const precioMineral = parseFloat(document.getElementById('precioMineral').value);

    if (isNaN(precioMineral) || !stripRatio) {
        alert('Por favor, seleccione un mineral y complete todos los campos.');
        return;
    }

    const leyCorte = ((stripRatio * costoMinado) + costoProcesamiento + costosGenerales) / (recuperacion * (precioMineral - costosRefinamiento));
    const tonelajeAnual = tonelajeDiario * 365;
    const ingresosAnuales = precioMineral * ley * recuperacion * tonelajeAnual;
    const costosTotales = (costosExtraccion * tonelajeAnual) + (costosPlanta * tonelajeAnual) + costoMaquinaria + costoMantenimiento + costosOperativos;
    const vpn = ingresosAnuales - costosTotales;

    document.getElementById('leyCorte').textContent = leyCorte.toFixed(2);
    document.getElementById('ingresosAnuales').textContent = ingresosAnuales.toFixed(2);
    document.getElementById('costosTotales').textContent = costosTotales.toFixed(2);
    document.getElementById('vpn').textContent = vpn.toFixed(2);
    document.getElementById('decision').textContent = vpn > 0 ? 'Proyecto Viable' : 'Proyecto No Viable';
    document.getElementById('result').style.display = 'block';
}

actualizarPrecio();
