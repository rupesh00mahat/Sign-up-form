import { useEffect, useState } from "react";
import "./app.css";

import Form from "./form";

function App() {
  const [image, getImage] = useState("");
  useEffect(() => {
    async function getPhoto() {
      const response = await fetch(
        "https://api.unsplash.com/photos/random?query=landscape&client_id=IUxVPek6JUrAO4DIg-AlJ1WYrMZjyhFCPxWtFbHKFzs"
      );
      const photos = await response.json();
      console.log(photos);
      getImage(photos.urls.full);
    }
    const handleResize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        getPhoto();
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="body">
      <h2>Registration form</h2>
      <h3>for travel agency</h3>
      <div id="register-form">
        <Form />
        <div className="form-image">
          <img src={image} />
        </div>
      </div>
    </div>
  );
}

export default App;
