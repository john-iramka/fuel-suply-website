import { Link } from 'react-router-dom';

const AuthLayout = ({ children, title, footerText, footerLink, footerLinkText }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <img 
            src="/images/logo-1-2.png" 
            alt="Avion Energy" 
            className="mx-auto h-16 w-auto" 
          />
          <h2 className="mt-6 text-center text-3xl font-bold text-blue-900">
            {title}
          </h2>
        </div>
        
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          {children}
        </div>

        <div className="text-center text-sm">
          <p className="text-gray-600">
            {footerText}{' '}
            <Link to={footerLink} className="font-medium text-blue-900 hover:text-yellow-600">
              {footerLinkText}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;