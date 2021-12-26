var cartasMaquina = [
  {
  nome: "Kiki",
  imagem: "https://static.wikia.nocookie.net/studio-ghibli/images/5/59/Kiki.jpg",
  atributos:{
    magia:5,
    bondade:6,
    inteligência:4,
    força:1,
    imaginação:3,
    coragem:2,
    }
  },
  {
  nome: "Chihiro",
  imagem: "https://deliriumnerd.com/wp-content/uploads/2019/02/chihirooo.jpg",
  atributos:{
    magia:1,
    bondade:4,
    inteligência:6,
    força:5,
    imaginação:2,
    coragem:3,
    }
  },
{
  nome: "Howl",
  imagem: "https://pbs.twimg.com/media/EaMNo9YWkAEQwF1.jpg", 
  atributos:{
    magia:6,
    bondade:3,
    inteligência:5,
    força:2,
    imaginação:4,
    coragem:1,
    }
  },
{
  nome: "Sophie",
  imagem: "https://i.pinimg.com/originals/a4/42/27/a44227d2e13f8ec0d342e402acc8a635.jpg",
  atributos:{
    magia:1,
    bondade:5,
    inteligência:3,
    força:4,
    imaginação:2,
    coragem:6,
    }
  },
{
  nome: "Calcifer",
  imagem: "https://i.pinimg.com/736x/f5/ec/db/f5ecdb1a9ef94e72bac573df1a53066a.jpg",
  atributos:{
    magia:6,
    bondade:2,
    inteligência:4,
    força:5,
    imaginação:3,
    coragem:1,
    }
  },
{
  nome: "Totoro",
  imagem: "https://static.wikia.nocookie.net/studio-ghibli/images/d/df/Totoro_in_the_rain.png", 
  atributos:{
    magia:5,
    bondade:4,
    inteligência:2,
    força:6,
    imaginação:1,
    coragem:3,
    }
  },
{
  nome: "Marnie",
  imagem:"https://pbs.twimg.com/media/EikCn1_XcAAXwZl.jpg",
  atributos:{
    magia:5,
    bondade:6,
    inteligência:3,
    força:2,
    imaginação:4,
    coragem:1,
    }
  },
{
  nome: "Kaguya",
  imagem: "https://i.pinimg.com/736x/c5/d2/58/c5d25858acda9af2ab43a20a9df140ad.jpg",
  atributos:{
    magia:4,
    bondade:5,
    inteligência:3,
    força:1,
    imaginação:6,
    coragem:2,
    }
  },
{
  nome: "Ponyo",
  imagem: "https://statics.pampling.com/imagenes/usuarios/imagen_usuario_84919.jpg",
  atributos:{
    magia:5,
    bondade:1,
    inteligência:2,
    força:4,
    imaginação:3,
    coragem:6,
    }
  }
]

var cartasJogador = [
  {
  nome: "Kiki",
  imagem: "https://static.wikia.nocookie.net/studio-ghibli/images/5/59/Kiki.jpg",
  atributos:{
    magia:5,
    bondade:6,
    inteligência:4,
    força:1,
    imaginação:3,
    coragem:2,
    }
  },
  {
  nome: "Chihiro",
  imagem: "https://deliriumnerd.com/wp-content/uploads/2019/02/chihirooo.jpg",
  atributos:{
    magia:1,
    bondade:4,
    inteligência:6,
    força:5,
    imaginação:2,
    coragem:3,
    }
  },
{
  nome: "Howl",
  imagem: "https://pbs.twimg.com/media/EaMNo9YWkAEQwF1.jpg", 
  atributos:{
    magia:6,
    bondade:3,
    inteligência:5,
    força:2,
    imaginação:4,
    coragem:1,
    }
  },
{
  nome: "Sophie",
  imagem: "https://i.pinimg.com/originals/a4/42/27/a44227d2e13f8ec0d342e402acc8a635.jpg",
  atributos:{
    magia:1,
    bondade:5,
    inteligência:3,
    força:4,
    imaginação:2,
    coragem:6,
    }
  },
{
  nome: "Calcifer",
  imagem: "https://i.pinimg.com/736x/f5/ec/db/f5ecdb1a9ef94e72bac573df1a53066a.jpg",
  atributos:{
    magia:6,
    bondade:2,
    inteligência:4,
    força:5,
    imaginação:3,
    coragem:1,
    }
  },
{
  nome: "Totoro",
  imagem: "https://static.wikia.nocookie.net/studio-ghibli/images/d/df/Totoro_in_the_rain.png", 
  atributos:{
    magia:5,
    bondade:4,
    inteligência:2,
    força:6,
    imaginação:1,
    coragem:3,
    }
  },
{
  nome: "Marnie",
  imagem:"https://pbs.twimg.com/media/EikCn1_XcAAXwZl.jpg",
  atributos:{
    magia:5,
    bondade:6,
    inteligência:3,
    força:2,
    imaginação:4,
    coragem:1,
    }
  },
{
  nome: "Kaguya",
  imagem: "https://i.pinimg.com/736x/c5/d2/58/c5d25858acda9af2ab43a20a9df140ad.jpg",
  atributos:{
    magia:4,
    bondade:5,
    inteligência:3,
    força:1,
    imaginação:6,
    coragem:2,
    }
  },
{
  nome: "Ponyo",
  imagem: "https://statics.pampling.com/imagenes/usuarios/imagen_usuario_84919.jpg",
  atributos:{
    magia:5,
    bondade:1,
    inteligência:2,
    força:4,
    imaginação:3,
    coragem:6,
    }
  }
]

