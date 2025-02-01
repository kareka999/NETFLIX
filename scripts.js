document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".botao-entrar");  // Garantir que selecionamos o botão correto
    const vamosLaButton = document.getElementById("vamos-la");  // Selecionar o botão "Vamos lá"
    const dingSound = document.getElementById("ding-sound");  // Selecionar o áudio do som de ding
    
    document.getElementById("language-select").addEventListener("change", function() {
        const language = this.value;

        // Reproduz o som de ding sempre que o idioma mudar
        dingSound.play();

        if (language === "en") {
            // Alterar textos para inglês
            document.getElementById("title").textContent = "Movies, series, and much more, without limits";
            document.getElementById("subtitle").textContent = "From R$ 20.90. Cancel anytime.";
            document.getElementById("email-prompt").textContent = "Want to watch? Enter your email to create or restart your subscription.";
            if (button) button.textContent = "Sign In";  // Alterando o texto do botão "Entrar"
            if (vamosLaButton) vamosLaButton.textContent = "Let's go >";  // Alterando o texto do botão "Vamos lá"
        } else {
            // Alterar textos para português
            document.getElementById("title").textContent = "Filmes, séries e muito mais, sem limites";
            document.getElementById("subtitle").textContent = "A partir de R$ 20,90. Cancele quando quiser.";
            document.getElementById("email-prompt").textContent = "Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.";
            if (button) button.textContent = "Entrar";  // Alterando o texto do botão "Entrar"
            if (vamosLaButton) vamosLaButton.textContent = "Vamos lá >";  // Alterando o texto do botão "Vamos lá"
        }
    });
});
