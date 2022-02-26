ssh-keygen -t rsa -b 4096 -C "max-will-94@hotmail.com"
cd ~/.ssh/
cd ~/.ssh/id_rsa
ls
cat ~/.ssh/id_rsa.pub
<!-- gerado a chave basta copiar e colar no ssh key do github e identificar o pc  -->

# passo 2 

precisavos fazer uma adiçao com o ssh agent na maquina

<!-- 
https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key-for-a-hardware-security-key

 -->

* Iniciar o ssh agent no terminal 
  ssh-keygen -t ed25519 -C "your_email@example.com"
  for legacy system 
  ssh-keygen -t rsa -b 4096 -C "max-will-94@hotmail.com"

# start the ssh-agent in the background
$ eval "$(ssh-agent -s)"
<!-- > Agent pid 59566 -->

~/.ssh/config
vim ~/.ssh/config
ssh-add ~/.ssh/id_ed25519
ssh-add ~/.ssh/id_rsa

# parte 3
 * criando a pasta e subindo no github
    
  mkdir demo_ssh
  cd demo_ssh/
  git init
  vim README.md
  git status
  git add .
  git commit -m ":tada: first commit ssh project"
  git remote add origin git@github.com:maxwmsilva/demo_ssh.git
  git remote -v
  git branch -M main
  git status
  git push -u origin main


  


