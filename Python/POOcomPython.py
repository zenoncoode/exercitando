class Pessoa:
    def __init__(self, nome, idade, altura):
        self.nome = nome
        self.idade = idade
        self.altura = altura

    def oi(self):
        print (f'Oi, meu nome é {self.nome}, tenho {self.idade} anos e minha altura é de {self.altura}m. ')

    def cozinhar(self, receita):
        print(f'Estou cozinhando algo que se chama: {receita}. ')

    def corrida(self, distancia):
        print(f'Saí para correr, volto quando eu tiver corrido {distancia}m. ')

pessoa_alvo = Pessoa('Noah',22,1.60)

pessoa_alvo.oi()
pessoa_alvo.cozinhar('merengue')
pessoa_alvo.corrida('3000')
