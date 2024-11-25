import React from "react";
import { Link } from "react-router-dom";

export const AboutUs = () => {
  return (
    <div
      id="aboutUs"
      className="p-5"
      style={{
        backgroundColor: "#f8f3e9",
        minHeight: "100vh",
      }}
    >
      <div
        className="container py-5 text-dark d-flex flex-column justify-content-center align-items-center"
        style={{ height: "100%" }}
      >
        <div className="row w-100">
          <div
            className="col-12 col-md-10 col-lg-8 mx-auto text-center"
            style={{ padding: "0rem", marginTop: "-2rem" }}
          >
            <h1 className="display-5 fw-bold text-brown">
              About Cameron Bakery
            </h1>
            <p className="fs-5">
              A family-owned bakery with a passion for handcrafted treats and a
              legacy of quality, tradition, and love for the community.
            </p>

            {/* History Section */}
            <div className="row my-5 align-items-center">
              <div className="col-md-6">
                <img
                  src={require("./../../../Images/PublicImages/staff.jpg")}
                  alt="Our History"
                  className="img-fluid rounded shadow"
                />
              </div>
              <div className="col-md-6">
                <h2 className="text-brown">Our History</h2>
                <p>
                  Cameron Bakery began 15 years ago as a small family business
                  with a big dream: to bring people together through delicious,
                  homemade baked goods. What started as a humble kitchen
                  experiment soon grew into a beloved bakery, serving the
                  community with passion and care.
                </p>
              </div>
            </div>

            {/* Mission Section */}
            <div className="row my-5 align-items-center flex-md-row-reverse">
              <div className="col-md-6">
                <img
                  src={require("./../../../Images/PublicImages/staff2.jpg")}
                  alt="Our Mission"
                  className="img-fluid rounded shadow"
                />
              </div>
              <div className="col-md-6">
                <h2 className="text-brown">Our Mission</h2>
                <p>
                  At Cameron Bakery, our mission is simple: to create
                  unforgettable moments with every bite. We believe in using
                  only the finest ingredients and crafting every product with
                  care, ensuring each treat tells a story of tradition,
                  innovation, and love.
                </p>
              </div>
            </div>

            {/* Community Section */}
            <div className="row my-5 align-items-center">
              <div className="col-md-6">
                <img
                  src={require("./../../../Images/PublicImages/staff3.jpg")}
                  alt="Community"
                  className="img-fluid rounded shadow"
                />
              </div>
              <div className="col-md-6">
                <h2 className="text-brown">Our Community</h2>
                <p>
                  We take pride in being more than just a bakery. Cameron Bakery
                  is a cornerstone of our community, bringing people together
                  for celebrations, family gatherings, and everyday moments of
                  joy. Your support inspires us to grow, innovate, and keep
                  baking with heart.
                </p>
              </div>
            </div>

            {/* Signature Creations */}
            <div className="row my-5 align-items-center flex-md-row-reverse">
              <div className="col-md-6">
                <img
                  src={require("./../../../Images/PublicImages/staff4.jpg")}
                  alt="Our Signature Creations"
                  className="img-fluid rounded shadow"
                />
              </div>
              <div className="col-md-6">
                <h2 className="text-brown">Our Signature Creations</h2>
                <p>
                  From artisan breads to decadent pastries, Cameron Bakery
                  offers a variety of signature creations that have become
                  household favorites. Our butter croissants, chocolate cakes,
                  and freshly baked artisan breads are just a few of the treats
                  that keep our customers coming back for more.
                </p>
              </div>
            </div>

            <Link
              to="/contact-us"
              className="btn main-color btn-lg btn-outline-light mt-4"
              style={{ width: "200px" }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
