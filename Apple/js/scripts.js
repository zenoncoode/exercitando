const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e);

    buttons.forEach((btn) =>
      btn.querySelector(".color").classList.remove("selected")
    ); //remove a classe selected de todos os botoes

    const button = e.target; //atribui o botao que recebeu o evento de click a uma variavel

    const id = button.getAttribute("id"); //atribui o id do elemento botao à variavel id

    button.querySelector(".color").classList.add("selected"); //adiciona a classe selected ao botao clicado

    image.classList.toggle("changing"); //adiciona a classe changing (deixa a imagem com opacidade baixa)
    image.setAttribute("src", `img/iphone_${id}.jpg`); //muda o nome do diretorio da imagem para o id do botao selecionado

    setTimeout(() => { //animacao de tirar a opacidade
      image.classList.toggle("changing");
    }, 200);
  });
});