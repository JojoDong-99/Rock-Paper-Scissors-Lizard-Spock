import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import './fontawesome'

const choices = {
    Rock: { name: 'Rock', defeats: ['Scissors', 'Lizard'] },
    Paper: { name: 'Paper', defeats: ['Rock', 'Spock'] },
    Scissors: { name: 'Scissors', defeats: ['Paper', 'Lizard'] },
    Lizard: { name: 'Lizard', defeats: ['Paper', 'Spock'] },
    Spock: { name: 'Spock', defeats: ['Scissors', 'Rock'] },
}

export default function GameContainer(params) {
    const [playerChoiceState, setPlayerChoiceState] = useState()
    const [computerChoiceState, setComputerChoiceState] = useState()
    const [result, setResult] = useState()
    let name
    let [playerName, setPlayerName] = useState('Player')
    let [playerScore, setPlayerScore] = useState(0)
    let [computerScore, setComputerScore] = useState(0)

    const handleSubmit = () => {
        setPlayerName(name)
    }
    
    const getComputerRandomChoice = () => {
        const randomChoiceNum = Math.floor(Math.random() * 5) + 1
        switch (randomChoiceNum) {
            case 1:
                setComputerChoiceState('Rock')
                return 'Rock'
            // break;
            case 2:
                setComputerChoiceState('Paper')
                return 'Paper'
            case 3:
                setComputerChoiceState('Scissors')
                return 'Scissors'
            case 4:
                setComputerChoiceState('Lizard')
                return 'Lizard'
            case 5:
                setComputerChoiceState('Spock')
                return 'Spock'
            default:
                break;
        }
    }
    // function getComputerRandomChoice() {
    //     const randomChoiceNum = Math.floor(Math.random() * 5) + 1
    //     switch (randomChoiceNum) {
    //         case 1:
    //             setComputerChoiceState('Rock')
    //             return 'Rock'
    //         // break;
    //         case 2:
    //             setComputerChoiceState('Paper')
    //             return 'Paper'
    //         case 3:
    //             setComputerChoiceState('Scissors')
    //             return 'Scissors'
    //         case 4:
    //             setComputerChoiceState('Lizard')
    //             return 'Lizard'
    //         case 5:
    //             setComputerChoiceState('Spock')
    //             return 'Spock'
    //         default:
    //             break;
    //     }
    // }

    function process(playerChoice) {
        setPlayerChoiceState(playerChoice)
        const computerChoice = getComputerRandomChoice()
        if (playerChoice === computerChoice) {
            setResult("It's a tie.")
        } else {
            const choice = choices[playerChoice]
            if (choice.defeats.indexOf(computerChoice) > -1) {
                setPlayerScore(playerScore + 1)
                setResult('You won!')
            } else {
                setResult('You Lost!')
                setComputerScore(computerScore + 1)
            }
        }
    }

    return (
        <div className="game-container">
            
                <label>
                    Name:
                    <input type="text" name="name" onChange={e => name = (e.target.value)}/>
                </label>
                <button onClick={handleSubmit}>Submit</button>
            
            <div className="player-container" id="player">
                <h2>{playerName} -
                    <span> </span><span className="choice" id="player-choice">{playerChoiceState}</span>
                    <span>Score: {playerScore}</span>
                </h2>
                <FontAwesomeIcon icon={['far', 'hand-rock']} className={playerChoiceState === 'Rock' ? 'selected' : 'fa'} id="playerRock" size="3x" onClick={() => {
                    process('Rock')
                }}
                />
                <FontAwesomeIcon icon={['far', 'hand-paper']} className={playerChoiceState === 'Paper' ? 'selected' : 'fa'} id="playerPaper" size="3x" onClick={() => {
                    process('Paper')
                }} />
                <FontAwesomeIcon icon={['far', 'hand-scissors']} className={playerChoiceState === 'Scissors' ? 'selected' : 'fa'} id="playerScissors" size="3x" onClick={() => {
                    process('Scissors')
                }}
                />
                <FontAwesomeIcon icon={['far', 'hand-lizard']} className={playerChoiceState === 'Lizard' ? 'selected' : 'fa'} id="playerLizard" size="3x" onClick={() => {
                    process('Lizard')
                }}
                />
                <FontAwesomeIcon icon={['far', 'hand-spock']} className={playerChoiceState === 'Spock' ? 'selected' : 'fa'} id="playerSpock" size="3x" onClick={() => {
                    process('Spock')
                }}
                />
            </div>
            <div className="player-container" id="computer">
                <h2>Computer -
                    <span className="choice" id="computer-choice">{computerChoiceState}</span>
                    <span>{`Score: ${computerScore}`}</span>
                </h2>
                <FontAwesomeIcon icon={['far', 'hand-rock']} className={computerChoiceState === 'Rock' ? 'selected' : 'fa'} id="computerRock" size="3x" />
                <FontAwesomeIcon icon={['far', 'hand-paper']} className={computerChoiceState === 'Paper' ? 'selected' : 'fa'} id="computerPaper" size="3x" />
                <FontAwesomeIcon icon={['far', 'hand-scissors']} className={computerChoiceState === 'Scissors' ? 'selected' : 'fa'} id="computerScissors" size="3x" />
                <FontAwesomeIcon icon={['far', 'hand-lizard']} className={computerChoiceState === 'Lizard' ? 'selected' : 'fa'} id="computerLizard" size="3x" />
                <FontAwesomeIcon icon={['far', 'hand-spock']} className={computerChoiceState === 'Spock' ? 'selected' : 'fa'} id="computerSpock" size="3x" />
            </div>
            <h1>{result}</h1>
        </div>
    )
}