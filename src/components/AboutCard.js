import '../Stylesheets/AboutCard.css';

export default function AboutCard(props) {
  return (
    <div className='aboutCard'>
        <h1 className='aboutCardTitle'>{ props.title }</h1>
        <div className='aboutCardDescription'>
          <ul>
            <li>{ props.point1 }</li>
            <li>{ props.point2 }</li>
            <li>{ props.point3 }</li>
          </ul>
        </div>
    </div>
  );
}