var cartaMaquina 
var cartaJogador 

function sortearCarta() {
  var limparCartaMaquina = document.getElementById("carta-maquina")
  limparCartaMaquina.style.backgroundImage = ""
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
  limparCartaMaquina.innerHTML = moldura
  var numeroCartaMaquina = parseInt(Math.random() * cartasMaquina.length)
  cartaMaquina = cartasMaquina[numeroCartaMaquina]

  var numeroCartaJogador = parseInt(Math.random() * cartasJogador.length)
  while (numeroCartaMaquina == numeroCartaJogador) {
    var numeroCartaJogador = parseInt(Math.random() * cartasJogador.length)
  }
  cartaJogador = cartasJogador[numeroCartaJogador]
  document.getElementById("btnSortear").disabled = true
  document.getElementById("btnJogar").disabled = false

  var divCartaJogador = document.getElementById("carta-jogador")
  exibirCarta(divCartaJogador,cartaJogador)
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado()
  if (!atributoSelecionado){
    atributoSelecionado = cartaJogador.atributos['magia'];
    alert("Atributo MAGIA escolhido automaticamente");
    //escolheAtributo('magia');
  } else {
    var elementoResultado = document.getElementById("resultado")
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]
    if (valorCartaJogador > valorCartaMaquina) {
      elementoResultado.innerHTML = "<p class='resultado-final'>Você venceu!</p>"
    } else if (valorCartaMaquina > valorCartaJogador) {
      elementoResultado.innerHTML = "<p class='resultado-final'>Você perdeu!</p>"
    } else {
      elementoResultado.innerHTML = "<p class='resultado-final'>Empatou!</p>"
    }
    document.getElementById("btnJogar").disabled = true
    var divCartaMaquina = document.getElementById("carta-maquina")
    exibirCarta(divCartaMaquina,cartaMaquina)
    if (cartasMaquina.length > 0 || cartasJogador.length > 0) {
      document.getElementById("btnSortear").disabled = false
    } else {
      var elementoResultado = document.getElementById("resultado")
      elementoResultado.innerHTML = "<p class='resultado-final'>Fim de Jogo!</p>"
    }
  }
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo")
  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value
    }
  }
}

function escolheAtributo(atributo) {
  var radioAtributos = document.getElementsByName("atributo")
  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].value === atributo) {
      radioAtributos[i].checked = true;
    }
  }
}

function exibirCarta(divDaVez,cartaDaVez) {
  divDaVez.style.backgroundImage = `url(${cartaDaVez.imagem})`
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
  var tagHTML = "<div id='opcoes' class='carta-status'>"
  var opcoesTexto = ""
  for (var atributo in cartaDaVez.atributos) {
    if (cartaDaVez == cartaJogador) { 
      opcoesTexto += "<input type ='radio' name ='atributo' value ='" + atributo + "'>" + atributo + ": " + cartaDaVez.atributos[atributo] + "<br>"
    } else {
      opcoesTexto += "<p type ='text' name ='atributo' value ='" + atributo + "'>" + atributo + ": " + cartaMaquina.atributos[atributo] + "</p>"
    }
  }
  var nome = `<p class="carta-subtitle"> ${cartaDaVez.nome} </p>`
  divDaVez.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}