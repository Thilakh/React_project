import React from "react";
import "./homepage.css";

import { Paper } from "@mui/material";
import booking from "./img/easybooking.jpeg";
import price from "./img/lowprice.jpeg";
import service from "./img/2471.jpeg";
import deals from "./img/deals.jpeg";
const Homepage4 = () => {
  return (
    <>
      <center>
        <h2 style={{ fontFamily: "initial", fontSize: "40px" }}>
          Why book with us?
        </h2>
      </center>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div className="box">
          <center>
            {" "}
            <div
              style={{
                backgroundImage: `url(${booking})`,
                backgroundSize: "80px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                marginTop: "3%",
                height: "80px",
              }}
            ></div>
          </center>
          <div>
            <center>
              <h3>Easy Booking</h3>
              <p style={{ fontSize: "14px" }}>
                We offer easy and convenient flight bookings with attractive
                offers
              </p>
            </center>
          </div>
        </div>
        <div className="box">
          <div
            style={{
              backgroundImage: `url(${price})`,
              height: "80px",
              backgroundSize: "80px",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
          <div>
            <center>
              <h3>Lowest Price</h3>
              <p style={{ fontSize: "14px" }}>
                We ensure low rates on hotel reservation, holiday packages and
                on flight tickets.
              </p>
            </center>
          </div>
        </div>
        <div className="box">
          <div
            style={{
              backgroundImage: `url(${deals})`,
              marginTop: "8px",
              backgroundSize: "60px",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "29%",
            }}
          ></div>
          <div>
            <center>
              <h3>Exciting Deals</h3>
              <p style={{ fontSize: "14px" }}>
                Enjoy exciting deals on flights, hotels, buses, car rental and
                tour packages.
              </p>
            </center>
          </div>
        </div>
        <div className="box">
          <div
            style={{
              backgroundImage: `url(${service})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "80px",
              marginTop: "8px",
              height: "29%",
            }}
          ></div>
          <center>
            <div>
              <h3>24/7 Service</h3>
              <p style={{ fontSize: "14px" }}>
                Get assistance 24/7 on any kind of travel related query. We are
                happy to assist you.
              </p>
            </div>
          </center>
        </div>
      </div>
    </>
  );
};

export default Homepage4;