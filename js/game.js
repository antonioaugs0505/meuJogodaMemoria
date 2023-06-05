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
    
    alert('Você não tem noção do trabalho que isso deu kkkkkkkk, mas sempre vale apena quando envolve você. Eu já to chorando antes só de escrever isso.' + ' Eu te amo Camis, e tá foda sem você.' + ' Eu sinto sua falta quando eu acordo, quando vou dormir, quando tenha alguma ideia maluca ou até quando faço cagada.' + ' Não sei como a gente vai ser no futuro, não sei mesmo, mas eu sou muito grato por tudo o que a gente viveu, por cada conversa, cada risada, cada bronca, por tudo. Você fez eu voltar a sorrir, a sonhar e principalmente ser feliz, tudo isso por conta desse teu jeito tão unico que me pegou de uma forma inexplicavel, até parecendo que a gente se conhece a anos' + ' Sei que você não gosta, mas eu só tenho que te agradecer, porque com você cada lagrima que escorre no meu rosto (e agora tem um monte), cada segundo dedicado, cada centavo gasto e cada pensamento, tudo isso vale mais que tudo nesse mundo' + 'Eu sempre falei que nunca vou te abandonar, não importa motivo ou razão. Você sempre vai estar comigo e eu vou tentar fazer o melhor possivel para você sempre, porque se tem alguem que merece tudo nesse mundo é você, e se esse melhor tiver que ser eu longe. Que seja.' + ' Eu poderia termina falando que te amo de mil e umas formas diferente, mas nenhuma delas realmente expressa tudo que sinto' + 'Só fica bem por favor e se tiver chego até aqui, espero que esteja com um sorriso no rosto, porque nada desse mundo pode tirar isso de você.' + ' 15 de fevereiro de 2023 às 19 e 53, foi ai que a minha vida mudou.' + ' Obrigado, apenas obrigado minha senhora frescurinha favorita')
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

