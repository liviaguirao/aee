
# **Modelagem de sistemas 2024.1**

<p align="left">
  <img src="https://github.com/liviaguirao/aee/blob/main/src/assets/logo%20completa.png" width="50%">
</p>

Conexão A&E é uma plataforma social inovadora projetada para conectar artistas e eventos. Aqui, artistas têm a oportunidade de divulgar seus trabalhos, enquanto estabelecimentos podem promover seus eventos. Funciona como uma rede social, permitindo uma interação dinâmica e colaborativa entre criadores e organizadores. Além disso, nossa plataforma é ideal para ajudar na carreira de novos artistas, oferecendo visibilidade e oportunidades de networking, facilitando a descoberta e o engajamento em eventos culturais e artísticos.



## Ferramentas do projeto
### Paleta de Cores

| Cor       | Hex       |
|-----------|-----------|
| ![#FF5400](https://via.placeholder.com/20x20/FF5400/000000?text=+)| #FF5400  |
| ![#820B8A](https://via.placeholder.com/20x20/820B8A/000000?text=+)| #820B8A   |
| ![#672A4E](https://via.placeholder.com/20x20/672A4E/000000?text=+)| #672A4E   |
| ![#FF0054](https://via.placeholder.com/20x20/FF0054/000000?text=+)| #FF0054   |

### Fonte
Poppins
```ruby
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
```
```ruby
font-family: "Poppins", sans-serif;
```

## Primeira Configuração

Esse manual vai listar os comandos a serem utilizados para facilitar o manuseio do Git e GitHub.

Estou pressupondo que vão utilizar Windows como sistema operacional.

## Pré requisitos

- Donwloado do [Git](https://git-scm.com/download/win).

## Primeira vez abrindo o terminal

- Para abrir o terminal, clique com o botão direito em algum diretório já aberto do seu computador, e abra o Git Bash.

- É preciso configurar as informações do usuário, no caso você: <br>
**git config --global user.name "Seu nome"** <br>
**git config --global user.email "Seu email"**

- Às vezes quando for dado o primeiro comando de git, talvez será aberto uma aba no seu navegador para sincronizar com a sua conta pessoal no github.

## Repositório Remoto &#8594; Repositório Local

- Caso você não for colaborador desse repositório, entre no GitHub com esta conta neste repositório, vai em Settings > Collaborators, e convide a sua conta pessoal a ser um editor.

- Para puxar esse repositório para seu computador, abra o terminal no local desejado para colocá-lo, e digite o seguinte comando: <br>
**git clone https://github.com/liviaguirao/aee.git**

- Quando você começar a fazer alterações no seu repositório local, é possível comparar as diferenças com o repositório remoto com o comando: <br>
**git status**

- Depois de já ter um repositório local para o remoto, e queira atualizar ele, usar o comando: <br>
**git pull**

## Repositório Local &#8594; Repositório Remoto

- Quando você estiver satisfeito com as mudanças, e queira atualizar seu repositório remoto, usar os seguintes comandos:

<ul type=circle>
  <li> Para registrar todas as mudanças na fila de submissão: <br>
  <b>git add .</b>
  <br>OU
  <li> Para registrar apenas mudanças de arquivos específicos: <br>
  <b>git add nome_arquivo.tipo </b>
  <li> O commit vai adicionar essas alterações da fila no repositório, usando: <br>
  <b>git commit -m 'Mensagem rápida sobre o commit'</b>
  <li> Finalmente, para enviar o commit ao repositório remoto: <br>
  <b>git push</b>
</ul>

## Criar branches

- Quando você fazer alguma alteração, não dar commit na main branch, dar commit em uma branch que foi criada para você. Depois da avaliação ter sido verificada pelo coordenador/gerente e pelos outros membros, pode ser feito uma merge com a main.

- Para criar uma branch: <br>
**git checkout -b nome_branch**

- Para mudar de branch: <br>
**git checkout nome_branch**

- Para fazer um merge com a main, primeiro entrar nela, depois dar o comando: <br>
**git merge ramificacao_a_ser_mesclada**

- Para de fato enviar a alteração, dar: <br>
**git push**

## Desfazer comandos

- Para desfazer alterações em um arquivo: <br>
**git restore nome_arquivo.tipo**

- Para desfazer um *add*: <br>
**git restore --staged nome_arquivo.tipo**

- Para desfazer um commit antes do push: <br>
**git revert HEAD** <br>
OBS: será aberto um arquivo, mas apenas feche ele

- Para desfazer um commit depois de ter dado push: <br>
 <ul type=circle>
    <li> Primeiro é preciso acessar o histórico de commits e pegar o código daquele que você quer desfazer: <br>
    <b> git log --pretty=oneline </b>
    <li> Depois de pegar o código, para reverter basta usar: <br>
    <b> git revert fcdaecdf39aa6cd6c5a24d450ccc927b460ead3a </b> <br>
    OBS: será aberto um arquivo, mas apenas feche ele
 </ul>

## Como voltar para uma versão anterior

- Na página principal do repositório, vai ter uma aba "commits", e lá vai ter o hitórico dos commmits.

- Ao abrir ela, na frente de cada commit, tem um botão "<>". Ao clicar nele, você vai pro repositório na época daquele commit.

- Se você quiser recuperar essa versão, baixe ela .zip indo no botão "code". Depois de extrair, jogue ela para seu repositório local e faça commit normalmente.

## Ações com diretórios usando o terminal

- As vezes será necessário navegar entre os diretórios via terminal, alguns comandos interessantes são:

<ul type=circle>
  <li> Para ir ao diretório indicado: <br>
  <b> cd nome_diretorio </b>
  <li> Para voltar um diretório: <br>
  <b> cd .. </b>
  <li> Para listar os diretórios e arquivos do diretório atual: <br>
  <b> ls </b>
  <li> Para criar um diretório: <br>
  <b> mkdir nome_diretorio </b>
  <li> Para criar um arquivo qualquer: <br>
  <b> touch nome_arquivo.tipo </b>
  <li> Para remover um diretório vazio: <br>
  <b> rmdir nome_diretorio </b>
  <li> Para remover um diretório e tudo que tem dentro dele: <br>
  <b> rm -r nome_diretorio </b>
  <li> Para remover um arquivo: <br>
  <b> rm arquivo.tipo </b>
</ul>

## Rotina

* Para executar o site: `npm run dev` e siga a rota fornecida.

* Adicione as alterações feitas: `git add .`

* Cheque em qual branch você está e quais alterações foram adicionadas: `git status`

* Dê um commit com uma mensagem especificando as alterações realizadas: `git commit -m "mensagem especificando o que foi feito"`

* Envie o commit feito para sua branch: `git push origin suabranch`

## Quando estiver tudo prontinho 

* Volte para a main: `git checkout main`

* Atualize a main: `git pull`

* Mescle sua branch com a main: `git merge suabranch`

* Corrija os possíveis conflitos

* Confirme o merge (apenas quando solicitado pelo Scrum Master): `git push origin main`
