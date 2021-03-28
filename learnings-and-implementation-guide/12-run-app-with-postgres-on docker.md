# Rodando a aplicação com o banco de dados utilizando Docker

## Complementando o Docker Compose 
No arquivo docker-compose.yml, é necessário criar a imagem do banco de dados, no caso, Postgres. 

Importante:
- Ao criar os containers, eles natualmente ficam em IPs diferentes. Desta forma, é necessário adicionar os parâmetros `links` e `depends_on` no serviço da aplicação, assim como deve ser colocado o nome do serviço do banco de dados, no caso, `database_rentx`.
- `network_mode` deixou de ser compatível com a propriedade `ports`, por isso estamos utilizando as duas propriedades citadas acima.
- A propriedade `depends_on` irá informar que nosso serviço de API irá depender do serviço do banco de dados. Isso fará com que a ordem para os containers subirem seja primeiro o serviço database e depois o da API.
- A propriedade `links` faz uma ligação entre os containers, permitindo que o container de destino (API) tenha informações do container de origem (database). 
- Dessa forma, nosso service da aplicação agora conseguirá se comunicar com nosso banco de dados não mais através do IP, mas sim pelo nome do container. 
- Adicionar o redirecionamento da porta 9229:9229 para possibilitar o modo debug.


Arquivo docker_compose.yml:

```yml
version: "3.7"

services: 
  database_rentx:
    image: postgres
    container_name: database_rentx
    restart: always
    ports:
      - 5432:5432
    environment: 
      - POSTGRES_USER=docker
      - POSTGRES_PASSWORD=ignite
      - POSTGRES_DB=rentx
    volumes:
      - pgdata:/data/postgres
  
  app:
    build: .
    container_name: rentx
    ports: 
      - 3333:3333
      - 9229:9229
    volumes: 
      - .:/usr/app
    links:
      - database_rentx
    depends_on:
      - database_rentx

volumes:
  pgdata:
    driver: local
```

No arquivo `ormconfig.json` o  `host` deverá ser preenchido com o valor `localhost`.  

No arquivo `index.ts`, dentro da pasta `database`, deixar da seguinte forma (O HOST deve ser o mesmo nome do container de banco de dados criado):
```javascript
import { createConnection, getConnectionOptions } from 'typeorm';

interface IOptions {
  host: string;
}

getConnectionOptions().then(options => {
  const newOptions = options as IOptions;
  newOptions.host = 'database'; 
  createConnection({
    ...options,
  });
});
```

Rodar o comando `docker-compose up -d —force-recreate` no terminal, para atualizar as informações do container. 

Para testar: `docker logs rentx -f`.