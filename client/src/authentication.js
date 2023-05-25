// auth.js

export const login = async (username, password) => {
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem('token', token);
        // Handle successful login
      } else {
        // Handle error response
      }
    } catch (error) {
      // Handle error
    }
  };
  
  export const logout = () => {
    localStorage.removeItem('token');
    // Handle logout
  };
  