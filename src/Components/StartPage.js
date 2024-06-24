import React from 'react';
import { Link } from 'react-router-dom';
import './StartPage.css';

const StartPage = () => {
    return (
        <div className="start-page">
            <div className="video-container">
                {/* <img src="https://via.placeholder.com/600x400" alt="Video Thumbnail" className="video-thumbnail" /> */}
                <div className="play-button">
                    <i className="fa fa-play-circle"></i>
                </div>
            </div>
            <div className="content">
                <h1>Disillusioned, Cynical, or Hopeful?</h1>
                <p>
                    Disillusionment in ministry is inevitable, but its outcome is not.
                    Where are you on the journey from idealism to enduring hope?
                </p>
                <Link to="/questions" className="get-started-button">
                    GET STARTED
                </Link>
                <div className="time-info">
                    <i className="fa fa-clock-o"></i> 3 min
                </div>
            </div>
        </div>
    );
};

export default StartPage;
