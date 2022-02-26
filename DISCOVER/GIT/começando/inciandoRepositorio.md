# inciar um projeto Git 

criar a pasta 
abrir o terminal 
git init 
ls -a  <!-- vai aparecer o arquivo .git -->

# histórico do projeto 

ls -a 
ls -al .git
cat .git/config

# comit

vim file.txt
i
"escreva o texto"
esc
:wq
    <!-- o arquivo file.txt esta criado -->

git add .
git commit -m "inicial commit"

# log do git 

git log  <!-- mostra os logs do sistema, do que foi feito em ordem cronologica -->

git log --oneline <!-- nao mostra infos do autor  -->

git log -n 5 

git log --since=2020-10-01 <!-- mostra desde a data definida -->

git log --until=2020-10-01 <!-- mostra antes da data definida -->
 
git log --author=MaxWillian <!-- mostra por autor -->

git log --grep="second" <!-- mostra tudo com palavra second -->



