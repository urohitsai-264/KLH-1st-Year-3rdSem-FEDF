function CustomerReviews() {
const reviews = null; 
// Simulating an error by setting reviews to null
return (
<div>
<h3>Reviews</h3>
{reviews.map(review => (
 <p>{review}</p>
))}
 </div>
 );
}
export default CustomerReviews;
