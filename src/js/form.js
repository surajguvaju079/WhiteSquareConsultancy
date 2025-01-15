document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(this);
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };
  fetch("https://example.com/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      alert("Email sent successfully!");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
