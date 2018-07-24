const menu = [
  {
    id: 1,
    title: "First link"
  },
  {
    id: 2,
    title: "Second link"
  }
];

const data = [
  {
    id: 1, // needs to match with touristData.js information
    title: `Casa Loma`,
    body: `Casa Loma (Spanish for "Hill House") is a Gothic Revival style mansion and garden in midtown Toronto, Ontario, Canada, that is now a historic house museum and landmark. It was constructed from 1911 to 1914 as a residence for financier Sir Henry Pellatt. This attractive palace has borne witness to a century-long history of romance, ambition, mystery and passion. A popular tourist destination, Casa Loma stores a unique blend of historical memoirs, ghost stories, military secrets, architectural marvels and Hollywoodconnections for its inquisitive explorers to unravel.
    The architect was E. J. Lennox,[1] who designed several other city landmarks. Casa Loma sits at an elevation of 140 metres (460 ft) above sea level.[2]
   Due to its unique architectural character in Toronto, Casa Loma has been a popular filming location for movies and television. It is also a popular venue for wedding ceremonies,[3] and Casa Loma can be rented in the evenings after the museum closes to the public.
   `,
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
    title: `Put the title here`,
    body: `Put the entire description right here`,
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
