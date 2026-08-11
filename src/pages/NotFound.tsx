import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
      <h1 className="text-7xl font-bold text-foreground transition-colors duration-300 dark:text-white sm:text-9xl">404</h1>
      <h2 className="mt-4 text-2xl font-bold text-foreground transition-colors duration-300 dark:text-white sm:text-3xl">
        Page not found
      </h2>
      <p className="mt-4 text-base text-gray-600 transition-colors duration-300 dark:text-gray-300 sm:text-lg">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <div className="mt-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          Go home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
