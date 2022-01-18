
/*script altera cor botão fundo do quadro */

const botao = document.querySelector('.menu__direito--cor-cores');

const quadroFundo = document.querySelector('.quadro');


botao.addEventListener('input',function(){

      
      quadroFundo.style.background = botao.value;
}
  
     );


/*script ******FIM******/

/************* Script implatanção do Higlightjs */

const areaDoCodigo = document.querySelector('.quadro__interno')

const linguagem = document.querySelector('.menu__direito--select')

const botaoH = document.querySelector('.quadro__botao')



function aplicaHigligth(){
    
    const codigo = areaDoCodigo.innerText
    areaDoCodigo.innerHTML = `<code class="quadro__texto hljs ${linguagem.value} " contenteditable="true" ></code>`
    areaDoCodigo.querySelector('code').textContent = codigo
    hljs.highlightElement(areaDoCodigo.querySelector('code')) 

}

botaoH.addEventListener('click', function(){
    aplicaHigligth('code')
})


/************* Script implatanção do Higlightjs - FIM */



/**************Configuração Botao Salvar ****************/

const BotaoS = () =>{
    
    let i = 0  //inicia contador

    const botaoS = document.querySelector(".menu__direito--botao")
    botaoS.addEventListener("click", function() {
         

        const conteudo = document.querySelector('.quadro__texto').textContent
        const corQuadro = quadroFundo.style.background
        const nomeProjeto = document.querySelector(".menu__direito-projeto").value
        const nomeDescricao = document.querySelector(".menu__direito--descricao").value


        
        let info = {
            contem:conteudo,
            cor:corQuadro,
            projeto:nomeProjeto,
            descricao:nomeDescricao   
        }
     
        
        if(localStorage.length < 4){


        localStorage.setItem('item',JSON.stringify(info)) 
        window.open(href="\\comunidades.html")
        
        
        } else 
         {
             alert('memoria cheia')
        
        }

    })

    }

        BotaoS()
        
    
/**************FIM - Configuração Botao Salvar ****************/