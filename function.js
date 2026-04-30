const produtosFixos = [
    {
        id: 1,
        nome: "Joja Cola",
        descricao: "A marca registrada da Corporação Joja.",
        preco: 75,
        imagem: "img/joja_cola.png",
        alt: "Foto_joja_cola",
        quantidade: 0
    },
    {
        id: 2,
        nome: "Luz Joja Cola",
        descricao: "Pode ser colocado dentro de casa.",
        preco: 500,
        imagem: "img/Luz_joja.png",
        alt: "Luz_joja",
        quantidade: 0
    },
    {
        id: 3,
        nome: "Papel de Parede Joja",
        descricao: "Decora as paredes de um aposento.",
        preco: 20,
        imagem: "img/papel_de_parede_joja.png",
        alt: "papel_de_parede_joja",
        quantidade: 0
    },
    {
        id: 4,
        nome: "Muda de Planta",
        descricao: "Ponha-o na sua fazenda para criar um novo pedaço de grama.",
        preco: 125,
        imagem: "img/Grama.png",
        alt: "Muda de Planta",
        quantidade: 0
    },
    {
        id: 5,
        nome: "Açucar",
        descricao: "Deixa suas massas e doces mais doces. Comer demais não é saudável.",
        preco: 125,
        imagem: "img/açucar.png",
        alt: "Açucar",
        quantidade: 0
    },
    {
        id: 6,
        nome: "Farinha de Trigo",
        descricao: "Um ingrediente culinário comum feito de sementes de trigo trituradas.",
        preco: 125,
        imagem: "img/farinha.png",
        alt: "Farinha de Trigo",
        quantidade: 0
    },
    {
        id: 7,
        nome: "Arroz",
        descricao: "Um grão básico geralmente servido com legumes.",
        preco: 250,
        imagem: "img/arroz.png",
        alt: "Arroz",
        quantidade: 0
    },
    {
        id: 8,
        nome: "Papel de parede",
        descricao: "(Oferece um tipo de papel aleatório a cada dia)",
        preco: 250,
        imagem: "img/papel-2.png",
        alt: "Papel de parede",
        quantidade: 0
    },
    {
        id: 9,
        nome: "Piso",
        descricao: "(Oferece um tipo de piso aleatório a cada dia)",
        preco: 250,
        imagem: "img/piso.png",
        alt: "Piso",
        quantidade: 0
    }
];

const produtosPrimavera = [
    {
        id: 101,
        nome: "Semente de Chirívia",
        descricao: "Plante-as na primavera. Demoram 4 dias para crescer.",
        preco: 25,
        imagem: "img/chirivia.png",
        alt: "Semente de Chirívia",
        quantidade: 0
    },
    {
        id: 102,
        nome: "Mudas de Vagem",
        descricao: "Plante-as na primavera. Demoram 10 dias para crescer, mas continuam crescendo logo após. Crescem em uma treliça.",
        preco: 75,
        imagem: "img/vagem.png",
        alt: "Mudas de vagem",
        quantidade: 0
    },
    {
        id: 103,
        nome: "Sementes de Couve-flor",
        descricao: "Plante-as na primavera. Demora 12 dias para produzir uma couve-flor grande.",
        preco: 100,
        imagem: "img/couve-flor.png",
        alt: "Sementes de Couve-flor",
        quantidade: 0
    },
    {
        id: 104,
        nome: "Semente de Batata",
        descricao: "Plante-as na primavera. Demoram 6 dias para crescer, e podem gerar várias batatas na colheita.",
        preco: 62,
        imagem: "img/batata.png",
        alt: "Semente de Batata",
        quantidade: 0
    },
    {
        id: 105,
        nome: "Bulbo de Tulipa",
        descricao: "Plante na primavera. Demora até 6 dias para produzir uma flor colorida. Cores variadas.",
        preco: 25,
        imagem: "img/tulipa.png",
        alt: "Bulbo de Tulipa",
        quantidade: 0
    },
    {
        id: 106,
        nome: "Sementes de couve",
        descricao: "Plante-as na primavera. Demoram 6 dias para crescer. Colha com a foice.",
        preco: 87,
        imagem: "img/couve.png",
        alt: "Sementes de couve",
        quantidade: 0
    },
    {
        id: 107,
        nome: "Sementes de Jasmim-azul",
        descricao: "Plante na primavera. Demora 7 dias para produzir uma flor redondinha azul.",
        preco: 37,
        imagem: "img/jasmin-azul.png",
        alt: "Sementes de Jasmim-azul",
        quantidade: 0
    }
];

