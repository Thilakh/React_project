import React from "react";
import Top from "./Top";
import sky from "./img/sky.jpg";
//import Gif from "./img/cloudgif.gif";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import * as Components from "../Components";
// //import Image from "./img/Flight.jpg";
// import SearchIcon from "@mui/icons-material/Search";
// import { Search } from "@mui/icons-material";

import styles from "./homepage.css";
import Homepage2 from "./Homepage2.jsx";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./homepage.css";
import Footer from "./Footer";
import { Button } from "@mui/material";
import Homepage3 from "./Homepage3";
import SyncAlt from "@mui/icons-material/SyncAlt";
import { SyncAltRounded } from "@mui/icons-material";
import Homepage4 from "./Homepage4";
import { useNavigate } from "react-router-dom";

const containerStyle = {
  backgroundImage: `url(${sky})`,
  backgroundSize: "cover",
  backgroundColor: "lightblue",
  //background:"linear-gradient(to bottom, Transparente 0%,Transparente 50%,red 50%,red 100%)",
  backgroundPosition: "center",
  minHeight: "70vh",
  display: "flex",
  flexDirection: "column",
};
const search = {
  height: "260px",
  width: "1200px",
  marginLeft: "20%",
  marginTop: "3%",
  borderRadius: "10px",
  backgroundColor: "white",
};

const Homepage = () => {
  const [from, setfrom] = React.useState("");
  const handleChange = (event) => {
    setfrom(event.target.value);
  };
  let nav = useNavigate();
  const tickets = () =>
  {
    let path = `/tickets`;
    nav(path);

  }
  return (
    <>
      <Top />

      <div style={containerStyle}>
        <center>
          <h1 style={{ fontFamily: "cursive", fontSize: "60px" }}>Easy Fly</h1>
          <h5>Your Destination is Just a Few Clicks Away</h5>
        </center>
        <div style={search}>
          {/* <input type='radio'style={{marginTop:'70px',marginLeft:'8%'}}></input>
        <input type='radio'style={{marginTop:'70px',marginLeft:'10%'}}></input> */}

          <div
            style={{
              marginTop: "5%",
              position: "absolute",
              marginLeft: "3%",
              width: "30px",
            }}
          >
            <FormControl>
              <InputLabel id="demo-simple-select-label">FROM</InputLabel>
              <Select
                style={{ width: "250px", height: "70px" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                //value={age}
                label="FROM"
                onChange={handleChange}
              >
                <MenuItem value={10} style={{ fontFamily: "cursive" }}>
                  MUMBAI
                </MenuItem>
                <MenuItem value={20} style={{ fontFamily: "cursive" }}>
                  CHENNAI
                </MenuItem>
                <MenuItem value={30} style={{ fontFamily: "cursive" }}>
                  BANGALORE
                </MenuItem>
                <MenuItem value={40} style={{ fontFamily: "cursive" }}>
                  DELHI
                </MenuItem>
                <MenuItem value={50} style={{ fontFamily: "cursive" }}>
                  HYDERABAD
                </MenuItem>
                <MenuItem value={60} style={{ fontFamily: "cursive" }}>
                  AGRA
                </MenuItem>
                <MenuItem value={70} style={{ fontFamily: "cursive" }}>
                  COIMBATORE
                </MenuItem>
                <MenuItem value={80} style={{ fontFamily: "cursive" }}>
                  KOCHI
                </MenuItem>
                <MenuItem value={90} style={{ fontFamily: "cursive" }}>
                  TRIVANDRUM
                </MenuItem>
              </Select>
            </FormControl>
          </div>
          <div
            style={{
              marginTop: "5%",
              position: "absolute",
              marginLeft: "19%",
              width: "30px",
            }}
          >
            <FormControl>
              <InputLabel id="demo-simple-select-label">TO</InputLabel>
              <Select
                style={{ width: "250px", height: "70px" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                //value={age}
                label="TO"
                onChange={handleChange}
              >
                <MenuItem value={10} style={{ fontFamily: "cursive" }}>
                  MUMBAI
                </MenuItem>
                <MenuItem value={20} style={{ fontFamily: "cursive" }}>
                  CHENNAI
                </MenuItem>
                <MenuItem value={30} style={{ fontFamily: "cursive" }}>
                  BANGALORE
                </MenuItem>
                <MenuItem value={40} style={{ fontFamily: "cursive" }}>
                  DELHI
                </MenuItem>
                <MenuItem value={50} style={{ fontFamily: "cursive" }}>
                  HYDERABAD
                </MenuItem>
                <MenuItem value={60} style={{ fontFamily: "cursive" }}>
                  AGRA
                </MenuItem>
                <MenuItem value={70} style={{ fontFamily: "cursive" }}>
                  COIMBATORE
                </MenuItem>
                <MenuItem value={80} style={{ fontFamily: "cursive" }}>
                  KOCHI
                </MenuItem>
                <MenuItem value={90} style={{ fontFamily: "cursive" }}>
                  TRIVANDRUM
                </MenuItem>
              </Select>
            </FormControl>
          </div>
          <div>
            <input
              type="date"
              placeholder="Departure"
              style={{
                position: "absolute",
                marginTop: "5%",
                width: "200px",
                marginLeft: "37%",
                height: "65px",
                fontSize: "20px",
              }}
            ></input>
          </div>
          <div>
            {/* <input
              type="date"
              placeholder="return"
              style={{
                position: "absolute",
                marginTop: "5%",
                width: "200px",
                marginLeft: "45%",
                height: "65px",
                fontSize: "20px",
              }}
            ></input> */}
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              style={{
                borderRadius: "20px",
                color: "white",
                backgroundColor: "lightblue",
                marginTop: "12%",
                height: "70px",
                width: "200px",
                fontFamily: "revert-layer",
                fontSize: "3ex",
                color: "black",
                position: "absolute",
              }}
              onClick={tickets}
            >
              Search
            </Button>
          </div>
        </div>
      </div>
      <Homepage2></Homepage2>
      <Homepage3></Homepage3>
      <Homepage4></Homepage4>
      <Footer />
    </>
  );
};

export default Homepage;