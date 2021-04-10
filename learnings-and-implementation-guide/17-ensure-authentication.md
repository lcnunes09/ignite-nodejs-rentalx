# Garantindo que apenas usuários autenticados acessem a aplicação

## Criar middleware para autenticação
Dentro de `src` criar arquivo `ensureAuthentication.ts`

## Dados para autenticação
- JWT é um token do tipo Baerer Token, é necessário configurar desta forma para colocar o token no header
- Para pegar os dados, utilizar request.headers.authorization
- Esta informação vem em um array de duas posições: Bearer [TOKEN]
- Para desestruturar o token, podemos usar o split, separando por vazio " "

## Verificar 
- Para verificar o token, utilizar `verify` do `jsonwebtoken`
- Para verificar, é necessário passar os parâmetros: token e a chave gerada que foi utilizada no Use Case
- Para usar o verify, precisa utilizar o try catch
- Lembrar de colocar o next(); no final 
- Para efetuar a destruturação, criar interface IPayload, por exemplo, e chamar o `sub`

## Utilizando a autenticação nas rotas
- Para garantir que a rota apenas será chamada caso esteja autenticada, exemplo:

```javascript
specificationsRoutes.use(ensureAuthenticated);
```

- Criar um findById para retornar o usuário 

Lembrar de colocar o token no Insomnia! :D 