"use client";

import { useState } from 'react';
import { fetchCardDetails } from '../../utils/apicall';
// import { endpoints } from '../../endpoints';
import { useRouter } from 'next/navigation'
import dotenv  from 'dotenv'

export default function Login() {
  const router = useRouter()

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleLoginError = (errorMsg) => {
    setError(errorMsg || 'Login failed');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await fetchCardDetails(`${process.env.NEXT_PUBLIC_BASE_URL}/admin/login`, 'POST', { username, password });
      localStorage.setItem('token', data.token);
      
      router.push('/dashboard')
    } catch (error) {
      handleLoginError(error.message || 'An error occurred');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '20px', color: '#333' }}>Login</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
          style={{
            marginBottom: '10px',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          style={{
            marginBottom: '20px',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px 15px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#007BFF',
            color: '#fff',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#007BFF'}
        >
          Login
        </button>
      </form>
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
    </div>
  );
}
