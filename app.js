const reviews = [
    {
        id: 1,
        name: "Naray Koppany Titusz",
        role: "Leader of Goons",
        img: "res/k.jpg",
        review: "Hardwork always pays off. Thats why instead of studying I bust the gym and play LoL. Biceps > Knowledge. My main enemy is Jenei, hnstly fck that guy. Fav quote: 'Oh mein gott, look at those baicups!'",
    },
    {
        id: 2,
        name: "Bako Erik Dominik",
        role: "UX Goon",
        img: "res/e.jpg",
        review: "Darks Souls ftw, im gay. Weakass in da gym, I try to be as muscular and beautiful as Koppany, but im just sad and fat. Reddit is my soft porn. Yea sure lets go for a beer, oh wait I cant, gf u know. Where are you Dori? Bees.",
    },
    {
        id: 3,
        name: "Treszka Tamas",
        role: "Backend Goon",
        img: "res/t.jpg",
        review: "Also a fat fuck but atleast im smarter than the rest. Why study usefull stuff when you can build a programming language hahah. Lets program in C bro. I love gay music, I have a band that makes your ear bleed, come to a concert!",
    },
    {
        id: 4,
        name: 'Balazs "Teddy" Daniel',
        role: "HR Goon",
        img: "res/d.jpg",
        review: "Yea formalis nyelvek, fuck this. I love jenei targyak so much I will take them 30 times before I pass. Come TTKedd bro, dont study. Also im CEO of Bagoly. fml. Also im romanian, be carefull.",
    },
    {
        id: 5,
        name: "Kiraly Peter",
        role: "Unit Tester Goon",
        img: "res/p.jpg",
        review: "Cigarettes, coffee, sleep depravation and shots. All my body needs to function. I study nothing and sleep trough classes but I consume knowledge and understand shit better than all the other goons combined lol. Hungarian method and Bar-Hillel are my go-to-s. Im just built different baby.",
    }
]

const image = document.getElementById("image");
const author = document.getElementById("name");
const role = document.getElementById("role");
const review = document.getElementById("review");

const btnBefore = document.getElementById("btn-before");
const btnAfter = document.getElementById("btn-after");
const btnSurprise = document.getElementById("surprise");

//starting item
let currentItem = 0;

//load init item
window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem);
});

function showPerson(person){

    const item = reviews[person];
    image.src = item.img;
    author.textContent = item.name;
    role.textContent = item.role;
    review.textContent = item.review;

};

btnBefore.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

btnAfter.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
});

btnSurprise.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length - 1);
    showPerson(currentItem);
});