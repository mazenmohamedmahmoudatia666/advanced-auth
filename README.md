Course Outline
Backend Development
🔧 Backend Setup
🗄️ Database Setup
🔐 Signup Endpoint
📧 Sending Verify Account Email
🔍 Verify Email Endpoint
📄 Building a Welcome Email Template
🚪 Logout Endpoint
🔑 Login Endpoint
🔄 Forgot Password Endpoint
🔁 Reset Password Endpoint
✔️ Check Auth Endpoint
Frontend Development
🌐 Frontend Setup
📋 Signup Page UI
🔓 Login Page UI
✅ Email Verification Page UI
📤 Implementing Signup
📧 Implementing Email Verification
🔒 Protecting Routes
🔑 Implementing Login
🏠 Dashboard Page
🔄 Implementing Forgot Password
Deployment & Extras
🚀 Super Detailed Deployment
Environment Setup
Ensure you have a .env file in your project root with the following variables:

```dash
Copy code
MONGO_URI=your_mongo_uri
PORT=5000
JWT_SECRET=your_secret_key
NODE_ENV=development

MAILTRAP_TOKEN=your_mailtrap_token
MAILTRAP_ENDPOINT=https://send.api.mailtrap.io/

CLIENT_URL=http://localhost:5173
Running the Application Locally


Build the App: npm run build

Start the App: npm run start
