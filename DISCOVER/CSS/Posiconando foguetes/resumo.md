# Element Stacking

Descrição
É o empilhamento de elementos. Podemos usar o z-index para determinar a ordem da posição do elemento. Quanto maior o z-index, mais "acima" vai aparecer o elemento.

HTML

<div class="box box1"></div>
<div class="box box2"></div>
<div class="box box3"></div>

````CSS

.box {
  width: 50px;
  height: 50px;
  margin-bottom: 8px;
}

.box1 {
  background-color: red;
  position: absolute;
  left: 5px;
  top: 5px;
  z-index: 3;
}

.box2 {
  background-color: green;
  position: absolute;
  left: 10px;
  top: 10px
}

.box3 {
  background-color: blue;
  position: absolute;
  left: 15px;
  top: 15px
}
````

# Flex

Descrição
Nessa aula vamos ver uma introdução de como posicionar elementos usando o CSS Flexbox

Flexbox
Nos permite posicionar os elementos dentro da caixa
Controle em uma dimensão (horizontal ou vertical)
Alinhamento, direcionamento, ordenar e tamanhos
div.parent {
 display: flex;
}
Flex-direction
Qual a direção do flex: horizontal ou vertical
row | column
Alinhamento
justify-content
align-items
HTML

<div class="container">
  <div class="box blue"></div>
  <div class="box red"></div>
  <div class="box green"></div>
</div>

```CSS

.container {
    display: flex;
    justify-content: space-between;
}
.box {
  width: 50px;
  height: 50px;
  margin-bottom: 8px;
}

.blue {
  background-color: blue;
}

.red {
    background-color: red;
}

.green {
    background-color: green;
}
```

# grid, posiciona os elementos dentro da caixa

# Grid ou Flexbox

Descrição
Podemos usar o Display Flex e Display Grid ao mesmo tempo.

HTML

<body>
    <header>
        <div>Logo</div>
        <div>Menu</div>
    </header>
    <main>Conteúdo</main>
    <aside>Infos adicionais</aside>
    <footer>Rodapé</footer>
</body>
CSS

body {
    margin: 0;
    height: 100vh;
    display: grid;
    grid-template-areas:
    "header header"
    "main aside"
    "footer footer";
    grid-template-rows: 30px 1fr 40px;
    grid-template-columns: 1fr 80px;
}

header {
    grid-area: header;
    background-color: green;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px;
}

main {
    grid-area: main;
    background-color: red;
}

aside {
    grid-area: aside;
    background-color: blue;
}

footer {
    grid-area: footer;
    background-color: gray;
}

