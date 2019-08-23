<img src="https://miro.medium.com/max/700/1*CMpN6sIyyZvc47SDPvkirA.png" width="400" height="100" align="center" />

# Definição

<p align="center">
  <img src="https://user-images.githubusercontent.com/6977257/63563498-b0b47380-c537-11e9-924e-45333cf42f95.png">
</p>

A **CircleCi** foi fundada em 2011 e sediada em São Francisco. Já foi considerada líder em integração contínua e processa mais de 30 milhões de construções por mês. A CircleCI é subsidiada pela Scale Venture Partners, pela Threshold Ventures (antiga DFJ), pela Baseline Ventures, pela Top Tier Capital, pela Industry Ventures, pela Heavybit, pela Harrison Metal Capital e pela Owl Rock Capital. Parceiros e Parceiros NextEquity. 

Empresas líderes, incluindo a Samsung, a Ford Motor Company, a Spotify, a Lyft, a Coinbase, a PagerDuty, a Stitch Fix e o BuzzFeed utilizam a CircleCI. 


![image](https://user-images.githubusercontent.com/28986725/63617359-a76ee980-c5bf-11e9-84f8-18f0f2364517.png)


É uma forma de desenvolvimento de software mais rápida, com mais testes e assim, com menos falhas. Seu processamento é feito na nuvem, e  utiliza CI (integração contínua) e CD (distribuição contínua), que serão explicados abaixo.

**CI/CD** é usado para entregar aplicações com frequência aos clientes. Os conceitos utilizados são integração, entrega e implantação contínuas. Ele faz o monitoramento e automação contínuos durante as etapas de teste e integração e da entrega e implantação. 

**Integração contínua (CI)** é um meio de desenvolvimento de software em que os desenvolvedores colocam seus códigos em um repositório específico conforme forem finalizando cada funcionalidade.

**Distribuição Contínua (CD)** automatiza o lançamento de software completo.

**Teste de cobertura** é uma métrica usada para medir a quantidade de código que foi testada.

# Como usar

Primeiro de tudo é importante fazer o cadastro no site do [CircleCi](https://circleci.com/), 
e selecionar o projeto no seu repositorio do GitHub.

Depois do cadastro no site do CircleCi, acesse a dashboard do circle e clique em adicionar projeto (*Add  Projects*) e selecione o projeto e clique em (*Set Up Project*).

![image](https://user-images.githubusercontent.com/6977257/63370490-b011b680-c358-11e9-8eb9-3cdeba317a06.png)

Depois selecione o Sistema Operacional e a linguagem.

![image](https://user-images.githubusercontent.com/6977257/63370905-78efd500-c359-11e9-8f93-738e42bad0cc.png)

Agora iremos configurar o arquivo de *.circleci/config.yml* para que o CircleCi possa capturar as alterações realizadas no projeto.

Crie no seu projeto uma pasta chamada *.circleci* e adicione o arquivo *config.yml* e popule com seus triggers o arquivo.

![image](https://user-images.githubusercontent.com/6977257/63371310-3975b880-c35a-11e9-843b-5c0274f926f6.png)

Para exemplificar coloquei os seguintes triggers no *config.yml*:

~~~~
version: 2
jobs:
  build:
    docker:
      - image: circleci/python:3.6.1

    steps:
      - checkout
      - run:
          name: rodando
          command:
            python app.py
      - run:
          name: run tests
          command:
            python app.py test
~~~~
Estes triggers que tambem é chamado de *WorkFlows*, são responsaveis pelos testes e deploys, neste exemplo existe dois triggers um chamado **rodando** e outro chamado **run tests** que executa o programa *app.py*.


O arquivo *app.py* você poderá encontrar abaixo.
```python
import sys
a = 1
b = 2

print(a+b)

for param in sys.argv :
    print(param)
}
```

Feito essas configurações você pode clicar em *Start Bulding*, para que o CircleCi faz as verificações necessarias no projeto.

![image](https://user-images.githubusercontent.com/6977257/63386872-68038b80-c37a-11e9-91ca-c71462427f96.png)

Se tudo ocorrer bem irá aparecer que o *JOB* foi bem sucedido, como demonstrado na figura abaixo:
![image](https://user-images.githubusercontent.com/6977257/63399558-48cf2300-c3a7-11e9-8b87-bf0d094ec84d.png)
