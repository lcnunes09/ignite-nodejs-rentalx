# Utilizando o Docker Compose

Orquestrar nossa aplicação, é útil para definir quais serviços precisamos para rodar nossa aplicação, quais as dependências, etc. Além do fato de ter o reload do serviço após efetuarmos alguma mudança no código.

Para outras pessoas rodarem o código, ela apenas precisa ter o docker e o docker compose instalado.

- Criar arquivo `docker-compose.yml` na raiz do projeto

Exemplo do conteúdo do arquivo para aplicação RentalX
```yml
version: "3.7"

services: 
  app:
    build: .
    container_name: rentx
    ports: 
      - 3333:3333
    volumes: 
      - .:/usr/app
```

Para iniciar o docker-compose:
```shell
docker-compose up
```

Para deixar rodando em background o docker-compose:
```shell
docker-compose up -d
```

Para visualizar os logs e ver o retorno de erros do nosso serviço:
```shell
docker-compose logs rentx -f
```

Dica: 
- A estrutura yml é identada. É fundamental respeitar os espaçamentos.

