# Upload de Arquivos

## Instalando biblioteca Mutler
```shell
yarn add multer
yarn add @types/multer
```

## Configurando rota
- Criar pasta tmp na raiz

```javascript
import multer from "multer";

const upload = multer({
  dest: "./tmp",
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  const { file } = request;
  return response.send();
});

```

## Configurando Insomnia
- Criar novo Request como POST
- Body: Multpart Form