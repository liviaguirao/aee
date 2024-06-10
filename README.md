
# **Modelagem de sistemas 2024.1**

# **A&E**

### Primeira Configuração

* Pelo terminal entre na pasta onde irá guardar o projeto: cd /caminho/para/a/pasta

* Crie um clone do repositório: `git clone https://github.com/link-do-repositorio`

* Entre na pasta criada pelo comando clone: cd /caminho/para/a/pasta/nova

* Crie sua branch usando como o padrão o nome da feature que você está a desenvolver: `git checkout -b nome_da_feature`

* Após criada a branch você será redirecionado automaticamente a ela, neste espaço que você desenvolverá sua parte do projteto

### Rotina

* Para rodar o site: `npm run dev`
siga a rota fornecida.

* Adicione as alterações feitas: `git add .`

* Cheque em qual branch você está e quais alterações foram adicionadas: `git status`

* Dê um commit com uma mensagem especificando as alterações realizadas: `git commit -m "mensagem especificando o que foi feito"`

* Envie o commit feito para sua branch: `git push origin suabranch`

### Quando estiver tudo prontinho 

* Volte para a main: `git checkout main`

* Atualize a main: `git pull`

* Mescle sua branch com a main: `git merge suabranch`

* Corrija os possíveis conflitos

* Confirme o merge (apenas quando solicitado pelo Scrum Master): `git push origin main`