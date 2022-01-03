
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

const botaoS = document.querySelector('.menu__direito--botao')

const jose = 2



const evento = botaoS.addEventListener('click' , function(){
   
        window.open("C:/Projetos/challenge2/comunidades.html")
        criar=1

     
      


      

        

})


