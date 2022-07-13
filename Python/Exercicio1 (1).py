class Aluno:
    def __init__(self, ra, nome, curso):
        self.ra = ra
        self.nome = nome 
        self.curso = curso

aluno1 = Aluno('2840482021024','Caio','ADS')

print ('O aluno ' + aluno1.ra + ' com o RA numero ' + aluno1.ra + ' cursa ' + aluno1.curso)