const produtosVerao = [
    {
        id: 201,
        nome: "Sementes de Tomate",
        descricao: "Plante-as no verão. Demoram 11 dias para crescerem, e continuam a produção após a primeira colheita.",
        preco: 62,
        imagem: "img/tomate.png",
        alt: "Sementes de Tomate",
        quantidade: 0
    },
    {
        id: 202,
        nome: "Sementes de pimenta",
        descricao: "Plante-as no verão. Demoram 5 dias para crescerem, e continuam a produção após a primeira colheita.",
        preco: 50,
        imagem: "img/pimenta.png",
        alt: "Sementes de pimenta",
        quantidade: 0
    },
    {
        id: 203,
        nome: "Sementes de trigo",
        descricao: "Plante-as no verão ou outono. Demoram 4 dias para crescer. Colha com a foice.",
        preco: 12,
        imagem: "img/trigo.png",
        alt: "Sementes de trigo",
        quantidade: 0
    },
    {
        id: 204,
        nome: "Sementes de rabanete",
        descricao: "Plante-as durante o verão. Demoram 6 dias para crescer.",
        preco: 50,
        imagem: "img/rabanete.png",
        alt: "Sementes de rabanete",
        quantidade: 0
    },
    {
        id: 205,
        nome: "Sementes de Melão",
        descricao: "Plante-as no verão. Demoram 12 dias para crescer.",
        preco: 100,
        imagem: "img/melao.png",
        alt: "Sementes de Melão",
        quantidade: 0
    },
    {
        id: 206,
        nome: "Mudas de lúpulo",
        descricao: "Plante-as no verão. Demoram 11 dias para crescer, mas continuam produzindo lúpulos depois. Cresce em uma treliça.",
        preco: 75,
        imagem: "img/lupulo.png",
        alt: "Mudas de lúpulo",
        quantidade: 0
    },
    {
        id: 207,
        nome: "Sementes de papoula",
        descricao: "Plante no verão. Produz uma flor brilhante e vermelha em 7 dias.",
        preco: 125,
        imagem: "img/papoula.png",
        alt: "Sementes de papoula",
        quantidade: 0
    },
    {
        id: 208,
        nome: "Sementes de Miçanga",
        descricao: "Plante no verão. Demora 8 dias para produzir uma flor tropical vibrante. Cores variadas.",
        preco: 62,
        imagem: "img/micanga.png",
        alt: "Sementes de Miçanga",
        quantidade: 0
    },
    {
        id: 209,
        nome: "Sementes de Girassol",
        descricao: "Plante no verão ou no outono. Demora 8 dias para produzir um girassol grande. Dá mais sementes na colheita.",
        preco: 125,
        imagem: "img/girassol.png",
        alt: "Sementes de Girassol",
        quantidade: 0
    }
];

