const botaoFetch = window.document.getElementById('botaoFetch')

const resultado = window.document.getElementById('resultado')

botaoFetch.addEventListener('click', ()=> {

    fetch("https://dog.ceo/api/breed/hound/afghan/images/random")
    .then(res => {return res.json()})
    .then(data => data.map((foto) => { 
        resultado.innerHTML = `<img src += <img src=${foto} />`
    }))
    

})








