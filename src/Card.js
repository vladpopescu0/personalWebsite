import React , {useState, useEffect} from 'react';
import './Card.css';
import calendarIcon from './images/calendar.png'; 
const Card = (props) => {
    const { title, content, imageUrl, dateAdded } = props;
    const [isTextVisible, setIsTextVisible] = useState(true);

    const checkWindowSize = () => {
        if (window.innerWidth < 900) {
          setIsTextVisible(false);
        } else {
          setIsTextVisible(true);
        }
    };

    useEffect(()=>{
        checkWindowSize();
        window.addEventListener('resize',checkWindowSize);

        return () =>{
            window.removeEventListener('resize',checkWindowSize);
        }

    });


    return (
        <div className="card">
            {/* Render the image if an imageUrl is provided */}
            {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}

            <div className="card-text">
                {/* Render the title */}
                <h2 className="card-title">{title}</h2>

                {/* Render the content */}
                {isTextVisible && <p className="card-content">{content}</p>}

                {/* Render the date added with calendar icon */}
                <div className="date-added">
                    <img src={calendarIcon} alt="Calendar" className="calendar-icon" />
                    <span className="date-text">{dateAdded}</span>
                </div>
            </div>
        </div>
    );
}

export default Card;
