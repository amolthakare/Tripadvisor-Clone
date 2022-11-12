var cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];
console.log(cartArr);

function displayData(cartArr) {

    document.querySelector("#cart").innerHTML="";

    cartArr.map(function (elem , index , array){

        var maindiv = document.createElement("div");
    maindiv.setAttribute("id","maindiv")

    var imgdiv = document.createElement("div");
    imgdiv.setAttribute("class","imgdiv");

    var image = document.createElement("img");
    image.setAttribute("src",elem.image);
     
    var p = document.createElement("u");
    p.innerText="Remove";
    p.addEventListener("click",function() {
        deleteItem(index);
    })

    imgdiv.append(image,p);

    var datadiv = document.createElement("div");
    datadiv.setAttribute("id","datadiv");
    
    var name = document.createElement("p");
    name.innerText=elem.property_title;
    name.setAttribute("id","name");

    var bunchdiv = document.createElement("div");
    bunchdiv.setAttribute("id","bunchdiv");

    var cartdiv = document.createElement("div");
    cartdiv.setAttribute("class","cartdiv");

    var logo = document.createElement("img");
    logo.setAttribute("src",elem.logo);


    var price = document.createElement("p");
    price.innerText="₹"+elem.price;

    // var btn = document.createElement("button");
    // btn.innerText="Remove";

    var cancel = document.createElement("p");
    cancel.innerText=elem.message;

    var reserve = document.createElement("p");
    reserve.innerText=elem.message2;

    cartdiv.append(logo,price,cancel,reserve);

    var pricediv = document.createElement("div");
    pricediv.setAttribute("class","pricediv")

    var web1 = document.createElement("p");
    web1.innerText=elem.vendorInner;

    var price1 = document.createElement("p");
    price1.innerText=elem.price2;

    var web2 = document.createElement("p");
    web2.innerText=elem.vendorInner2;

    var price2 = document.createElement("p");
    price2.innerText=elem.price3;

    var web3 = document.createElement("p");
    web3.innerText=elem.vendorInner3;

    var price3 = document.createElement("p");
    price3.innerText=elem.price4;

    var deal = document.createElement("p");
    deal.innerText=elem.taLnk;

    pricediv.append(web1,price1,web2,price2,web3,price3,deal);

    var reviewdiv=document.createElement("div");
    reviewdiv.setAttribute("class","reviewdiv");
    
    var review = document.createElement("p");
    review.innerText=elem.review_count;

    var rev1 = document.createElement("p");
    rev1.innerText=elem.popindex;

    // var review = document.createElement("p");
    // review.innerText=elem.review_count;
    var wifidiv = document.createElement("div");
    wifidiv.setAttribute("class","wifidiv");

    var wifi = document.createElement("p");
    wifi.innerText=" Wifi";

    var wifisym = document.createElement("i")
    wifisym.setAttribute("class","fa-solid fa-wifi");

    wifidiv.append(wifisym,wifi);

    var park = document.createElement("div");
    park.setAttribute("class","wifidiv");

    var Free_Parking = document.createElement("p");
    Free_Parking.innerText="Free Parking";

    var parksys = document.createElement("i")
    parksys.setAttribute("class","fa-solid fa-square-parking");
    
    park.append(parksys,Free_Parking);

    reviewdiv.append(review,rev1,wifidiv,park);

    bunchdiv.append(cartdiv,pricediv,reviewdiv);

    datadiv.append(name,bunchdiv);

    maindiv.append(imgdiv,datadiv);
        document.querySelector("#cart").append(maindiv);

    })
}

displayData(cartArr);


// total

function Total() {
    var cartTotal = cartArr.reduce(function (acc, elem, index) {
        return acc + (elem.price * elem.quant);
    }, 0);

    document.querySelector(".total").innerText = "₹"+cartTotal;
    document.querySelector(".Total").innerText = "₹"+cartTotal;
}
Total();

function deleteItem(index){
    cartArr.splice(index, 1);
    localStorage.setItem("cartItems",JSON.stringify(cartArr));
    displayData(cartArr);
    Total();
}