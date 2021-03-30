# Utilizando injeção de dependências no NodeJS - TSyringe


[TSyringe](https://github.com/microsoft/tsyringe)

## Instalação

```shell
yarn add tsyringe
```

Modificar tsconfig.json:
```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

## Implementando o Design Patterns Singleton

**Singleton** especifica que apenas uma instância da classe pode existir, e esta será utilizada por toda a aplicação. Dessa forma, temos apenas um ponto de acesso central a esta instância da classe.

Ao utilizar Singleton temos mais controle sobre o acesso às propriedades e métodos de uma classe, e também reduzimos o consumo de memória desnecessário por utilizar várias instancias desnecessárias de uma classe.

Deve-se levar em consideração que a redução do consumo de memória ocorre no contexto de não termos instâncias desnecessárias de uma classe que é utilizada com frequência por toda a aplicação. Uma implementação incorreta desse padrão poderia ocasionar um desperdício de memória se o seu Singleton for utilizado raramente, já que você terá uma instância de um objeto desnecessário ocupando a memória da máquina.

Recomendação de quando utilizar o Singleton:

- Quando você precisar controlar a concorrência de acesso a recursos compartilhados;
- Quando uma classe for utilizada com frequência por várias partes distintas do sistema, e essa classe não gerencia nenhum estado da aplicação;

**Log**
Logs normalmente são utilizados por quase todas as classes de um sistema, e não retornam nenhuma informação que afeta o comportamento da aplicação. Este é um caso no qual o singleton pode ser bem empregado.

**Variáveis de configuração**
Variáveis de configuração podem ser carregadas ao iniciar o sistema, e normalmente não são alteradas diretamente pela aplicação. Utilizar uma classe singleton para armazenar essas informações pode funcionar como um cache em memória para que não seja necessário “buscar” essa informação toda vez que uma delas for requisitada.

**Acessar recursos de hardware compartilhado**
Uma aplicação multi-thread que necessite acessar recursos de um hardware onde o mesmo não foi feito para trabalhar dessa forma pode se beneficiar desse padrão. Isso porque todas as classes que necessitarem acessar algum recurso do hardware deverão utilizar a mesma instância da classe singleton. Esta será responsável por controlar todas as operações de comunicação entre a aplicação e o hardware.

Reference: https://www.opus-software.com.br/singleton-design-pattern/

## Configurando o código
- Criar uma estrutura de pasta, por exemplo, na raiz criar a pasta `shared` e dentro dela `container`. Dentro desta pasta, criar arquivo `index.ts`. 