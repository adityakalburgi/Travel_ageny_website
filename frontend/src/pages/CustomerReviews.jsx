import { useState } from "react";
import ReviewForm from "../components/ReviewForm";
import ReviewList from "../components/ReviewList";
import "./CustomerReviews.css";

const CustomerReviews = () => {
  const [reviews, setReviews] = useState([]);

  const handleAddReview = (review) => {
    setReviews([review, ...reviews]);
  };

  return (
    <section className="review-section">
      <div className="review-container">
        <h2 className="review-title">🌟 Customer Reviews</h2>
        <ReviewForm onAddReview={handleAddReview} />
        <ReviewList reviews={reviews} />
      </div>
    </section>
  );
};

export default CustomerReviews;
