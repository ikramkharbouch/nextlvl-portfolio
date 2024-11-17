import React, {
  useState,
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
} from "react";
import "../styles/Contact.scss"; // Create a CSS file to style the page
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaCheckCircle,
} from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [state, handleSubmit, reset] = useForm("xdkodngb");
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const formRef = useRef<HTMLFormElement>(null);

  useEffect((): any => {
    if (state.succeeded) {
      // If the form submission is successful, show the success popup
      setIsPopupVisible(true);

      // Clear form inputs
      if (formRef.current) {
        formRef.current.reset(); // This resets all form fields
      }

      reset();

      // Reset form data
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      // Hide the popup after 3 seconds
      setTimeout(() => {
        setIsPopupVisible(false);
      }, 3000);
    }

  }, [state.succeeded]); // Runs only when state.succeeded changes

  return (
    <div className="contact-container">
      {/* Success Msg */}
      {isPopupVisible && (
        <div className="popup-success">
          <FaCheckCircle size={20} />
          <p>Message Sent Successfully!</p>
        </div>
      )}

      <h2>Contact Me</h2>
      <p>
        Feel free to reach out for collaborations, inquiries, or just to say hi!
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <ValidationError prefix="name" field="name" errors={state.errors} />

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <ValidationError prefix="email" field="email" errors={state.errors} />

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <ValidationError
          prefix="message"
          field="message"
          errors={state.errors}
        />

        <button
          type="submit"
          className="submit-btn"
          disabled={state.submitting}
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/ikram-kharbouch/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://github.com/ikramkharbouch"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://x.com/geekyumeko"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={20} />
        </a>
        <a href="mailto:ikramkharbouchh@gmail.com">
          <FaEnvelope size={20} />
        </a>
      </div>

      <p>Looking forward to hearing from you!</p>
    </div>
  );
};

export default ContactPage;
