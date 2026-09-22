function calcular() {
    console.log ("preco");
    console.log("quantidade");
    console.log("pagamento");
    console.log("subtotal");

    let preco = Number(document.getElementById("preço").value);
    let quantidade = Number(document.getElementById("quantidade").value);
    let pagamento = document.getElementById("pagamento").value;
    let subtotal = preco * quantidade;
    let desconto = 0;

    if (pagamento == "dinheiro") {
        desconto = subtotal * 0.10;
    } else if (pagamento == "pix") {
        desconto = subtotal * 0.05;
    }

    let total = subtotal - desconto;

 
}