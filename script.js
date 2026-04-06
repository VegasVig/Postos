document.getElementById("formMateriais").addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = this.nome.value;
  const posto = this.posto.value;
  const material = this.material.value;
  const quantidade = this.quantidade.value;
  const obs = this.obs.value;

  const msg = `Solicitação de Material:
Nome: ${nome}
Posto: ${posto}
Material: ${material}
Quantidade: ${quantidade}
Obs: ${obs}`;

  const url = `https://wa.me/SEUNUMERO?text=${encodeURIComponent(msg)}`;

  window.open(url, "_blank");
});