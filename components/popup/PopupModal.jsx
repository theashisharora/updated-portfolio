import { useEffect, useState } from "react";
import styles from "./PopupModal.module.css";
import Image from "next/image";

export default function PopupModal() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [fadeOut, setFadeOut] = useState(false); // ✅ for animation

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setFadeOut(true);
    setTimeout(() => {
      setShow(false);
      setFadeOut(false);
    }, 500); // match fade duration
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxwy7mJuXekf0DK9p6ZaTgzqU7R1Nhu7zf8Xkh_Xa1L23GzdGAl2kyLBfEE07CyI1el/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email })
        }
      );

      setSubmitted(true);
      setEmail("");

      // Auto-fade out
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          setShow(false);
          setFadeOut(false);
          setSubmitted(false);
        }, 500);
      }, 2000);
    } catch (err) {
      console.error("Submission failed:", err);
      alert("Error submitting email. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!show) return null;

  return (
    <div className={`${styles.overlay} ${fadeOut ? styles.fadeOut : ""}`} role="dialog" aria-modal="true">
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={handleClose}>✖</button>

        {submitted ? (
          <div className={styles.thankYouMessage}>
            <h2>🎉 Thank you!</h2>
            <p>You’re now subscribed.</p>
          </div>
        ) : (
          <div className={styles.imageContainer}>
            <Image
              src="/img/popupimg/popup-banner.png"
              alt="Popup"
              width={1000}
              height={400}
              className={styles.banner}
            />
            <form onSubmit={handleSubmit} className={styles.overlayForm}>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                required
              />
              <button
                type="submit"
                className={styles.submit}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className={styles.loader}></span>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
