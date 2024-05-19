const cards = {
    card1: "D:/vignesh_projects/RajaRani/static/King.svg",
    card2: "D:/vignesh_projects/RajaRani/static/Queen.svg",
    card3: "D:/vignesh_projects/RajaRani/static/minister.svg",
    card4: "D:/vignesh_projects/RajaRani/static/police.svg",
    card5: "D:/vignesh_projects/RajaRani/static/thief.svg"
};

function revealCard(cardId) {
    const card = document.getElementById(cardId);
    const img = card.querySelector('img');
    img.src = cards[cardId];
    img.classList.remove('card-back');
    img.classList.add('card-back');
}
