const menu = [
  {
    id: 1,
    title: "Gooderham Building"
  },
  {
    id: 2,
    title: "Second link"
  }
];

const data = [
  {
    id: 1, // needs to match with touristData.js information
    title: `Gooderham Building`,
    body: `The Gooderham Building is the focal point of one of Toronto's most iconic vistas: looking west down Front Street towards the building's prominent rounded corner, framed on the sides by the heritage commercial blocks along Front Street, and with the skyscrapers of the Financial District towering in the background. The CN Tower is also visible from certain angles behind Brookfield Place. This vista frequently appears in imagery of the city.The Gooderham Building is well-known both for its narrow wedge shape and for the mural on its back wall. The Flatiron Mural by renowned Canadian artist Derek Michael Besant uses a trompe l'oeil effect to not only make the wall appear to have more windows than it does, but to also give it a more mobile effect by having its edges 'fluttering' away where they are not 'tacked' down. It is a picture of the Perkins Building, which is located directly across the street.
    The building has a Romanesque cornice and frieze above the arched windows on the 4th floor. The main entrance located on Wellington Street makes use of a French Gothic archway. The foundation is made of sandstone. The steep copper roof has eight gable dormers: four on the south facade and four on the north facade.With its linear pattern of fenestration distributed equally on all floors, it conveys a light feeling of a corporate office building. The Gooderham Building is set on a high foundation that reaches half a storey above the ground. These days, it is still being used as an office building. `,
    itinerary: `Some information about the itinerary here`,
    cost: `Information about costs here`,
    location: `Old Toronto, Toronto, ON`,
    map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11541.795129226131!2d-79.41688202202201!3d43.680432584251534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b33622b6bf9dd%3A0x589f556a98f282b2!2sCasa+Loma%2C+Toronto%2C+ON!5e0!3m2!1sen!2sca!4v1532397614934" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>`,
    thingsToDo: `Put here what can we do there`,
    img: [
      "img/casa_loma_1.jpg",
      "img/casa_loma_1.jpg" // put all images here separated by comma
    ]
  },

  {
    id: 2, // needs to match with touristData.js information
    title: `Royal Ontario Museum`,
    body: ``,
    itinerary: `Some information about the itinerary here`,
    cost: `Information about costs here`,
    location: `Put the address here`,
    map: `put the iframe for map here`,
    thingsToDo: `Put here what can we do there`,
    img: [
      "img/casa_loma_1.jpg",
      "img/casa_loma_1.jpg" // put all images here separated by comma
    ]
  }

  // keep copying the contents above and pasting here
];

// plz, don't change anything here

fillMenu = () => {
  const dataEl = data
    .map(t => {
      return `
      <li class="list-group-item">
          <a href="tourist-details.html?id=${t.id}">${t.title}</a>
      </li>`;
    })
    .join("");

  const sideMenu = document.querySelector("#side-menu");
  sideMenu.innerHTML = dataEl;
};

fillPlace = id => {
  const dataEl = data.find(d => d.id === parseInt(id));

  const basicElements = `
    <h4 class="card-title">${dataEl.title}</h4>
    <p class="card-text">${dataEl.body}</p>
    
    <h4>Thing you can do</h4>
    <p class="card-text">${dataEl.thingsToDo}</p>

    <h4>Address</h4>
    <p class="card-text">${dataEl.location}</p>

    <h4>Map to get there</h4>
    <p class="card-text">${dataEl.map}</p>

    <h4>Itinerary</h4>
    <p class="card-text">${dataEl.itinerary}</p>

    <h4>How much for it?</h4>
    <p class="card-text">${dataEl.cost}</p>

  `;

  const images = dataEl.img
    .map(
      i =>
        `<img src="${i}" alt="image" class="img-fluid mb-1 mr-2" style="width: 200px;">`
    )
    .join("");

  console.log(dataEl);

  const basicEl = document.querySelector("#basic-content");
  const imgEl = document.querySelector("#tourist-images");
  basicEl.innerHTML = basicElements;
  imgEl.innerHTML = images;
};

fillMenu();
