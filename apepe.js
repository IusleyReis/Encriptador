
let mensagemDigitada = "";
let mensagemDescriptografada = "";
let mensagemCriptografada = "";

function tiraracentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function mostrarAviso(mensagem) {
    document.getElementById('avisoLetramaiuscula').innerText = mensagem;
    setTimeout(() => {
        document.getElementById('avisoLetramaiuscula').innerText = "";
    }, 10000);
}

function contemCaracteresEspeciais(texto) {
    const regexCaracteresEspeciais = /[!@#$%^&*(),.?":{}|<>~´`^òàèùìàâêîôûãõá]/;
    return regexCaracteresEspeciais.test(texto);
}

function criptografar() {
    mensagemDigitada = document.getElementById('textoDigitado').value;

    if (mensagemDigitada.trim() === "") {
        return;
    }

    if (contemCaracteresEspeciais(mensagemDigitada)) {
        document.getElementById('textoDigitado').value = "";
        mostrarAviso('A mensagem não pode conter caracteres especiais.');
        return;
    }

    mensagemDigitada = tiraracentos(mensagemDigitada);

    mensagemCriptografada = mensagemDigitada
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById('textoAparicao').value = mensagemCriptografada;
    document.getElementById('textoDigitado').value = "";   
    document.querySelector('.caixaInterna p').innerText = "";

    setTimeout(() => {
        document.getElementById('textoAparicao').value = "";
    }, 5000);

    ocultarMensagens();

}

function descriptografar() {
    mensagemDigitada = document.getElementById('textoDigitado').value;

    if (mensagemDigitada.trim() === "") {
        return;
    }

    if (contemCaracteresEspeciais(mensagemDigitada)) {
        document.getElementById('textoDigitado').value = "";
        mostrarAviso('A mensagem não pode conter caracteres especiais.');
        return;
    }

    mensagemDigitada = tiraracentos(mensagemDigitada);

    mensagemDescriptografada = mensagemDigitada
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById('textoAparicao').value = mensagemDescriptografada;

    document.getElementById('textoDigitado').value = "";

    ocultarMensagens();

}

function ocultarMensagens() {
    let caixaInterna = document.querySelector('.caixaInterna');
    
    caixaInterna.style.display = 'none';
}

function copiarTexto() {
    let textoAparicao = document.getElementById('textoAparicao');

    if (textoAparicao.value.trim() === "") {
        mostrarAviso('Nenhuma mensagem para copiar.');
        return;
    }

    textoAparicao.select();
    document.execCommand('copy');

    mostrarAviso('Texto copiado com sucesso!');
}


