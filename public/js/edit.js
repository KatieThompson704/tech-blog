const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#blog-title").value.trim();

  const content = document.querySelector("#blog-content").value.trim();

  if (title && content) {
    const response = await fetch(`/api/blogs/:id`, {
      method: "PUT",
      body: JSON.stringify({ title, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create new blog post");
    }
  }
};

function editPost() {
  document.location.replace("/edit/blogs");
}

document.querySelector("#edit").addEventListener("click", editPost);
