import React from "react";
import "./homepage.css";
import world from "./img/world4.jpeg";
import chennai from "./img/chennai.jpeg";
import mumbai from "./img/mumbai.jpeg";
import delhi from "./img/delhi.jpeg";
import london from "./img/london.jpeg";
import dubai from "./img/dubai.jpeg";
import kerala from "./img/fkerala.jpeg";
import andaman from "./img/andaman.jpeg";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import FlightLand from "@mui/icons-material/FlightLand";
import { FlightTakeoff } from "@mui/icons-material";

const Homepage2 = () => {
  const explore = {
    height: "800px",
    //backgroundColor: "whitesmoke",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${world})`,
  };
  return (
    <>
      <div style={explore}>
        <center>
          <h1>Top Flight Routes</h1>
        </center>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            rowGap: "80px",
            marginLeft: "20%",
            marginTop: "6%",
            width: "1000px",
          }}
        >
          <div style={{ display: "flex" }}>
            <img
              src={chennai}
              style={{ width: "100px", height: "100px" }}
            ></img>
            <FlightTakeoff style={{ marginTop: "3.5%" }}></FlightTakeoff>
            <p
              style={{
                fontFamily: "cursive",
                fontSize: "20px",
                marginLeft: "2%",
                minWidth: "20ex",
              }}
            >
              Chennai To Mumbai
            </p>
            <img
              src={delhi}
              style={{ width: "100px", height: "100px", marginLeft: "50%" }}
            ></img>
            <FlightTakeoff style={{ marginTop: "3.5%" }}></FlightTakeoff>
            <p
              style={{
                fontFamily: "cursive",
                fontSize: "20px",
                marginLeft: "2%",
                minWidth: "20ex",
              }}
            >
              Agra To Mumbai
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <img src={dubai} style={{ width: "100px", height: "100px" }}></img>
            <FlightTakeoff style={{ marginTop: "3.5%" }}></FlightTakeoff>
            <p
              style={{
                fontFamily: "cursive",
                fontSize: "20px",
                marginLeft: "2%",
                minWidth: "20ex",
              }}
            >
              Delhi To Dubai
            </p>
            <img
              src={andaman}
              style={{ width: "100px", height: "100px", marginLeft: "50%" }}
            ></img>
            <FlightTakeoff style={{ marginTop: "3.5%" }}></FlightTakeoff>
            <p
              style={{
                fontFamily: "cursive",
                fontSize: "20px",
                minWidth: "20ex",
                marginLeft: "2%",
              }}
            >
              Mumbai To Andaman
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <img src={kerala} style={{ width: "100px", height: "100px" }}></img>
            <FlightTakeoff style={{ marginTop: "3.5%" }}></FlightTakeoff>
            <p
              style={{
                fontFamily: "cursive",
                fontSize: "20px",
                marginLeft: "2%",
                minWidth: "20ex",
              }}
            >
              Chennai To Kerala
            </p>
            <img
              src={london}
              style={{ width: "100px", height: "100px", marginLeft: "50%" }}
            ></img>
            <FlightTakeoff style={{ marginTop: "3.5%" }}></FlightTakeoff>
            <p
              style={{
                fontFamily: "cursive",
                fontSize: "20px",
                marginLeft: "2%",
                minWidth: "20ex",
              }}
            >
              Delhi To London
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage2;