const produtosOutono = [
    {
        id: 301,
        nome: "Sementes de milho",
        descricao: "Plante-as no verão ou outono. Demoram 14 dias para crescerem, e continuam a produção após a primeira colheita.",
        preco: 187,
        imagem: "img/milho.png",
        alt: "Sementes de milho",
        quantidade: 0
    },
    {
        id: 302,
        nome: "Sementes de berinjela",
        descricao: "Plante-as no outono. Demoram 5 dias para crescerem, e continuam a produção após a primeira colheita.",
        preco: 25,
        imagem: "img/berinjela.png",
        alt: "Sementes de berinjela",
        quantidade: 0
    },
    {
        id: 303,
        nome: "Sementes de abóbora",
        descricao: "Plante-as no outono. Demoram 13 dias para crescer.",
        preco: 125,
        imagem: "img/abobora.png",
        alt: "Sementes de abóbora",
        quantidade: 0
    },
    {
        id: 304,
        nome: "Sementes de amaranto",
        descricao: "Plante-as no outono. Demoram 7 dias para crescer. Colha com a foice.",
        preco: 87,
        imagem: "img/amaranto.png",
        alt: "Sementes de amaranto",
        quantidade: 0
    },
    {
        id: 305,
        nome: "Mudas de uva",
        descricao: "Plante-as no outono. Demoram 10 dias para crescer, mas continuam produzindo uvas depois. Cresce em uma treliça.",
        preco: 75,
        imagem: "img/uva.png",
        alt: "Mudas de uva",
        quantidade: 0
    },
    {
        id: 306,
        nome: "Sementes de inhame",
        descricao: "Plante-as no outono. Demoram 10 dias para crescer.",
        preco: 75,
        imagem: "img/inhame.png",
        alt: "Sementes de inhame",
        quantidade: 0
    },
    {
        id: 307,
        nome: "Sementes de Acelga Chinesa",
        descricao: "Plante-as no outono. Demoram 4 dias para crescer.",
        preco: 62,
        imagem: "img/acelga.png",
        alt: "Sementes de Acelga Chinesa",
        quantidade: 0
    },
    {
        id: 308,
        nome: "Sementes de oxicoco",
        descricao: "Plante-as no outono. Demoram 7 dias para crescerem, e continuam a produção após a primeira colheita.",
        preco: 300,
        imagem: "img/oxicoco.png",
        alt: "Sementes de oxicoco",
        quantidade: 0
    },
    {
        id: 309,
        nome: "Sementes de trigo",
        descricao: "Plante-as no verão ou outono. Demoram 4 dias para crescer. Colha com a foice.",
        preco: 12,
        imagem: "img/trigo.png",
        alt: "Sementes de trigo",
        quantidade: 0
    },
    {
        id: 310,
        nome: "Sementes de Girassol",
        descricao: "Plante no verão ou no outono. Demora 8 dias para produzir um girassol grande. Dá mais sementes na colheita.",
        preco: 125,
        imagem: "img/girassol.png",
        alt: "Sementes de Girassol",
        quantidade: 0
    },
    {
        id: 311,
        nome: "Sementes de fada",
        descricao: "Plante no outono. Demora 12 dias para produzir uma flor misteriosa. Cores variadas.",
        preco: 250,
        imagem: "img/fada.png",
        alt: "Sementes de fada",
        quantidade: 0
    }
];

const categorias = {
    fixos: {
        nome: "Produtos Fixos",
        produtos: produtosFixos
    },
    primavera: {
        nome: "Primavera",
        produtos: produtosPrimavera
    },
    verao: {
        nome: "Verão",
        produtos: produtosVerao
    },
    outono: {
        nome: "Outono",
        produtos: produtosOutono
    }
};

const produtosPorPagina = 3;

let paginaAtual = 1;
let categoriaAtual = "fixos";
let produtosAtuais = categorias[categoriaAtual].produtos;

function trocarCategoria(categoria) {
    if (!categorias[categoria]) {
        return;
    }

    categoriaAtual = categoria;
    produtosAtuais = categorias[categoriaAtual].produtos;
    paginaAtual = 1;

    renderizarProdutos();
}

function renderizarProdutos() {
    const listaProdutos = document.getElementById("lista-produtos");

    if (!listaProdutos) {
        return;
    }

    const inicio = (paginaAtual - 1) * produtosPorPagina;
    const fim = inicio + produtosPorPagina;
    const produtosDaPagina = produtosAtuais.slice(inicio, fim);

    listaProdutos.innerHTML = "";

    produtosDaPagina.forEach(function(produto) {
        const totalProduto = produto.preco * produto.quantidade;

        listaProdutos.innerHTML += `
            <tr>
                <td>
                    <div class="produto-imagem">
                        <div class="produto-emoji">
                            <img src="${produto.imagem}" alt="${produto.alt}">
                        </div>
                    </div>
                </td>

                <td>
                    <div class="nome-produto">${produto.nome}</div>
                    <div class="descricao-produto">${produto.descricao}</div>
                </td>

                <td>
                    <div class="preco">
                        <span>${produto.preco}</span>
                        <small>ouros</small>
                    </div>
                </td>

                <td>
                    <div class="controle-qtd">
                        <span class="botao-qtd botao-menos" onclick="alterarqtd(${produto.id}, '-')">
                            <i class="bi bi-dash-lg"></i>
                        </span>

                        <span class="quantidade">${produto.quantidade}</span>

                        <span class="botao-qtd botao-mais" onclick="alterarqtd(${produto.id}, '+')">
                            <i class="bi bi-plus-lg"></i>
                        </span>
                    </div>
                </td>

                <td>
                    <div class="total-produto">
                        <span>${totalProduto}</span>
                        <small>ouros</small>
                    </div>
                </td>
            </tr>
        `;
    });

    atualizarSubtotal();
    atualizarIndicadorPagina();
}

