const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas")

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
});

//esse é um comentário.

/* esse é um comentário muti linhas

Objetivo 1 - Quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataforma.

        Passo 1 - Pegar o botão de seleção de plataformas no JS pra poder verrificar quando o usuário clicar em cima dele.

        Passo 2 - Pega o elemento do conteudo que precisa ser mostrado.

        Passo 3 - Pegar o clique do usuário no JS.

        Passo 4 - Quando o usuário clicar, adicionar a classe ativo na listagem de plataformas dentro do botão para que o conteúdo apareça.
        
Objetivo 2 - Caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar em cima, o conteudo deve ser escondido.

        Passo 1 - Verificar se o botão já esta aberto, se sim, devemos remover a classe ativo pra que ele esconda o conteúdo novamente
*/
