document.addEventListener('DOMContentLoaded', () => {
    // 'Hearts, Spades, Clubs and Diamonds'
    let timer = 10
    const timerRender = document.getElementById('timerValue')

    const cardTypes = [
        {
            name: 'Hearts',
            color: '#d63031',
            symbol: '♥'
        },
        {
            name: 'Spades',
            color: '#1e272e',
            symbol: '♠'
        },
        {
            name: 'Clubs',
            color: '#1e272e',
            symbol: '♣'
        },
        {
            name: 'Diamonds',
            color: '#d63031',
            symbol: '♦'
        }
    ]

    const generateCardValue = () => {
        const min = Math.ceil(1)
        const max = Math.floor(12)

        const value = Math.floor(Math.random() * (max - min + 1) + min)
        
        if(value === 1) {
            return 'A'
        }
        if(value === 11) {
            return 'J'
        }
        if(value === 12) {
            return 'Q'
        }
        if(value === 13) {
            return 'K'
        }

        return value
    }
    const generateCardType = () => {
        const min = 0
        const max = Math.floor(cardTypes.length - 1)

        const num = Math.floor(Math.random() * (max - min + 1) + min)
        return cardTypes[num]
    }
    const generateCard = () => {
        const card = {
            type: generateCardType(),
            value: generateCardValue()
        }
        
        const cardValue = document.getElementById('cardValue')
        
        cardValue.innerHTML = card.value
        cardValue.style.color = card.type.color
        
        const symbols = document.getElementsByClassName('symbol')
        
        Array.from(symbols).forEach(symbol => {
            symbol.innerHTML = card.type.symbol
            symbol.style.color = card.type.color
        })

        initTimer()
    }
    const initTimer = () => {

       const interval =  setInterval(() => {
            timer--
            timerRender.innerHTML = timer
            if(timer === 0 ){
                clearInterval(interval)
                generateCard()
                timer = 10
            }
        }, 1000);
    }
    
    document.getElementById('reRoll').addEventListener('click', () => {
        generateCard()
    })

    document.getElementById('cardWidth').addEventListener('change', function(e){
        card.style.width = e.target.value + 'px'
    })

    document.getElementById('cardHeight').addEventListener('change', function(e){
        card.style.height = e.target.value + 'px'
    })
    
    generateCard()
    
});