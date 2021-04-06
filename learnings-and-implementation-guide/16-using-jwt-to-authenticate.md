# Usando JWT (Json Web Token) para Autenticação

Uma das formas de fazer autenticação da aplicação é utilizando um token de autenticação. 

## Como funciona?
A aplicação tem uma rota de autenticação, passando o e-mail e a senha. 
É verificado se o usuário existe e se a senha está correta.
Caso o usuário exista e a senha esteja correta, é transformado em um token JWT para este usuário.

O token garante que o usuário está autenticado, sem necessidade de informar o usuário e senha toda vez.

## Partes do JWT
- Header: é composto do algorítimo que está sendo utilizado para gerar o token (exemplo: HS256) e o tipo do token (exemplo: JWT).
- Payload: onde passamos as informações do usuário (exemplo: e-mail, nome). Não devemos passar dados sensíveis, como a senha. Também pode ser passado quando o token foi gerado.
- Verify signature: é composto do encode do header e do payload.

## Até que ponto é seguro?
- Caso as informações sejam modificadas, o token se torna inválido.

Mais informações: http://jwt.io

## Implementando JWT na aplicação

### Instalação
Adicionar a biblioteca jsonwebtoken.
```shell
yarn add jsonwebtoken
yarn add @types/jsonwebtoken -D
```

### Aplicação:
- Criar UseCase - authenticateUserUseCase
- Criar Controller - authenticateUserController
- Criar rota: authenticate.routes
- Atualizar arquivo index de rotas

### Comparar senhas
Utilizar `compare` da `bcrypt` ou `bcriptjs`.
```javascript
import { compare } from "bcryptjs";
```

Exemplo de implementação:
```javascript
const passwordMatch = await compare(password, user.password);
```

### Gerando o token 
Utiilizar `sign` da `jsonwebtoken`.
```javascript
import { sign } from "jsonwebtoken";
```

Exemplo de implementação:
```javascript
const token = sign({}, "5455bc01d9d4320f46dabf1580277846", {
    subject: user.id,
    expiresIn: "1d",
});
```

### Retorno ao usuário
Exemplo de retorno:
```javascript
const tokenReturn: IResponse = {
    token,
    user: {
    name: user.name,
    email: user.email,
    },
};
```