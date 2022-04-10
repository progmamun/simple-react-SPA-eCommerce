import React, { useState } from 'react';

const Shipment = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  // const navigate = useNavigate();
  const handleNameBlur = event => {
    setName(event.target.value);
  };

  const handleEmailBlur = event => {
    setEmail(event.target.value);
  };

  const handleAddressBlur = event => {
    setAddress(event.target.value);
  };

  const handlePhoneBlurBlur = event => {
    setPhone(event.target.value);
  };
  const handleCreateUser = event => {
    event.preventDefault();
  };
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Shipping Information</h2>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="name">Your Name</label>
            <input
              onBlur={handleNameBlur}
              type="text"
              name="name"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input
              onBlur={handleAddressBlur}
              type="text"
              name="address"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="phone-number">Phone Number</label>
            <input
              onBlur={handlePhoneBlurBlur}
              type="number"
              name="phone-number"
              id=""
              required
            />
          </div>
          <p style={{ color: 'red' }}>{error}</p>
          <input className="form-submit" type="submit" value="Add Shipping" />
        </form>
      </div>
    </div>
  );
};

export default Shipment;
