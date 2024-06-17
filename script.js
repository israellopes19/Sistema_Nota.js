const body = document.querySelector('body')
body.style.height = '10vh';
body.style.overflow = 'hidden';
body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.alignContent = 'center';

const div2 = document.createElement('div');
div2.style.width = '700px';
div2.style.height = '500px';
div2.style.display = 'flex';
div2.style.justifyContent = 'center';
div2.style.alignContent = 'center';
div2.style.background = 'gray';
body.appendChild(div2);

const div = document.createElement('div');
div.style.width = '600px';
div.style.height = '50px';
div.style.margin = '10px';
div.style.display = 'flex';
div.style.justifyContent = 'center';
div.style.alignItems = 'center';
div.style.flexDirection = 'column';
div.style.backgroundColor = 'white';
div2.appendChild(div);


const div3 = document.createElement('div');
div3.style.width = '600px';
div3.style.height = '50px';
div3.style.margin = '10px';
div3.style.display = 'flex';
div3.style.justifyContent = 'center';
div3.style.alignItems = 'center';
div3.style.flexDirection = 'wrap';
div3.style.backgroundColor = 'white';
div2.appendChild(div3);




