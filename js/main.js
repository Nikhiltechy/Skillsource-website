function saveComment() {
  const comment = document.getElementById('commentInput').value.trim();
  if (comment) {
    let comments = JSON.parse(localStorage.getItem('comments') || '[]');
    comments.push({ text: comment, date: new Date().toLocaleString() });
    localStorage.setItem('comments', JSON.stringify(comments));
    document.getElementById('commentInput').value = '';
    displayComments();
  }
}

function displayComments() {
  const comments = JSON.parse(localStorage.getItem('comments') || '[]');
  const container = document.getElementById('commentsDisplay');
  container.innerHTML = '';
  comments.forEach((c, i) => {
    container.innerHTML += `<p><strong>${c.date}:</strong> ${c.text}</p>`;
  });
}

window.onload = displayComments;



    function searchSite() {

    const input = document.getElementById("searchInput").value.toLowerCase();
        
    if (input.includes("python")) {
      window.location.href = "/../courses/pylessons/python.html";
    } else if (input.includes("tkinter")) {
      window.location.href = "/../courses/tklessons/tkinter.html";
    } else if (input.includes("markdown")) {
      window.location.href = "md.html";
    } else {
      alert("No matching course found.");
    }

  }