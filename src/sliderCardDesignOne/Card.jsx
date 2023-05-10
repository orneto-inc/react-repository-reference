import React, { useState } from "react";
import "./cardStyle.css";
import img1 from "../assets/shoe_images/image1_1.jpg";
import img2 from "../assets/shoe_images/image1_2.jpg";
import img3 from "../assets/shoe_images/image1_3.jpg";
import img4 from "../assets/shoe_images/image1_4.jpg";
import img5 from "../assets/shoe_images/image1_5.jpg";
import img6 from "../assets/shoe_images/image1_6.jpg";
import img7 from "../assets/shoe_images/image1_7.jpg";
import img8 from "../assets/shoe_images/image1_8.jpg";
import img9 from "../assets/shoe_images/image1_9.jpg";
import img10 from "../assets/shoe_images/image1_10.jpg";
import img11 from "../assets/shoe_images/image1_11.jpg";
import img12 from "../assets/shoe_images/image1_12.jpg";
import img13 from "../assets/shoe_images/image1_13.jpg";
import img14 from "../assets/shoe_images/image1_14.jpg";
import img15 from "../assets/shoe_images/image1_15.jpg";
import img16 from "../assets/shoe_images/image1_16.jpg";
import img17 from "../assets/shoe_images/image1_17.jpg";
import img18 from "../assets/shoe_images/image1_18.jpg";

const CardDesign = () => {
  const [switchFlipOff, setSwitchFlipOn] = useState(false);
  const [value, setValue] = useState("");
  let j = value - 1;
  const imgArray = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
  ];

  const sliderHandler = (event) => {
    setValue(event.target.value);
    // const val = event.target.value;
    // console.log(val);
  };

  const switchHandler = () => {
    setSwitchFlipOn((current) => !current);
    console.log("Switch FLipper");
  };
  return (
    <div className="cardContainer">
      <div className="slider-card-wrapper">
        <div className="card">
          <div className="switch-wrapper">
            <div className="form-check form-switch">
              <div
                className={`base-cylinder ${
                  switchFlipOff ? "flip-switch" : ""
                }`}
                onClick={switchHandler}
              >
                <div className="circle-switch"></div>
              </div>
            </div>
          </div>
          <div className="card-content">
            <img
              src={imgArray[j+1]}
              className="card-img-top"
              alt="product-image"
            />
            <div className="card-body">
              <div className="slider-bar-wrapper">
                <label for="customRange" className="form-label">
                  360<sup>0</sup>
                </label>
                <input
                  type="range"
                  min="0"
                  max="17"
                  value={value}
                  onChange={sliderHandler}
                  className="form-range"
                  id="customRange"
                />
              </div>
              <h5 className="card-title">Addidas White Running Shoe</h5>
              <p className="card-text">
                Comfortable designed for atheletes. Made with complete
                recycleable material.
              </p>
              <div className="size-selector-list">
                  <div className="size-selector">
                    <p>6</p>
                  </div>

                  <div className="size-selector">
                    <p>7</p>
                  </div>

                  <div className="size-selector">
                    <p>8</p>
                  </div>

                  <div className="size-selector">
                    <p>9</p>
                  </div>

                  <div className="size-selector">
                    <p>10</p>
                  </div>

                  <div className="size-selector">
                    <p>11</p>
                  </div>

                  <div className="size-selector">
                    <p>12</p>
                  </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardDesign;
