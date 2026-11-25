/* Registro de lotes para la consulta de trazabilidad.
   Por cada lote liberado por Calidad agregue un bloque con la misma estructura.
   El código del lote es el que se imprime en la etiqueta (formato KP-AAMMDD-NN). */
window.KALLPA_LOTES = {
  "KP-261201-01": {
    ejemplo: true,
    produccion: "01/12/2026", vencimiento: "01/03/2027", botellas: 150,
    quinua:  { proveedor: "Cooperativa de productores de quinua – Puno", recepcion: "27/11/2026", control: "Humedad 12,8 % · saponina negativa" },
    durazno: { proveedor: "Asociación de productores de durazno – sierra de Lima", recepcion: "30/11/2026", control: "Madurez de consumo · 11,5 °Brix" },
    maca: "Junín", kiwicha: "Cusco",
    proceso: { ph: "3,8", brix: "10,2", pasteurizacion: "85 °C durante 10 min", llenado: "84 °C" },
    liberado: "Jefatura de Planta y Calidad", estado: "Liberado"
  },
  "KP-261202-01": {
    ejemplo: true,
    produccion: "02/12/2026", vencimiento: "02/03/2027", botellas: 150,
    quinua:  { proveedor: "Cooperativa de productores de quinua – Puno", recepcion: "27/11/2026", control: "Humedad 12,8 % · saponina negativa" },
    durazno: { proveedor: "Asociación de productores de durazno – sierra de Lima", recepcion: "01/12/2026", control: "Madurez de consumo · 11,0 °Brix" },
    maca: "Junín", kiwicha: "Cusco",
    proceso: { ph: "3,7", brix: "9,9", pasteurizacion: "85 °C durante 10 min", llenado: "83 °C" },
    liberado: "Jefatura de Planta y Calidad", estado: "Liberado"
  }
};
