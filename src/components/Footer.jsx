import React from "react";
import Fimage from "./img/Flight.jpg";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { RightOverlayPanel } from "../Components";
const Footer = () => {
  return (
    <>
      <div
        style={{
          height: "400px",
          marginTop: "100px",
        }}
      >
        <center>
          <h2>Search Flights, Hotels, Bus and Holiday Packages</h2>
        </center>
        <p style={{ marginTop: "5%" }}>
          Flyfast is one of the largest online travel platforms in India, and a
          trusted name in the Indian travel industry. We offer "end to end"
          travel solutions including air tickets, hotel booking, cab and bus
          booking, train tickets and holiday packages. Additionally, we offer
          ancillary value-added services. We understand that planning a trip can
          be overwhelming, so we have simplified the process to make it easy for
          you to find the perfect travel deals that suit your needs. Our website
          is user-friendly and provides a wide range of options to choose from.
          Whether you're planning a family vacation, a solo adventure, or a
          business trip, we have you covered with our comprehensive travel
          packages. From flights to hotels, car rentals to holiday packages, we
          offer everything you need to make your trip a success. We believe in
          transparency and honesty in all our dealings. We do not charge any
          hidden fees, and our prices are always competitive. With EaseMyTrip,
          you can be assured of getting the best travel deals in the market. If
          you're looking for a hassle-free and affordable way to plan your next
          trip, look no further than EaseMyTrip. We promise to make your travel
          experience a memorable one.
        </p>
        <vr></vr>
      </div>
      {/* <hr style={{ height: "20px", backgroundColor: "blue" }}></hr> */}

      <div
        style={{
          backgroundColor: "darkgrey",
          height: "400px",
          display: "flex",
        }}
      >
        <div style={{ display: "flex" }}>
          <p>
            About Easyfly Launched in 2007, Easyfly is a technology company
            focused on empowering Indian travellers to plan, book and manage
            their trips across rail, air, buses and hotels. We assist travellers
            in making smarter travel decisions by leveraging artificial
            intelligence, machine learning, and data science led innovations on
            our OTA platforms, comprising our websites and mobile applications.
            Our vision is to become the most customer-centric travel company, by
            offering the best customer experience to our users. 
            Explore our website today.
          </p>
          <hr style={{ width: "10px" }}></hr>
          <p>
            {" "}
            contact us Our vision is to become the most customer-centric travel
            company, by offering the best customer experience to our users. Our
            focus on travel utility and customer experience for travellers in
            the 'next billion user' segment is driven by technology,
            cost-efficiency and our culture of innovation has made us India's
            leading travel ecosystem for the 'next billion users'. 
          </p>
          <hr></hr>
          <p>
            Our vision is to become the most customer-centric travel company, by
            offering the best customer experience to our users.
          </p>
        </div>
      </div>
      <div style={{ backgroundColor: "darkgrey" }}>
        <h4>Follow Us On</h4>
        <a href="https://www.facebook.com/" target="_blank">
          <Facebook></Facebook>
        </a>
        <a href="https://www.instagram.com/?hl=en" target="_blank">
          <Instagram></Instagram>
        </a>
        <a href="https://twitter.com/?lang=en-in" target="_blank">
          <Twitter></Twitter>
        </a>
      </div>
    </>
  );
};

export default Footer;