import { type WithResponseProps } from '../pages/index';

const ErrorComponent: React.FC<WithResponseProps> = ({ setResponse } ) => {
  const handleClose = () => {
    setResponse(null);
  };

  return (
    <>
      <div className="alert">
        <h1>Something went wrong!</h1>
        <p>Please try again later.</p>
        <button className="close-button" onClick={handleClose}>
          Close
        </button>
      </div>
    </>
  );
};

export default ErrorComponent;
