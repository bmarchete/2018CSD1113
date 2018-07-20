// generates header and nav

header = () => {
  const header = ` 
<div class="row">
    <div class="col">
        <img src="img/logo-mock.png" alt="" style="width: 200px;">
    </div>
    <div class="col">
        <div class="row">
            <div class="col">
                <form>
                    <div class="form-row align-items-center">
                        <div class="col-5">
                            <input type="text" class="form-control" id="email" placeholder="Enter your email">
                        </div>
                        <div class="col-5">
                            <input type="password" class="form-control" id="password" placeholder="Enter your password">
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
                <a href="signup.html">
                    <p class="text-right">Don't you have an account? Sign up Here!</p>
                </a> <small onclick="logout()">Logout</small>
            </div>

        </div>

    </div>
</div>`;

  const nav = `

<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03"
    aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarColor03">
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
            <a class="nav-link" href="contact">Contact</a>
        </li>
    </ul>

</div>`;

  const navEL = document.querySelector("#nav");
  const headerEl = document.querySelector("#header");

  navEL.innerHTML = nav;
  headerEl.innerHTML = header;
};

login = (email, password) => {
  const data =
    (r = JSON.parse(localStorage.getItem("users"))) === null ? false : r;

  if (!data) return false;

  const user = (x = data.find(r => r.email == email && r.password == password))
    ? x
    : false;

  if (!user) return false;

  localStorage.setItem("isLogged", "true");

  return true;
};

isLogged = () => {
  const r = JSON.parse(localStorage.getItem("isLogged"));
  return r === null ? false : true;
};

logout = () => {
  localStorage.removeItem("isLogged");
  window.location.href = "index.html";
};
