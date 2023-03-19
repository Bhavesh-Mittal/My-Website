import '../Stylesheets/NotFound.css';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <>
            <div className='notFoundContainer'>
                <div className='notFoundContent'>
                    <h1 className='notFoundTitle'>404 - Page not found</h1>
                    <p className='notFoundText'>The page you're looking for could not be found.</p>
                    <Link to='/' className='notFoundLink'>Go back to the homepage</Link>
                </div>
            </div>
        </>
    );
}