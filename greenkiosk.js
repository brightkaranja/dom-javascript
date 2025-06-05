
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

const style = document.createElement('style');
style.textContent = `
     h3 {
        text-transform: uppercase;
        color: #2f4f4f;
      }
      ul {
        list-style-type: none;
        padding: 0;
       
      }
      li {
        font-size: 30px;
        align-items: center;
        margin: 8px 0;
        width:22vw;
        background-color: rgb(250, 237, 237);
        border-radius: 25px;
        padding: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        transition: transform 0.3s;
      }
      li:hover {
        transform: scale(1.01);
        background: gold;
      }
      li img {
        width: 40px;
        height: 40px;
        margin-right: 10px;
        border-radius: 50%;
        object-fit: cover;
      }
        #click-button{
    padding: 12px 16px;
    border: none;
    background-color:blue;
    border-radius: 25px;
    color: white;
    cursor: pointer;
}

#click-on-button{
    padding: 12px 16px;
    border: none;
    background-color:blue;
    border-radius: 25px;
    color: white;
    cursor: pointer;
}
    `;
document.head.appendChild(style);


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


const mango = document.getElementById('mangoName');
mangoimg = document.createElement('img')
mangoimg.src = 'https://www.biovie.fr/img/cms/histoire-origine-mangue.png';
mango.append(mangoimg);
mangoimg.style.width = '220px';
mangoimg.style.height = '245px';
mangoimg.style.borderRadius = '25px';
mangoimg.style.border = '2px solid red';

const banana = document.getElementById('bananaName');
bananaimg = document.createElement('img')
bananaimg.src = 'https://media.istockphoto.com/id/172876004/photo/banana-wallpaper.jpg?s=612x612&w=0&k=20&c=DjUIq77Fh3ljde_WJNwYl17e86VxMUpOwYiVL2XJo9U='
banana.append(bananaimg);
bananaimg.style.width = '200px';
bananaimg.style.height = '245px';
bananaimg.style.borderRadius = '25px';
bananaimg.style.border = '2px solid red';

const melon = document.getElementById('melonName');
melonName = document.createElement('img')
melonName.src = 'https://www.everwilde.com/media//0800/resized/VWATCRS-A-Crimson-Sweet-Watermelon-Seeds_medium.jpg'
melon.append(melonName);
melonName.style.width = '200px';
melonName.style.height = '245px';
melonName.style.borderRadius = '25px';
melonName.style.border = '2px solid red';

const onion = document.getElementById('onionName');
onionName = document.createElement('img')
onionName.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6V6LfVaO8un4F_nh3w7XJt96O4bm9DzdIBalIhfIlDm_yR-RhgPrJr0lnTOdNN3mTdLU&usqp=CAU'
onion.append(onionName);
onionName.style.width = '220px';
onionName.style.height = '245px';
onionName.style.borderRadius = '25px';
onionName.style.border = '2px solid green';

const tomato = document.getElementById('tomatoName');
tomatoName = document.createElement('img')
tomatoName.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgOzWOh8PxlBvjLVRa_-45hqOSFB_S9PVp9Q&s'
tomato.append(tomatoName);
tomatoName.style.width = '220px';
tomatoName.style.height = '245px';
tomatoName.style.borderRadius = '25px';
tomatoName.style.border = '2px solid green';

const kales = document.getElementById('kalesName');
kalesName = document.createElement('img')
kalesName.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRApSAG4U-oSkPr7gmSLSB7uJvZE6_ofL4P4A&s'
kales.append(kalesName);
kalesName.style.width = '220px';
kalesName.style.height = '245px';
kalesName.style.borderRadius = '25px';
kalesName.style.border = '2px solid green';


const footer = document.getElementById('footer');

const newParagraph = document.createElement('p');

footer.appendChild(newParagraph);
newParagraph.textContent = 'Get to buy fresh and clean vegetables and fruits!!!';
newParagraph.setAttribute('class', 'new-paragraph');
newParagraph.style.color = 'green';
newParagraph.style.fontSize = '30px';
newParagraph.style.textAlign = 'center';
newParagraph.style.backgroundColor = 'black';
newParagraph.style.padding = '12px';


const clickOnButton = document.getElementById('click-on-button');

clickOnButton.addEventListener('click', () => {
    clickOnButton.textContent = "Taste Now!!!";
    clickOnButton.style.backgroundColor = "green";

});

clickOnButton.onclick = () => {
    subtitle.textContent = "Not only sweet, but fruits are very energizing. Taste Now!!! ";
};


const clickButton = document.getElementById('click-button');

clickButton.addEventListener('click', () => {
    clickButton.textContent = "Try Now!!";
    clickButton.style.backgroundColor = "green";

});

clickButton.onclick = () => {
    subheading.textContent = "Vegetables are very nutritious, Let us Eat Healthy!!!";
};


