class Pessoa():
    def __init__(self):
        self.__nome = ''
        self.__cpf = ''
        self.__rg = ''

    def set_nome(self, nome):
        self.__nome = nome

    def set_cpf(self, cpf):
        self.__cpf = cpf

    def set_rg(self, rg):
        self.__rg = rg

    def get_nome(self):
        return self.__nome

    def get_cpf(self):
        return self.__cpf

    def get_rg(self):
        return self.__rg

class Aluno(Pessoa):
    def __init__(self):
         super().__init__()
         self.__ra = ''
    
    def set_ra(self, ra):
         self.__ra = ra

    def get_ra(self):
        return self.__ra

x = Pessoa()
x.set_nome('Noah Vinicius')
print(x.get_nome())

y = Pessoa()
y.set_nome('Tanaka')
print(x.get_nome())

obj = Aluno()
obj.set_nome('Alurdes de José')
obj.set_cpf('999999999-99')
obj.set_rg('99999999-9')
obj.set_ra('99999999999')
print(str(obj.get_nome()) + '\n' + str(obj.get_cpf()) + '\n' + str(obj.get_rg()) + '\n' + str(obj.get_ra()))