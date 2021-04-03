# Encriptando Password

Para encriptar a senha, vamos instalar o módulo bcrypt.
```shell
yarn add bcrypt
yarn add @types/bcrypt -D
```

Importar hash
```javascript
import { hash } from "bcrypt";
```

No método create:
```javascript
const passwordHash = await hash(password, 8);

await this.usersRepository.create({
    name,
    email,
    password: passwordHash,
    driver_license,
});
```

**Dica:**
Caso o seguinte erro apareça: `Bcrypt invalid ELF header`, utilize `bcryptjs` ao invés de `bcrypt`.