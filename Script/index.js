var cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];
console.log(cartArr);
var cc = cartArr.length;
document.getElementById("cc").innerText=cc;

// var topExp = [
//     {
//         image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/65/66/4a/caption.jpg?w=300&h=300&s=1",
//         tit:"Ubad Tour - Best of Ubad - All Inclusive",
//         tit1:"&#9733;&#9733;&#9733;&#9733;&#9733;",
//         tit2:"2,060",
//         tit3:"From ₹7,507 per adult"
//     },
//     {
//         image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/57/03/51/caption.jpg?w=300&h=300&s=1",
//         tit:"Tokyo Full-Day Private Tour with Government-Licenced Guide",
//         tit1:"&#9733;&#9733;&#9733;&#9733;&#9733;",
//         tit2:"105",
//         tit3:"From ₹8,595 per adult"
//     },
//     {
//         image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5c/29/77/caption.jpg?w=300&h=300&s=1",
//         tit:"Lion City Bike Tour of Singapore",
//         tit1:"&#9733;&#9733;&#9733;&#9733;&#9733;",
//         tit2:"1,105",
//         tit3:"From ₹5,005 per adult"
//     },
//     {
//         image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/67/e5/07/caption.jpg?w=300&h=300&s=1",
//         tit:"Private Taj Mahal Tour from Delhi by Car - All Inclusive",
//         tit1:"&#9733;&#9733;&#9733;&#9733;&#9733;",
//         tit2:"1,405",
//         tit3:"From ₹5,595 per adult"
//     },
//     {
//         image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/15/08/73/caption.jpg?w=300&h=300&s=1",
//         tit:"Half-Day Railway Market and Floating Market Tour in Thailand",
//         tit1:"&#9733;&#9733;&#9733;&#9733;&#9733;",
//         tit2:"775",
//         tit3:"From ₹2,595 per adult"
//     },
//     {
//         image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/91/ce/71/prayer-flags-to-loved.jpg?w=300&h=300&s=1",
//         tit:"Best Half Day DMZ Tour from Seoul",
//         tit1:"&#9733;&#9733;&#9733;&#9733;&#9733;",
//         tit2:"1,805",
//         tit3:"From ₹6,795 per adult"
//     },
//     {
//         image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/fa/1f/ae/caption.jpg?w=300&h=300&s=1",
//         tit:"Phi Phi Island Adventure day trip with Seaview lunch",
//         tit1:"&#9733;&#9733;&#9733;&#9733;&#9733;",
//         tit2:"805",
//         tit3:"From ₹6,595 per adult"
//     },
//     {
//         image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/13/9a/c6/caption.jpg?w=300&h=300&s=1",
//         tit:"Private Full Day Seightseeing Tour to Mount Fuji and Hakone",
//         tit1:"&#9733;&#9733;&#9733;&#9733;&#9733;",
//         tit2:"105",
//         tit3:"From ₹38,595 per adult"
//     },
//     {
//         image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/e1/b7/36/caption.jpg?w=300&h=300&s=1",
//         tit:"Singapore Duck Tour",
//         tit1:"&#9733;&#9733;&#9733;&#9733;&#9733;",
//         tit2:"105",
//         tit3:"From ₹2,695 per adult"
//     },
//     {
//         image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/57/03/51/caption.jpg?w=300&h=300&s=1",
//         tit:"Tokyo Full-Day Private Tour with Government-Licenced Guide",
//         tit1:"&#9733;&#9733;&#9733;&#9733;&#9733;",
//         tit2:"105",
//         tit3:"From ₹8,595 per adult"
//     },
//     {
//         image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5c/29/77/caption.jpg?w=300&h=300&s=1",
//         tit:"Lion City Bike Tour of Singapore",
//         tit1:"&#9733;&#9733;&#9733;&#9733;&#9733;",
//         tit2:"1,105",
//         tit3:"From ₹5,005 per adult"
//     },
// ]

// localStorage.setItem("five",JSON.stringify(topExp));

// topExp.map((elem)=>{
//     var div = document.createElement("div");
//     div.setAttribute("class","six");

//     var img = document.createElement("img");
//     img.setAttribute("src",elem.image);

//     var tit = document.createElement("p");
//     tit.innerText=elem.tit;

//     var div1 = document.createElement("div");
//     div1.setAttribute("class","innerdiv");

//     var tit1 = document.createElement("p");
//     tit1.innerText=elem.tit1;

//     var tit2 = document.createElement("p");
//     tit2.innerText=elem.tit2;

//     div1.append(tit1,tit2);

//     var tit3 = document.createElement("p");
//     tit3.innerText=elem.tit3;

//     div.append(img,tit,div1,tit,div1,tit3);

//     document.querySelector("#six").append(div);
// })