# Automatizar a conversão do typescript para javascript

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
