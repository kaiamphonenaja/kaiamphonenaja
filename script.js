
let products=[

{
name:"เสื้อยืด",
price:250
},

{
name:"รองเท้า",
price:990
},

{
name:"นาฬิกา",
price:1500
},

{
name:"หูฟัง",
price:790
}

];

for(

let i=5;

i<=30;

i++

){

products.push(

{

name:

"สินค้า"+i,

price:

i*100

}

)

}

let box=

document.getElementById(

"productBox"

);

if(box){

products.forEach(

p=>{

box.innerHTML+=`

<div class="card">

<img src=
"https://picsum.photos/200?random=${p.price}">

<h3>

${p.name}

</h3>

<p>

${p.price}

บาท

</p>

<a href=

"https://wa.me/66800000000?text=สนใจ ${p.name}"

>

<button>

ติดต่อซื้อ

</button>

</a>

</div>

`

}

)

}

let views=

localStorage.getItem(
"views"
)||0;

views++;

localStorage.setItem(
"views",
views
);

let v=

document.getElementById(
"views"
);

if(v){

v.innerHTML=
views;

}
