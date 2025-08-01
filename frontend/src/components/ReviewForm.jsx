import { useState } from "react";

const ReviewForm = ({ onAddReview }) => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("5");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !text) return;

    const newReview = {
      id: Date.now(),
      name,
      rating,
      text,
    };

    onAddReview(newReview);
    setName("");
    setRating("5");
    setText("");
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="review-input"
      />
      <select
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className="review-select"
      >
        <option>5 Stars</option>
        <option>4 Stars</option>
        <option>3 Stars</option>
        <option>2 Stars</option>
        <option>1 Star</option>
      </select>
      <textarea
        placeholder="Write your review here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="review-textarea"
      />
      <button type="submit" className="review-button">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
