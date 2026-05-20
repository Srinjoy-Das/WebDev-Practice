import profilePic from './assets/hero.png'


function Card() {
    
    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile picture" />
            <h2 className='card-title' >Srinjoy Das</h2>
            <p className='card-text' >I am a student and I want a Very Good Job</p>
        </div>
    );

}

export default Card