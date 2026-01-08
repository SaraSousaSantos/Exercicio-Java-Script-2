(() => {
  console.log("isto foi demasiado rápido!");
})();

// ---------------------------------------------

const fazerFormulario = (nomeCampo) => {
  return (resultado) => {
    return `${nomeCampo}: ${resultado}`;
  };
};

console.log(fazerFormulario("Nome")("Vitor"));
