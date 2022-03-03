let button = document.querySelectorAll('button')
let input = document.querySelector('input')
let output = document.querySelectorAll('div')

console.log(button)

const header = {
    "Authorization": "Token token=3af214013b4786a6a42d922e78e628e3"
}

//filter function nach author

button[0].addEventListener('click', () => {
    fetch(`https://favqs.com/api/quotes/?filter=${input.value}&type=author`, { headers: header })
        .then(response => response.json())
        .then(json => {

            json.quotes.forEach(e => {
                output[1].innerHTML += `<p>"${e.body}"</p>`
            });
        })
})

//get random quote

button[1].addEventListener('click', () => {
    fetch(`https://favqs.com/api/qotd`)
        .then(response => response.json())
        .then(json => {
            console.log(json.quote)
            output[1].innerHTML = `<h2>${json.quote.author}</h2>
                                <p>"${json.quote.body}"</p>`
        })
})

