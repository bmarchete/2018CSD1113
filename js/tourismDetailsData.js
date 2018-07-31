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
    body: `The Gooderham Building is the focal point of one of Toronto's most iconic vistas: looking west down Front Street towards the building's prominent rounded corner, framed on the sides by the heritage commercial blocks along Front Street, and with the skyscrapers of the Financial District towering in the background.  The CN Tower is also visible from certain angles behind Brookfield Place.This vista frequently appears in imagery of the city.The Gooderham Building is well-known both for its narrow wedge shape and for the mural on its back wall. The Flatiron Mural by renowned Canadian artist Derek Michael Besant uses a trompe l'oeil effect to not only make the wall appear to have more windows than it does, but to also give it a more mobile effect by having its edges 'fluttering' away where they are not 'tacked' down. It is a picture of the Perkins Building, which is located directly across the street.
    The building has a Romanesque cornice and frieze above the arched windows on the 4th floor. The main entrance located on Wellington Street makes use of a French Gothic archway. The foundation is made of sandstone. The steep copper roof has eight gable dormers: four on the south facade and four on the north facade.With its linear pattern of fenestration distributed equally on all floors, it conveys a light feeling of a corporate office building. The Gooderham Building is set on a high foundation that reaches half a storey above the ground. These days, it is still being used as an office building. `,
    itinerary: `North/South Loop makes stops near the following attractions: <br> 
Starting point: Yonge & Dundas Square <br>
CN Tower <br>
Rogers Center <br>
Goderham Building<br>
St. Lawrence Market <br>
Casa Loma <br>
Royal Ontario Museum <br>
Toronto Zoo`,
    cost: `This is an official building in which office rents will start at $64 gross per square foot, which includes operating costs, taxes and net rent.`,
    location: `49 Wellington St E, Toronto, ON M5E 1C9`,
    map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.991827252918!2d-79.37657278483417!3d43.64833837912144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb2e018655a3%3A0x4ebb69c2786fb5cd!2sGooderham+Building+(flatiron+building)!5e0!3m2!1sen!2sca!4v1532672610121" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>`,
    thingsToDo: `Visitors get chance to see narrow wedge shape of Gooderham buiding and also mural on its back wall. <br>
                  It's less than 2 blocks from St. lawrence market. Visitors can grab a cup of coffee from nearby cafes and see the buiding from the seats by the window. <br>
                  This buidling is surrounded by churches, restraunts, cafes and flee markets.`,
    img: [
      "img/gooderham1.jpg",
      "img/gooderham2.jpg",
      "img/gooderham3.jpg",
      "img/gooderham4.jpg"
      
      // put all images here separated by comma
    ]
  },

  {
    id: 2, // needs to match with touristData.js information
    title: `Royal Ontario Museum`,
    body: `The Royal Ontario Museum was formally established on 16 April 1912, and was jointly governed by the Government of Ontario and the University of Toronto. Its first assets were transferred from the University and the provincial Department of Education, coming from its predecessor the Museum of Natural History and Fine Arts at the Toronto Normal School. On 19 March 1914, at 3:00 pm, the Duke of Connaught, also the Governor General of Canada, officially opened the Royal Ontario Museum to the public. With more than six million items and forty galleries, the museum's diverse collections of world culture and natural history contribute to its international reputation. The museum contains notable collections of dinosaurs, minerals and meteorites, Near Eastern and African art, Art of East Asia, European history, and Canadian history. It houses the world's largest collection of fossils from the Burgess Shalewith more than 150,000 specimens. The museum also contains an extensive collection of design and fine arts, including clothing, interior, and product design, especially Art Deco.`,
    itinerary: `North/South Loop makes stops near the following attractions: <br>
Starting point: Yonge & Dundas Square<br>
CN Tower<br> 
Rogers Center<br> 
St. Lawrence Market <br>
Casa Loma<br> 
Royal Ontario Museum <br>
Toronto Zoo`,
    cost: `Adult - $20.00 <br>
           Child(4-14) - $14.00 <br> 
           Senior(65+) - $17.00 <br>
           Student (with valid student card )/Youth(15-19) - $15.50 <br> 
           Infant(0-3) - Free <br> 
           Extra for special exhibitions.<br>
           How to get tickets?<br>
           <a style="color: #3366ff;" href="http://www.rom.on.ca/en/visit-us/buy-tickets" target="_blank" rel="nofollow">Online </a>`,
    location: `100 Queens Park, Toronto, ON M5S 2C6`,
    map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.0605903102387!2d-79.3969657848334!3d43.66770967912071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34baf3dae513%3A0xc98434e11ec5f592!2sRoyal+Ontario+Museum!5e0!3m2!1sen!2sca!4v1532674056078" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>`,
    thingsToDo: `Travel around the world’s cultures through the galleries devoted to World Cultures.<br> Discover over 1,000 diverse artifacts providing a cultural context for Canada’s earliest societies and reveal the economic and social forces that influenced First Peoples art at Daphne Cockwell Gallery of Canada:First Peoples <br> See outstanding Chinese collection, ranked among the world’s best outside China that includes more than 2000 objects spanning 7,000 years of Chinese history, ranging from beautifully painted prehistoric ceramic jars to elaborate 18th-century furniture at Joey and Toby Tanenbaum Gallery of China <br>See large sculptures in stone, bronze, iron, ceramic, and wood spanning 2,000 years of Chinese sculptural art and the development of Judaism, Islam and Christianity in China from the 3rd to 19th
    centuries AD at Matthews Family Court of Chinese Sculpture.`,
    img: [
      "img/royal1.jpg",
      "img/royal2.jpg",
      "img/royal3.jpg",
      "img/royal4.jpg" // put all images here separated by comma
    ]
  },
   {
    id: 3, // needs to match with touristData.js information
    title: `Ripley Aquarium`,
    body: `The aquarium building features a multi-faceted shell clad in large aluminum panels, with the roof of the main entrance that "gives the illusion of the earth’s crust peeling away to reveal a window into the aquatic world." There are also coloured surfaces that juxtapose reflective aluminum soffits. The building was designed with special shielding so that Sharks would not be disturbed by its electrical systems.The Ripley aquarium holds 5.7 million litres (1.5 million gallons) of water and shows marine and freshwater habitats from around the world. The aquarium is organized into ten galleries: Canadian Waters, Rainbow Reef, Dangerous Lagoon, Discovery Centre, The Gallery, Ray Bay, Swarm: Nature by Numbers, Planet Jellies, Life Support Systems and the Shoreline Gallery. It is home to more than 20,000 animals.`,
    itinerary: `North/South Loop makes stops near the following attractions: <br> 
Starting point: Yonge & Dundas Square <br> 
CN Tower<br>
Rogers Center <br>
St. Lawrence Market <br>
Ripley Aquarium<br>
Casa Loma <br>
Royal Ontario Museum <br>
Toronto Zoo`,

    cost: `Adult - $29.98 <br>
           Child(4-14) - $9.98 <br> 
           Senior(65+) - $19.98 <br>
           Infant(0-3) - Free <br>`,
    location: `288 Bremner Blvd, Toronto, ON M5V 3L9`,
    map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.2770938287726!2d-79.38815968483435!3d43.64240297912158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d5d5b6045b%3A0x8daf1a19298c213d!2sRipley&#39;s+Aquarium+of+Canada!5e0!3m2!1sen!2sca!4v1532672750009" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>`,
    thingsToDo: `Learn about the ecosystems of Canada’s Great Lakes and surrounding seas at Canadian Waters.<br>Take a heart-pounding journey through Dangerous Lagoon.<br>Pop-up into the underwater viewing bubbles at the Discovery Centre.<br>Watch the daily dive show at Ray Bay.<br>Enjoy a mesmerizing light show from the dancing jellyfish at Planet Jellies.`,
    img: [
      "img/ripley1.jpg",
      "img/ripley2.jpg",
      "img/ripley3.jpg",
      "img/ripley4.jpg" // put all images here separated by comma
    ]
  },
  
   {
    id: 4, // needs to match with touristData.js information
    title: `Casa Loma`,
    body: `Spectacular  architecture and modern technology classified Casa Loma as one of the marvels of Toronto in the early 1900s. The castle exhibited the benefits of electric power, which was very new to North America at that time. It had an elevator, which was the first of its kind in a private home in North America, and the castle’s ovens were so big that each one could cook an entire ox! The mansion was fitted with a central vacuuming system and had its own telephone exchange with so many telephones that the castle’s operator handled more daily calls from the castle itself than operators from the entire city of Toronto. The furniture of the Oak Room of Casa Loma was designed by the same company that furnished the Titanic. Casa Loma also was equipped with several secret passages and stairwells, the most interesting of which was an 800-foot-long tunnel that connected the castle to the horse stables. The stables themselves were a stunning wonder, with herringbone tile floors, carved mahogany walls and cast iron panels.`,
    itinerary: `North/South Loop makes stops near the following attractions: <br>
Starting point: Yonge & Dundas Square <br>
CN Tower <br>
Rogers Center <br> 
St. Lawrence Market <br> 
Casa Loma <br>
Royal Ontario Museum <br> 
Toronto Zoo`,
    cost: `Casa Loma entry tickets <br>
           Adult(18-64): $32.49 <br>
           Youth(14-17): $27.32 <br>
           Senior(65+): $27.32 <br>
           Child(4-13): $22.15`,
    location: `1 Austin Terrace, Toronto, ON M5R 1X8`,
    map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11541.795129226131!2d-79.41688202202201!3d43.680432584251534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b33622b6bf9dd%3A0x589f556a98f282b2!2sCasa+Loma%2C+Toronto%2C+ON!5e0!3m2!1sen!2sca!4v1532397614934" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>`,
    thingsToDo: `Visitors can get a self guided audio tour which makes it easy to explore the houses and grounds. The audio tour of Casa Loma is beneficial as it provides the history about the city anf family who built this dwelling. <br>
                 One should must experience the underground tunnels to stables and garage is lined with cool historical information. <br>
                 The southern view from the terraces and castle rooftops are amazing.`,
    img: [
      "img/casa1.jpg",
      "img/casa2.jpg",
      "img/casa3.jpg",
      "img/casa4.jpg" // put all images here separated by comma
    ]
  },
  
   {
    id: 5, // needs to match with touristData.js information
    title: `CN Tower`,
    body: `The CN Tower opened to the public on June 26, 1976.The construction costs of approximately CA$63 million ($260 million in 2016 dollars) were repaid in fifteen years. Canadian National Railway sold the tower prior to taking the company private in 1995, when it decided to divest all operations not directly related to its core freight shipping businesses.
    From the mid-1970s to the mid-1980s, the CN Tower was practically the only development along Front Street West; it was still possible to see Lake Ontario from the foot of the CN Tower due to the expansive parking lots and lack of development in the area at the time. As the area around the tower was developed, particularly with the completion of the Metro Toronto Convention Centre in 1984 and the SkyDome in 1989 (renamed Rogers Centre in 2005), the former Railway Lands were redeveloped and the tower became the centre of a newly developing entertainment area. Access was greatly improved with the construction of the SkyWalk in 1989, which connected the tower and SkyDome to the nearby Union Station railway and subway station, and, in turn, to the city's PATH underground pedestrian system. By the mid-1990s, it was the centre of a thriving tourist district. The entire area continues to be an area of intense building, notably a boom in condominiumconstruction in the first two decades of the 21st century, as well as the 2013 opening of the Ripley's Aquarium by the base of the tower.`,
    itinerary: `North/South Loop makes stops near the following attractions: <br>
Starting point: Yonge & Dundas Square <br>
CN Tower<br> 
Rogers Center <br>
St. Lawrence Market <br>
Casa Loma <br>
Royal Ontario Museum<br> 
Toronto Zoo`,
    cost: `Tower experience -: <br> Adult(13-64)-$38.00 <br> Senior(65+)-$ 34.00 <br> Child(4-12)-$28.00 <br> Edge Walk -: <br> For(13+)-$225.00 `,
    location: `301 Front St W, Toronto, ON M5V 2T6`,
    map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.2690639741763!2d-79.38924548517058!3d43.642570061137214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d68bf33a9b%3A0x15edd8c4de1c7581!2sCN+Tower!5e0!3m2!1sen!2sca!4v1532671827813" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>`,
    thingsToDo: `The edge walk experience includes a keepsake video,printed photos,certificate of achievement and a ticket to reenter the CN tower.<br> Tower experience includes access to lookout,glass Floor and skypod levels,information displays and more.`,
    img: [
      "img/cn1.jpg",
      "img/cn2.jpg",
      "img/cn3.jpg",
      "img/cn4.jpg" // put all images here separated by comma
    ]
  },
  
   {
    id: 6, // needs to match with touristData.js information
    title: `Toronto Zoo`,
    body: `The Toronto Zoo is a zoo located in Toronto, Ontario, Canada. Founded by Hugh A. Crothers, an industrialist who became the first Chairman of the Metro Toronto Zoological Society in 1966, the zoo opened on August 15, 1974 as the Metropolitan Toronto Zoo and is owned by the City of Toronto. The word "Metropolitan" was dropped from its name when the Municipality of Metropolitan Toronto was amalgamated to the current city in 1998. The zoo is located near the Rouge River, along the western border of Rouge Park in the city's east end district of Scarborough. Encompassing 287 hectares (710 acres), the Toronto Zoo is the largest zoo in Canada. It is divided into seven zoogeographic regions: Indo-Malaya, Africa, Americas, Tundra Trek, Australasia, Eurasia, and the Canadian Domain. Some animals are displayed indoors in tropical pavilions and outdoors in what would be their naturalistic environments, with viewing at many levels. It also has areas such as the Kids Zoo, Waterside Theatre, and Splash Island. It has one of the most taxonomically diverse collection of animals on display of any zoo; it is currently home to over 5,000 animals (including invertebrates and fish) representing over 500 species. The zoo is open every day of the year, except December 25.`,
    itinerary: `North/South Loop makes stops near the following attractions: <br>
Starting point: Yonge & Dundas Square<br> 
CN Tower <br>
Rogers Center<br> 
St. Lawrence Market <br>
Casa Loma <br>
Royal Ontario Museum <br>
Toronto Zoo`,
    cost: `From C$23 <br> Low Price Guarantee`,
    location: ` 2000 Meadowvale Rd, Toronto, ON M1B 5K7`,
    map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.8389932725036!2d-79.18807908482772!3d43.81769897911591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d9f1ad96dacd%3A0x9e197a60028bb5d8!2sToronto+Zoo!5e0!3m2!1sen!2sca!4v1532672818051" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>`,
    thingsToDo: `Take a walk through Indo-Malaya, home to tigers, orangutans, clouded leopards, greater one-horned rhinos and more! <br>Visit the African Rainforest Pavilion to see one of the largest reptiles in the world.<br>Explore the African Savanna, home to rhinos, hippos, giraffes, white lions and more! <br> Kids Zoo: learn, laugh and play with the little one. <br> Splash Island: our 2 acre splash pad, perfect for a cool down on hot summer days <br> Waterside Theatre: daily animal shows, free with Zoo admission.`,
    img: [
      "img/casa_loma_1.jpg",
      "img/casa_loma_1.jpg" // put all images here separated by comma
    ]
  },
  
   {
    id: 7, // needs to match with touristData.js information
    title: `Spadina Museum`,
    body: `The first house constructed on the site was built in 1818 by Dr. William Warren Baldwin. He named his 200-acre (0.81 km2) property and estate Spadina, which derived from the Ojibwe word espadinong, which translates as "hill" or "sudden rise of land". Baldwin himself designed the two storey wood frame house. The house burnt down in 1835, and owing to the three mile (5 km) trek from the estate into York, he moved to a house on Front Street. He built a smaller country estate on the property in 1836.In 1866 the property was acquired by James Austin, founder of The Dominion Bank and Consumers Gas. By this time, parts of the property had been sold off, and what Austin purchased covered 80 acres (320,000 m2). In the 19th and early 20th century the area was the wealthiest in Toronto, with a number of Toronto's leading families having large estates. Austin subdivided and sold off the land west of Spadina Road in 1889, which amounted to 40 acres (160,000 m2). In 1892, James Austin turned over the house, and 20 acres (81,000 m2) of the property to his son, Albert William Austin. Albert Austin expanded the house in several renovations, including the addition of a third floor in 1912. He sold much of the property to the City of Toronto in 1913 for the construction of the St. Clair Reservoir. Albert Austin died in 1933.`,
    itinerary: `North/South Loop makes stops near the following attractions: <br>
Starting point: Yonge & Dundas Square <br>
CN Tower <br>
Rogers Center<br> 
St. Lawrence Market <br>
Casa Loma<br>
Spadina Museum<br>
Royal Ontario Museum<br> 
Toronto Zoo`,
    cost: `Adult-$19.95 <br> Child(3-11)-$10.95 <br> Members-Free`,
    location: `285 Spadina Rd, Toronto, ON M5R 2V5`,
    map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.517991880339!2d-79.41033588483297!3d43.67899347912045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b349de3dc0091%3A0x39fd00050df6b378!2sSpadina+Museum!5e0!3m2!1sen!2sca!4v1532672866859" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>`,
    thingsToDo: `One can enjoy the beauty of nature as spadina has charms-Orchards,garden that fascinates the visitors.<br> Expert explain the artifacts ,furnishings and historical items in an engaging manner.<br> The tour begins with brief explanation of family Austin who were the owners.`,
    img: [
      "img/spadina1.JPG",
      "img/spadina2.jpg",
      "img/spadina3.jpg",
      "img/spadina4.jpg" // put all images here separated by comma
    ]
  },
  
   {
    id: 8, // needs to match with touristData.js information
    title: `Fort York`,
    body: `Fort York National Historic Site (NHS) was established on May 25, 1923, with the bulk of its property around the old fort. The NHS includes a parcel of land east of Bathurst Street, as well as St. John's Square / Victoria Memorial Square to the northeast. It operates as a museum of the City of Toronto, offering visitors a number of services year round. Each April, the site commemorates the US invasion of April 27, 1813, with walking tours, artillery and musket demonstrations, period cooking, and groups portraying units involved in the battle. During the summer months, the site comes alive with the colour and pageantry of the Fort York Guard, and is complimented with tours by professional his-torical interpreters. In the off-season, the fort is provides educational programs for tour groups in-cluding school, scout, guide, and day care groups.`,
    itinerary: `North/South Loop makes stops near the following attractions:<br> 
Starting point: Yonge & Dundas Square <br>
CN Tower <br>
Rogers Center<br> 
St. Lawrence Market<br> 
Fort York<br>
Casa Loma <br>
Spadina Museum<br>
Royal Ontario Museum<Br> 
Toronto Zoo`,
    cost: ` Adults-$6.00 <br> seniors / youth-$3.25 <br> children-$3.00. `,
    location: ` 250 Fort York Blvd, Toronto, ON M5V 3K9`,
    map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.515918393871!2d-79.40838128483452!3d43.637433379121845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b351f7ba3ff21%3A0xa74f569abc3fd61b!2sFort+York+National+Historic+Site!5e0!3m2!1sen!2sca!4v1532672910567" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>`,
    thingsToDo: `Visitors can see demonstrations by Fort York including: Artillery Firing,Music,Squard Drill and Battle tactics performances.<br> Visitors can also enjoy watching numerous special ceremonies throughout the summer like Victoria day,Canada day and Simcoe day.`,
    img: [
      "img/fort1.jpg",
      "img/fort2.jpg",
      "img/fort3.jpg",
      "img/fort4.jpg"// put all images here separated by comma
    ]
  },
  
   {
    id: 9, // needs to match with touristData.js information
    title: `Bluffers Beach`,
    body: `Bluffers Park Beach has a ton of facilities for every beach-goer. There is a marina, parkland, swimming, fishing, and picnic areas. In 2009, an 11 year-old boy reeled in a 35lb Chinook Salmon just off the beach! Bluffers Park was built by fill and bringing in sand to create a flat space at the bottom of the clay cliffs. These towering bluffs are loose and crumbly, so keep your eyes peeled for falling sand. If you put your ear right up to the wall of them you might be able to hear the sand and dirt moving and shifting inside. Bluffers Beach used to have some of the poorest water quality in Toronto. After a 2006 study by Lake Ontario Waterkeeper and investment from the City of Toronto, the water quality improved dramatically.
    Bluffers Beach is a Blue Flag beach. The Blue Flag is awarded to beaches and marinas that meet strict standards for water quality, environmental management and education, safety and services.`,
    itinerary: `North/South Loop makes stops near the following attractions: <br>
Starting point: Yonge & Dundas Square <br>
CN Tower <br>
Rogers Center<br> 
Bluffers Beach<br>
St. Lawrence Market<br> 
Casa Loma <br>
Royal Ontario Museum<br> 
Toronto Zoo`,
    cost: `Information about costs here`,
    location: `1 Brimley Road S, Scarborough, ON M1M 3W3`,
    map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.766052906404!2d-79.22717568483156!3d43.71541067911924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cfbc2309ead7%3A0xd2b62a45e8a611aa!2sBluffer&#39;s+Park+Beach!5e0!3m2!1sen!2sca!4v1532672973186" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>`,
    thingsToDo: `Put here what can we do there`,
    img: [
      "img/beach1.jpg",
      "img/beach2.jpg",
      "img/beach3.jpg",
      "img/beach4.jpg" // put all images here separated by comma
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
