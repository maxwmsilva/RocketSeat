# Font Family
Tipo de fonte de um elemento
Lista de fontes e ordem de prioridade
inclui fallback font
p {
  font-family: "Times New Roman", Times, serif;
}
Alguns tipos de fonts:
serif (com serifa)
image.png

sans-serif (sem serifa)
image.png

# Font-variant e font-stretch



Descrição
Font Variant
Faz variações na apresentação da fonte
p {
	font-variant: small-caps;
}
https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant

Font Stretch
Alargamento ou encolhimento da fonte
Aceita palavras-chaves como: expanded, condensed, normal
Aceita porcentagens de 50% a 200%
Essa propriedade não vai funcionar em todas as fontes
p {
	font-stretch: expanded;
}
https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch

Referência
https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals


# Letter e word-spacing



Descrição
Letter spacing
Define o espaçamento entre os caracteres
p {
	letter-spacing: 4px;
}
https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing

Word spacing
Define o espaçamento entre palavras
p {
	word-spacing: 1em;
}
https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing

# Line height
Define os espaços entre linhas
Pode ser com unidades ou sem unidades de medida
Valores comuns: 1.5 ou 2
p {
	line-height: 1.5;
}
https://developer.mozilla.org/en-US/docs/Web/CSS/line-height

Text transform
Transformação do texto
Valores podem ser: none | capitalize | uppercase | lowercase | full-width | full-size-kana
p {
	text-transform: uppercase;
}
https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform

# Text-decoration



Descrição
Text decoration
Aparência decorativa de um texto
line: underline | overline | line-through
podemos aplicar mais de 1 valor
style: wavy | dotted | double | dashed | solid
color: <color> values
h1 {
	text-decoration: underline; /* shorthand */
}

p {
  text-decoration: wavy overline blue; /* shorthand */
}
https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration

# Shorthand



Descrição
Podemos usar o shorthand font para determinar os seguintes valores: font-style, font-variant, font-weight, font-stretch, font-size, line-height e font-family
p {
  font: italic normal bold normal 3em/1.5 Helvetica, Arial, sans-serif;
}
