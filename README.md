
<p align="center">
  <img src="https://image.flaticon.com/icons/svg/1364/1364461.svg" alt="Logo da Pegasus" style="width:10px;height:10px;">
</p>

# Serviço de Delivery: Pegasus Delivery

Documento de descrição do software
Agosto de 2019


## A – VISÃO GERAL

O sistema propõe-se a atender pessoas que necessitam de algum tipo de serviço de compra ou entrega (delivery) para quaisquer tipo de produtos. O aplicativo deverá ser usado inicialmente em todo o município de Campo Mourão, podendo depois expandir para os municípios próximos. O usuário especifica qual produto ou serviço ele deseja receber ou entregar, adiciona a localização e as observações necessárias. Espera até que algum entregador receba a notificação e se prontifique a realizar o pedido. Com essa premissa simples, o sistema ideal será capaz de cadastrar  usuários e entregadores, permitir que o usuário adicione um         pedido de serviço de entrega(delivery) e permitir que o entregador mais próximo da localização aceite o pedido de serviço de delivery.                                                                                

## B – REQUISITOS FUNCIONAIS

1. O sistema deve permitir o cadastro de usuários;
    * Sendo estes clientes e entregadores.

2. O sistema deve permitir que os clientes escolham qual serviço ou produto desejam obter;
    * Adicionando as informações necessárias para a realização do Serviço. 

3. O sistema deve permitir que os entregadores aceitem ou não um pedido;

4. O sistema deve permitir que os entregadores cancelem o pedido;

5. O sistema deve permitir que os clientes cancelem o serviço;
    * Sob pena de taxa.
    
6. O sistema deve permitir que os clientes mudem a rota durante a execução do serviço:
    * Caso o valor (R$) da mudança da rota for menor do que a rota atual é: mantido o valor da rota atual.
    * Caso o valor (R$) da mudança da rota for maior do que a rota atual é: cobrado o valor da nova rota. 

7. O sistema deve permitir mostrar a rota do pedido para o entregador;
    * Estimativa de tempo da atual localidade do entregador até o destino(onde ele deve pegar a mercadoria).
    * Estimativa de tempo da localidade destino até a localidade final.