function alterarqtd(idProduto, acao) {
    const produtoEncontrado = produtosAtuais.find(function(produto) {
        return produto.id === idProduto;
    });

    if (!produtoEncontrado) {
        return;
    }

    if (acao === "-" && produtoEncontrado.quantidade === 0) {
        return;
    }

    if (acao === "+") {
        produtoEncontrado.quantidade++;
    } else {
        produtoEncontrado.quantidade--;
    }

    renderizarProdutos();
}

function atualizarSubtotal() {
    const subtotalElemento = document.getElementById("subtotal");

    if (!subtotalElemento) {
        return;
    }

    let subtotal = 0;

    produtosAtuais.forEach(function(produto) {
        subtotal += produto.preco * produto.quantidade;
    });

    subtotalElemento.innerHTML = subtotal;
}

function proximaPagina() {
    const totalPaginas = Math.ceil(produtosAtuais.length / produtosPorPagina);

    if (paginaAtual < totalPaginas) {
        paginaAtual++;
        renderizarProdutos();
    }
}

function voltarPagina() {
    if (paginaAtual > 1) {
        paginaAtual--;
        renderizarProdutos();
    }
}

function atualizarIndicadorPagina() {
    const indicadorPagina = document.getElementById("indicador-pagina");

    if (!indicadorPagina) {
        return;
    }

    const totalPaginas = Math.ceil(produtosAtuais.length / produtosPorPagina);
    const nomeCategoria = categorias[categoriaAtual].nome;

    indicadorPagina.innerHTML = `${nomeCategoria} - Página ${paginaAtual} de ${totalPaginas}`;
}

function configurarMenuCategorias() {
    const botoesCategorias = document.querySelectorAll(".bloco-esquerdo-1");

    botoesCategorias.forEach(function(botao) {
        botao.addEventListener("click", function() {
            const categoria = botao.getAttribute("data-categoria");

            if (!categoria) {
                return;
            }

            trocarCategoria(categoria);
        });
    });
}

function configurarModalArmazem() {
    const botaoArmazem = document.getElementById("botao-armazem");
    const modalArmazem = document.getElementById("modal-armazem");
    const botaoFecharModal = document.getElementById("botao-fechar-modal");

    if (!botaoArmazem || !modalArmazem || !botaoFecharModal) {
        return;
    }

    botaoArmazem.addEventListener("click", function() {
        modalArmazem.classList.add("ativo");
    });

    botaoFecharModal.addEventListener("click", function(evento) {
        evento.stopPropagation();
        modalArmazem.classList.remove("ativo");
    });

    modalArmazem.addEventListener("click", function(evento) {
        if (evento.target === modalArmazem) {
            modalArmazem.classList.remove("ativo");
        }
    });
}

