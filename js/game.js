const grid = document.querySelector('.grid')
const spanPlayer = document.querySelector('.player')
const timer = document.querySelector('.timer')



const fotos = [
    'img1',
    'img2',
    'img3',
    'img4',
    'img5',
    'img6',
    'img7',
    'img8',
    'img9',
    'img10'
]

const createElement = (tag, className) =>{
    const element = document.createElement(tag)
    element.className = className
    return element
}

let firstCard = ''
let secondCard = ''

const checkEndGame = () =>{
    const disabledCards = document.querySelectorAll('.disabled-card');
    if (disabledCards.length === 20) {
    
    alert("Sim, a Maya é a melhor coisa desse mundo!")
    clearInterval(this.loop)
}
    
    }


const checkCards = () =>{

    const firstFoto = firstCard.getAttribute('data-foto')
    const secondFoto = secondCard.getAttribute('data-foto')

    if(firstFoto === secondFoto){

        firstCard.firstChild.classList.add('disabled-card')
        secondCard.firstChild.classList.add('disabled-card')

        firstCard = ''
        secondCard = ''

        checkEndGame()

    } else{
        setTimeout(() =>{
            firstCard.classList.remove('reveal-card')
            secondCard.classList.remove('reveal-card')
        
            firstCard = ''
            secondCard = ''


        },900)

    }

}


const revealCard = ({target}) =>{

    if(target.parentNode.className.includes('reveal-card')){
        return
    }

    if(firstCard === ''){
        target.parentNode.classList.add('reveal-card')
        firstCard = target.parentNode;
    } 
    
    else if( secondCard === ''){
        target.parentNode.classList.add('reveal-card')
        secondCard = target.parentNode;

        checkCards()
    }

}

const createCard = (foto) =>{

    const card = createElement('div', 'card')
    const front = createElement('div', ' face front')
    const back = createElement('div', ' face back')

    front.style.backgroundImage = `url('../images/${foto}.jpeg')`;

    card.appendChild(front)
    card.appendChild(back)

    card.addEventListener('click', revealCard)
    card.setAttribute('data-foto', foto)


    return card;
}

const loadGame = ()=>{

    const duplicateFotos = [ ...fotos, ...fotos]
    const shuffledArray = duplicateFotos.sort(()=> Math.random() -0.5)

    shuffledArray.forEach((foto)=>{
      
        const card = createCard(foto)
        grid.appendChild(card)
    })
}

const startTimer = () =>{
    
    this.loop = setInterval(() => {
        const currentTime = +timer.innerHTML;
        timer.innerHTML = currentTime + 1

    } , 1000)
}

window.onload = () =>{

    spanPlayer.innerHTML = localStorage.getItem('player');
    startTimer()
    loadGame();
}

