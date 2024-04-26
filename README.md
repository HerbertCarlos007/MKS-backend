<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Catálogo de Filmes</title>
    
     <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            padding: 0;
        }

        h1 {
            color: #333;
        }

        h2 {
            color: #555;
        }

        p {
            color: #777;
        }

        code {
            background-color: #f4f4f4;
            padding: 2px 5px;
            border-radius: 3px;
        }

        ol {
            margin-left: 20px;
        }

        a {
            color: #007bff;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }
    </style>
    
</head>

<body>
    <h1>Catálogo de Filmes</h1>
    <p>Este é um projeto de catálogo de filmes desenvolvido com NestJS, Redis, MySQL, Docker, TypeScript, JWT, TypeORM e Swagger.</p>


    <h2>Configuração</h2>
    <ol>
        <li>Clone o repositório: <code>git clone https://github.com/HerbertCarlos007/MKS-backend</code></li>
        <li>Instale as dependências: <code>npm install</code></li>
        <li>Copie o arquivo de variáveis de ambiente de exemplo: <code>cp .env.example .env</code></li>
        <li>Preencha as variáveis de ambiente no arquivo <code>.env</code> conforme necessário.</li>
    </ol>

    <h2>Execução</h2>
    <ol>
        <li>Inicie o ambiente Docker Compose: <code>docker-compose up</code></li>
        <li>Execute a aplicação em modo de desenvolvimento: <code>npm run start:dev</code></li>
    </ol>

    <h2>Uso</h2>
    <p>Acesse a documentação da API no Swagger em <a href="http://localhost:8080/api"></a> para ver os endpoints disponíveis e experimentá-los.</p>

   
</body>

</html>
