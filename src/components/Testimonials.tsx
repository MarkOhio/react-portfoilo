
import React, { useState, useEffect } from "react";
import "../styles/testimonials.css"
import { db } from "../firebase/config";
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type Review = {
  id?: string;
  name: string;
  message: string;
  timestamp?: any;
};

const Testimonials: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [current, setCurrent] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [newReview, setNewReview] = useState({ name: "", message: "" });

  // Fetch reviews from Firestore
  useEffect(() => {
    const q = query(collection(db, "reviews"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Review),
      }));
      setReviews(data);
    });
    return () => unsubscribe();
  }, []);

  // Auto-slide every 6 seconds
  useEffect(() => {
    if (reviews.length > 1) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % reviews.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [reviews]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.message) return alert("All fields required");

    if (newReview.message.length > 180)
      return alert("Review too long. Keep it under 180 characters.");

    await addDoc(collection(db, "reviews"), {
      ...newReview,
      timestamp: serverTimestamp(),
    });

    setNewReview({ name: "", message: "" });
    setShowModal(false);
  };

  const next = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <div className="testimonials">
      <h2>Client Testimonials</h2>

      {reviews.length > 0 ? (
        <div className="carousel">
          
          <button onClick={prev} className="nav2-btn">➡</button>
          <div className="review-card">
            <p className="message">“{reviews[current].message}”</p>
            <p className="author">— {reviews[current].name}</p>
          </div>
          <button onClick={next} className="nav2-btn"> ⬅ </button>
        </div>
      ) : (
        <p className="no-reviews">No reviews yet. Be the first!</p>
      )}

      <button className="leave-btn" onClick={() => setShowModal(true)}>
        Leave a Review
      </button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Leave a Review</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={newReview.name}
                onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                required
              />
              <textarea
                placeholder="Your Review (max 180 chars)"
                maxLength={180}
                value={newReview.message}
                onChange={(e) =>
                  setNewReview({ ...newReview, message: e.target.value })
                }
                required
              ></textarea>
              <button type="submit">Submit</button>
              <button
                type="button"
                className="close-btn"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
