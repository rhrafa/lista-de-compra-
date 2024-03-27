let totalGeral;
limpar();

function adicionar(){
    //adicionando os produtos 
let produto = document.getElementById('produto').value;
let nomeProduto = produto.split('-')[0];
let valorProduto = produto.split('R$')[1];
let quantidade = document.getElementById('quantidade').value;
//calcula o preço dos produtos 
let preco = valorProduto * quantidade;
//alert(preco);
//colocar os produtos no carrinho 
let carrinho = document.getElementById('lista-produtos');
carrinho.innerHTML = carrinho.innerHTML+ `<section class="carrinho__produtos__produto">
<span class="texto-azul">${quantidade}x</span>${nomeProduto}<span class="texto-azul">R$${preco}</span>
</section>`;
//atualiza o valor total
totalGeral = totalGeral + preco;
let campoTotal = document.getElementById('valor-total');
campoTotal.textContent= `R${totalGeral}`;
document.getElementById('quantidade').value = 0;

}
function limpar(){
    totalGeral = 0
    document.getElementById('lista-produtos').innerHTML ='';
    document.getElementById('valor-total').textContent = 'R$ 0';
}