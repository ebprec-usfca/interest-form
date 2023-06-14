import { type WithResponseProps } from '../pages/index';

const ErrorComponent: React.FC<WithResponseProps> = ({ setResponse }) => {
  const handleClose = () => {
    setResponse(null);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md bg-white border border-gray-300 rounded-lg p-8">
        <h1 className="text-xl font-bold mb-4">Oh no! Something went wrong</h1>
        <p className="text-gray-600 mb-4">Please try submitting the form again, or come back later!</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ErrorComponent;
