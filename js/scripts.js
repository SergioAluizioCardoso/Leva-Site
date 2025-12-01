function CalcularFrete(){
    let n1=document.getElementById('cepOrigem').value;
    let n2=document.getElementById('cepDestino').value;
    let n3=document.getElementById('peso').value;
    let n4=document.getElementById('volume').value;
    
    let resultado = parseFloat(n2)-parseFloat(n1);
    resultado /= 1000;
    if(resultado<0){resultado *= -1}

    let frete= 90+0.1*resultado + 1*n3*n4;
    let prazo= parseInt(1+resultado*0.005);

    document.getElementById('valor').value=frete;
    document.getElementById('prazo').value=prazo;
}




let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}