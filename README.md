*** Não foi abordado o monitoramente de paginas do instagram ou facebook nesse app, por conta de permissões que não consegui solitar ***
*** Criei somente um sistema que se comunica com o facebook por meio de login, e obtém informações básicas de usuário a partir da Graph API ***

Para conseguir executar o projeto é necessário que as dependências na pasta principal.

O folder server contem uma simples API rodando localmente com integração a um banco de dados mongoDB. Lá é salvo somente o nome do usuário, id do facebook, configurações, stories ativos e relatórios de seguidores.

As chamadas com a API do Facebok (Graph API) estão todas contidades dentro da componente FacebookButton.

Foram definidas variaveis globais de controle do aplicativo na pasta store As Rotas do app estão definidas na pasta router.
O arquivo facebook.js é chamado para inicializar a SDK do facebook antes de montar o app (em services). 
O arquivo userService.js é chamado ao longo da aplicação, de forma estática, para realizar as operações e chamadas do serve como: resgatar. todos usuarios, resgatar um usuario, apagar usuario, editar usuario e inserir usuario.

O projeto é iniciado de forma simultanea a partir da dependencia concurrently.

*** Para rodar o server e o vue-cliente é necessário chamar o 'npm run start' na pasta principal. ***

