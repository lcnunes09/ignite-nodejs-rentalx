# ignite-nodejs-rentalx
Repositório para criar a aplicação RentalX do Ignite NodeJS

## Setup Inicial:
```shell
yarn init -y
yarn add express
yarn add @types/express -D
yarn add typescript -D
yarn tsc --init
```

# Padronização do Código com ESLint e Prettier
- Instalar a extensão ESLint no VS Code
- No Arquivo settings.json do VSCode:
```json
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
```
## Instalando ESLint
```shell
yarn add eslint -D
yarn eslint --init
```

## Instalando as dependências manualmente
Exemplo:
```shell
yarn add -D @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint-plugin-import@^2.22.1 @typescript-eslint/parser@latest
yarn add -D eslint-plugin-import-helpers eslint-import-resolver-typescript
```

## Criar arquivo ignore
Criar arquivo na raiz: .eslintignore
```
/*.js
node_modules
dist
```
## Outras configurações necessárias
Agora vamos começar a configuração do arquivo que foi gerado na inicialização do **ESLint**, o `.eslintrc.json` , a primeira coisa a ser feita é adicionar dentro de `"env"` a linha:

```json
"jest": true
```

Ainda dentro de `"env"`, verifique se a primeira linha está como `"es2020": true`, caso contrário faça a alteração deixando assim.

O próximo passo é adicionar dentro de `"extends"` a linha:
```json
"plugin:@typescript-eslint/recommended"
```

Agora, precisamos configurar o plugin que instalamos para que seja usado pelo ESLint. Para isso, adicione o seguinte dentro de "plugins":
```json
"eslint-plugin-import-helpers"
```

Em seguida, adicionamos dentro de "rules" as seguintes configurações:

```json
"camelcase": "off",
"import/no-unresolved": "error",
"@typescript-eslint/naming-convention": [
  "error",
  {
    "selector": "interface",
    "format": ["PascalCase"],
    "custom": {
      "regex": "^I[A-Z]",
      "match": true
    }
  }
],
"class-methods-use-this": "off",
"import/prefer-default-export": "off",
"no-shadow": "off",
"no-console": "off",
"no-useless-constructor": "off",
"no-empty-function": "off",
"lines-between-class-members": "off",
"import/extensions": [
  "error",
  "ignorePackages",
  {
    "ts": "never"
  }
],
"import-helpers/order-imports": [
  "warn",
  {
    "newlinesBetween": "always",
    "groups": ["module", "/^@shared/", ["parent", "sibling", "index"]],
    "alphabetize": { "order": "asc", "ignoreCase": true }
  }
],
"import/no-extraneous-dependencies": [
  "error",
  { "devDependencies": ["**/*.spec.js"] }
]
```

Por fim, para que o Node.js consiga entender arquivos Typescript é necessário acrescentar uma configuração adicional nas importações pois por padrão vai ser apresentado um erro dizendo que as importações de arquivos Typescript não foram resolvidas. Para resolver isso basta adicionar logo abaixo das "rules" no .eslintrc.json o seguinte:
```json
"settings": {
  "import/resolver": {
    "typescript": {}
  }
}
```

Para finalizar e aplicar todas as mudanças vamos fechar o VS Code e reabrir na **pasta raiz** do projeto, pois senão o **ESLint** não vai reconhecer as dependências instaladas e aplicar as regras de Linting.

Feito isso, para verificar se está realmente funcionando basta reabrir qualquer arquivo do projeto e tentar errar algo no código para que ele mostre o erro e formate automaticamente quando o arquivo for salvo.

# Prettier

Antes de começar a configuração é importante que você se certifique de remover a extensão Prettier - Code Formatter do seu VS Code.

A primeira coisa que vamos fazer para a configuração do Prettier é a instalação dos pacotes no projeto, e faremos isso executando:
```shell
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```

Esse comando vai adicionar 3 dependências que serão as responsáveis por fazer a formatação do código e também integrar o **Prettier** com o **ESLint**.

Com a instalação feita vamos modificar o arquivo `.eslintrc.json` adicionando no `"extends"` as seguintes regras:
```json
"prettier",
"plugin:prettier/recommended"
```

Nos "plugins" vamos adicionar apenas uma linha com:
```json
"prettier"
```

E nas "rules" vamos adicionar uma linha indicado para o ESLint mostrar todos os erros onde as regras do Prettier não estiverem sendo seguidas, como abaixo:
```
"prettier/prettier": "error"
```

# Para automatizar a conversão do typescript para javascript

```shell
yarn add ts-node-dev -D
```

No package.json, criar um novo script para dev:
```json
"scripts" : {
  "dev": "ts-node-dev --transpile-only --ignore-watch node_modules --respawn src/server.ts"
}
```

Respawn - Para sempre dar o reload após a mudança de código da aplicação.

No arquivo tsconfig.json, comentar o strict: true. É uma opção do javascript que checa os erros dentro da nossa aplicação. Como está sendo usado typescript, a responsabilidade será dele.
```json
// "strict": true, 
```

# Configurando Debug no VS Code
- Ao clicar na seta do lado esquerdo do VSCode, na tela que abrir clicar no link "create a launch.json file".
- Escolher Node.js
- Na configuração aberta, mudar:
```json
"type": "node"
"request": "attach"
```
Deleta "program".

No arquivo package.json: alterar o script "dev" para: 
```json
"scripts" : {
  "dev": "ts-node-dev --inspect --transpile-only --ignore-watch node_modules --respawn src/server.ts"
}
```

Ao rodar o servidor, já irá aparecer que o debug está funcionando e ao dar o play na área de debug, uma barra vermelha já irá aparecer.

Pode ser colocado variávels dentro da área "watch" para acompanhar.

# Configurando a utilização UUID
Para instalar:
```shell
yarn add uuid
yarn add @types/uuid -D
```

Na aplicação importar
```javascript
import { v4 as uuidV4 } from "uuid";
```