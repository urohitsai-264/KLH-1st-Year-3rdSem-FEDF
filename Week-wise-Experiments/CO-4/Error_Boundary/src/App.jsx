
import ProductDetails from "./ProductDetails";
import CustomerReviews from "./CustomerReviews";
import ShoppingCart from "./ShoppingCart";
import ErrorBoundary from "./ErrorBoundary";
function App() {
return (
 <div>
<ProductDetails />
<ErrorBoundary>
<CustomerReviews />
</ErrorBoundary>
<ShoppingCart />
</div>
);
}
export default App;
