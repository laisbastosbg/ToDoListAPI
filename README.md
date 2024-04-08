
## Rotas

### Cadastro de Usuario

POST https://todolistapi-iaeb.onrender.com/users

Parâmetros: corpo JSON
```JSON
{
	"name": "Mafalda",
	"email": "mafalda@email.com",
	"password": "senha"
}
```

Resposta: status 201, sem corpo

### Buscar usuário por email

GET https://todolistapi-iaeb.onrender.com/users?email=exemplo

Parâmetros: query (email do usuário)

Resposta: status 200, corpo array de usuários
```JSON
[
	{
		"id": 1,
		"name": "Magali",
		"email": "exemplo",
		"password": "mingau"
	}
]
```

### Criar tarefa

POST https://todolistapi-iaeb.onrender.com/tasks

Parâmetros: corpo JSON

```JSON
{
    "description": "Escovar os dentes",
    "userID": 3
}
```

Resposta: status 201, sem corpo

### Alterar descrição da tarefa

PATCH https://todolistapi-iaeb.onrender.com/tasks/:id/description

Parâmetros: parâmetro de rota: (id da tarefa) e corpo JSON
```JSON
{
	"description": "Tomar café da manhã"
}
```

Resposta: status 200, sem corpo

### Alterar status da tarefa

PATCH https://todolistapi-iaeb.onrender.com/tasks/:id/status

Parâmetros: parâmetro de rota: (id da tarefa) e corpo JSON
```JSON
{
	"status": "true"
}
```

Resposta: status 200, sem corpo

### Listar tarefas do usuário

GET https://todolistapi-iaeb.onrender.com/tasks/:userID

Parâmetros: parâmetro de rota (id do usuário)

Resposta: status 200, corpo array de tarefas
```JSON
[
	{
		"id": 1,
		"description": "Acordar",
		"status": true,
		"user_id": 3
	},
	{
		"id": 2,
		"description": "Tomar café da manhã",
		"status": false,
		"user_id": 3
	}
]
```

### Excluir tarefa

DELETE https://todolistapi-iaeb.onrender.com/tasks/:id

Parâmetros: parâmetro de rota (id da tarefa)

Resposta: status 200, sem corpo