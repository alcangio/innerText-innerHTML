// TODO 1 : capture os quatro elementos criados
let elementoH1 = document.getElementById("titulo");
let elementoUl = document.querySelector("ul");
let elementoA = document.querySelector("a");
let elementoOl = document.querySelector("#lista-ordenada");

// TODO 2 : use a propriedade .innerText para adicionar conteúdo textual ao elemento 'h1'
elementoH1.innerText = "Título adicionado com JS";

// TODO 3 : use a propriedade .innerText para adicionar conteúdo textual ao elemento 'a'
elementoA.innerText = "Proz Educação";

// TODO 4 : use a propriedade .innerHTML para adicionar três itens simples na lista não ordenada
elementoUl.innerHTML = `
<li>Pera</li>
<li>Uva</li>
<li>Maça</li>
`
// TODO 5 : use a propriedade .innerHTML para adicionar três itens com links para outros sites na lista ordenada
elementoOl.innerHTML = `
<li><a href="https://www.cruzeiro.com.br/" target="_blank">Cruzeiro Esporte Clube</a></li>
<li><a href="https://atletico.com.br/" target="_blank">Clube Atlético Mineiro</a></li>
<li><a href="https://www.americafc.com.br/" target="_blank">América Futebol Clube</a></li>
`