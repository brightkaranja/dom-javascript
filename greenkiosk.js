
document.body.style.backgroundColor = 'silver';
const title = document.getElementById('title');
title.style.color = 'green';
title.style.fontSize = '55px';
title.style.textAlign = 'center';

const fruList = document.getElementById('fruList');
fruList.style.listStyleType = 'none';
fruList.style.fontSize = '20px';
fruList.style.display = 'flex';
fruList.style.gap = '20px';
fruList.style.alignItems = 'center'
fruList.style.justifyContent = 'center'


const vegList = document.getElementById('vegList');
vegList.style.listStyleType = 'none';
vegList.style.fontSize = '20px'
vegList.style.display = 'flex';
vegList.style.gap = '20px';
vegList.style.alignItems = 'center'
vegList.style.justifyContent = 'center'


const textTitle = document.getElementById('textTitle');
textTitle.style.fontSize = '28px';
textTitle.style.textAlign = 'center';

const fruitList = document.createElement('li');
fruitList.textContent = 'Apple';
fruList.appendChild(fruitList);

fruitimg = document.createElement('img')
fruitimg.src = 'https://producemadesimple.ca/wp-content/uploads/2023/08/apples-Ontario-fruits.jpg'
fruitList.append(fruitimg);
fruitimg.style.width = '220px';
fruitimg.style.height = '245px';
fruitimg.style.borderRadius = '25px';
fruitimg.style.border = '3px solid red';

const vegetableList = document.createElement('li');
vegetableList.textContent = 'Bell pepper';
vegList.appendChild(vegetableList);

vegetableimg = document.createElement('img')
vegetableimg.src = 'https://hips.hearstapps.com/hmg-prod/images/close-up-of-green-red-and-orange-bell-peppers-royalty-free-image-622418542-1558536290.jpg'
vegetableList.append(vegetableimg);
vegetableimg.style.width = '220px';
vegetableimg.style.height = '220px';
vegetableimg.style.borderRadius = '25px';
vegetableimg.style.border = '2px solid green';


const subtitle = document.getElementById('subtitle')
subtitle.style.textTransform = 'uppercase';
subtitle.style.fontSize = '25px';
subtitle.style.color = 'green';
subtitle.style.fontWeight = '10px';
subtitle.style.backgroundColor = "white";
subtitle.style.padding = '12px';

const subheading = document.getElementById('subheading')
subheading.style.textTransform = "uppercase";
subheading.style.fontSize = '25px';
subheading.style.color = 'green';
subheading.style.fontWeight = '10px';
subheading.style.backgroundColor = "white";
subheading.style.padding = '12px';


const mango = document.getElementById('mango');
     mango.style.width = '220px';
     mango.style.height = '245px';
     mango.style.borderRadius = '25px';
     mango.style.border = '2px solid red';

const banana = document.getElementById('banana');
     banana.style.width = '200px';
     banana.style.height = '245px';
     banana.style.borderRadius = '25px';
     banana.style.border = '2px solid red';

const melon = document.getElementById('melon');
     melon.style.width = '200px';
     melon.style.height = '245px';
     melon.style.borderRadius = '25px';
     melon.style.border = '2px solid red';

const onion = document.getElementById('onion');
     onion.style.width = '220px';
     onion.style.height = '245px';
     onion.style.borderRadius = '25px';
     onion.style.border = '2px solid green';

const tomato = document.getElementById('tomato');
     tomato.style.width = '220px';
     tomato.style.height = '245px';
     tomato.style.borderRadius = '25px';
     tomato.style.border = '2px solid green';

const kales = document.getElementById('kales');
     kales.style.width = '220px';
     kales.style.height = '245px';
     kales.style.borderRadius = '25px';
     kales.style.border = '2px solid green';


const footer = document.getElementById('footer');

const newParagraph = document.createElement('p');

footer.appendChild(newParagraph);
newParagraph.textContent = 'Get to buy fresh and clean vegetables and fruits!!!';
newParagraph.setAttribute('class','new-paragraph');
newParagraph.style.color = 'green';
newParagraph.style.fontSize = '30px';
newParagraph.style.textAlign = 'center';
newParagraph.style.backgroundColor = 'black';
newParagraph.style.padding = '12px';

