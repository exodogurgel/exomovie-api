# App

ExoMovies app.

## RFs (Requisitos funcionais)

👤 Autenticação & Usuário

- [ ] Deve ser possível se cadastrar;
- [ ] Deve ser possível se autenticar;
- [ ] Deve ser possível obter o perfil do usuário logado;
- [ ] Deve ser possível atualizar dados do perfil do usuário;
- [ ] Deve ser possível excluir a conta do usuário;

🎞 Filmes (integração com TMDB)

- [ ] Deve ser possível buscar filmes por nome;
- [ ] Deve ser possível listar filmes populares/em alta;
- [ ] Deve ser possível obter os detalhes de um filme pelo tmdbId;

📋 Listas de Filmes

- [ ] Deve ser possível criar uma lista (Ex: Comedias pastelão)
- [ ] Deve ser possível adicionar um filme à lista “Quero assistir”;
- [ ] Deve ser possível marcar um filme como “Assistido”;
- [ ] Deve ser possível remover um filme da lista;
- [ ] Deve ser possível listar os filmes da watchlist do usuário;
- [ ] Deve ser possível listar os filmes assistidos pelo usuário;

⭐ Avaliações

- [ ] Deve ser possível avaliar um filme assistido;
- [ ] Deve ser possível editar a avaliação de um filme;
- [ ] Deve ser possível remover a avaliação de um filme;
- [ ] Deve ser possível obter a avaliação do usuário para um filme específico;

📝 Reviews

- [ ] Deve ser possível criar um review para um filme assistido;
- [ ] Deve ser possível editar um review;
- [ ] Deve ser possível remover um review;

📊 Dashboard

- [ ] Deve ser possível obter o total de filmes assistidos;
- [ ] Deve ser possível obter a média das notas do usuário;
- [ ] Deve ser possível obter o gênero mais assistido pelo usuário;

## RNs (Regras de negócio)

👤 Usuário

- [ ] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [ ] O usuário só pode acessar dados pertencentes à sua própria conta;

🎞 Filmes & Listas

- [ ] Um filme só pode existir uma vez por usuário na base;
- [ ] Um filme só pode ter um status por usuário (WATCHLIST ou WATCHED);
- [ ] Ao remover um filme da lista, sua avaliação e review devem ser removidos;
- [ ] O backend não deve armazenar o catálogo completo de filmes da TMDB;

⭐ Avaliações

- [ ] O usuário só pode avaliar filmes com status WATCHED;
- [ ] A nota do filme deve estar entre 0 e 10;
- [ ] O usuário não pode criar mais de uma avaliação para o mesmo filme;
- [ ] O usuário pode atualizar sua avaliação a qualquer momento;

📝 Reviews

- [ ] O review é opcional;
- [ ] O review só pode ser criado para filmes assistidos;
- [ ] O review pertence exclusivamente ao usuário que o criou;

🔐 Autorização

- [ ] Rotas privadas devem exigir autenticação;
- [ ] O token inválido ou expirado deve impedir acesso às rotas protegidas;

## RNFs (Requisitos não-funcionais)

- [ ] A senha do usuário deve ser armazenada de forma criptografada;
- [ ] A autenticação deve ser baseada em JWT (JSON Web Token);
- [ ] O backend deve ser stateless;
- [ ] Os dados devem ser persistidos em um banco PostgreSQL;
- [ ] O backend não deve expor a chave da API da TMDB ao frontend;
- [ ] Todas as respostas devem ser em JSON;
- [ ] As rotas devem seguir o padrão REST;
- [ ] O backend deve possuir versionamento de API (/api/v1);
- [ ] As listas devem ser paginadas (ex: 20 itens por página);
- [ ] O backend deve validar todas as entradas do usuário;
- [ ] O backend deve utilizar variáveis de ambiente para dados sensíveis;

## 🧠 Observação Arquitetural

- O frontend não acessa a TMDB diretamente;
- O backend atua como BFF (Backend for Frontend);
- O banco armazena apenas dados relacionados ao usuário.
