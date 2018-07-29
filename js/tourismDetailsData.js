const menu = [
  {
    id: 1,
    title: "Gooderham Building"
  },
  {
    id: 2,
    title: "Royal Ontario Museum"
  },
  {
    id: 3,
    title: "Ripley aquarium"
  },
  {
    id: 4,
    title: "Casa Loma"
  },
  {
    id: 5,
    title: "CN Tower"
  },
  {
    id: 6,
    title: "Toronto Zoo"
  },
  {
    id: 7,
    title: "Spadina Museum"
  },
  {
    id: 8,
    title: "Fort York"
  },
  {
    id: 9,
    title: "Bluffers Beach"
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
    location: `49 Wellington St E, Toronto, ON M5E 1C9`,
    map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.991827252918!2d-79.37657278483417!3d43.64833837912144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb2e018655a3%3A0x4ebb69c2786fb5cd!2sGooderham+Building+(flatiron+building)!5e0!3m2!1sen!2sca!4v1532672610121" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>`,
    thingsToDo: ``,
    img: [
      "img/goodderhm1.jpg",
      "img/gooderhm2.jpg",
      "img/gooderhm3.jpg",
      "img/gooderham5.jpg",
      "img/gooderham1.jpg",
      "img/gooderham6.jpg"
      
      // put all images here separated by comma
    ]
  },

  {
    id: 2, // needs to match with touristData.js information
    title: `Royal Ontario Museum`,
    body: `The Royal Ontario Museum was formally established on 16 April 1912, and was jointly governed by the Government of Ontario and the University of Toronto. Its first assets were transferred from the University and the provincial Department of Education, coming from its predecessor the Museum of Natural History and Fine Arts at the Toronto Normal School. On 19 March 1914, at 3:00 pm, the Duke of Connaught, also the Governor General of Canada, officially opened the Royal Ontario Museum to the public. With more than six million items and forty galleries, the museum's diverse collections of world culture and natural history contribute to its international reputation. The museum contains notable collections of dinosaurs, minerals and meteorites, Near Eastern and African art, Art of East Asia, European history, and Canadian history. It houses the world's largest collection of fossils from the Burgess Shalewith more than 150,000 specimens. The museum also contains an extensive collection of design and fine arts, including clothing, interior, and product design, especially Art Deco.`,
    itinerary: `Some information about the itinerary here`,
    cost: `Information about costs here`,
    location: `100 Queens Park, Toronto, ON M5S 2C6`,
    map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.0605903102387!2d-79.3969657848334!3d43.66770967912071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34baf3dae513%3A0xc98434e11ec5f592!2sRoyal+Ontario+Museum!5e0!3m2!1sen!2sca!4v1532674056078" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>`,
    thingsToDo: `Put here what can we do there`,
    img: [
      "img/casa_loma_1.jpg",
      "img/casa_loma_1.jpg" // put all images here separated by comma
    ]
  },
   {
    id: 3, // needs to match with touristData.js information
    title: `Ripley Aquarium`,
    body: `The aquarium building features a multi-faceted shell clad in large aluminum panels, with the roof of the main entrance that "gives the illusion of the earth’s crust peeling away to reveal a window into the aquatic world." There are also coloured surfaces that juxtapose reflective aluminum soffits. The building was designed with special shielding so that Sharks would not be disturbed by its electrical systems.The Ripley aquarium holds 5.7 million litres (1.5 million gallons) of water and shows marine and freshwater habitats from around the world. The aquarium is organized into ten galleries: Canadian Waters, Rainbow Reef, Dangerous Lagoon, Discovery Centre, The Gallery, Ray Bay, Swarm: Nature by Numbers, Planet Jellies, Life Support Systems and the Shoreline Gallery. It is home to more than 20,000 animals.`,
    itinerary: `Some information about the itinerary here`,
    cost: `Information about costs here`,
    location: `288 Bremner Blvd, Toronto, ON M5V 3L9`,
    map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.2770938287726!2d-79.38815968483435!3d43.64240297912158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d5d5b6045b%3A0x8daf1a19298c213d!2sRipley&#39;s+Aquarium+of+Canada!5e0!3m2!1sen!2sca!4v1532672750009" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>`,
    thingsToDo: `Put here what can we do there`,
    img: [
      "img/casa_loma_1.jpg",
      "img/casa_loma_1.jpg" // put all images here separated by comma
    ]
  },
  
   {
    id: 4, // needs to match with touristData.js information
    title: `Casa Loma`,
    body: `Spectacular  architecture and modern technology classified Casa Loma as one of the marvels of Toronto in the early 1900s. The castle exhibited the benefits of electric power, which was very new to North America at that time. It had an elevator, which was the first of its kind in a private home in North America, and the castle’s ovens were so big that each one could cook an entire ox! The mansion was fitted with a central vacuuming system and had its own telephone exchange with so many telephones that the castle’s operator handled more daily calls from the castle itself than operators from the entire city of Toronto. The furniture of the Oak Room of Casa Loma was designed by the same company that furnished the Titanic. Casa Loma also was equipped with several secret passages and stairwells, the most interesting of which was an 800-foot-long tunnel that connected the castle to the horse stables. The stables themselves were a stunning wonder, with herringbone tile floors, carved mahogany walls and cast iron panels.`,
    itinerary: `Some information about the itinerary here`,
    cost: `Information about costs here`,
    location: `1 Austin Terrace, Toronto, ON M5R 1X8`,
    map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11541.795129226131!2d-79.41688202202201!3d43.680432584251534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b33622b6bf9dd%3A0x589f556a98f282b2!2sCasa+Loma%2C+Toronto%2C+ON!5e0!3m2!1sen!2sca!4v1532397614934" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>`,
    thingsToDo: `Put here what can we do there`,
    img: [
      "img/casa_loma_1.jpg",
      "img/casa_loma_1.jpg" // put all images here separated by comma
    ]
  },
  
   {
    id: 5, // needs to match with touristData.js information
    title: `CN Tower`,
    body: `The CN Tower opened to the public on June 26, 1976.The construction costs of approximately CA$63 million ($260 million in 2016 dollars) were repaid in fifteen years. Canadian National Railway sold the tower prior to taking the company private in 1995, when it decided to divest all operations not directly related to its core freight shipping businesses.
From the mid-1970s to the mid-1980s, the CN Tower was practically the only development along Front Street West; it was still possible to see Lake Ontario from the foot of the CN Tower due to the expansive parking lots and lack of development in the area at the time. As the area around the tower was developed, particularly with the completion of the Metro Toronto Convention Centre in 1984 and the SkyDome in 1989 (renamed Rogers Centre in 2005), the former Railway Lands were redeveloped and the tower became the centre of a newly developing entertainment area. Access was greatly improved with the construction of the SkyWalk in 1989, which connected the tower and SkyDome to the nearby Union Station railway and subway station, and, in turn, to the city's PATH underground pedestrian system. By the mid-1990s, it was the centre of a thriving tourist district. The entire area continues to be an area of intense building, notably a boom in condominiumconstruction in the first two decades of the 21st century, as well as the 2013 opening of the Ripley's Aquarium by the base of the tower.`,
    itinerary: `Some information about the itinerary here`,
    cost: `Information about costs here`,
    location: `301 Front St W, Toronto, ON M5V 2T6`,
    map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.2690639741763!2d-79.38924548517058!3d43.642570061137214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d68bf33a9b%3A0x15edd8c4de1c7581!2sCN+Tower!5e0!3m2!1sen!2sca!4v1532671827813" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>`,
    thingsToDo: `Put here what can we do there`,
    img: [
      "img/casa_loma_1.jpg",
      "img/casa_loma_1.jpg" // put all images here separated by comma
    ]
  },
  
   {
    id: 6, // needs to match with touristData.js information
    title: `Toronto Zoo`,
    body: ``,
    itinerary: `Some information about the itinerary here`,
    cost: `Information about costs here`,
    location: ` 2000 Meadowvale Rd, Toronto, ON M1B 5K7`,
    map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.8389932725036!2d-79.18807908482772!3d43.81769897911591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d9f1ad96dacd%3A0x9e197a60028bb5d8!2sToronto+Zoo!5e0!3m2!1sen!2sca!4v1532672818051" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>`,
    thingsToDo: ``,
    img: [
      "img/casa_loma_1.jpg",
      "img/casa_loma_1.jpg" // put all images here separated by comma
    ]
  },
  
   {
    id: 7, // needs to match with touristData.js information
    title: `Spadina Museum`,
    body: ``,
    itinerary: `Some information about the itinerary here`,
    cost: `Information about costs here`,
    location: `285 Spadina Rd, Toronto, ON M5R 2V5`,
    map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.517991880339!2d-79.41033588483297!3d43.67899347912045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b349de3dc0091%3A0x39fd00050df6b378!2sSpadina+Museum!5e0!3m2!1sen!2sca!4v1532672866859" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>`,
    thingsToDo: `Put here what can we do there`,
    img: [
      "img/casa_loma_1.jpg",
      "img/casa_loma_1.jpg" // put all images here separated by comma
    ]
  },
  
   {
    id: 8, // needs to match with touristData.js information
    title: `Fort York`,
    body: ``,
    itinerary: `Some information about the itinerary here`,
    cost: `Information about costs here`,
    location: ` 250 Fort York Blvd, Toronto, ON M5V 3K9`,
    map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.515918393871!2d-79.40838128483452!3d43.637433379121845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b351f7ba3ff21%3A0xa74f569abc3fd61b!2sFort+York+National+Historic+Site!5e0!3m2!1sen!2sca!4v1532672910567" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>`,
    thingsToDo: `Put here what can we do there`,
    img: [
      "img/casa_loma_1.jpg",
      "img/casa_loma_1.jpg" // put all images here separated by comma
    ]
  },
  
   {
    id: 9, // needs to match with touristData.js information
    title: `Bluffers Beach`,
    body: ``,
    itinerary: `Some information about the itinerary here`,
    cost: `Information about costs here`,
    location: `1 Brimley Road S, Scarborough, ON M1M 3W3`,
    map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.766052906404!2d-79.22717568483156!3d43.71541067911924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cfbc2309ead7%3A0xd2b62a45e8a611aa!2sBluffer&#39;s+Park+Beach!5e0!3m2!1sen!2sca!4v1532672973186" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>`,
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
