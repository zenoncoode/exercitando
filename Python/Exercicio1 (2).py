class Aluno:
    def __init__(self, ra, nome, curso):
        self.ra = ra
        self.nome = nome 
        self.curso = curso

    def retorna_dados(self):
        print ('O aluno ' + self.nome + ' com o RA numero ' + self.ra + ' cursa ' + self.curso)

aluno1 = Aluno('2840482021024','Caio','ADS')
aluno1.retorna_dados()