entrar na pasta

git init
ls -al
touch file1.txt
git status
git add file1.txt
touch add file2.txt
git add . <!-- adiciona tudo  -->

git rm --cached file2.txt <!-- remove do commit -->
git status
git commit -m "initial commit"

 vim file1.txt <!-- modifica o arquivo pelo vim editor  -->
 git status
 git add file1.txt
 git add file1.txt
 git commit -m
 git commit -m ""change file1"
