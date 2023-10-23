import React, { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import QRCodeScanner from './components/QRScanner';
import QRCodeGenerator from './components/QRCodeGenerator';

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [feedbackFormUrl, setFeedbackFormUrl] = useState('');

  const handleScan = (data) => {
    setFeedbackFormUrl(data);
    setShowForm(true);
  };

  return (
    <div className="container mt-5">
      <QRCodeGenerator url={feedbackFormUrl} />
      {showForm && <FeedbackForm />}
      {!showForm && <QRCodeScanner onScan={handleScan} />}
    </div>
  );
};

export default App;
