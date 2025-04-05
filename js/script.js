// Selecionando elementos do menu mobile
const menuBtn = document.querySelector("#menu");
const closeMenuBtn = document.querySelector("#close-menu");
const menu = document.querySelector("mobile-navbar");

// Selecionar os elementos dos slides
const slides = document.querySelectorAll(".banner"); // Selecionar todos os class do banner
//
const dots = document.querySelectorAll(".dot");
// Variavel de controle
let sllideIndex = 1;

function showSlides(){
    // console.log(slides)
    for(let i=0; i < slides.length; i++){
        dots[i].classList.remove("active");
        slides[i].classList.remove("active"); //Propriedade classList lista o Array
    }

    sllideIndex++; //Avançando a variável
    if(sllideIndex > slides.length){
        sllideIndex = 1;
    }

    slides[sllideIndex -1].classList.add("active");
    dots[sllideIndex -1].classList.add("active");
    setTimeout(showSlides, 3000); //3 segundo é 3000 (Ação que realiza a rotação entre o side)
}

// Ativar menu Mobile
// arrow function (Função de seta)
// () => {
//    }
// function default 
// function(){
//     }
// menuBtn.addEventListener("click", (e) =>{
//     menu.classList.add("menu-active")
// }); //Escutar um evento

// closeMenuBtn.addEventListener("click", (e) =>{
//   menu.classList.remove("menu-active")
// }); 

[menuBtn, closeMenuBtn].forEach((btn) => {
    btn.addEventListener("click", (e) =>{
        menu.classList.toggle("menu-active")
    });
});  //forEach - estrutura de repetição que executa apenas dentro de um Array e para um Array

// Fechar Menu
about.addEventListener("click", (e) =>{
    menu.classList.remove("menu-active")
}); 

//Inicialização do Slides
showSlides();







// DOM
// Navegar no documento HTML
// const brand = document.querySelector("#brand"); // querySelector acessa e seleciona o HTML (Estou armazenado o conteudo do HTML dentro da variável brand criada no JavaScript)

// brand.addEventListener('click', function(event){
//     // console.log("testando o click");
//     // console.log(event.target);
//     event.target.style.color = "blue"; //Troca de cor da palavra dentro do HTML passando pelo CSS mas que teve ação do JavaScript 

// }); // Função que escuta algum evendo(Aguma ação ex: clicar na página) acontecer no elemento colocado na variável