import React, { useEffect, useState } from 'react';
import './Homepage.scss';
import Navbar from '../navbar/Navbar';

interface MessageData {
  id: number;
  timestamp: string;
  type: string;
  user: {
    userId: number;
    name: string;
    email: string;
  };
  content: {
    title: string;
    body: string;
    tags: string[];
  };
  read: boolean;
  priority: string;
}

const Homepage: React.FC = () => {
  const [message, setMessage] = useState<MessageData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetch('http://localhost:4200/message');
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data: MessageData = await response.json();
        setMessage(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchMessage();
  }, []);

  return (
    <div className="parent">
      <Navbar />
      <h1>Welcome to the Homepage</h1>
      <p>This is your starting point!</p>
      {error ? (
        <p style={{ color: 'red' }}>Failed to load message: {error}</p>
      ) : message ? (
        <div>
          <h2>{message.content.title}</h2>
          <p>{message.content.body}</p>
          <p>
            <strong>User:</strong> {message.user.name} ({message.user.email})
          </p>
          <p>
            <strong>Priority:</strong> {message.priority}
          </p>
          <p>
            <strong>Tags:</strong> {message.content.tags.join(', ')}
          </p>
          <p>
            <strong>Timestamp:</strong> {new Date(message.timestamp).toLocaleString()}
          </p>
        </div>
      ) : (
        <p>Loading message...</p>
      )}
    </div>
  );
};

export default Homepage;
