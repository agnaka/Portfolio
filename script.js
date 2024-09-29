//A validação do formulário com javascript é considerado um desafio extra, não é preciso fazer esta validação para realizar sua entrega

// FUNÇÃO PARA BOTÃO SCROLL

function scrollToTop() {
    window.scrollTo({       //Chama o método scrollTo do objeto window para realizar a rolagem
      top: 0,               //Define que a rolagem deve iniciar no topo da página (posição 0)
      behavior: 'smooth'    //Faz com que a rolagem seja suave, em vez de instantânea, proporcionando uma melhor experiência ao usuário.
    });
  }
  
  // Função para mostrar o botão quando o usuário rolar para baixo
  window.addEventListener('scroll', () => {                 //Adiciona um ouvinte de eventos ao objeto window. Isso significa que toda vez que o usuário rolar a página, a função dentro do addEventListener será executada.
    const btn = document.querySelector('.btn-voltar-topo'); //Seleciona o elemento HTML com a classe btn-voltar-topo (nosso botão) e armazena-o na constante btn
    if (window.scrollY > 200) {                             //Verifica se a quantidade de pixels que o usuário rolou para baixo é maior que 200. Se sim, significa que o usuário já rolou uma distância considerável.
      btn.classList.add('show');                            // Adiciona a classe show ao botão. Essa classe, no CSS, deve tornar o botão visível (por exemplo, alterando a opacidade de 0 para 1)
    } else {
      btn.classList.remove('show');                         //Remove a classe show do botão. Isso torna o botão invisível novamente.
    }
  });