import React from "react";
import "./Testimonial_V1.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GetInTouch = ({ open, onClose }) => {
  if (!open) return null;

  const handleSubmit = () => {
    // allow actual Zoho submit (no preventDefault)
    toast.success("Your enquiry has been submitted successfully!");
    onClose();
  };

  return (
    <>
      <div className="testimonial_ay__modal-overlay">
        <div className="testimonial_ay__modal">
          <button
            className="testimonial_ay__modal-close-btn"
            onClick={onClose}
          >
            ✖
          </button>

          {/* ✅ Zoho Form Embed */}
          <form
            action="https://forms.zohopublic.in/dluxtech/form/AdobeCommercePage1/formperma/Ha6XOZwHSCEUc4esNdV3r1O10PaecK2nzr5l93JWBJY/htmlRecords/submit"
            name="form"
            method="POST"
            acceptCharset="UTF-8"
            encType="multipart/form-data"
            onSubmit={() => {
              setTimeout(() => {
                toast.success("Your enquiry has been submitted successfully!");
                onClose();
              }, 500);
            }}
          >
            {/* Hidden Zoho Inputs */}
            <input type="hidden" name="zf_referrer_name" value="" />
            <input type="hidden" name="zf_redirect_url" value="" />
            <input type="hidden" name="zc_gad" value="" />

            <h2 className="testimonial-form__title">
              <span className="testimonial-form__title--white">Get</span>{" "}
              <span className="testimonial-form__title--highlight">
                In Touch
              </span>
            </h2>

            {/* Name Fields */}
            <div className="testimonial-form__group testimonial-form__name-group">
              <input
                type="text"
                name="Name_First"
                maxLength="255"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                name="Name_Last"
                maxLength="255"
                placeholder="Last Name"
                required
              />
            </div>

            {/* Email */}
            <div className="testimonial-form__group">
              <input
                type="email"
                name="Email"
                maxLength="255"
                placeholder="Your Email"
                required
              />
            </div>

            {/* Phone */}
            <div className="testimonial-form__group">
              <input
                type="text"
                name="PhoneNumber_countrycode"
                maxLength="20"
                placeholder="Your Phone Number"
                required
              />
            </div>

            {/* Message / Notes */}
            <div className="testimonial-form__group">
              <textarea
                name="MultiLine"
                placeholder="Your Message"
                rows="4"
              ></textarea>
            </div>

            <button type="submit" className="testimonial-form__submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Toast notification */}
      <ToastContainer />
    </>
  );
};

export default GetInTouch;
