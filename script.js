//Corpo Azul
const body = document.querySelector('body')
body.style.height = '100vh';
body.style.overflow = 'hidden';
body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.alignContent = 'center';
body.style.background = 'cornflowerblue';

// Retangulo Amarelo
const div2 = document.createElement('div');
div2.style.width = '700px';
div2.style.height = '500px';
div2.style.display = 'flex';
div2.style.justifyContent = 'start';
div2.style.alignContent = 'center';
div2.style.flexDirection = 'column';
div2.style.background = 'gold';
body.appendChild(div2);


// Caixar de dentro do retangulo Amarelo.
const div = document.createElement('div');
div.style.width = '650px';
div.style.height = '50px';
div.style.margin = '20px';
div.style.display = 'flex';
div.style.justifyContent = 'center';
div.style.alignItems = 'center';
div.style.backgroundColor = 'white';
div2.appendChild(div);

const div3 = document.createElement('div');
div3.style.width = '650px';
div3.style.height = '50px';
div3.style.margin = '20px';
div3.style.display = 'flex';
div3.style.justifyContent = 'center';
div3.style.alignItems = 'center';
div3.style.backgroundColor = 'white';
div2.appendChild(div3);

const div4 = document.createElement('div');
div4.style.width = '650px';
div4.style.height = '50px';
div4.style.margin = '20px';
div4.style.display = 'flex';
div4.style.justifyContent = 'center';
div4.style.alignItems = 'center';
div4.style.backgroundColor = 'white';
div2.appendChild(div4);


const div5 = document.createElement('div');
div5.style.width = '650px';
div5.style.height = '50px';
div5.style.margin = '20px';
div5.style.display = 'flex';
div5.style.justifyContent = 'center';
div5.style.alignItems = 'center';
div5.style.backgroundColor = 'white';
div2.appendChild(div5);



const textoDiv = document.createElement('h3');
textoDiv.textContent = 'Calculando a sua Média:';
textoDiv.style.color = 'Blue';
div2.appendChild(textoDiv);



// Colocando os nomes na caixa.
const nome = document.createElement('input')
nome.placeholder = 'Digite seu nome:';
nome.style.display = 'flex-end';
nome.style.color = 'black';
nome.style.width = '650px';
nome.style.height = '50px';
div.appendChild(nome)

const nota_1 = document.createElement('input');
nota_1.placeholder = 'Digite nota_1:';
nota_1.style.display = 'flex-end';
nota_1.style.color = 'black';
nota_1.style.width = '650px';
nota_1.style.height = '50px';
div3.appendChild(nota_1)

const nota_2 = document.createElement('input');
nota_2.placeholder = 'Digite nota_2:';
nota_2.style.display = 'flex-end';
nota_2.style.color = 'black';
nota_2.style.width = '650px';
nota_2.style.height = '50px';
div4.appendChild(nota_2)


const nota_3 = document.createElement('input');
nota_3.placeholder = 'Digite nota_3:';
nota_3.style.display = 'flex-end';
nota_3.style.color = 'black';
nota_3.style.width = '650px';
nota_3.style.height = '50px';
div5.appendChild(nota_3)


const bt = document.createElement('Button')
bt.textContent = 'Calcular Média';
bt.style.display = 'flex-end';
div2.appendChild(bt);
bt.addEventListener('click', function () {
    var media = (parseFloat(nota_1.value) + parseFloat(nota_2.value) + parseFloat(nota_3.value)) / 3

    alert(media)
    const h1 = document.createElement('h1');
    h1.textContent = `${nome.value} Sua média é ${media}`;
    h1.style.color = 'black';
    div2.appendChild(h1)
})
