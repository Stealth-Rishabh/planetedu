import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import part1 from "../assets/images/logo11.webp";
import part2 from "../assets/images/logo12.webp";
import part3 from "../assets/images/logo13new.webp";
import part6 from "../assets/images/logo14.webp";
import part7 from "../assets/images/logo15.webp";
import part8 from "../assets/images/logo16new.webp";
import part4 from "../assets/images/logo17.webp";
import part5 from "../assets/images/logo18.webp";
import part9 from "../assets/images/logo19new.webp";
import part10 from "../assets/images/logo20.webp";
import part11 from "../assets/images/logo21.webp";
import partRight from "../assets/images/partnerlogoright.webp";
const Partners = () => {
  const Partners = styled.section`
    width: 100%;
    .customcenter {
      justify-content: center;
      align-items: center;
    }
    .card-background {
      background-size: cover;
      background-position: center;
      transition: transform 0.3s ease;
      position: relative;
      overflow: hidden;
    }
    .card-background:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
    .card-background::after {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        120deg,
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.1)
      );
      transition: left 0.5s;
    }
    .card-background:hover::after {
      left: 100%;
    }
    h3 {
      font-size: 40px;
      font-weight: 700;
    }
    .logimg-div {
      background-color: #eef1f3;
      width: 250px;
      height: 80px;
      display: flex;
      img {
        margin: auto;
        width: 20vw !important;
      }
    }
    .p5Cont {
      width: 250px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .part5 {
      font-size: 20px;
      display: flex;
      margin: 10px 0;
    }
    .btm-red {
      border-bottom: 3.5px solid red;
    }
    .customWidth {
      max-width: 105%;
    }
    @media (max-width: 450px) {
      .removeMobile {
        display: none !important;
      }
      .card-background:hover {
        transform: initial;
      }
      h3 {
        font-size: 24px;
        font-weight: 700;
      }
      .logimg-div {
        width: 195px;
        img {
          max-width: 106px !important;
        }
      }
      .p5Cont {
        width: 195px;
      }
      .part5 {
        font-size: 16px;
      }
    }
    @media (min-width: 450px) and (max-width: 768px) {
      .removeMobile {
        display: none !important;
      }
      h3 {
        font-size: 24px;
        font-weight: 700;
      }
      .logimg-div {
        img {
          max-width: 120px !important;
        }
      }
    }
    @media (width: 768px) {
      .removeMobile {
        display: none !important;
      }
      .customCenter {
        justify-content: center !important;
      }
    }
    @media (min-width: 768px) and (max-width: 992px) {
      .customWidth {
        max-width: 116%;
      }
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      .logimg-div {
        width: 195px;
        img {
          max-width: 106px !important;
        }
      }
      h3 {
        font-size: 28px;
        font-weight: 700;
      }
    }
    @media (min-width: 992px) and (max-width: 1024px) {
      .logimg-div {
        img {
          max-width: 120px !important;
        }
      }
    }
    @media (min-width: 1024px) and (max-width: 1440px) {
      h3 {
        font-size: 28px;
        font-weight: 700;
      }
      .logimg-div {
        img {
          max-width: 156px !important;
        }
      }
    }
  `;
  return (
    <Partners>
      <Container className="my-4">
        <Row className="customCenter">
          <Col
            md={7}
            className="d-flex align-items-center justify-content-center flex-column"
          >
            <h3 className="text-start">
              <span className="btm-red">Top</span> Universities
            </h3>
            <div className="d-flex flex-column align-items-start mt-3 w-100">
              <div className=" d-flex justify-content-center align-items-center w-100 mb-3">
                <div className="logimg-div me-3 card-background">
                  <img
                    src={part1}
                    alt="La Trobe University"
                    className="img-fluid"
                    style={{ maxWidth: "200px" }}
                  />
                </div>
                <div className="logimg-div me-3 card-background">
                  <img
                    src={part2}
                    alt="La Trobe University"
                    className="img-fluid"
                    style={{ maxWidth: "200px" }}
                  />
                </div>
                <div className="logimg-div card-background">
                  <img
                    src={part3}
                    alt="Deakin University"
                    className="img-fluid"
                    style={{ maxWidth: "200px" }}
                  />
                </div>
              </div>
              <div className=" d-flex justify-content-center align-items-center w-100 mb-3">
                <div className="logimg-div me-3 card-background">
                  <img
                    src={part4}
                    alt="Deakin University"
                    className="img-fluid"
                    style={{ maxWidth: "200px" }}
                  />
                </div>
                <div className="logimg-div me-3 card-background">
                  <img
                    src={part5}
                    alt="Deakin University"
                    className="img-fluid"
                    style={{ maxWidth: "200px" }}
                  />
                </div>
                <div className="logimg-div card-background">
                  <img
                    src={part6}
                    alt="Deakin University"
                    className="img-fluid"
                    style={{ maxWidth: "200px" }}
                  />
                </div>
              </div>
              <div className=" d-flex justify-content-center align-items-center w-100 mb-3">
                <div className="logimg-div me-3 card-background">
                  <img
                    src={part7}
                    alt="Deakin University"
                    className="img-fluid"
                    style={{ maxWidth: "200px" }}
                  />
                </div>
                <div className="logimg-div me-3 card-background">
                  <img
                    src={part8}
                    alt="Deakin University"
                    className="img-fluid"
                    style={{ maxWidth: "200px" }}
                  />
                </div>

                <div className="logimg-div card-background">
                  <img
                    src={part9}
                    alt="Deakin University"
                    className="img-fluid"
                    style={{ maxWidth: "200px" }}
                  />
                </div>
              </div>
              <div className=" d-flex justify-content-center align-items-center w-100">
                <div className="logimg-div me-3 card-background">
                  <img
                    src={part10}
                    alt="Deakin University"
                    className="img-fluid"
                    style={{ maxWidth: "200px" }}
                  />
                </div>
                <div className="logimg-div me-3 card-background">
                  <img
                    src={part11}
                    alt="Deakin University"
                    className="img-fluid"
                    style={{ maxWidth: "200px" }}
                  />
                </div>
                <div className="logimg-div card-background customcenter">
                  {/* <img
                    src={part7}
                    alt="Deakin University"
                    className="img-fluid"
                    style={{ maxWidth: "200px" }}
                  /> */}
                  <h5>
                    <span className="part5">& many more...</span>
                  </h5>
                </div>
              </div>
            </div>
            {/* <h5>
              <span className="part5">& many more..</span>
            </h5> */}
          </Col>
          <Col
            md={5}
            className="d-flex align-items-center justify-content-center removeMobile custom768"
          >
            <div className="text-center">
              <img
                src={partRight}
                alt="Student"
                className="img-fluid customWidth "
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Partners>
  );
};

export default Partners;
