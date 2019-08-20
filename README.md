<img src="https://miro.medium.com/max/700/1*CMpN6sIyyZvc47SDPvkirA.png" width="400" height="100" align="center" />

# Definição

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

