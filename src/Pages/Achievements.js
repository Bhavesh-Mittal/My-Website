import '../Stylesheets/Achievements.css';
import AchievementCard from '../components/AchievementCard';
import blueBlazer from '../assets/blueBlazer.jpg';

export default function Achievements() {
    return (
        <>
            <div className='cardsContainer'>
                <AchievementCard image='https://images.pexels.com/photos/1019470/abacus-mathematics-addition-subtraction-1019470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' title='Abacus' description='Completed all 10 levels of Abacus in 8 years; in the process helping me build a strong academic foundation, boosting my creativity and increasing my concentration' />
                <AchievementCard image='https://images.pexels.com/photos/5412499/pexels-photo-5412499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' title='Vedic Maths' description='Completed all 3 levels of Vedic Maths in 3 years; in the process helping me solve tricky calculations in a few seconds and enhancing my logical reasoning skills' />
            </div>
            <div className='cardsContainer'>
                <AchievementCard image='https://images.pexels.com/photos/347143/pexels-photo-347143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' title='Swimming' description='Trained swimmer since the age of 4' />
                <AchievementCard image={ blueBlazer } title='School Blue Blazer' description='Awarded the school blue blazer twice (2019 & 2022) for scoring above 80% for three consecutive years' />
            </div>
            <div className='cardsContainer'>
                <AchievementCard image='https://d3q0c4wmynnr7l.cloudfront.net/sof_logo-01_-_copy.jpg' title='SOF Olympiads' description={ <p>Participated in many olympiads hosted by <a href='https://www.sofworld.org' rel='noopener noreferrer'>Science Olympiad Foundation (SOF)</a> like IMO, IEO and NSO; winning gold and solver medals in IMO and NSO</p> } />
                <AchievementCard image='https://www.ehfworld.com/ERP/logo3.png' title='EHF Olympiads' description={ <p>Took part in various olympiads held by <a href='https://www.eduhealfoundation.org/' rel='noopener noreferrer'>EduHeal Foundation (EHF)</a> including NIMO, IGKO and NSSO; winning a silver medal in NIMO</p> } />
            </div>
        </>
    );
}