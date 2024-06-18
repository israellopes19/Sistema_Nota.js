const body = document.querySelector('body')
body.style.height = '100vh';
body.style.overflow = 'hidden';
body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.alignContent = 'center';
body.style.background = 'cornflowerblue';


const div2 = document.createElement('div');
div2.style.width = '700px';
div2.style.height = '500px';
div2.style.display = 'flex';
div2.style.justifyContent = 'start';
div2.style.alignContent = 'center';
div2.style.flexDirection = 'column';
div2.style.background = 'gold';
body.appendChild(div2);

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
div5.style.backgroundColor = 'gray';
div2.appendChild(div5);




