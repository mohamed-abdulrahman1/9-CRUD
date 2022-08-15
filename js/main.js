
var productNameInput = document.getElementById('productNameInput');//Input kolo
var productPriceInput = document.getElementById('productPriceInput');//Input kolo
var productCategoryInput = document.getElementById('productCategoryInput');//Input kolo
var productDescInput = document.getElementById('productDescInput');//Input kolo
var productsContainer = [];

function addProduct() {
        var product = {
            name: productNameInput.value,
            price: productPriceInput.value,
            category: productCategoryInput.value,
            desc: productDescInput.value
        }
        productsContainer.push(product);//1;
        clearForm();
        displayProducts();   
}

function clearForm() {
    
    productNameInput.value = "";
    productPriceInput.value = "";
    productCategoryInput.value = "";
    productDescInput.value = "";
  }

function displayProducts() { 
    var cartoona = ``;
    for(var i =0;i<productsContainer.length ;i++)
    {
        cartoona +=`<tr>
        <td>${i}</td>
        <td>${productsContainer[i].name}</td>
        <td>${productsContainer[i].price}</td>
        <td>${productsContainer[i].category}</td>
        <td>${productsContainer[i].desc}</td>
        <td> <button class="btn btn-outline-warning">update</button> </td>
        <td> <button class="btn btn-outline-danger">delete</button> </td>
    </tr>`
    }
    document.getElementById('tableBody').innerHTML =cartoona;
 }




// var productsContainer = [
//     {name:'nokia' , price:9000 , category:'mobile' , desc:'good'},
//     {name:'samsung' , price:9000 , category:'mobile' , desc:'good'},
//     {name:'toshiba' , price:9000 , category:'mobile' , desc:'good'},
//     {name:'oppo' , price:9000 , category:'mobile' , desc:'good'},

// ]



