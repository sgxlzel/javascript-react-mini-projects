import yor from './assets/yor.png';

function Card(){
    return(
        <div className="card">
            <img className="profile-pic" src={yor} alt="profile picture" />
            <h2>YOR FORGER</h2>
            <p>Yor forger is a skilled assassin from the fictional world of "Spy x Family".</p>
        </div>
    );
}
export default Card;