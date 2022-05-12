const orderId = getOrderId ()
displayOrderId(orderId)
removeAllCache()

function getOrderId() { // numero de commande 
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
return urlParams.get("orderId")
}

function displayOrderId(orderId) { // id commande
    const orderIdElement = document.getElementById("orderId")
    orderIdElement.textContent = orderId
}

function removeAllCache() { // supprimer la cache
    const cache = window.localStorage
    cache.clear()
}
