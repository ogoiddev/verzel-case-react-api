# API Rest full - React app - Full stack project
* Case Car Shop challenge

## Documentação da API

* [Clique aqui](https://verzel-case-react-api-production-c540.up.railway.app/api/doc/) para estudar o comportamento das requisições de cada endpoint

![Screenshot](https://github.com/ogoiddev/verzel-case-react-api/blob/api-dev/backend/public/Screenshot%202022-11-02%20014634.jpg?raw=true)


## O frontend teve seu primeiro deploy:

* [Aplicacao - Clique aqui para conhecer o site](https://ogoiddev-verzel.vercel.app/)


* Para login no site utilize:
  - email = admin@admin.com
  - password: 123456


![Tela de cadastro de venda](https://github.com/ogoiddev/verzel-case-react-api/blob/main/frontend/public/Screenshot%202022-11-04%20045348.jpg?raw=true)


## Setup inicial do Back-end

* Utilizamos a referencia de um Boilerplate de projeto TS com o ESLint da Trybe e Debugger configurados
<details><summary>Instruções</summary>
<p>


Boilerplate de projeto TS
Sumário
Passo a passo
Usando o debugger
Este projeto é uma demonstração de como iniciar um projeto com typescript com o ESLint da Trybe e Debugger configurados.

Passo a Passo
Setup

Iniciar o projeto npm init -y

Instalar npm i -D typescript ts-node @types/node

Iniciar o tsconfig.json com npx tsc --init

Crie o arquivo inicial

mkdir src && touch src/index.ts
Criar o script start

No package.json, na chave scripts, adicione "start": "ts-node src/index.ts"
Copiar dependências do eslint na chave devDependencies do package.json

```ruby
"eslint": "^7.32.0",
"eslint-config-airbnb-base": "^15.0.0",
"eslint-config-airbnb-typescript": "^15.0.0",
"eslint-plugin-editorconfig": "^3.2.0",
"eslint-plugin-import": "^2.25.3",
"eslint-plugin-mocha": "^9.0.0",
"eslint-plugin-sonarjs": "^0.10.0"
```

Executar npm i para instalar as dependências copiadas

Criar o arquivo .eslintrc.json com o seguinte conteúdo:

```ruby
{
  "root": true,
  "env": {
      "browser": false,
      "node": true,
      "es2021": true,
      "jest": true
  },
  "extends": [
      "plugin:@typescript-eslint/recommended",
      "airbnb-base",
      "plugin:editorconfig/noconflict",
      "plugin:mocha/recommended",
      "airbnb-typescript/base"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "ecmaVersion": 2019,
      "sourceType": "module",
      "project": "./tsconfig.json"
  },
  "plugins": [
      "@typescript-eslint",
      "sonarjs",
      "editorconfig",
      "mocha"
  ],
  "rules": {
      "no-underscore-dangle": "off",
      "lines-between-class-members": ["error", "always", { "exceptAfterSingleLine": true }],
      "@typescript-eslint/lines-between-class-members": ["error", "always", { "exceptAfterSingleLine": true }],
      "no-console": "off",
      "camelcase": "warn",
      "arrow-parens": [
          2,
          "always"
      ],
      "quotes": [
          2,
          "single"
      ],
      "implicit-arrow-linebreak": "off",
      "consistent-return": "off",
      "no-unused-vars": [
          "error",
          {
              "argsIgnorePattern": "^_",
              "ignoreRestSiblings": true
          }
      ],
      "object-curly-newline": "off",
      "max-params": [
          "error",
          4
      ],
      "max-lines": [
          "error",
          250
      ],
      "max-lines-per-function": [
          "error",
          {
              "max": 20,
              "skipBlankLines": true,
              "skipComments": true
          }
      ],
      "max-len": [
          "error",
          {
              "code": 100
          },
          {
              "ignoreComments": true
          }
      ],
      "complexity": [
          "error",
          5
      ],
      "import/no-extraneous-dependencies": [
          "off"
      ],
      "sonarjs/cognitive-complexity": [
          "error",
          5
      ],
      "sonarjs/no-one-iteration-loop": [
          "error"
      ],
      "sonarjs/no-identical-expressions": [
          "error"
      ],
      "sonarjs/no-use-of-empty-return-value": [
          "error"
      ],
      "sonarjs/no-extra-arguments": [
          "error"
      ],
      "sonarjs/no-identical-conditions": [
          "error"
      ],
      "sonarjs/no-collapsible-if": [
          "error"
      ],
      "sonarjs/no-collection-size-mischeck": [
          "error"
      ],
      "sonarjs/no-duplicate-string": [
          "error"
      ],
      "sonarjs/no-duplicated-branches": [
          "error"
      ],
      "sonarjs/no-identical-functions": [
          "error"
      ],
      "sonarjs/no-redundant-boolean": [
          "error"
      ],
      "sonarjs/no-unused-collection": [
          "error"
      ],
      "sonarjs/no-useless-catch": [
          "error"
      ],
      "sonarjs/prefer-object-literal": [
          "error"
      ],
      "sonarjs/prefer-single-boolean-return": [
          "error"
      ],
      "sonarjs/no-inverted-boolean-check": [
          "error"
      ]
  }
}
```

Usando o debugger
Primeiramente lembre-se de colocar o breakpoint aonde você quer pausar o código

Ativando breakpoint

Para iniciar o debugger, basta clicar em Depurar acima da chave scripts.

Depurar no package.json

Depois escolher o script que você quer depurar.

Nesse caso provavelmente será o start

Escolher script

</p>
</details>

## Principais dependências:

* NodeJs
* Express
* Mongoose
* Cors
* Helmet
* Swagger
* ZOD

#### [Instruções para Swagger setup](https://dev.to/luizcalaca/autogenerated-documentation-api-with-openapi-and-swagger-for-nodejs-and-express-31g9)


## Veja o projeto rodando localmente

* Rodar com o Docker(compose) instalado na maquina pode ser a maneira mais facil:

- Depois de clonado o projeto voce acessa a pasta **backend** e chama o comando:
```
npm install
```
... depois chama:
```
docker compose up -d
```
#### !:)! - Pronto! voce ja esta com o MongoDB rodando no Docker junto com sua Aplicacao API. Pode testar as rotas.



Se voce tiver acesso ao terminal do container, voce recebe um log final assim:
```
> verzel-case-react-api@1.0.0 dev
> ts-node src/index.ts

Running server on port: 3001
```
Rota para ver o swagger doc API => **http://localhost:3001/api/doc**

#### Se estiver usando o Thunder Cliente voce pode importar as queries prontas:

* o arquivo esta salvo no diretorio base - **thunder-collection_verzel_car_shop**

--------------------------------------------------------------------

### Para rodar o frontend tambem e bem facil:
* acesse a pasta frontend do projeto e execute:
```
npm install
```
... depois chama:
```
npm run dev
```

Agora sim. Uma aplicacao completa para estudar. :)

## Informacoes uteis

* As variaveis de ambiente verifica no arquivo docker-compose.yml
* Algumas bibliotecas podem nao rodar em determinados sistemas.

* Para rodar localmente sem o docker voce vai precisar configurar a connection:

* Se tiver problemas com Eslint nas importacoes, configure o seu diretorio em "project" no arquivo **.eslintrc.json**

- "parserOptions": {
      "ecmaVersion": 2019,
      "sourceType": "module",
      "project": "./**/tsconfig.json"

* Se tiver problemas no frontend tente acessar o arquivo **endpoints.ts** na pasta service do frontend para ver as configuracoes:
- const URL_LOCAL = "http://localhost:3001/"
- const URL_WEB = "https://verzel-case-react-api-production-c540.up.railway.app/"

* Ja temos bastante codigo aqui, feito com muito carinho, mas ainda nao esta completa a aplicacao. Obrigado pela visita.
