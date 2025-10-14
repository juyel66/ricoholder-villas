
import { useState } from "react";
import { Link } from 'react-router-dom';

// Adjusted Logo component (no changes needed here)
const EastmondVillasLogo = () => (
  <div className="flex items-center justify-center space-x-4 p-6 bg-white rounded-t-xl">
    <img 
      className="h-20" 
      src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760303130/hd_svg_logo_1_rfsh4e.png" 
      alt="Eastmond Villas Logo" 
    />
  </div>
);

const Login = () => {
  // Initialize state for email and password
  const [email, setEmail] = useState('user@example.com');
  const [password, setPassword] = useState('••••••••');
  
  // Define the teal color
  const primaryColor = 'bg-[#00A597] hover:bg-[#008f82]';

  // **UPDATED:** handleSubmit now creates and logs a JSON object
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Create the data object (JSON-like structure)
    const loginPayload = {
      user_email: email,
      user_password: password,
      // You could add other data here, like client_id or language
    };

    // Log the data object to the console

    console.log(loginPayload); // This logs the structured object
   

    // In a real application, you would typically send loginPayload to an API
  };

  // Function to handle signup navigation (placeholder for React Router or similar)



  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      
      <div className="w-full max-w-md"> 
        
        {/* Header/Logo Section */}
        <EastmondVillasLogo />

        {/* Login Form Container */}
        <div className="bg-white p-8 rounded-b-xl shadow-lg"> 
          
          <div className="mb-6 p-0 rounded"> 
            <h2 className="text-xl font-semibold text-gray-800 mb-1">
              User Login
            </h2>
            <p className="text-sm text-gray-500">
              Access the admin dashboard to manage properties and agents
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="user@example.com"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400 text-gray-700 text-sm"
              />
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 text-gray-700 text-sm"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className={`w-full text-white font-medium py-3 rounded-md transition duration-150 ${primaryColor}`}
            >
              Login
            </button>
          </form>

          {/* New Sign Up Link Section */}
          <div className="mt-6 text-center text-sm pt-4 border-t border-gray-200">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link
                to="/register" 
         
                className={`font-semibold text-[#00A597] hover:text-[#008f82] transition duration-150`}
              >
                Sign up
              </Link>
            </p>
          </div>

          {/* Demo Note */}
          <p className="mt-4 text-center text-xs text-gray-500"> 
            Demo: Use any email/password combination
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;