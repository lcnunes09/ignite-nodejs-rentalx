# Instalando JEST na aplicação

Para instalar o jest e suas tipagens e rodar o jest:
```shell
yarn add jest @types/jest -D
yarn jest --init 
```

Vamos precisar adicionar também como dependência de desenvolvimento o ts-jest:
```shell
yarn add ts-jest -D
```

No arquito `jest.config.ts`, habilitar e alterar a configuração:
```json
preset: "ts-jest",
```

Para informar o mapeamento das classes, considerando que os testes estarão dentro de cada useCase:
```json
testMatch: ["**/*.spec.ts"],
```

Para parar a aplicação após o primeiro erro:
```json
bail: true,
```

