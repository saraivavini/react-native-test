# Instruções

- O app deve ser escrito usando React Native (https://github.com/facebook/react-native).
- Utilize **boas práticas** de desenvolvimento e **componentização**. Essa é sua oportunidade de demonstrar suas habilidades.
- Não nos importamos se a solução estiver incompleta, estamos interessados em ver a construção da sua solução.
- Não é obrigatório seguir fielmente as cores e icones do guia (veja no final do teste), mas é importante seguir a mesma estrutura.

# GitHub

- Faça um *fork* do projeto no GitHub.
- Adicione @eem-dev como um colaborador do seu *fork*. Você pode facilmente fazer isso em https://github.com/`seu-usuario`/react-native-test/settings/collaboration.
- Quando iniciar o teste, faça um *commit* vazio com a mensagem `iniciando teste` e quando finalizar, faça um *commit* com a mensagem `finalizando teste`.
- Faça vários *commits* com o objetivo de demonstrar a construção da solução
- Não use *branches*.
- Tente não gastar mais do que 4 horas para finalizar o teste.

-------------------------------------------------------------

# Teste

**1 - Construa uma interface com os campos Login e Senha e um botão entrar. Ao tocar em entrar, o app deve executar a requisição abaixo, a qual retornará uma lista de escolas disponíveis para o usuário.**

    Usuário: pai
    Senha: pai@123

API:

    http://apiteste.escolaemmovimento.com.br/api/v1/Acesso/login

Curl:

    curl -X POST \
      https://apiteste.escolaemmovimento.com.br/api/v1/Acesso/login \
      -H 'Content-Type: application/json' \
      -d '{
        "login": "pai",
        "senha": "pai@123",
        "nomeApp": "br.com.eem.teste",
        "versaoApp": "10",
        "versaoSO": "10",
        "idDispositivo": "teste-mobile"
      }'
    
    
**2 - Agora você deve criar uma nova interface com a lista de escolas retornadas na requisição anterior, mostrando a logo e o nome da escola.**

**Dica:** Utilize os campos do retorno:
1. urlLogoContexto para a imagem
2. nomeAplicacao para o nome da escola
      

**3 - Quando o usuário tocar em uma das escolas, abra uma nova interface com a logo da escola em uma escala maior, ocupando todo o espectro horizontal da tela do app. Ainda nessa interface com a logo, o app deve fazer a requisição abaixo, para obter a lista de mensagens do usuário, enquanto a requisição é processada, um ícone de carregando deve ser exibido abaixo da logo.**

API:
  *A URL para essa API deve ser construída a partir do retorno obtido na requisição anterior (login), usando o atributo "contexto".*
  
    https://`contexto`/api/mensagem/ultimas-noticias/v3

Curl:

    curl -X POST \
      https://`contexto`/api/mensagem/ultimas-noticias/v3 \
      -H 'Content-Type: application/json' \
      -H 'X-Authorization: zTIwexp/s0oDIiu7B2tK4Bj8tN8Ehj+P8hvtt9AxOsAJDhe4M7uX6TKx9qfKAIB99PuXgCd2CNes1vtFOc3YTA==' \
      -d '{
    }'


**4 - Agora você deve criar uma interface que tenha uma barra superior que exibe a logo e o nome da escola, uma lista que vai mostrar as mensagens obtidas na requisição anterior e uma barra de navegação na parte inferior (use ícones e descrições de exemplo).**


***EXTRA***
Será considerado um diferencial se você fizer tratamentos de erros, falhas de rede e indicadores de carregamento para melhorar a usabilidade do usuário.

# Telas

![Telas](http://du72ei5gcsbn3.cloudfront.net/static/react-native-test/guia-teste-mobile.png)
