import pandas as pd
from numpy import genfromtxt
from sklearn.neighbors import KNeighborsClassifier
import os


#Limite de variação do k
CONST_K = 22

path = os.path.dirname(os.path.realpath(__file__))

#O separador padrão do pandas para csv é ',' então passar sep com o separador usado
base_treino = pd.read_csv(path + '\\base_treino.csv', sep=';')

base_indicada_algoritmo = pd.read_csv(path + '\\base_material_inidicado_algoritmo.csv', header=None, sep=';')
array_base_indicada = base_indicada_algoritmo.to_numpy()
materiais_indicado_algoritmo = base_indicada_algoritmo.iloc[:,-1].to_numpy()

respostas_alunos = genfromtxt('base_prever_material.csv', delimiter=';', dtype=int)

#axis=1 indica coluna, o padrão é axis=0 que é linha
x = base_treino.drop('Material', axis=1) #Remove a coluna Material para pegar apenas as respostas
y = base_treino.Material #Pega apenas a coluna Material

#Cria o classificador e passa o k
knn = KNeighborsClassifier(n_neighbors = 1)

text_file = open("resultado.txt", "w")

loop_base = 0
tamanho_base = 0
melhor_acuracia = 0
dados_melhor_acuracia = ""
arquivo_txt = ""

#Loop para ir pegando de 40 em 40 linhas na base de treino
while True:
  #Pega a base de treinamento
  tamanho_base += 40

  #Se for maior que o tamanho total da base de teino
  if tamanho_base > base_treino.shape[0]:
    break

  knn.fit(x.head(tamanho_base), y[0 : tamanho_base])

  #Loop para variar o k de 1 até CONST_K de 2 em 2
  for k in range(1, CONST_K, 2):
    print("\nCom k = ", k)
    knn.n_neighbors = k
    qtdAcertos = 0
    indice = 0
    
    for resp_aluno in respostas_alunos:
      material = knn.predict([resp_aluno])

      if material == materiais_indicado_algoritmo[indice]:
        qtdAcertos += 1

      indice += 1
    
    acuracia = (qtdAcertos / materiais_indicado_algoritmo.size) * 100

    if acuracia > melhor_acuracia:
      melhor_acuracia = acuracia
      dados_melhor_acuracia = F"Base de Treinamento {tamanho_base} questionários - Indicado p/ {respostas_alunos.shape[0]} questionários - k = {k} - Acurácia {materiais_indicado_algoritmo.size}/{qtdAcertos} = {round(melhor_acuracia, 1)}%"
    elif acuracia == melhor_acuracia:
      dados_melhor_acuracia += F"\nBase de Treinamento {tamanho_base} questionários - Indicado p/ {respostas_alunos.shape[0]} questionários - k = {k} - Acurácia {materiais_indicado_algoritmo.size}/{qtdAcertos} = {round(melhor_acuracia, 1)}%"

    arquivo_txt += (f"Base {tamanho_base} - Indicado p/ {respostas_alunos.shape[0]} - Com k = {k} - Acurácia {materiais_indicado_algoritmo.size}/{qtdAcertos} = {round(acuracia, 1)}%\n")
    arquivo_txt += "-----------------------------------------------------------------------\n\n"
    
  loop_base += 1
  arquivo_txt += "\n-----------------------------------------------------------------------\n"

text_file.writelines("------------------------------------------------------------------------------------------------------\n")
text_file.writelines(dados_melhor_acuracia)
text_file.writelines("\n------------------------------------------------------------------------------------------------------\n\n\n")
text_file.writelines(arquivo_txt)

text_file.close()