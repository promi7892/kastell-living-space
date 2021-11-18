import React from "react";
import { Col, Row } from "react-bootstrap";
import "./ABout.css";
import img1 from "../../Images/Cataory/4.jpg";
import Footer from "../Home/Footer/Footer";

const About = () => {
  return (
    <>
      <div className="container w-75">
        <div className="text-center mx-auto col-12">
          <h1 className="title my-3 ">Why Choose Kastlle Home??</h1>
          <p>
            Serving renters and property owners nationwide Kastlle Home is the
            leading online apartment listing website, offering renters access to
            information on more than 1,000,000 available units for rent. Powered
            by CoStar, the Kastlle Home network of sites includes Kastlle Home,
            ApartmentFinder.com, ApartmentHomeLiving.com, Apartamentos.com,
            WestsideRentals.com, ForRent.com, ForRentUniversity.com, After55.com
            and CorporateHousing.com. Kastlle Home is supported by the
            industry's largest professional research team, which has visited and
            photographed over 500,000 properties nationwide. The team makes over
            one million calls each month to apartment owners and property
            managers, collecting and verifying current availabilities, rental
            rates, pet policies, fees, leasing incentives, concessions, and
            more. Kastlle Home offers more rental listings than any other
            apartments website, and innovative features including a drawing tool
            that allows users to define their own search areas on a map, and a
            "Travel Time" feature that lets users search for rentals in
            proximity to a specific address. Kastlle Home creates easy access to
            its listings through a responsive website and iOS and Android apps,
            and provides unmatched exposure for its advertisers through an
            intuitive name, strategic search engine placements and innovative
            emerging media. The Kastlle Home network reaches millions of renters
            nationwide, driving both qualified traffic and highly engaged
            renters to leasing offices.
          </p>
        </div>
        <Row>
          <Col>
            <div className="about-us border-start ">
              <h3 className=" fw-bold my-3 px-2 bg-light text-light">
                Our Aspirations
              </h3>
              <p className="px-3">
                Real estate isn’t an easy job. No weekends, late nights, early
                mornings … and the vacations … do you even recognize that word?
                The payoff is you get to spend your days helping people make
                their dreams come true.
              </p>
              <blockquote className="fst-italic w-75 mx-auto ">
                “Real estate sales was perfect training for the experience to go
                into public life because you learn to accept rejection, learn to
                meet new people, learn to work with people, and find common
                ground. That's the way you sell houses ... that's also the way
                you win over constituency.” -Johnny Isakson
              </blockquote>
            </div>
          </Col>
          <Col>
            <img src={img1} className=" about-image" alt="" srcset="" />
          </Col>
        </Row>
        <div>
          <h3 className="fw-bold text-left bg-light text-light">Ownership</h3>
          <p>
            Ownership Founded in 1987, CoStar Group, Inc. (Nasdaq: CSGP) is the
            leading provider of commercial real estate information, analytics,
            and online marketplaces. Our suite of online services enables
            clients to analyze, interpret and gain unmatched insight on
            commercial property values, market conditions and current
            availability. CoStar Group is behind some of the most well-known
            brands in the commercial real estate industry, including CoStar, the
            largest provider of CRE research and real-time data; LoopNet, the
            most heavily trafficked mobile and online real estate marketplace;
            Apartments.com, the premier rental home resource for renters,
            property managers and owners; STR, the leading provider of
            performance benchmarking and comparative analytics to the hotel
            industry; BizBuySell, the largest online marketplace for
            businesses-for-sales; and Land.com, the leading operator of online
            marketplaces for rural real estate. Headquartered in Washington, DC,
            CoStar Group maintains offices throughout the U.S. and in Europe,
            Canada, and Asia.
          </p>
        </div>
      </div>
      <Footer className="container-fluid"></Footer>
    </>
  );
};

export default About;
