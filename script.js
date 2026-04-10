const titulo = document.querySelector('.titulo');
const cards = document.querySelectorAll('.wrapper li');
const wrapper = document.querySelector('.wrapper');
const resultado = document.getElementById('resultado');

const cartas = [
    { img: "images/da_fool.jpg", name: "The Fool", link: "https://jojowiki.com/The_Fool" },
    { img: "images/the_magician.jpg", name: "The Magician", link: "https://jojowiki.com/Magician%27s_Red" },
    { img: "images/high_priestess.jpg", name: "High Priestess", link: "https://jojowiki.com/High_Priestess" },
    { img: "images/empress.jpg", name: "The Empress", link: "https://jojowiki.com/Empress" },
    { img: "images/the_emperor.jpg", name: "The Emperor", link: "https://jojowiki.com/Emperor" },
    { img: "images/the_hierophant.jpg", name: "The Hierophant", link: "https://jojowiki.com/Hierophant_Green" },
    { img: "images/the_lovers.jpg", name: "The Lovers", link: "https://jojowiki.com/Lovers" },
    { img: "images/the_chariot.jpg", name: "The Chariot", link: "https://jojowiki.com/Silver_Chariot" },
    { img: "images/strength.jpg", name: "Strength", link: "https://jojowiki.com/Strength" },
    { img: "images/the_hermit.jpg", name: "The Hermit", link: "https://jojowiki.com/Hermit_Purple" },
    { img: "images/wheel_of_fortune.jpg", name: "Wheel of Fortune", link: "https://jojowiki.com/Wheel_of_Fortune" },
    { img: "images/justice.jpg", name: "Justice", link: "https://jojowiki.com/Justice" },
    { img: "images/hanged_man.jpg", name: "Hanged Man", link: "https://jojowiki.com/Hanged_Man" },
    { img: "images/death.jpg", name: "Death", link: "https://jojowiki.com/Death_Thirteen" },
    { img: "images/temperance.jpg", name: "Temperance", link: "https://jojowiki.com/Yellow_Temperance" },
    { img: "images/the_devil.jpg", name: "The Devil", link: "https://jojowiki.com/Ebony_Devil" },
    { img: "images/the_tower.jpg", name: "The Tower", link: "https://jojowiki.com/Tower_of_Gray" },
    { img: "images/the_star.jpg", name: "The Star", link: "https://jojowiki.com/Star_Platinum" },
    { img: "images/the_moon.jpg", name: "The Moon", link: "https://jojowiki.com/Dark_Blue_Moon" },
    { img: "images/the_sun.jpg", name: "The Sun", link: "https://jojowiki.com/Sun" },
    { img: "images/judgement.jpg", name: "Judgement", link: "https://jojowiki.com/Judgement" },
    { img: "images/the_world.jpg", name: "The World", link: "https://jojowiki.com/The_World" }
];

const shuffled = [...cartas].sort(() => Math.random() - 0.5);

document.querySelectorAll('.back').forEach((back, i) => {
    back.style.backgroundImage = `url("${shuffled[i].img}")`;
});

cards.forEach((card, i) => {
    card.addEventListener('click', () => {

        if (card.classList.contains('active')) {
            window.open(shuffled[i].link, '_blank');
            return;
        }

        if (wrapper.classList.contains('selected')) return;

        card.classList.add('active', 'flipped');
        wrapper.classList.add('selected');

        resultado.textContent = shuffled[i].name;
        resultado.classList.add('show');

        titulo.classList.add('hide');
    });
});

const rerollBtn = document.getElementById('reroll');

// mostrar botón al elegir carta
cards.forEach(card => {
    card.addEventListener('click', () => {
        rerollBtn.classList.add('show');
    });
});

// función reroll
rerollBtn.addEventListener('click', () => {

    // reset estado visual
    wrapper.classList.remove('selected');

    cards.forEach(card => {
        card.classList.remove('active', 'flipped');
    });

    // ocultar resultado
    resultado.classList.remove('show');
    resultado.textContent = "";

    // mostrar título otra vez
    titulo.classList.remove('hide');

    // ocultar botón
    rerollBtn.classList.remove('show');

    // 🔀 volver a mezclar cartas
    const reshuffled = [...cartas].sort(() => Math.random() - 0.5);

    document.querySelectorAll('.back').forEach((back, i) => {
        back.style.backgroundImage = `url("${reshuffled[i].img}")`;
    });

    // actualizar referencia
    shuffled.length = 0;
    reshuffled.forEach(c => shuffled.push(c));
});