import '../Stylesheets/About.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
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
                        <a className='contactLink' href='https://github.com/Bhavesh-Mittal' rel='noopener noreferrer'><BsGithub className='contactIcon' /></a>
                        <a className='contactLink' href='https://www.linkedin.com/in/bhavesh-mittal-602a36254/' rel='noopener noreferrer'><BsLinkedin className='contactIcon' /></a>
                        <a className='contactLink' href='mailto:bhavesh.mittal2810@gmail.com' rel='noopener noreferrer'><MdEmail className='contactIcon' /></a>
                    </div>
                    <AboutCard title='Personal Information'
                        point1={ <p>Full Name : Bhavesh Mittal</p> }
                        point2={ <p>Date Of Birth : 28/10/2006</p> }
                        point3={ <p>Zodiac Sign : Scorpio</p> }
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