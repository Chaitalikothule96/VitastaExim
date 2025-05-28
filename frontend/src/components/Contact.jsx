import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
   // Validate phone number length
  const trimmedPhone = phone.trim();
  if (!/^\d{10,}$/.test(trimmedPhone)) {
    toast.error("Please enter a valid phone number with at least 10 digits.");
    return;
  }

  setLoading(true);
  try {
    const { data } = await axios.post("http://localhost:4000/send/mail",
      {
        name,
        email,
        message,
        phone: `${countryCode}${trimmedPhone}`
      },
      {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      }
    );
    setName("");
    setEmail("");
    setMessage("");
    setPhone("");
    toast.success(data.message);
  } catch (error) {
    toast.error(error.response?.data?.message || "Something went wrong");
  } finally {
    setLoading(false);
  }
};

  return (
    <section className='contact my-5' id="contact">
      <form onSubmit={sendEmail}>
        <h1 style={{ textAlign: "center", color: "#1d8ae9" }}>Get In Touch</h1>

        <div>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>

        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
  <label>Phone number</label>
  <div style={{ display: 'flex',flexDirection: 'row', alignItems: 'center', width: '100%' }}>
    <input
      type="tel"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      required
      style={{
        flex: 1,
        padding: '8px',
        height: '40px'
      }}
    />
  </div>
</div>

        



        <div>
          <label>Message</label>
          <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} required />
        </div>

        <button
          type='submit'
          disabled={loading}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px",
          }}
        >
          {loading && <ClipLoader size={20} color='white' />}
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
