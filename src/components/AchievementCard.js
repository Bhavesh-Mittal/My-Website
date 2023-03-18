import '../Stylesheets/AchievementCard.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function AchievementCard(props) {
  return (
    <div className='achievementCard'>
		<div className='achievementCardImgContainer'>
			<LazyLoadImage className='achievementCardImg' alt='' src={ props.image } />
		</div>
		<div className='achievementCardTextContainer'>
			<h1 className='achievementCardTitle'>{ props.title }</h1>
			<p className='achievementCardDescription'>{ props.description }</p>
		</div>
	</div>
  );
}