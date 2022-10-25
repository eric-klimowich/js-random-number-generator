
const number = document.querySelector('.number')
const btn = document.querySelector('.generate')

const generateNumber = () => {
    const randomNumber = Math.floor(Math.random() * 10 + 1)
    // console.log(randomNumber)
    number.innerHTML = randomNumber
}

btn.addEventListener('click', generateNumber)

// generateNumber()