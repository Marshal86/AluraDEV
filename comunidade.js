

    function CriaCard(){
        //cria card - superior

        var principal = document.getElementById("cards")
        var card = document.createElement("div")
        var cardExterno = document.createElement("div")
        var cardInterno = document.createElement("div")
        var cardCodigo = document.createElement("div")
            principal.appendChild(card)      
            card.appendChild(cardExterno)
            card.classList.add('card')
            cardExterno.appendChild(cardInterno)
            cardExterno.classList.add('card__externo')
            cardInterno.appendChild(cardCodigo)
            cardInterno.classList.add('card__interno')
            cardCodigo.classList.add('card__codigo')
       
        // cria card - inferior

        var cardTextos = document.createElement("div") // elemento pai dos textos
        var cardTitulo = document.createElement("h3")
        var cardDescricao = document.createElement("p")
        var cardComentario = document.createElement("p")
        var cardLikes= document.createElement("p")
        var cardUsuario = document.createElement("p")


            cardTextos.classList.add("card__textos")
            card.appendChild(cardTextos)
            
            cardTextos.appendChild(cardTitulo)
            cardTitulo.classList.add("card__titulo")
            cardTextos.appendChild(cardDescricao)
            cardDescricao.classList.add("card__descricao") 
            cardTextos.appendChild(cardComentario)  
            cardComentario.classList.add("card__comentario")
            cardTextos.appendChild(cardLikes)
            cardLikes.classList.add("card__likes")
            cardTextos.appendChild(cardUsuario)
            cardUsuario.classList.add("card__usuario")

            let valorcheio = JSON.parse(localStorage.getItem('item'))
            cardCodigo.innerHTML = valorcheio.contem
            cardTitulo.innerHTML = valorcheio.projeto
            cardDescricao.innerHTML = valorcheio.descricao
            
                         
            

            
    }
