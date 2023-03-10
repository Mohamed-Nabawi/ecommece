var products=[
    {id:1,product_name:"iphone5",product_price:"2100",product_image:"apple-iphone-5.jpg", added_to_cart : false},
    {id:2,product_name:"iphone7",product_price:"3500",product_image:"apple-iphone-7.jpg", added_to_cart :false},
    {id:3,product_name:"iphone8",product_price:"4700",product_image:"apple-iphone-8.jpg", added_to_cart :false},
    {id:4,product_name:"iphone11",product_price:"6200",product_image:"iphone11.jpg",added_to_cart :false},
    {id:5,product_name:"iphone12",product_price:"7200",product_image:"iphone12.jpg",added_to_cart :false},
    {id:6,product_name:"ipad",product_price:"4200",product_image:"ipad.jpg",added_to_cart :false},]

    const categories=[...new Set(products.map((product)=>{return product}))]

 document.getElementById('products').innerHTML=
   categories.map((product)=>{

    const {product_image,product_name,product_price,id,added_to_cart}=product
        let p=id-1;

        return(
        `<div class='single-product' data-name='da-${id}' key=${id}>
        <img src='/images/${product_image}'/>
        <div class='details'>
        <h4>${product_name}<h4>
        <h4> ${product_price}.00$<h4>
        </div>`+
"<button class='add_to_cart' onclick='addToCart("+ (p++) +")'> add to cart </button>"+
"<button  class='quik_veiw' > Quik veiw </button>"+
`</div>`
)}).join('')
document.getElementById("products-preveiw").innerHTML=categories.map((preveiw)=>{
            const {product_image,product_name,product_price,id}=preveiw
                let p=id-1;
        return(
        `<div class='single-product' data-target='da-${id}'key=${id}>
        <img src='/images/${product_image}'/>
        <div class='details'>
        <h4>${product_name}</h4>
        <h4> ${product_price}.00$</h4>
        <div class='close'>
        <span></span>
         <span></span>
        </div>
        </div>`+
"<button class='add_to_cart' onclick='addToCart("+ (p++) +")'> add to cart </button>"+
`</div>`  )}).join('') 

var cart=[];
function addToCart(item){
var qnt=1;
if(categories[item].added_to_cart == false){
        cart.push({...categories[item]})

categories[item].added_to_cart=true
 localStorage.setItem("cart",JSON.stringify(cart))
displayCart()

 }else{
          let box=document.querySelectorAll('.products-preveiw .single-product')
  let ma =document.querySelectorAll('.products .single-product .add_to_cart')
 ma.forEach((convert)=>{
    console.log(convert)
    convert.onclick=()=>{
            let name =convert.parentElement.getAttribute('data-name')
    box.forEach((prev)=>{
let target =prev.getAttribute('data-target')

console.log(prev)
if(name ==target){

        convert.innerText="Remove"
prev.lastChild.innerText="Remove"
}

    })
}

    })

 }


 
}

    // function delete from cart
   function deleteItem(a){
    cart.splice(a,1)
    displayCart()
   }
////////// show cart content function
   function displayCart(a){
    let x=0, total=0;
    document.getElementById("count").innerHTML=cart.length;

    if(cart.length==0){
        document.getElementById("cart-content").innerHTML='<div class="empty-cart"> Your Cart Is Empty!...</div>'
        document.getElementById("total").innerHTML =" total :$"+0+".00"
            document.getElementById("counter").innerHTML=`count :${cart.length}`;
    }else{
        document.getElementById("cart-content").innerHTML =cart.map((item)=>{
            const{product_image,product_price,added_to_cart}=item
            total=total  +parseInt(product_price) ;
         document.getElementById("total").innerHTML =` Total: ${total}.00$`
             document.getElementById("counter").innerHTML=`count :${cart.length}`;
        
            console.log(item)

            return(
                `<div class='cart-content'>
              <img src='/images/${product_image}'/>
                <h4>${product_price}.00$</h4> `+
                "<button id='deletedItem'onclick='deleteItem("+ (x--) +")'>Delete</button>"+

                `</div>`
            )
            }).join('')
}


   }
// function  show and hide cart
var cartIcon=document.getElementById("cart-link").onclick =function(){
    let cart= document.getElementById("cart2")
    if(cart.style.top=='-1000px'){
        cart.style.top='73px'
        cart.style.display='block'
    }else{
   cart.style.top='-1000px'
    }
}

// preveiw single product
let prevContainer =document.querySelector('.products-preveiw')
let box=document.querySelectorAll('.products-preveiw .single-product')
 let main =document.querySelectorAll('.products .single-product .quik_veiw')
 main.forEach((ele)=>{
console.log(ele)
ele.onclick=()=>{
    let name =ele.parentElement.getAttribute('data-name')
    prevContainer.style.display="flex"
    box.forEach((prev)=>{
let target =prev.getAttribute('data-target')
console.log(prev)
if(name ==target){
    prev.classList.add('active')
}

    })
}

     })
     box.forEach((clos)=>{
    clos.querySelector('.close').onclick=()=>{
        clos.classList.remove('active')
        prevContainer.style.display='none'

    }
})

