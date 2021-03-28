# Comandos Docker e Docker Compose 

Lista containers iniciados:
```shell
docker ps 
```

Lista todos os containers, parados ou iniciados:
```shell
docker ps -a
```

Para executar e acessar o nosso container, rodar o docker exec com o nome da imagem criada (o último parâmetro da listagem das imagens): 
```shell
docker exec -it sad_galileo /bin/bash
```

Após rodar esse comando, é exibido um shell e, ao colocar o comando ls, por exemplo, é possível verificar as pastas da nossa aplicação.

Para parar o container, rodar docker stop + container id:
```shell
docker stop 1de3djdks
```

Para remover o container, rodar docker rm + container id:
```shell
docker rm 1de3djdks
```

Para iniciar, docker start + container id:
```shell
docker start 4f0a181af194
```

Para criar e iniciar pela primeira vez o serviço usando o docker-compose:
```shell
docker-compose up
```

Para deixar rodando em background o serviço usando o docker-compose:
```shell
docker-compose up -d
```

Para iniciar o serviço usando o docker-compose, caso esteja parado:
```shell
docker-compose start
```

Para parar o serviço usando o docker-compose:
```shell
docker-compose stop
```

Para remover o serviço:
```shell
docker-compose down
```

Para ver os logs:
```shell
docker logs rentx
```

Para ficar observando os logs:
```shell
docker logs rentx -f
```

Para forçar a recriação da imagem da aplicação, caso haja alguma mudança no docker-compose file.
```shell
docker-compose up --force-recreate
```

Comando para verificar o IP dos containers docker:
```shell
docker inspect --format='{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' rentx
```

Comando para verificar dados dos containers docker:
```shell
docker exec rentx cat /etc/hosts
```