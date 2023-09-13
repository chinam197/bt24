var handlerButtonAddText = document.querySelector(".btn-add");
var inputValue = document.querySelector(".note-input");
var handlerContainerText = document.querySelector(".note-book")
var getText = document.querySelector(".note");
var TodoWrapper = document.querySelector("TodoWrapper");


handlerButtonAddText.addEventListener("click", function(){
if(inputValue.value !== ""){
getText.innerText   = inputValue.value;
handlerContainerText.classList.remove("display");

}

})
