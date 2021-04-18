# Automatizando imports com ts-config

Fazer o mapeamento das pastas para deixar os imports automatizados.

No arquivo `tsconfig.json`, procurar por "paths".
```json
"paths": {
    "@modules/*": ["modules/*"],
    "@config/*": ["config/*"],
    "@shared/*": ["shared/*"],
    "@erros/*": ["erros/*"],
    "@utils/*": ["utils/*"],
},
```

Também modificar o diretório base através do `baseUrl`:
```json
"baseUrl": "./src"
```

Após as mudanças, é necessário fazer o reload do VS Code.

`ctrl + shift + p`
Digitar: `reload window`

Para que o eslint não coloque as importações utilizando o @ para as primeiras posições, é necessário retirar o `shared`:
```json
"groups": ["module", "/^@/", ["parent", "sibling", "index"]],
```

Para fazer funcionar as novas importações, instalar a biblioteca como dependência de desenvolvimento `tsconfig-paths`.
```shell
yarn add tsconfig-paths -D
```

E alterar nos scripts `dev` e `typeorm` no arquivo `package.json`:
```json
"dev": "ts-node-dev -r tsconfig-paths/register --inspect --transpile-only --ignore-watch node_modules --respawn src/server.ts",
"typeorm": "ts-node-dev -r tsconfig-paths/register ./node_modules/typeorm/cli",
```