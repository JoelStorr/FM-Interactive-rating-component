

// SEC: Query Selector

const ratingCrad = document.querySelector('.rating-state');
const form = document.querySelector('#rating-form');
const thankYouCard = document.querySelector('.thankyou-state');
const resultText = document.getElementById('select-disp');



//SEC: Events
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const radio = document.querySelector('input[name="rat"]:checked').value;
    //Change Result Text
    resultText.innerText = `You selected ${radio} out of 5`;
    //Toggle Hidden classes
    ratingCrad.classList.toggle('hidden');
    thankYouCard.classList.toggle('hidden');
})