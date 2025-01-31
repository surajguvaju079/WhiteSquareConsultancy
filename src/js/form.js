function submitForm(event) {
  const button = document.querySelector("form button");
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;
  const email = document.getElementById("email").value;
  if (!name || !message || !email) {
    button.innerHTML = "Please fill in all fields!";
    return;
  }
  console.log("Form submitted!");
  event.preventDefault();
  var templateParams = {
    name: name,
    message: message,
    reply_to: email,
  };
  emailjs.send("service_okpu1qt", "template_m3i8gav", templateParams).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
      button.innerHTML = "Message Sent!";
    },
    (error) => {
      console.log("FAILED...", error);
      button.innerHTML = "Error!";
    }
  );

  /* var templateParams = {
    name: "James",
    message: "Check this out!",
  }; */
}

/* emailjs.init({
  publicKey: "8VG0KHlM7K-IpQZTw",
  // Do not allow headless browsers
  blockHeadless: true,
  blockList: {
    // Block the suspended emails
    list: ["foo@emailjs.com", "bar@emailjs.com"],
    // The variable contains the email address
    watchVariable: "userEmail",
  },
  limitRate: {
    // Set the limit rate for the application
    id: "app",
    // Allow 1 request per 10s
    throttle: 10000,
  },
});

emailjs.send("service_okpu1qt", "template_p46o1wk", templateParams).then(
  (response) => {
    console.log("SUCCESS!", response.status, response.text);
  },
  (error) => {
    console.log("FAILED...", error);
  }
);

var templateParams = {
  name: "James",
  notes: "Check this out!",
};
 */
/* emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", "#contact").then(
  (response) => {
    console.log("SUCCESS!", response.status, response.text);
  },
  (error) => {
    console.log("FAILED...", error);
  }
);
 */
