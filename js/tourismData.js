const tourismThumb = [
  {
    id: 1,
    title: "Casa Loma",
    body: `Put a short description right here `,
    img: "img/casa_loma_1.jpg"
  },
  {
    id: 2,
    title: "Gooderham Building",
    body: `Put a short description right here`,
    img: "img/Gooderham1.jpg"
  },
  {
    id: 3,
    title: "Royal Ontario Museum",
    body: `Put a short description right here`,
    img: "img/royal ontariomuseum.jpg"
  },
  {
    id: 4,
    title: "Ripley aquarium",
    body: `Put a short description right here`,
    img: "img/ripley2.jpg"
  },
  {
    id: 5,
    title: "CN Tower",
    body: `Put a short description right here`,
    img: "img/cn-tower.jpg"
  },
  {
    id: 6,
    title: "Ripley aquarium",
    body: `Put a short description right here`,
    img: "img/ripley2.jpg"
  },
  {
    id: 7,
    title: "Ripley aquarium",
    body: `Put a short description right here`,
    img: "img/ripley2.jpg"
  },
  {
    id: 8,
    title: "Ripley aquarium",
    body: `Put a short description right here`,
    img: "img/ripley2.jpg"
  },
  {
    id: 9,
    title: "Ripley aquarium",
    body: `Put a short description right here`,
    img: "img/ripley2.jpg"
  }
  
  // keep copying the contents above and pasting here
];

// plz, don't change anything here

setTourismData = () => {
  const data = tourismThumb;
  localStorage.setItem("tourismThumb", JSON.stringify(data));
};

fillTourismDataThumbs = () => {
  const data = JSON.parse(localStorage.getItem("tourismThumb"));

  const dataEl = data
    .map(t => {
      return `
      <div class="col-4  mb-3">
        <div class="card">
            <img class="card-img-top" src="${t.img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${t.title}</h5>
                <p class="card-text">${t.body}</p>
                <a href="tourist-details.html?id=${
                  t.id
                }" class="btn btn-primary">See more</a>
            </div>
        </div>
      </div>`;
    })
    .join("");

  const tourismThumbs = document.querySelector("#tourism-thumbs");
  tourismThumbs.innerHTML = dataEl;
};

setTourismData();
fillTourismDataThumbs();
