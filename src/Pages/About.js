import '../Stylesheets/About.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaFileAlt } from 'react-icons/fa';
import AboutCard from '../components/AboutCard';
import myImg2 from '../assets/myImg2.jpg';

export default function About() {
    return (
        <>
            <div className='aboutContainer'>
                <div className='aboutImageContainer'>
                    <LazyLoadImage className='aboutMeImg' src={ myImg2 } alt='' />
                </div>
                <div className='aboutMeDataContainer'>
                    <div className='contactsContainer'>
                        <a className='contactLink' href='https://github.com/Bhavesh-Mittal' target='_blank' rel='noopener noreferrer' title='GitHub'><BsGithub className='contactIcon' /></a>
                        <a className='contactLink' href='https://www.linkedin.com/in/bhavesh-mittal-602a36254/' target='_blank' rel='noopener noreferrer' title='LinkedIn'><BsLinkedin className='contactIcon' /></a>
                        <a className='contactLink' href='https://docs.google.com/document/d/1omPJKCqjom1tmPlV6-qbcP7mNk9cRsg9/edit?usp=sharing&ouid=111868942714712607093&rtpof=true&sd=true' target='_blank' rel='noopener noreferrer' title='Resume'><FaFileAlt className='contactIcon' /></a>
                    </div>
                    <AboutCard title='Personal Information'
                        point1={ <p>Full Name : Bhavesh Mittal</p> }
                        point2={ <p>Date Of Birth : 28/10/2006</p> }
                    />
                    <AboutCard title='Education'
                        point1={ <p>Delhi Public School, New Delhi <br /> (2012-2024)</p> }
                        point2={ <p>Bhatnagar International School, New Delhi <br /> (2011-2012)</p> }
                        point3={ <p>Modern International School, Dubai <br /> (2010-2011)</p> }
                    />
                    <AboutCard title='Interests'
                        point1={ <p>Indulging myself in sports like swimming, basketball, tennis etc.</p> }
                        point2={ <p>Solving logical and analytical problems</p> }
                        point3={ <p>Reading mystery books</p> }
                    />               
                </div>   
            </div>
        </>
    );
}