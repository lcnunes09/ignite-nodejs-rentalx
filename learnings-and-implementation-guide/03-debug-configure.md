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