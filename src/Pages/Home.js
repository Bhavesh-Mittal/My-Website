import '../Stylesheets/Home.css';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { MdOutlineWavingHand } from 'react-icons/md';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import myImg1 from '../assets/myImg1.jpg';

export default function Home() {
    return (
        <>
            <div className='homePage'>
                <div className='homeContainer'>
                    <div className='homeDataContainer'>
                        <div className='helloContainer'>
                            <MdOutlineWavingHand className='wavingHand' /> Hi there
                        </div>
                        <div className='dataContainer'>
                            My name is Bhavesh Mittal. I'm a higher secondary school student and an aspiring software engineer.
                        </div>
                        <div className='linkContainer'>
                            <Link className='moreAbout' to='/about'>More about me</Link>
                            <Link className='moreAbout' to='/about'><BsArrowRight className='arrow' /></Link>
                        </div>
                    </div>
                    <div className='homeImageContainer'>
                        <LazyLoadImage className='homeImg' src={ myImg1 } alt='' />
                    </div>
                </div>
            </div>    
        </>
    );
}