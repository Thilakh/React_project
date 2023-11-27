import { Avatar, Stack } from "@mui/material";
import React from "react";
import kerala from "./img/fkerala.jpeg";
import andaman from "./img/andaman.jpeg";
import bengaluru from "./img/bengaluru.jpeg";
import paris from "./img/paris.jpeg";
import leh from "./img/leh.jpeg";
import bali from "./img/fbali.jpeg";
import kashmir from "./img/kashmir.jpeg";
import london from "./img/london.jpeg";
import dubai from "./img/dubai.jpeg";
import jaipur from "./img/jaipur.jpeg";
const Homepage3 = () => {
  return (
    <>
      <div
        style={{
          justifyContent: "center",
          minHeight: "40px",
          display: "flex",
          fontSize: "25px",
        }}
      >
        <h2>Famous Tourist Attraction</h2>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          justifyContent: "space-evenly",
          marginTop: "2%",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${kerala})`,
            backgroundPosition: "center",
            height: "100px",
            width: "100px",
            borderRadius: "50%",
          }}
        ></div>
        <div
          style={{
            backgroundImage: `url(${andaman})`,
            backgroundPosition: "center",
            height: "100px",
            width: "100px",
            borderRadius: "50%",
          }}
        ></div>
        <div
          style={{
            backgroundImage: `url(${bengaluru})`,
            backgroundPosition: "center",
            height: "100px",
            width: "100px",
            borderRadius: "50%",
          }}
        ></div>
        <div
          style={{
            backgroundImage: `url(${paris})`,
            backgroundPosition: "center",
            height: "100px",
            width: "100px",
            borderRadius: "50%",
          }}
        ></div>
        <div
          style={{
            backgroundImage: `url(${dubai})`,
            backgroundPosition: "center",
            height: "100px",
            width: "100px",
            borderRadius: "50%",
          }}
        ></div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <h5>Kerala</h5>
        <h5>Andaman</h5>
        <h5>Bengaluru</h5>
        <h5>Paris</h5>
        <h5>Dubai</h5>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          justifyContent: "space-evenly",
          marginTop: "5%",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${leh})`,
            backgroundPosition: "center",
            height: "100px",
            width: "100px",
            borderRadius: "50%",
          }}
        ></div>
        <div
          style={{
            backgroundImage: `url(${bali})`,
            backgroundPosition: "center",
            height: "100px",
            width: "100px",
            borderRadius: "50%",
          }}
        ></div>
        <div
          style={{
            backgroundImage: `url(${kashmir})`,
            backgroundPosition: "center",
            height: "100px",
            width: "100px",
            borderRadius: "50%",
          }}
        ></div>
        <div
          style={{
            backgroundImage: `url(${london})`,
            backgroundPosition: "center",
            height: "100px",
            width: "100px",
            borderRadius: "50%",
          }}
        ></div>
        <div
          style={{
            backgroundImage: `url(${jaipur})`,
            backgroundPosition: "center",
            height: "100px",
            width: "100px",
            borderRadius: "50%",
          }}
        ></div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <h5>Leh</h5>
        <h5>Bali</h5>
        <h5>Kashmir</h5>
        <h5>London</h5>
        <h5>Jaipur</h5>
      </div>
    </>
  );
};

export default Homepage3;