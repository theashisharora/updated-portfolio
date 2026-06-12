import { useEffect, useRef, useState } from "react";
import styles from "./PopupModal.module.css";

const GOOGLE_SHEETS_URL =
  "https://script.google.com/macros/s/AKfycbxwy7mJuXekf0DK9p6ZaTgzqU7R1Nhu7zf8Xkh_Xa1L23GzdGAl2kyLBfEE07CyI1el/exec";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

const POPUP_SESSION_KEY = "portfolioContactPopupShown";
const POPUP_DELAY = 3000;

export default function PopupModal() {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(POPUP_SESSION_KEY) === "true") return;

    const timer = window.setTimeout(() => {
      sessionStorage.setItem(POPUP_SESSION_KEY, "true");
      setShow(true);
    }, POPUP_DELAY);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!show) return;

    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setShow(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [show]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setShow(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "", message: "" });
    setIsSubmitting(true);

    try {
      await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      setForm(initialForm);
      setStatus({
        type: "success",
        message: "Thanks for reaching out. I will get back to you soon.",
      });
    } catch (err) {
      console.error("Submission failed:", err);
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again or contact me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {show && (
        <div className={styles.overlay}>
          <section
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            aria-describedby="contact-modal-description"
          >
            <button
              ref={closeButtonRef}
              type="button"
              className={styles.closeButton}
              onClick={handleClose}
              aria-label="Close contact form"
              disabled={isSubmitting}
            >
              <span aria-hidden="true">x</span>
            </button>

            <div className={styles.header}>
              <p className={styles.kicker}>Contact</p>
              <h2 id="contact-modal-title">Let&apos;s Connect</h2>
              <p id="contact-modal-description">
                Interested in my work or future projects? Leave your details and
                I&apos;ll get back to you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <label className={styles.field}>
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                />
              </label>

              <label className={styles.field}>
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />
              </label>

              <label className={styles.field}>
                <span>Message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  required
                />
              </label>

              <p className={styles.privacy}>
                I&apos;ll only use your details to respond to your message.
              </p>

              {status.message && (
                <p
                  className={`${styles.status} ${styles[status.type]}`}
                  role={status.type === "error" ? "alert" : "status"}
                >
                  {status.message}
                </p>
              )}

              <button
                type="submit"
                className={styles.submit}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className={styles.spinner} aria-hidden="true" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </section>
        </div>
      )}
    </>
  );
}
