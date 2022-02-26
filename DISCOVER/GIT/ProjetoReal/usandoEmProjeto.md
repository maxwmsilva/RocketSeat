# mostrar em qual linha foi feita a operação 
  git status
  git diff
  git diff --color-words <!-- mostra a linha e a modificaçao com cor destaque -->
git add .
git commit -m "modified index"
git show a6ce6 <!-- inicio da has do commit  -->
git show --color-words
git show 7f121d7 -- src/views/*  <!-- Diferentemente do git diff, o git show serve como um atalho para mostrar exatamente o que há em um repositório em qualquer momento da história, enquanto o git diff vai apresentar as diferenças encontradas no working directory e stage area. -->
  
# ignorar arquivo para nao subir para o stage area

cat .gitignore
vim .gitignore
cd HTML/
ls
ls -all
vim .gitignore <!-- cria o .gitignore na pasta se nao tiver -->
  ls -al
  git status
  git add .gitignore
  git status
  git commit - m "add .gitignore"
  git status
  clear
  git status
  
  git rm -r --cached . <!-- limpa o chached para ignorar o arquivos  -->
  git add . <!-- coloca tudo no staged area  -->
  git commit -m "ignoring files" <!-- faz o commit -->
  ls
  git status
  history

