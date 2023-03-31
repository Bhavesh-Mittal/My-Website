import '../Stylesheets/Achievements.css';
import AchievementCard from '../components/AchievementCard';
import abacusImg from '../assets/abacusImg.jpg';
import ehfImg from '../assets/ehfImg.jpg';
import handDetectionImg from '../assets/handDetectionImg.jpg';
import sofImg from '../assets/sofImg.jpg';
import swimmingImg from '../assets/swimmingImg.jpg';
import vedicMathsImg from '../assets/vedicMathsImg.jpg';
import whatsappCloneImg from '../assets/whatsappCloneImg.jpg';
import blueBlazer from '../assets/blueBlazer.jpg';
import internshipImg from '../assets/internshipImg.jpg';
import mtaImg from '../assets/mtaImg.jpg';

export default function Achievements() {
    return (
        <>
            <div className='cardsContainer'>
                <AchievementCard image={ internshipImg } title='Pine Labs Internship' description='I used Python to automate Excel and Outlook for a live RPA project at PineLabs. This taught me how to problem-solve in a structured way, map process improvements, and deliver successful solutions for resolving chargeback cycles' />
                <AchievementCard image={ mtaImg } title='Microsoft Technology Associate Certificate' description='This helped me learn the universal programming concepts, Python syntax and semantics, standard language infrastructure and fundamental programming techniques' />
            </div>
            <div className='cardsContainer'>
                <AchievementCard image={ whatsappCloneImg } title='WhatsApp Clone' description={ <p>I built a simple <a href='https://github.com/Bhavesh-Mittal/Whatsapp' target='_blank' rel='noopener noreferrer'>copy of WhatsApp</a> using React Native : specifically the <a href='https://www.npmjs.com/package/react-native-gifted-chat?activeTab=readme' target='_blank' rel='noopener noreferrer'>Gifted Chat</a> package. This helped me understand the core fundamentals of React Native and how real-time messaging works</p> } />
                <AchievementCard image={ handDetectionImg } title='Hand Detection' description={ <p>I developed a <a href='https://github.com/Bhavesh-Mittal/Hand-Detection' target='_blank' rel='noopener noreferrer'>hand detection program</a> using Python computer vision techniques. Through this project, I learned how to use the OpenCV library to detect and track objects in real-time video stream</p> } />
            </div>
            <div className='cardsContainer'>
                <AchievementCard image={ abacusImg } title='Abacus' description='Completed all 10 levels of Abacus in 8 years; in the process helping me build a strong academic foundation, boosting my creativity and increasing my concentration' />
                <AchievementCard image={ vedicMathsImg } title='Vedic Maths' description='Completed all 3 levels of Vedic Maths in 3 years; in the process helping me solve tricky calculations in a few seconds and enhancing my logical reasoning skills' />
            </div>
            <div className='cardsContainer'>
                <AchievementCard image={ swimmingImg } title='Swimming' description='Trained swimmer since the age of 4' />
                <AchievementCard image={ blueBlazer } title='School Blue Blazer' description='Awarded the school blue blazer twice (2019 & 2022) for scoring above 80% for three consecutive years' />
            </div>
            <div className='cardsContainer'>
                <AchievementCard image={ sofImg } title='SOF Olympiads' description={ <p>Participated in many olympiads hosted by <a href='https://www.sofworld.org' target='_blank' rel='noopener noreferrer'>Science Olympiad Foundation (SOF)</a> like IMO, IEO and NSO; winning gold and solver medals in IMO and NSO</p> } />
                <AchievementCard image={ ehfImg } title='EHF Olympiads' description={ <p>Took part in various olympiads held by <a href='https://www.eduhealfoundation.org/' target='_blank' rel='noopener noreferrer'>EduHeal Foundation (EHF)</a> including NIMO, IGKO and NSSO; winning a silver medal in NIMO</p> } />
            </div>
        </>
    );
}