

const WhatCharityMeans = () => {
  return (
    <div style={{
      backgroundColor: '#f7f7f7',
      padding: '50px 0',
      textAlign: 'center'
    }}>
      <h2 style={{ fontSize: 36, fontWeight: 600, marginBottom: 20 }}>
        About AkoFresh
      </h2>
      <p style={{ fontSize: 18, color: '#666', marginBottom: 40 }}>
        Here is What We Offer.
      </p>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <div style={{
          width: '500px',
          margin: '20px',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          padding: '20px'
        }}>
          <h3 style={{ fontSize: 24, fontWeight: 600, marginBottom: 10 }}>
            The Solution.
          </h3>
          <p style={{ fontSize: 16, color: '#666', marginBottom: 20 }}>
            Smart Solar-Powered Cool Box For smallholder farmers and traders.
          </p>
          <p style={{ fontSize: 16, color: '#666', marginBottom: 20 }}>
            Our IoT enabled mobile off-grid cold storage preservation technology is made of cold room panels, solar panels, sensors, a compressor and an air cooler. This cooling technology extends shelf life of perishable crops from the usual 5-day period to 21 days.
          </p>
        </div>
        <div style={{
          width: '500px',
          margin: '20px',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          padding: '20px'
        }}>
          <h3 style={{ fontSize: 24, fontWeight: 600, marginBottom: 10 }}>
            Why Farmers Appreciate Our Technology
          </h3>
          <p style={{ fontSize: 16, color: '#666', marginBottom: 20 }}>
            Farmers appreciate our technology because it helps them extend shelf life of their crops and reduce wastage. During the storage period, farmers will be able to find buyers or middlemen to sell their crops to.
          </p>
          <p style={{ fontSize: 16, color: '#666', marginBottom: 20 }}>
            Due to this extended time not only would farmers be able to find someone to buy their produce, but they can also use their time to ensure that the buyer is offering them a fair price.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatCharityMeans;