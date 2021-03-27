# Criando Docker Container e Docker File

## Para ver se o Docker está corretamente instalado:
```shell
docker -v
```

## Rodando a nossa aplicação do Docker
O benefíco de rodar no Docker, é que toda a configuração é feita no docker e não precisa ter na nossa máquina.
- Criar arquivo na raiz do projeto `Dockerfile`.
- Se ainda nào tiver instalado a extensão do Docker no VS Code, instalar.
- Criar arquivo .dockerignore para informar quais pastas o Docker deverá ignorar ao criar a imagem. O container será responsável por baixar as dependências.

Exemplo do arquivo inicial para aplicação RentalX:

```dockerfile
FROM node

WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]
```

---

- FROM: colocar qual imagem você quer que seja criada
- WORKDIR: definir qual será a pasta onde queremos que as informações sejam contidas.
- COPY: copiando apenas o package.json dado que contém a listagem das dependências - não é necessário que a pasta node_modules seja colocada, dado que o docker irá baixar as dependências.
- RUN: dando npm install para baixar as dependências, dado que nem todas as imagens vem com o yarn instalado.
- COPY: após instalar as dependências, vamos copiar do nosso workdir para a raiz do projeto.
- EXPOSE: porta em que será exposta a nossa aplicação.
- CMD: iniciar a aplicação - ao invés de `yarn dev`, o comando seria `npm run dev`.

---

- Após criar o arquivo, rodar o comando para criar a imagem `rentx`, informando onde está o projeto que é a raiz da aplicação `.`:
```shell
docker build -t rentx .
```

- Para rodar a imagem, :
```shell
docker run -p 3333:3333 rentx
```

Para verificar os containers:
```shell
docker ps
```

Para executar e acessar o nosso container, rodar o docker exec com o nome da imagem criada (o último parâmetro da listagem das imagens): 
```shell
docker exec -it sad_galileo /bin/bash
```

Após rodar esse comando, é exibido um shell e, ao colocar o comando ls, por exemplo, é possível verificar as pastas da nossa aplicação.

Dica:
Para verificar todas as imagens disponíveis do Docker: https://hub.docker.com/search