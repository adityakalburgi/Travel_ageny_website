const ReviewList = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.length === 0 ? (
        <p className="no-reviews">No reviews yet.</p>
      ) : (
        reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-card-header">
              <h4 className="review-name">{review.name}</h4>
              <span className="review-rating">{review.rating}</span>
            </div>
            <p className="review-text">{review.text}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ReviewList;
