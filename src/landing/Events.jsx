import React, { useState, useEffect } from 'react';
import { getEvents } from '../services/landing';
import 'react-multi-carousel/lib/styles.css';

// Modal styles removed

const Events = () => {
  const [events, setEvents] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  const eventsPerPage = 3;

  // Fetch events on component mount
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsData = await getEvents();
        console.log('Full API response:', eventsData); // Log the entire response

        if (eventsData.status === 'success' && Array.isArray(eventsData.deatils) && eventsData.deatils.length > 0) {
          setEvents(eventsData.deatils);
          console.log('Fetched events:', eventsData.deatils); // Log the fetched events
        } else {
          console.error('Failed to fetch events: No events found', eventsData.message);
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  // Navigate to the previous set of events
  const handlePrevious = () => {
    setStartIndex((prev) => Math.max(0, prev - eventsPerPage));
  };

  // Navigate to the next set of events
  const handleNext = () => {
    setStartIndex((prev) => Math.min(events.length - eventsPerPage, prev + eventsPerPage));
  };

  // Get the subset of events to display
  const visibleEvents = events.slice(startIndex, startIndex + eventsPerPage);

  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '40px auto',
        padding: '20px',
        position: 'relative',
        backgroundImage: 'url(https://images.pexels.com/photos/7946562/pexels-photo-7946562.jpeg)', // Background image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        minHeight: '100vh',
      }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2.5rem', color: '#fff' }}>
        Browse Through Some of Our Projects
      </h1>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Left navigation button */}
        <button
          onClick={handlePrevious}
          disabled={startIndex === 0}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            fontSize: '2rem',
            cursor: 'pointer',
            marginRight: '20px',
            color: startIndex === 0 ? '#fff' : 'black',
            transition: 'color 0.2s',
          }}
        >
          &#9664;
        </button>

        {/* Event cards inside carousel */}
        <div
          style={{
            display: 'flex',
            gap: '20px',
            overflow: 'hidden',
            width: '100%',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {visibleEvents.length > 0 ? (
            visibleEvents.map((event) => (
              <div
                key={event.id}
                style={{
                  width: '300px',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)', // Glassy effect
                  borderRadius: '10px',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.8)',
                  backdropFilter: 'blur(10px)', // Frosted glass effect
                  padding: '20px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  marginBottom: '50px',
                  color: '#fff',
                }}
              >
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                  <img
                    src={`https://savefiles.org/${event.image[0]}?shareable_link=574`}
                    alt={event.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  {event.image.length > 1 && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        color: 'black',
                        padding: '5px 10px',
                        borderRadius: '50px',
                        fontSize: '0.9rem',
                      }}
                    >
                      +{event.image.length - 1}
                    </div>
                  )}
                </div>
                <div style={{ padding: '20px' }}>
                  <h2 style={{ margin: '0 0 10px', fontSize: '1.5rem', color: 'black' }}>{event.title}</h2>
                  <p style={{ margin: '0', fontSize: '1rem', color: 'black' }}>{event.description}</p>

                  <div style={{ marginTop: '10px' }}>
                    <p
                      style={{
                        fontSize: '1rem',
                        color: 'black',
                        fontWeight: 'bold',
                        backgroundColor: '#fff',
                        padding: '5px 10px',
                        borderRadius: '50px',
                        display: 'inline-block',
                        marginBottom: '10px',
                      }}
                    >
                      {new Date(event.date).toLocaleDateString()}
                    </p>
                    <p style={{ fontSize: '1rem', color: 'red' }}>
                      <strong>Time:</strong> {new Date(event.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                    <p style={{ fontSize: '1rem', color: 'black' }}>
                      <strong>Location:</strong> {event.location}
                    </p>
                    <p style={{ fontSize: '1rem', color: 'black' }}>
                      <strong>Organizer:</strong> {event.organizer}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p style={{ textAlign: 'center', fontSize: '1.2rem', color: 'black' }}>No events available.</p>
          )}
        </div>

        {/* Right navigation button */}
        <button
          onClick={handleNext}
          disabled={startIndex + eventsPerPage >= events.length}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            fontSize: '2rem',
            cursor: 'pointer',
            marginLeft: '20px',
            color: startIndex + eventsPerPage >= events.length ? '#ccc' : '#fff',
            transition: 'color 0.2s',
          }}
        >
          &#9654;
        </button>
      </div>
    </div>
  );
};

export default Events;
