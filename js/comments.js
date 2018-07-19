newComment = (id, comment, name) => {
  const data =
    (r = JSON.parse(localStorage.getItem("comments"))) === null ? [] : r;

  const tourism = data.find(r => r.id == id);

  if (tourism) {
    tourism.comments.unshift({ name, comment });
  } else {
    const obj = {
      id,
      comments: [
        {
          name,
          comment
        }
      ]
    };

    data.push(obj);
  }

  localStorage.setItem("comments", JSON.stringify(data));
};

showComment = id => {
  const data =
    (r = JSON.parse(localStorage.getItem("comments"))) === null ? [] : r;

  const tourism = data.find(r => r.id == id) || false;

  const showComments = document.querySelector("#show-comments");

  const listComments = tourism
    ? tourism.comments
        .map(c => {
          return `  <li class="list-group-item d-flex justify-content-between align-items-center">
                ${c.comment} <span class="badge badge-primary badge-pill">by 
                ${c.name}</span>
              </li>`;
        })
        .join("")
    : "";

  showComments.innerHTML = listComments;
};
