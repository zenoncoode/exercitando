class Pessoa:
    def __init__(self, nome, cpf, rg):
            self.nome = nome
            self.cpf = cpf
            self.rg = rg

    def mostra_professor(self):
        print(self.nome, self.cpf, self.rg)


class Aluno(Pessoa):
    def __init__(self, nome, cpf, rg, ra):
         super().__init__(nome, cpf, rg)
         self.ra = ra
    
    def mostra_aluno(self):
         print(self.nome, self.cpf, self.rg, self.ra)

x = Aluno('Noah', '458.893.548-84', '39080959-7', '2840481921009')
x.mostra_aluno()

class Professor(Pessoa):
    pass

y = Professor('Tanaka','999.999.999-99','99999999-9')
y.mostra_professor()