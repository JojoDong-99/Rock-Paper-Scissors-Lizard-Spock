import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import './fontawesome'



export default function GameContainer(params) {
    const [playerChoice, setPlayerChoice] = useState('')

    const allGameIcons = document.querySelectorAll('.fa')

    // function resetSelected() {
    //     switch (playerChoice) {
    //         case 'Rock':
    //             console.log(document.getElementById('playerRock'))
    //             document.getElementById('playerRock').classList.remove('selected')
    //             break;
    //         case 'Paper':
    //             console.log(document.getElementById('playerPaper'))
    //             document.getElementById('playerPaper').classList.remove('selected')
    //             break;
    //         case 'Scissors':
    //             console.log(document.getElementById('playerScissors'))
    //             document.getElementById('playerScissors').classList.remove('selected')
    //             break;
    //         case 'lizard':
    //             console.log(document.getElementById('playerlizard'))
    //             document.getElementById('playerlizard').classList.remove('selected')
    //             break;
    //         case 'Spock':
    //             console.log(document.getElementById('playerSpock'))
    //             document.getElementById('playerSpock').classList.remove('selected')
    //             break;
    //         default:
    //             break;
    //     }
    // }

    return (
        <div className="game-container">
            <div className="player-container" id="player">
                <h2>You -
                    <div className="choice" id="player-choice">{playerChoice}</div>
                </h2>
                <FontAwesomeIcon icon={['far', 'hand-rock']} className={playerChoice === 'Rock' ? 'selected' : 'fa'} id="playerRock" size="3x" onClick={() => {
                    setPlayerChoice('Rock')
                }} />
                <FontAwesomeIcon icon={['far', 'hand-paper']} className={playerChoice === 'Paper' ? 'selected' : 'fa'} id="playerPaper" size="3x" onClick={() => {
                    setPlayerChoice('Paper')
                }} />
                <FontAwesomeIcon icon={['far', 'hand-scissors']} className={playerChoice === 'Scissors' ? 'selected' : 'fa'} id="playerScissors" size="3x" onClick={() => {setPlayerChoice('Scissors')
                }}
                />
                <FontAwesomeIcon icon={['far', 'hand-lizard']} className={playerChoice === 'Lizard' ? 'selected' : 'fa'} id="playerLizard" size="3x" onClick={() => {setPlayerChoice('Lizard')}}
                />
                <FontAwesomeIcon icon={['far', 'hand-spock']} className={playerChoice === 'Spock' ? 'selected' : 'fa'} id="playerSpock" size="3x" onClick={() => {setPlayerChoice('Spock')}}
                />
            </div>
            <div className="player-container" id="computer">
                <h2>Computer -
                    <div className="choice" id="computer-choice"></div>
                </h2>
                <FontAwesomeIcon icon={['far', 'hand-rock']} className="fa" id="computerRock" size="3x" />
                <FontAwesomeIcon icon={['far', 'hand-paper']} className="fa" id="computerPaper" size="3x" />
                <FontAwesomeIcon icon={['far', 'hand-scissors']} className="fa" id="computerScissors" size="3x" />
                <FontAwesomeIcon icon={['far', 'hand-lizard']} className="fa" id="computerLizard" size="3x" />
                <FontAwesomeIcon icon={['far', 'hand-spock']} className="fa" id="computerSpock" size="3x" />
            </div>
        </div>
    )
}