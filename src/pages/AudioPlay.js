import { Container } from 'react-bootstrap';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function AudioPlay(props){
    
  const Player = () => (
    <AudioPlayer
      src={process.env.PUBLIC_URL + '/Winner_Winner_Funky_Chicken_Dinner.mp3'}
      onPlay={e => console.log("onPlay")}
      // other props here
    />
  );
    return(
      <>
        <Container>
          <div style={{margin: "10px",}}>
            <Player />
          </div>
        </Container>
      </>
    )
}

export default AudioPlay;

