const register = document.querySelector("#register");

register.addEventListener("submit", () => {
  event.preventDefault();

  let message = signUp(
    register["name"].value,
    register["email"].value,
    register["password"].value,
    register["cpassword"].value
  );

  if (message === "ok") {
    storeLogin(register["email"].value);
    window.location.href = "index.html";
  } else {
    const alert = document.querySelector("#alert");
    alert.innerHTML = message;
    alert.classList.remove("d-none");
  }
});

validPassword = (password, cpassword) => {
  return password === cpassword ? true : false;
};

signUp = (name, email, password, cpassword) => {
  if (!validPassword(password, cpassword)) {
    return "Passord and Confirm Password must be the same";
  }

  const data =
    (r = JSON.parse(localStorage.getItem("users"))) === null ? [] : r;

  if (data.length > 0) {
    const value = data.find(v => v.email === email);

    if (value) return "This email alread exists";
  }

  data.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(data));

  return "ok";
};
