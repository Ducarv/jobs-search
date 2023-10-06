# Busca de Vagas de Emprego

Este projeto é uma aplicação Node.js que permite buscar vagas de emprego usando a API Custom Search do Google e salvar os resultados em um arquivo de texto. Ele oferece uma maneira fácil de pesquisar vagas de emprego com base em uma consulta fornecida pelo usuário.

## Como Usar

Para usar este projeto, siga estas etapas:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. **Crie um arquivo `.env`:**

   Na raiz do projeto, crie um arquivo chamado `.env` e configure as seguintes variáveis de ambiente:

   ```dotenv
   GOOGLE_KEY=SuaChaveDeAPIDoGoogle
   GOOGLE_CX=SeuIDDeMecanismoDePesquisaProgramável
   ```

   Certifique-se de substituir `SuaChaveDeAPIDoGoogle` e `SeuIDDeMecanismoDePesquisaProgramável` pelas suas credenciais da [Custom Search API do Google](https://developers.google.com/custom-search/docs/tutorial/introduction).

3. **Instale as dependências:**

   Execute o seguinte comando para instalar as dependências do projeto:

   ```bash
   npm install
   ```

4. **Execute o projeto:**

   Inicie o programa com o seguinte comando:

   ```bash
   npm run
   ```

5. **Insira sua consulta:**

   O programa solicitará que você insira uma consulta de pesquisa. Digite a consulta e pressione Enter.

6. **Verifique os resultados:**

   Os resultados da pesquisa serão salvos em um arquivo chamado `jobs.txt` no diretório `jobs` do projeto.

7. **Acesse as vagas de emprego:**

   Você pode verificar o arquivo `jobs.txt` para ver as vagas de emprego encontradas.

## Contribuindo

Sinta-se à vontade para contribuir para este projeto. Você pode abrir problemas (issues) ou enviar solicitações de pull (pull requests) para melhorias.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter detalhes.

---

Este projeto foi criado como parte do aprendizado em desenvolvimento de software. Sinta-se à vontade para usá-lo como referência ou como base para seus próprios projetos.
```
