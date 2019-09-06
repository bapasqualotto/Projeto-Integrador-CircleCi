
<h1>Serviço de Delivery</h1>
<p align="center">
  <img src="https://user-images.githubusercontent.com/6977257/64434394-d93f8000-d096-11e9-9474-53534c5cbd49.png" alt="Logo da Pegasus" width="100" height="100">
  <br><b>Pegasus Delivery</b><br>

</p>

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
    
 ## C – Historias
 
 * Eu como cliente quero me cadastrar no aplicativo para poder usar as suas funcionalidades;
 * Eu como entregador quero fazer o cadastro no aplicativo para conseguir pegar alguns trabalhos de entrega;
 * Eu como cliente quero solicitar que um entregador pegue um documento no fórum e traga para minha casa;
 * Eu como cliente quero que o entregador vá até a sala de aula e assine o meu nome;
 * Eu como cliente quero cancelar um pedido no aplicativo;
 * Eu  como entregador quero ter a opção de cancelar um Serviço;
 * Eu como entregador quero saber uma estimativa aproximada até o local do serviço;
 * Eu como cliente quero  saber o tempo que levará depois que o meu pedido for aceito por um Entregador;
 * Eu como cliente quero alterar a rota depois que o entregador aceitou o serviço;
