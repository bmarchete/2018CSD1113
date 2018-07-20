const tourismThumb = [
  {
    id: 1,
    title: "Casa Loma",
    body:
      'Casa Loma (Spanish for "Hill House") is a Gothic Revival style mansion and garden in midtown Toronto, Ontario, Canada',
    img: "img/casa_loma_1.jpg"
  },
  {
    id: 2,
    title: "Card title",
    body:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    img: "img/mock.jpg"
  },
  {
    id: 3,
    title: "Card title",
    body:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    img: "img/mock.jpg"
  }
];

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