function configurarBotoesProjetos() {
    const botoesProjetos = document.querySelectorAll(".botao-projeto");
    const modalArmazem = document.getElementById("modal-armazem");
    const modalVideo = document.getElementById("modal-video");
    const videoProjeto = document.getElementById("video-projeto");
    const botaoFecharVideo = document.getElementById("botao-fechar-video");

    if (!botoesProjetos.length || !modalArmazem || !modalVideo || !videoProjeto || !botaoFecharVideo) {
        return;
    }

    botoesProjetos.forEach(function(botao) {
        botao.addEventListener("click", function(evento) {
            evento.stopPropagation();

            const videoSelecionado = botao.getAttribute("data-video");

            botoesProjetos.forEach(function(outroBotao) {
                outroBotao.classList.remove("selecionado");
            });

            botao.classList.add("selecionado");

            setTimeout(function() {
                modalArmazem.classList.remove("ativo");

                const sourceVideo = videoProjeto.querySelector("source");

                if (!sourceVideo) {
                    return;
                }

                sourceVideo.src = videoSelecionado;

                videoProjeto.load();
                modalVideo.classList.add("ativo");

                videoProjeto.play().catch(function() {
                    console.log("O navegador bloqueou o autoplay. Clique no play do vídeo.");
                });
            }, 300);
        });
    });

    botaoFecharVideo.addEventListener("click", function(evento) {
        evento.stopPropagation();
        fecharModalVideo();
    });

    modalVideo.addEventListener("click", function(evento) {
        if (evento.target === modalVideo) {
            fecharModalVideo();
        }
    });
}

function fecharModalVideo() {
    const modalVideo = document.getElementById("modal-video");
    const videoProjeto = document.getElementById("video-projeto");

    if (!modalVideo || !videoProjeto) {
        return;
    }

    videoProjeto.pause();
    videoProjeto.currentTime = 0;

    const sourceVideo = videoProjeto.querySelector("source");

    if (sourceVideo) {
        sourceVideo.src = "";
    }

    videoProjeto.load();
    modalVideo.classList.remove("ativo");
}

function configurarIntroMorris() {
    const modalIntro = document.getElementById("modal-intro");
    const botaoFecharIntro = document.getElementById("botao-fechar-intro");
    const textoDialogo = document.getElementById("texto-dialogo");

    if (!modalIntro || !botaoFecharIntro || !textoDialogo) {
        return null;
    }

    const textoCompleto = "Bem-vindo ao Mercado Joja! Aqui você encontra progresso, conveniência e oportunidades que a antiga comunidade jamais poderia oferecer.";

    let indiceLetra = 0;
    let intervaloDigitacao = null;

    function digitarTexto() {
        if (indiceLetra < textoCompleto.length) {
            textoDialogo.textContent += textoCompleto.charAt(indiceLetra);
            indiceLetra++;
        } else {
            clearInterval(intervaloDigitacao);
        }
    }

    function iniciarDigitacao() {
        textoDialogo.textContent = "";
        indiceLetra = 0;

        clearInterval(intervaloDigitacao);
        intervaloDigitacao = setInterval(digitarTexto, 35);
    }

    function abrirIntro() {
        modalIntro.classList.remove("fechado");
        modalIntro.classList.add("ativo");

        iniciarDigitacao();
    }

    function fecharIntro(evento) {
        if (evento) {
            evento.stopPropagation();
        }

        clearInterval(intervaloDigitacao);
        modalIntro.classList.remove("ativo");
        modalIntro.classList.add("fechado");
    }

    botaoFecharIntro.addEventListener("click", fecharIntro);

    return {
        abrirIntro: abrirIntro,
        fecharIntro: fecharIntro
    };
}

function configurarAvisoInicial(introMorris) {
    const modalAviso = document.getElementById("modal-aviso");
    const botaoFecharAviso = document.getElementById("botao-fechar-aviso");
    const botaoEntendiAviso = document.getElementById("botao-entendi-aviso");

    if (!modalAviso || !botaoFecharAviso || !botaoEntendiAviso) {
        if (introMorris && introMorris.abrirIntro) {
            introMorris.abrirIntro();
        }

        return;
    }

    function fecharAvisoEAbrirMorris(evento) {
        if (evento) {
            evento.preventDefault();
            evento.stopPropagation();
        }

        modalAviso.classList.add("fechado");

        if (introMorris && introMorris.abrirIntro) {
            introMorris.abrirIntro();
        }
    }

    botaoFecharAviso.addEventListener("click", fecharAvisoEAbrirMorris);
    botaoEntendiAviso.addEventListener("click", fecharAvisoEAbrirMorris);
}

function iniciarSite() {
    configurarMenuCategorias();
    configurarModalArmazem();
    configurarBotoesProjetos();

    const introMorris = configurarIntroMorris();

    configurarAvisoInicial(introMorris);

    renderizarProdutos();
}

document.addEventListener("DOMContentLoaded", iniciarSite);