<!-- edita o arquivo e depois muda  --> vim arquivo.md
  git status
 git restore arquivo.md
cat arquivo.md
 git status

git restore <file>

history
git log
git commit --amend -m  "delete REAME.md"
git status
git commit --amend -m "alguma coisa" <!-- substitui o nome do commit -->

# Remover o arquivo do staged e mudar o commit

git log
ls -al
git rm file1.txt  <!-- nome do arquivo  -->
ls -al
clear
git add .
git commit --amend -m "colocando novo commit" <!-- nome do novo commmit -->

# Recuperando Arquivos

touch 1-working_directory.md <!-- criando arquivo  -->
git add 1-working_directory.md <!-- adiciona ao stage area -->
git commit -m "update 1-working_directory.md" <!-- adiciona ao commit  -->
git log <!-- carrega o log dos commits -->
git checkout 4cd421 -- 1-working_directory.md <!-- retorna a versao antiga do commit com determinado arquivo -->
ls -al <!-- visualizar arquivos na pasta -->
vim 1-working_directory.md <!-- editar o arquivo no editor  -->
git status <!-- carrgega o status dos arquivos em stage area ou nao  -->
git add .'<!-- adiciona arquivos ao stage area  -->
git status
git commit -m "recovery 1-working_directory.md" <!-- manda determinado arquivo para o staged area -->
git log
history <!-- verifica comandos usados  -->


# Remover arquivos que nao estao sendo rastreados

* cuidado porque é um jeito destruitivel
  touch trash1.txt
  touch trash2.txt
  ls -all
  git clean -n <!-- mostra o que sera feito  -->
  git clean -f <!--remove sem dó nem piedade do staged  -->
  ls -all
  history

# Ratreando um commit 

git revert HEAD~5 <!-- ao inves de menos use til  -->
git log
git status
git log --oneline
git revert 2daec5e <!-- reverte apenas oté rash selecionada  e faz um novo commit -->
