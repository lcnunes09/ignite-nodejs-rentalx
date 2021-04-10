# Controlando mensagens de erro e status code

## Repassando o erro
- Criar pasta `erros` dentro de `src`
- Criar arquivo `AppError.ts`:
```javascript
export class AppError {
  public readonly message: string;
  public readonly statusCode: number;

  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}
```

- Todos os locais que tiver `throw new Error` substituir para `throw new AppError`
- Lembrando de passar a mensagem e o status code; caso não passe será o default 400.

## Colocar o return no AppError
- No server, criar um novo middleware de error:
```javascript
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);
```
- Não esquecer de atualizar a importação:
```javascript
import express, { NextFunction, Request, Response } from "express";
```
- Para fazer com que os error sejam repasasdos, instalar a express-async-errors
```shell
yarn add express-async-errors
```
- Importar: 
```javascript
import "express-async-errors";
``` 