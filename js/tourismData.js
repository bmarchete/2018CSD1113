const tourismThumb = [
  {
    id: 1,
    title: "Goodheram Building",
    body: `The Gooderham Building, also known as the Flatiron Building, is a historic office building at 49 Wellington Street East in Toronto, Ontario, Canada. It is located on the eastern edge of the city's Financial District (east of Yonge Street) in the St. Lawrence neighbourhood, wedged between Front Street and Wellington Street, where they join up to form a triangular intersection.`,
    img: "img/Gooderham1.jpg"
  },
  {
    id: 2,
    title: "Royal Ontario Museum",
    body: `The Royal Ontario Museum (ROM, French: Musée royal de l'Ontario) is a museum of art, world culture and natural history in Toronto, Ontario, Canada. It is one of the largest museums in North America, and the largest in Canada. It attracts more than one million visitors every year, making the ROM the most visited museum in Canada.`,
    img: "img/royal ontariomuseum.jpg"
  },
  {
    id: 3,
    title: "Ripley aquarium",
    body: `Ripley’s aquarium ,Canada is a public aquarium in Toronto,Ontario,canada. The aquarium is one of three aquariums owned and operated byripley entertainment. It is located in downtown,toronto, just southeast of the CN tower. The aquarium has 5.7 million litres (1.5 million gallons) of marine and freshwater habitats from across the world. `,
    img: "img/ripley2.jpg"
  },
  {
    id: 4,
    title: "Casa Loma",
    body: `Casa Loma (Spanish for "Hill House") is a Gothic Revival style mansion and garden in midtown Toronto, Ontario, Canada, that is now a historic house museum and landmark. It was constructed from 1911 to 1914 as a residence for financier Sir Henry Pellatt. This attractive palace has borne witness to a century-long history of romance, ambition, mystery and passion.`,
    img: "img/casa_loma_1.jpg"
  },
  {
    id: 5,
    title: "CN Tower",
    body: `The CN Tower is a 553.3 m-high (1,815.3 ft) concrete communications and observation tower located in Downtown Toronto, Ontario, Canada.Built on the former Railway Lands, it was completed in 1976. Its name "CN" originally referred to Canadian National, the railway company that built the tower. Following the railway's decision to divest non-core freight railway assets prior to the company's privatization in 1995, it transferred the tower to the Canada Lands Company, a federal Crown corporation responsible for real estate development.`,
    img: "img/cn-tower.jpg"
  },
  {
    id: 6,
    title: "Toronto Zoo",
    body: `The Toronto Zoo is a living centre for education and science, committed to provide compelling guest experiences and inspiring passion to protect wildlife and habitats. Encompassing 287 hectares (710 acres), the Toronto Zoo is the largest zoo in Canada. It is divided into seven zoogeographic regions: Indo-Malaya, Africa, Americas, Tundra Trek, Australasia, Eurasia, and the Canadian Domain. `,
    img: "img/toronto_zoo.jpg"
  },
  {
    id: 7,
    title: "Spadina Museum",
    body: `Spadina Museum: Historic House & Gardens, sometimes called Spadina House, is a historic mansion on Spadina Road in Toronto,that is now a museum operated by the City of Toronto's Economic Development & Culture division. The museum preserves the house much as it existed and developed historically. The art, decor and architecture of the house used to reflect the contemporary styles of the 1860s through the 1930s, including Victorian, Edwardian, Art Deco. `,
    img: "img/spadina museum1.jpg"
  },
  {
    id: 8,
    title: "Fort York",
    body: `Fort York is a 43-acre national historic site located in the heart of downtown Toronto. Referred to as Toronto’s founding landscape, Fort York National Historic Site is also a Heritage Conservation District, a registered archaeological site, and home to Canada’s largest collection of original War of 1812 buildings.`,
    img: "img/fortyork.jpg"
  },
  {
    id: 9,
    title: "Bluffers Beach",
    body: `Bluffer's Park was designed to improve public access to the base of the Scarborough Bluffs. It can be accessed by Brimley Road. The park features a sandy beach, picnic areas, walks, lookouts, a boat launch and visitors dockage.Originally owned by the Borough of Scarborough, the mainland at the base of the bluffs was transferred to the Metropolitan Toronto and Region Conservation Authority in May 1960 as part of the Waterfront Plan for Metro. `,
    img: "img/bluffer.jpg"
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
