function toggle(element){

    const texto = element.nextElementSibling;
    
    if(texto.style.display === "block"){
    texto.style.display = "none";
    }else{
    texto.style.display = "block";
    }
    
    }
    
    function resultadoQuiz(){
    
    const resposta = document.getElementById("resposta").value;
    const resultado = document.getElementById("resultado");
    
    if(resposta === ""){
    
    resultado.innerHTML =
    "⚠️ Escolha uma opção.";
    
    return;
    
    }
    
    if(resposta === "tech"){
    
    resultado.innerHTML =
    "🚀 Perfil Inovador Verde: você acredita que a tecnologia é a principal aliada da sustentabilidade.";
    
    }else{
    
    resultado.innerHTML =
    "🌿 Perfil Guardião Ambiental: sua prioridade é preservar os recursos naturais e recuperar ecossistemas.";
    
    }
    
    }