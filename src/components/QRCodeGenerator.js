import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = ({ url }) => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
  };

  return (
    <div className='container' style={containerStyle}>
      <h1>Scan me!</h1>
      <QRCode value={url} size={256} />
    </div>  
  );
};

export default QRCodeGenerator;
