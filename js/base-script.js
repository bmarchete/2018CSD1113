// generates header and nav
const headerLogged = email => {
  return `
    <div class="col">
            <p class="text-right">Hello <strong>${email}</strong></p>
    </div>

    <div class="col-auto">
        <p class="text-right">
                <button type="button" class="btn btn-danger" onclick="logout()">Logout</button>
        </p>
    </div>
`;
};

const headerNotLogged = () => {
  return `
    <div class="col">
        <div class="row">
            <div class="col">
                <form id="form-login">
                    <div class="form-row align-items-center">
                        <div class="col-5">
                            <input type="email" class="form-control" id="email" placeholder="Enter your email" required>
                        </div>
                        <div class="col-5">
                            <input type="password" class="form-control" id="password" placeholder="Enter your password" required>
                        </div>
                        <div class="col-2">
                            <button type="submit" class="btn btn-success">Sig-in</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div class="row mt-2">
            <div class="col">
                <p id="alert" class="text-danger text-right d-none">Your data is invalid</p>
                <a href="signup.html">
                    <p class="text-right">Don't you have an account? Sign up Here!</p>
                </a> 
            </div>

        </div>

    </div>
`;
};

const header = type => {
  const logo = `
    <div class="col-6">
        <img src="img/logo.png" alt="" style="width: 200px;">
    </div>`;

  const header = `
    <div class="row">
        ${logo}
        ${type()}

    </div>`;

  const nav = `
    <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
            <a class="nav-link" href="index.html">Home
                <span class="sr-only">(current)</span>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="tourist.html">Tourism</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="about.html">About</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="contact.html">Contact</a>
        </li>
    </ul>

`;

  const navEL = document.querySelector("#nav");
  const headerEl = document.querySelector("#header");

  navEL.innerHTML = nav;
  headerEl.innerHTML = header;
};

fillHeader = () => {
  const user = isLogged();

  if (user) {
    header(() => headerLogged(user));
  } else {
    header(headerNotLogged);

    const formLogin = document.querySelector("#form-login");

    formLogin.addEventListener("submit", () => {
      event.preventDefault();

      const alert = document.querySelector("#alert");
      const l = login(formLogin["email"].value, formLogin["password"].value);

      if (l) {
        header(() => headerLogged(formLogin["email"].value));
      } else {
        alert.classList.remove("d-none");
      }
    });
  }
};

login = (email, password) => {
  const data =
    (r = JSON.parse(localStorage.getItem("users"))) === null ? false : r;

  if (!data) return false;

  const user = (x = data.find(r => r.email == email && r.password == password))
    ? x
    : false;

  if (!user) return false;

  storeLogin(email);

  return true;
};

isLogged = () => {
  const r = JSON.parse(localStorage.getItem("isLogged"));
  return r === null ? false : r.email;
};

logout = () => {
  localStorage.removeItem("isLogged");
  window.location.href = "index.html";
};

storeLogin = email => {
  const isLogged = { email };
  localStorage.setItem("isLogged", JSON.stringify(isLogged));
};
