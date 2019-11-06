console.log('javascript no frontend')

const cotacoesForm = document.querySelector('form')
const mainMensage = document.querySelector('h3')
const price = document.querySelector('#price')
const price_open = document.querySelector('#price_open')
const day_high = document.querySelector('#day_high')
const day_low = document.querySelector('#day_low')

cotacoesForm.addEventListener('submit', (event) => {
    mainMensage.innerText = 'Buscando...'
    price.innerText = ''
    price_open.innerText = ''
    day_high.innerText = ''
    day_low.innerText = ''

    event.preventDefault()
    const ativo = document.querySelector('input').value

    if (!ativo) {
        mainMensage.innerText = 'O ativo deve ser informado'
        return;
    }

    fetch(`http://localhost:3000/cotacoes?ativo=${ativo}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                mainMensage.innerText = 'Alguma coisa deu errado'
                price.innerText = `${data.error.mensage} código ${data.error.code}`
            } else {
                mainMensage.innerText = data.symbol
                price.innerText = `Price: ${data.price}`
                price_open.innerText = `Price open: ${data.price_open}`
                day_high.innerText = `Day high: ${data.day_high}`
                day_low.innerText = `Day Low: ${data.day_low}`
            }
        })
    })
})