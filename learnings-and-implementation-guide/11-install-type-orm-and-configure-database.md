# Instalando e Configurando TypeORM e Configurando Banco de Dados

## Instalando TypeORM

Para saber mais: https://typeorm.io/#/

Para adicionar TypeORM
```shell
yarn add typeorm reflect-metadata
```

Instalar o driver de banco de dados que vamos usar:
```shell
yarn add pg
```

## Configurando TypeORM
Alterar arquivo `tsconfig.json`.

```json
"emitDecoratorMetadata": true,
"experimentalDecorators": true,
```

## Configurando Banco de Dados
- Criar pasta `database` na raiz
- Criar arquivo `index.ts` dentro da pasta `database`

```javascript
import { createConnection } from "typeorm";

createConnection();
```

- No arquivo `server.ts`, importar o banco de dados.
```javascript
import "./database";
```

- Criar na raiz o arquvo `ormconfig.json` para configura o TypeORM.
