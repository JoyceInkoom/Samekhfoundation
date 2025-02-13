import React from 'react';
import { useInView } from 'react-intersection-observer';

const DidYouKnow = () => {
  // Each card uses a separate ref to trigger inView animation
  const { ref: card1Ref, inView: card1InView } = useInView({
    threshold: 0.5,
  });
  const { ref: card2Ref, inView: card2InView } = useInView({
    threshold: 0.5,
  });
  const { ref: card3Ref, inView: card3InView } = useInView({
    threshold: 0.5,
  });

  return (
    <div style={{ backgroundColor: '#fff', padding: '10px 0', textAlign: 'center' }}>
      <h2 style={{ fontSize: 36, fontWeight: 600, marginBottom: 20 }}>Did You Know?</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {/* Card 1 */}
        <div
          ref={card1Ref}
          style={{
            width: '300px',
            margin: '20px',
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            padding: '20px',
            transform: card1InView ? 'scale(1)' : 'scale(0.9)',
            transition: 'transform 0.3s ease',
          }}
          className="did-you-know-card"
        >
          <img
            src="https://images.pexels.com/photos/6463291/pexels-photo-6463291.jpeg"
            alt=""
            style={{
              width: '100%',
              height: '150px',
              objectFit: 'cover',
              borderRadius: '10px 10px 0 0',
            }}
          />
          <h3 style={{ fontSize: 24, fontWeight: 600, marginBottom: 10 }}>
            1 in 5 children in Africa lack access to clean water.
          </h3>
          <p style={{ fontSize: 16, color: '#666' }}>
            Our charity organization is working to provide clean water to communities in need.
          </p>
        </div>

        {/* Card 2 */}
        <div
          ref={card2Ref}
          style={{
            width: '300px',
            margin: '20px',
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            padding: '20px',
            transform: card2InView ? 'scale(1)' : 'scale(0.9)',
            transition: 'transform 0.3s ease',
          }}
          className="did-you-know-card"
        >
          <img
            src="https://images.pexels.com/photos/7342757/pexels-photo-7342757.jpeg"
            alt=""
            style={{
              width: '100%',
              height: '150px',
              objectFit: 'cover',
              borderRadius: '10px 10px 0 0',
            }}
          />
          <h3 style={{ fontSize: 24, fontWeight: 600, marginBottom: 10 }}>
            Every dollar donated helps provide food for a child in need.
          </h3>
          <p style={{ fontSize: 16, color: '#666' }}>
            Your generosity can make a real difference in the lives of children around the world.
          </p>
        </div>

        {/* Card 3 */}
        <div
          ref={card3Ref}
          style={{
            width: '300px',
            margin: '20px',
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            padding: '20px',
            transform: card3InView ? 'scale(1)' : 'scale(0.9)',
            transition: 'transform 0.3s ease',
          }}
          className="did-you-know-card"
        >
          <img
            src="https://images.pexels.com/photos/13988500/pexels-photo-13988500.jpeg"
            alt=""
            style={{
              width: '100%',
              height: '150px',
              objectFit: 'cover',
              borderRadius: '10px 10px 0 0',
            }}
          />
          <h3 style={{ fontSize: 24, fontWeight: 600, marginBottom: 10 }}>
            Education is the key to breaking the cycle of poverty.
          </h3>
          <p style={{ fontSize: 16, color: '#666' }}>
            By supporting our education programs, you can help children gain the skills they need to succeed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DidYouKnow;
