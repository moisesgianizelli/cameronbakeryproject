import React from "react";

export const ContactUs = () => {
  return (
    <div
      id="contactUs"
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
            className="col-12 col-md-10 col-lg-8 mx-auto"
            style={{ padding: "0rem", marginTop: "-2rem" }}
          >
            <h1 className="display-5 fw-bold text-brown text-center">
              Contact Us
            </h1>
            <p className="fs-5 text-center">
              Have a question, feedback, or need more information? We’d love to
              hear from you! Fill out the form below or visit us at our store.
            </p>

            <div className="row mt-4">
              <div className="col-md-6">
                <form className="bg-white shadow rounded p-4">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label fw-bold">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-bold">
                      Your Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label fw-bold">
                      Your Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows={4}
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn main-color btn-lg btn-outline-light"
                    style={{ width: "100%" }}
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Google Maps */}
              <div className="col-md-6">
                <div
                  className="bg-white shadow rounded"
                  style={{ height: "100%", overflow: "hidden" }}
                >
                  <iframe
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2461.9947577646576!2d-8.482692323977473!3d51.89755977190464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x484490177266ee3d%3A0x7917d1f0d0b1a7d7!2s25A%20Washington%20Street%20West%2C%20Centre%2C%20Cork%2C%20T12%20X462!5e0!3m2!1spt-BR!2sie!4v1732547318316!5m2!1spt-BR!2sie"
                    style={{
                      border: 0,
                      width: "100%",
                      height: "400px",
                    }}
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            <p className="mt-4 text-center">
              <strong>Store Address:</strong> 25a Washington Street West, Cork,
              Ireland
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
