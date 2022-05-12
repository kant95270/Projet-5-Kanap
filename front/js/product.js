const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id")
    if (id != null) {
    let itemPrice = 0
    let imgUrl , altText, articleName
}

fetch(`http://localhost:3000/api/products/${id}`)
.then((resp) => resp.json())
.then((res) => handleData(res))

function handleData( kanap ) { // gérer les données
    const { altTxt, colors, description, imageUrl , name, price, _id }= kanap
    itemPrice = price
    imgUrl =imageUrl
    altText= altTxt
    articleName= name
    makeImage(imageUrl, altTxt)
    makeTitle(name)
    makePrice(price)
    makeDescription(description)
    makeColors(colors)
}
function makeImage(imageUrl, altTxt) { // creér image
    const image =document.createElement("img")
    image.src =imageUrl
    image.alt =altTxt
    const parent =document.querySelector(".item__img")
    if (parent !=null)  parent.appendChild(image)
}
function makeTitle(name) { // titre
    const h1 = document.querySelector("#title")
    if (h1 != null) h1.textContent = name
}
function makePrice(price) { // afficher prix
    const span = document.querySelector("#price")
    if (span !=null) span.textContent = price
}
function makeDescription(description) { // aficher description
    const p =document.querySelector("#description")
    if (p != null) p.textContent = description
}
function makeColors(colors) { // afficher couleurs
    const select =document.querySelector("#colors")
    if (select != null) {
        colors.forEach((color)=> {
        const option = document.createElement("option") 
        option.value = color
        option.textContent = color
        select.appendChild(option)  
            
        })
    }
}

const button = document.querySelector("#addToCart")
button.addEventListener("click", handleClick  )

function handleClick () { // click color ou quantites
    const color = document.querySelector("#colors").value
    const quantity = document.querySelector("#quantity").value

    if (isOrderInValid(color , quantity)) return
    saveOrder(color, quantity)
    redirectToCart()   
}   


function saveOrder(color ,quantity) { // enregister la commande
    const key = `${id}-${color}`
    let data = null
    if(localStorage.getItem(key)){
        data = JSON.parse(localStorage.getItem(key))
        data.quantity += 1
    }else{
        data = {
            id : id,
            color: color,
            quantity: Number(quantity),
            price: itemPrice,
            imageUrl: imgUrl,
            altTxt: altText,
            name :articleName
        }
    }
    
    localStorage.setItem(key, JSON.stringify(data))
}
function isOrderInValid(color, quantity) { // commande non valide
    if (color == null || color === ""|| quantity == null || quantity == 0 ){
        alert("Please select a color")
        return true
    }
}
function redirectToCart() { // rediriger vers le panier
    window.location.href = "cart.html"
}






