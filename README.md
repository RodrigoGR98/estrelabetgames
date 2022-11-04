# Instruções para inicialização do projeto

## Instalando dependências

Após clonar o repositório, entre no terminal do projeto e rode o comando "yarn" ou o comando "npm install" para instalar as dependências presentes no package.json

## Inserindo chave da API para realização das requisições

Tive um problema de CORS, então pela documentação da https://www.mmobomb.com/api segui a orientação de utilizar a API via RapidApi.

Então será necessário uma chave de api para que seja possível a realização das requisições. Para conseguir uma chave é bem simples. É só logar clicando no botão do canto superior direito (singup) com uma conta github, google ou facebook através do link https://rapidapi.com/digiwalls/api/mmo-games que será gerado uma nova chave para utilização da API.

Após gerar a chave é só colar na atribuição da variável REACT_APP_API_KEY no arquivo .env que estará tudo certo.

## Rodando o projeto

### `yarn start` ou `npm start`

Rodando o comando acima é possível executar o projeto em local.

### `yarn build`

Cria uma build do projeto
