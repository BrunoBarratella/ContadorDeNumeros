//Valor inicial do contador
let count = 0;

//Selecionando o contador e os botões
const contador = document.querySelector("#contador");
const botoes = document.querySelectorAll(".btn");

//Função para aumentar e diminuir o valor
botoes.forEach(function (btn) {
    btn.addEventListener("click", function(e){
         const styles = e.currentTarget.classList;
         if(styles.contains('diminui')){
            count--;
         }else if(styles.contains('aumenta')){
             count++;
         }else{
            count = 0;
         }

//Condição para mudar a cor do numero
         if(count> 0){
            contador.style.color = "green";
         }
         if(count< 0){
            contador.style.color = "red";
         }
         if(count===0){
            contador.style.color ="black";
         }
           contador.textContent = count;
    });
});