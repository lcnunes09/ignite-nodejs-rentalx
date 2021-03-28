# Configura as Migrations e cria a primeira migration - Create Category

## Criando comando da cli do typeorm
Criar dentro de `scripts` um novo comando no arquivo `package.json`:
```json
"typeorm": "ts-node-dev ./node_modules/typeorm/cli"
```

## Configurando local em que serão salvas as migrations
- Criar a pasta `migrations` dentro de `database`.
- No arquivo `orm_config.json`, vamos informar a pasta que serão salvas as migrations. Abaixo do parâmetro `database`:
```json
"cli": {
    "migrationsDir": "./src/database/migrations"
}
```
- No arquivo `orm_config.json`, vamos informar a pasta que serão pegas as migrations para serem rodadas, agora antes do parâmetro `cli` criado acima:
```json
"migrations": ["./src/database/migrations/*.ts"],
```

## Criando primeira migration
- Para criar a primeira migration, rodar o comando `yarn typeorm migration:create -n` + o nome da migration:
```shell
yarn typeorm migration:create -n CreateCategories
```

Exemplo da primeira migration:
```javascript
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCategories1616973507338 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "categories",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("categories");
  }
}
```

- Para rodar a migration:
```shell
yarn typeorm migration:run
```

- Caso queira desfazer a migration:
```shell
yarn typeorm migration:revert
```