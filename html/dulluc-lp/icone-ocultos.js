window.alert("oi");

var largura = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

console.log(largura);

if (largura < 800){
    window.alert("ativa")
    Document.write(
        
        
    )
}
else {
    
    document.write(
        <nav class="menu">
            <a href="#inicio" target="_self">Início</a>                
            <a href="#sobre">Sobre</a>
            <a href="#produtos">Produtos</a>
            <a href="#contato">Contato</a>
        </nav>
    );

}