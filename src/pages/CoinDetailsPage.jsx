import { useParams } from "react-router-dom"; // Importing useParams from react-router-dom
function CoinDetailsPage() {
    const { coinid } = useParams(); // Extracting coinid from the URL parameters
  return (
    <div>
      <h1>Coin Details {coinid}</h1>
      {/* Coin details content goes here */}
    </div>
  );
}
export default CoinDetailsPage;