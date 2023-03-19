import '../Stylesheets/Loading.css';

export default function Loading() {
  return (
    <>
      <div className='loading'>
        <div className='loadingSpinner'></div>
        <div className='loadingText'>Loading...</div>
      </div>
    </>
  );
}