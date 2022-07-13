class Pessoa:
    def __init__(self, nome, cpf, celular):
            self.nome = nome
            self.cpf = cpf
            self.celular = celular

    def retorna_dados(self):
        print(self.nome, self.cpf, self.celular)

class Aluno(Pessoa):
    def __init__(self, nome, cpf, celular):
         super().__init__(nome, cpf, celular)
    pass

x = Aluno('Noah', '458.893.548-84', '(16) 99642-0887')
x.retorna_dados()

class Professor(Pessoa):
    pass

y = Professor('Tanaka','999.999.999-99','(99) 99999-9999')
y.retorna_dados()