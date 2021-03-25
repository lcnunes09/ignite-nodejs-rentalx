# Instalando e Configurando Swagger na aplicação

## Instalação Swagger
```shell
yarn add swagger-ui-express
yarn add @types/swagger-ui-express -D
```

## Importando Swagger
No server, importar: 
```javascript
import swaggerUi from "swagger-ui-express"
```

## Criar arquivo json que terá a documentação da aplicação
- Criar arquivo swagger.json na raiz do projeto.
- Importar o arquivo, depois da importação da rota.

```javascript
import swaggerFile from "./swagger.json"
```

Caso esteja dando erro no arquivo, é necessário colocar "resolveJsonModule: true" no arquivo tsconfig.json.

## Criando rota para a aplicação com o swagger
No server, criar a rota e adicionar no setup o arquivo json:
```javascript
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
```

## Exemplo do arquivo de swagger.json

```json
{
    "openapi": "3.0.0",
    "info": {
        "title": "RentalX Documentation",
        "description": "This is an API Rent",
        "version": "1.0.0",
        "contact": {
            "email": "lcnunes09@gmail.com"
        }
    }
}
```
