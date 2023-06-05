document.title =""
const descriptionTop = document.querySelector(".descriT")
const descriptionBottom = document.querySelector(".descriB")
const productImage1 = document.querySelector("#img1")
const productImage2 = document.querySelector("#img2")
const productImage3 = document.querySelector("#img3")
const productImage4 = document.querySelector("#img4")
const productImage5 = document.querySelector("#img5")
const productImage6 = document.querySelector("#img6")
const productImage7 = document.querySelector("#img7")
const productImage8 = document.querySelector("#img8")
let url ="https://fakestoreapi.com/products"

fetch(url)
.then(response =>{
    return response.json()
})
.then(data => {
    console.log(data);
    descriptionTop.textContent = data[0].category

})