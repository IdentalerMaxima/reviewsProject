const reviews = [
    {
        id: 1,
        name: "Naray Koppany Titusz",
        role: "Leader of Goons",
        img: "res/k.jpg",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, asperiores cumque neque officia earum, ipsam quia est, nisi natus accusantium fuga esse. Dolorem pariatur recusandae non ipsum tempore nisi cumque.",
    },
    {
        id: 2,
        name: "Bako Erik Dominik",
        role: "UX Goon",
        img: "res/e.jpg",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolor perspiciatis suscipit magnam ipsam fugiat ex necessitatibus, quasi eos molestias laborum, in maxime.",
    },
    {
        id: 3,
        name: "Treszka Tamas",
        role: "Backend Goon",
        img: "res/t.jpg",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos modi, tempore odio asperiores adipisci fuga! Cum, ea sequi placeat ipsam a harum quam!",
    },
    {
        id: 4,
        name: 'Balazs "Teddy" Daniel',
        role: "HR Goon",
        img: "res/d.jpg",
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo excepturi, corrupti, sit maxime, error hic fugiat aliquid saepe quos nemo exercitationem non vitae. Repellendus, labore? Reprehenderit unde maiores sapiente nesciunt odio dolores velit in.",
    },
    {
        id: 5,
        name: "Kiraly Peter",
        role: "Unit Tester Goon",
        img: "res/p.jpg",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fugiat quisquam odit dolores aliquid inventore nam hic itaque harum dignissimos rerum, iure sunt laudantium laborum placeat ipsa! Blanditiis debitis ullam sit porro quaerat.",
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