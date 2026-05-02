
const produtos = [
    { id: 1, nome: "Teclado Mecânico", preco: 250.00, imagem: "https://images4.kabum.com.br/produtos/fotos/535604/teclado-mecanico-gamer-machenike-k500-b61-switch-brown-abnt-branco-k500-b61bbr_1769021519_gg.jpg" },
    { id: 2, nome: "Mouse Gamer", preco: 120.00, imagem: "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/oficinadosbits/media/uploads/produtos/foto/ejiiumos/file.png" },
    { id: 3, nome: "Monitor 144hz", preco: 1200.00, imagem: "https://images8.kabum.com.br/produtos/fotos/444038/monitor-gamer-lg-ultragear-27-full-hd-144hz-1ms-ips-hdmi-e-displayport-hdr-10-99-srgb-freesync-premium-vesa-27gn65r_1712149543_gg.jpg" },
    { id: 4, nome: "Headset RGB", preco: 180.00, imagem: "https://images0.kabum.com.br/produtos/fotos/102770/headset-gamer-havit-drivers-53mm-microfone-plugavel-3-5mm-pc-ps4-xbox-one-preto-hv-h2002d_1772477463_gg.jpg" }
];

const container = document.getElementById('lista-produtos');

function renderizarProdutos() {
    produtos.forEach(produto => {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = produto.imagem;
        img.alt = produto.nome;

        const titulo = document.createElement('h3');
        titulo.textContent = produto.nome;

        const preco = document.createElement('p');
        preco.textContent = `R$ ${produto.preco.toFixed(2)}`;

        const botao = document.createElement('button');
        botao.textContent = "Adicionar ao Carrinho";
        
        botao.addEventListener('click', () => {
            alert(`${produto.nome} foi adicionado ao carrinho!`);
        });

        card.appendChild(img);
        card.appendChild(titulo);
        card.appendChild(preco);
        card.appendChild(botao);

        container.appendChild(card);
    });
}

renderizarProdutos();