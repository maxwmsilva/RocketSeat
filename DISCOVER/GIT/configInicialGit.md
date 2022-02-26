

# Tipos de controles de versão



Descrição
Sistemas locais
Copiar os arquivos para outro diretório
Muito comum e muito simples
Incrivelmente propensa a erros
Fácil de sobreescrever arquivos, caso haja uma cópia errada
Para superar os possíveis erros, existe o RCS - Revision Control System

Era muito popular antigamente, para o controle de versão.

Algumas das características são:
Mantém o conjunto de alterações, ou seja, as diferenças entre os arquivos
Possui formato especial no disco;
Pode re-criar como qualquer arquivo se parecia em qualquer ponto do tempo, adicionando-se todas as alterações ao arquivo.
Sistemas centralizados:
Exemplos, CVS, Subversion e Perforce.

Um único servidor que contém todos os arquivos

Vários clientes clientes usam arquivos a partir desse servidor central

Por muitos anos, tem sido o padrão para o controle de versão. Algumas de suas vantagens incluem o controle sobre a atividade dos colaboradores no projeto, os administradores têm controle refinado sobre quem pode fazer o que, e é muito mais fácil administrar um CVCS do que lidar com bancos de dados locais de cada cliente.

Porém, tem algumas desvantagens, já que se esse servidor der problema durante uma hora, nessa hora ninguém será capaz de colaborar ou salvar as alterações de versão para o que quer que estejam trabalhando, também corremos o mesmo risco de perder tudo se um disco falhar, assim como no sistema local, já que toda vez que trabalhamos com todo o histórico em um só local, corremos o risco de perder tudo.

Sistemas distribuídos
Há também, o melhor dos dois mundos, os chamados sistemas distribuídos, alguns exemplos incluem Git, Mercurial, Bazaar e Daarcs

Ele vai duplicar (clonar) localmente o repositório completo, e se qualquer servidor morrer enquanto algum sistema estiver colaborando por meio dele, qualquer um dos repositórios do cliente poderá ser copiado de volta para o servidor, e cada clone é um backup completo de todos os dados, isso sem falar que os clientes usam o estado mais recente dos arquivos.


# O que é o git



Descrição
É um sistema de controle de versão distribuído, é open-source, então além de gratuito seu código é aberto, e permite que você volte a qualquer ponto na história do projeto, já que cada alteração no código cria um commit, e cada commit é um ponto na história.

Também pode controlar o fluxo de novas funcionalidades, através das ramificações (branch), que funcionam como universos paralelos, onde além do projeto principal, você pode criar uma linha alternativa, adicionar pontos na mesma e depois uni-la novamente à linha principal, sem falar na possibilidade de poder trabalhar com vários devs ao mesmo tempo, analisando e resolvendo conflitos, porém nesse curso não falaremos sobre essas ramificações, teremos mais foco em nossos próprios projetos, as ramificações ficarão para outro curso.





# config inicial do git 
git config --global user.name "Max Willian"
git config --global user.email max-will-94@hotmail.com

# Para mudar o editor 
     git config --global core.editor "code -w"

# ver config
git config --list

cat ~/.gitconfig

# criar diretorio

mkdir git-aula
cd gi-aula
git init
ls -a
cd .git
ls
cat config

# colocar user git no config
git config --list

<!-- Configuração inicial



Descrição
Nesse vídeo falaremos sobre a configuração inicial do git, que será feita apenas uma vez por computador e o efeito se manterá mesmo após atualizações, e você também vai poder alterá-las em qualquer momento rodando esses comando novamente.

Primeiramente, abra o seu terminal e digite:
git config --global user.name "Seu nome completo entre aspas"
git config --global user.email seuemailaqui@dominio.com
Isso é importante porque em cada commit essa informação será utilizada, e é carimbada de forma imutável nos commits que você começa a criar.

Caso você queira substituir essa informação para um projeto específico, apenas rode o comando sem a opção --global dentro daquele projeto.

Caso queira trocar o editor padrão, que é o vim, pelo VS Code, rode o comando abaixo:
git config --global core.editor "code -w"
Por fim, caso queira verificar as suas configurações, apenas rode o comando abaixo:
 git config --list -->



# git help 

git help log

