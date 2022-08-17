import React from "react";
import { useState } from "react";
import "./Myworkproject3.css";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
export default function Myworkproject3() {
  const nonDekstop = useMediaQuery({ query: "(max-width:1254px)" });
  const dekstop = useMediaQuery({ query: "(min-width:1254px)" });
  let [searchStyle, setSearchStyle] = useState({
    position: "absolute",
    height: "132px",
    borderRadius: "17px",
    width: "130px",
    transition: "opacity 0.3s ease-in-out",
    opacity: 0,
  });
  const searchEnter = () => {
    setSearchStyle({
      position: "absolute",
      height: "132px",
      borderRadius: "17px",
      width: "130px",
      opacity: 1,
      transition: "opacity 0.3s ease-in-out",
    });
  };
  const searchLeave = () => {
    setSearchStyle({
      position: "absolute",
      height: "132px",
      borderRadius: "17px",
      width: "130px",
      transition: "opacity 0.3s ease-in-out",
      opacity: 0,
    });
  };
  let [imgStyle, setImgStyle] = useState({
    height: "199px",
    borderRadius: "17px",
    width: "25.1302vw",
    transition: "opacity 0.3s ease-in-out",

    //371
  });
  let [imgStyle2, setImgStyle2] = useState({
    height: "270px",
    borderRadius: "17px",
    width: "93.13vw",
    transition: "opacity 0.3s ease-in-out",

    //371
  });
  const imgEnter = () => {
    setImgStyle({
      height: "199px",
      borderRadius: "17px",
      transition: "opacity 0.3s ease-in-out",
      width: "25.1302vw",
      opacity: 0.4,
    });
  };
  const imgLeave = () => {
    setImgStyle({
      height: "199px",
      transition: "opacity 0.3s ease-in-out",
      borderRadius: "17px",
      width: "25.1302vw",
    });
  };
  const enterWrapper = () => {
    imgEnter();
    searchEnter();
  };
  const leaveWrapper = () => {
    imgLeave();
    searchLeave();
  };
  const imgEnter2 = () => {
    setImgStyle2({
      height: "270px",
      borderRadius: "17px",
      transition: "opacity 0.3s ease-in-out",
      width: "93.13vw",
      opacity: 0.4,
    });
  };
  const imgLeave2 = () => {
    setImgStyle2({
      height: "270px",
      transition: "opacity 0.3s ease-in-out",
      borderRadius: "17px",
      width: "93.13vw",
    });
  };
  const enterWrapper2 = () => {
    imgEnter2();
    searchEnter();
  };
  const leaveWrapper2 = () => {
    imgLeave2();
    searchLeave();
  };
  const workScroll = ()=>{
    window.scrollTo({
      top:0,
      left:0,
      behavior:"auto"
    });
  };
  return (
    <>
      {dekstop && (
        <Link
          to="/work3"
          title="texteditor"
          className="work1 margin-setter"
          onMouseEnter={enterWrapper}
          onMouseLeave={leaveWrapper}
          onClick={workScroll}
        >
          <img
            src={require("../../Assets/search4.png")}
            alt="explore"
            className="work1-search"
            style={searchStyle}
          />
          <img
            src={require("../../Assets/work3.jpeg")}
            alt="work"
            style={imgStyle}
            id="work1Responsiveness"
          />
        </Link>
      )}
      {nonDekstop && (
        <Link
          to="/work3"
          title="texteditor"
          className="work1 margin-setter"
          onMouseEnter={enterWrapper2}
          onMouseLeave={leaveWrapper2}
          onClick={workScroll}
        >
          <img
            src={require("../../Assets/search4.png")}
            alt="explore"
            className="work1-search"
            style={searchStyle}
          />
          <img
            src={require("../../Assets/work3.jpeg")}
            alt="work"
            style={imgStyle2}
            id="work1Responsiveness"
          />
        </Link>
      )}
    </>
  );
}
