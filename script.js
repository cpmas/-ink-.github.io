


function result() {
    const itemOne = (document.getElementById("item-1-price").value / document.getElementById("item-1-size").value);
    const itemTwo = (document.getElementById("item-2-price").value / document.getElementById("item-2-size").value);

    if (itemOne < itemTwo) {
        document.getElementById("result").innerHTML = 
        `<h3>Item One is ${itemOne.toFixed(2)} baht per unit</h3` + '<br/>' +
        `<h3>Item Two is ${itemTwo.toFixed(2)} baht per unit</h3` + '<br/>' +
        '<h2 class="h2result">Item One is cheaper</h2>'
    } else if (itemTwo < itemOne) {
        document.getElementById("result").innerHTML = 
        `<h3>Item One is ${itemOne.toFixed(2)} baht per unit</h3` + '<br/>' +
        `<h3>Item Two is ${itemTwo.toFixed(2)} baht per unit</h3` + '<br/>' +
        '<h2 class="h2result">Item Two is cheaper</h2>'
    } else {document.getElementById("result").innerHTML = `<h2>They are the same price at $${itemTwo.toFixed(2)} per unit</h2>`}

    document.getElementById("result").style.display = 'block';
}