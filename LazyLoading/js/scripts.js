const images = document.querySelectorAll(".image-container img");

const observer = new IntersectionObserver((entries, observer) => { //imagens e observador do evento passados como parametro
  entries.forEach((entry) => { //percorre cada imagem
    if (!entry.isIntersecting) return; //se a imagem não está sendo observada, ela continua com o width padrao de 10

    const image = entry.target; //cria variavel image e atribui o valor do elemento sendo observado

    image.src = image.src.replace("&w=10&", "&w=1000&"); //muda o link da imagem de 10 de width para 1000 de width 

    observer.unobserve(image); //após trocar a imagem, pare de observar (ou seja, só muda a imagem 1 vez)
  });
}, {});

images.forEach((image) => { //ativa a observação das imagens
  observer.observe(image);
});