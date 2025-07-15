
import { usePaystackPayment } from "react-paystack";

const DonateButton = () => {
  // Paystack configuration
  const config = {
    reference: "donation_" + Math.floor(Math.random() * 1000000000), // Unique reference
    email: "user@example.com", // User's email
    amount: 10000, // Amount in the smallest currency unit (e.g., 10000 = 100 GHS)
    publicKey: "pk_test_17a4e525574de1cee91198a6f7f085586e5c9542", // Replace with your Paystack public key
    currency: "GHS", // Currency (e.g., GHS for Ghana Cedis, NGN for Nigerian Naira)
    channels: ["mobile_money", "card", "bank"], // Payment channels (MTN, Telecel, Visa, Bank Transfer)
  };

  // Initialize Paystack payment
  const initializePayment = usePaystackPayment(config);

  // Handle payment success
  const onSuccess = (response) => {
    console.log("Payment successful:", response);
    alert("Thank you for your donation!");
  };

  // Handle payment close
  const onClose = () => {
    console.log("Payment closed");
  };

  // Redirect to home page
  const goToHome = () => {
    window.location.href = "/"; // Replace with your home page URL
  };

  return (
    <div
      style={{
        backgroundImage: "url('https://i.pinimg.com/1200x/2f/96/32/2f9632555bdb0a024a5ace2216d18e06.jpg')", // Replace with your background image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        textAlign: "center",
        padding: "20px",
        
      }}
    >
      {/* Close Button */}
      <button
        onClick={goToHome}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          background: "none",
          border: "none",
          color: "#fff",
          fontSize: "24px",
          cursor: "pointer",
          
        }}
      >
        X
      </button>

      {/* Heading */}
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Support Us</h1>
      <p style={{ fontSize: "20px", marginBottom: "40px" }}>
        Click the button below to donate using MTN Mobile Money, Telecel Mobile Money, Visa, or Bank Transfer:
      </p>

      {/* Payment Logos */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "40px",
          
        }}
      >
        <img
          src="https://i.pinimg.com/736x/7b/9f/ce/7b9fce7a65a393b17d61f4061f7e7375.jpg" // Replace with MTN logo URL
          alt="MTN Mobile Money"
          style={{ width: "100px", height: "50px", borderRadius: "50px" }}
        />
        <img
          src="https://i.pinimg.com/736x/ee/9e/af/ee9eaf6509520c34251d8b775428095c.jpg" // Replace with Telecel logo URL
          alt="Telecel Mobile Money"
          style={{ width: "100px", height: "50px", borderRadius: "50px" }}
        />
        <img
          src="https://i.pinimg.com/736x/81/76/8f/81768f106bee27ca751fb9001d5bb388.jpg" // Replace with Airtel Tigo logo URL
          alt="Airtel Tigo"
          style={{ width: "100px", height: "50px", borderRadius: "50px" }}
        />
        <img
          src="https://i.pinimg.com/736x/a5/04/e9/a504e9422c260b2e55f43144ae387093.jpg" // Replace with Visa logo URL
          alt="Visa"
          style={{ width: "100px", height: "50px", borderRadius: "50px" }}
        />
      </div>

      {/* Donate Button */}
      <button
        onClick={() => initializePayment(onSuccess, onClose)}
        style={{
          padding: "15px 30px",
          fontSize: "18px",
          cursor: "pointer",
          backgroundColor: "gold",
          color: "#fff",
          border: "none",
          borderRadius: "50px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#fcacae")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "gold")}
      >
        Donate Now
      </button>
    </div>
  );
};

export default DonateButton;