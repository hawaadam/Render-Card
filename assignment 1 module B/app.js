var Arr = [
  {
    id: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV93_dW3a5DCy9FuN3dn44YrubouRo06So8A&usqp=CAU",
    title: "New title",
    price: 205,
    des: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
  },
  {
    id: 7,
    image:
      "https://ewardrobe.com.pk/cdn/shop/products/Photo_1639090185790_1445x.jpg?v=1639147676",
    title: "Ergonomic Wooden Tuna",
    price: 743,
    des: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
  },
  {
    id: 9,
    image:
      "https://www.travelandleisure.com/thmb/YnSsOI6M519r2togrd5uGEoLA-o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tal-group-shot-heated-jacket-update-82c74f08acc747f291519a83be4b6a3f.jpg",

    title: "Electronic Bronze Chips",
    price: 808,
    des: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
  },
  {
    id: 11,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdXVKO8AzXORojkzBW2IMBHFYfMaULhFFmkA&usqp=CAU",
    title: "Awesome Bronze Car",
    price: 382,
    des: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
  },
  {
    id: 12,
    image:
      "https://rukminim2.flixcart.com/image/850/1000/l1jmc280/shoe/m/4/z/6-1209-aquamagic-white-original-imagd3bjwds3hp7x.jpeg?q=90",
    title: "Recycled Rubber Cheese",
    price: 30,
    des: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
  },
  {
    id: 13,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI0TiyiPsj5xbQTU3mk9Let8iy7FulmF1xuby2fRMmJfd1bwUKON6dgeQPWXudIJWeMoc&usqp=CAU",
    title: "New title",
    price: 205,
    des: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
  },
  {
    id: 14,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxF4gQdjeh7mOA-a6PboRwn4IRigcoTcgcvw&usqp=CAU",
    title: "Ergonomic Wooden Tuna",
    price: 743,
    des: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
  },
  {
    id: 15,
    image:
      "https://media.istockphoto.com/id/497040301/photo/white-baseball-hat.jpg?s=612x612&w=0&k=20&c=CdfjW7GlFoUOvUozoe3UL0fe205V3FcaCwDxfipsQ1g=",
    title: "Electronic Bronze Chips",
    price: 808,
    des: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
  },
];

var cardCon = document.getElementById("cardrender");

for (var i = 0; i < Arr.length; i++) {
  var image = Arr[i].image;
  var title = Arr[i].title;
  var description = Arr[i].des;
  var id = Arr[i].id;
  var price = Arr[i].price;
  cardCon.innerHTML += `
  <div class="card m-2" style="width: 20rem; box-shadow: 4px 4px blue;">
        <img
          src=${image}
          class="card-img-top"
          alt="..."
          height="160px"
        />
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">
            ${description}
          </p>
          <p class="card-text" style="margin-bottom: 10px; font-style: italic;">
          price: $${price}
          </p>
        </div>
      </div>
  `;
}
