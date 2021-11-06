import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react';
import './fontawesome'

const choices = {
    rock: { name: 'Rock', defeats: ['Scissors', 'Lizard'] },
    paper: { name: 'Paper', defeats: ['Rock', 'Spock'] },
    scissors: { name: 'Scissors', defeats: ['Paper', 'Lizard'] },
    lizard: { name: 'Lizard', defeats: ['Paper', 'Spock'] },
    spock: { name: 'Spock', defeats: ['Scissors', 'Rock'] },
}

export default function GameContainer(params) {
    const [playerChoice, setPlayerChoice] = useState()
    const [computerChoice, setComputerChoice] = useState()
    const [result, setResult] = useState()

    // let playerScore = 0
    // let computerScore = 0


    function getComputerRandomChoice() {
        const randomChoiceNum = Math.floor(Math.random() * 5) + 1
        switch (randomChoiceNum) {
            case 1:
                setComputerChoice('Rock')
                return 'Rock'
                // break;
            case 2:
                setComputerChoice('Paper')
                return 'Paper'
            case 3:
                setComputerChoice('Scissors')
                return 'Scissors'
            case 4:
                setComputerChoice('Lizard')
                return 'Lizard'
            case 5:
                setComputerChoice('Spock')
                return 'Spock'
            default:
                break;
        }
    }

    function process(player) {
        console.log('pass parameter: choice is ',player)
        setPlayerChoice(player)
        const computer = getComputerRandomChoice()
        console.log('Got computer choice is ', computer)
        if (player === computer) {
            setResult("It's a tie.")
        } else {
            console.log('playerChoice is ', player)
            const choice = choices[player]
            console.log('choice is ', choice)
            // console.log(choice.defeats)
            // if (choice.defeats.indexOf(computerChoice) > -1) {
            //     setResult('You won!')
            // } else {
            //     setResult('You Lost!')
            // }
        }
    }

    function checkResult() {
        console.log(playerChoice)
        console.log(computerChoice)
        if (playerChoice === computerChoice) {
            // console.log("inside")
            // console.log(playerChoice)
            // console.log(computerChoice)
            setResult("It's a tie.")
        } else {
            console.log('playerChoice is ', playerChoice)
            const choice = choices[playerChoice]
            console.log('choice is ', choice)
            // console.log(choice.defeats)
            // if (choice.defeats.indexOf(computerChoice) > -1) {
            //     setResult('You won!')
            // } else {
            //     setResult('You Lost!')
            // }
        }
    }

    return (
        <div className="game-container">
            <div className="player-container" id="player">
                <h2>You -
                    <span> </span><span className="choice" id="player-choice">{playerChoice}</span>
                </h2>
                <button className='button' onClick={() => {
                    process('Rock')
                }} >
                    <FontAwesomeIcon icon={['far', 'hand-rock']} className={playerChoice === 'Rock' ? 'selected' : 'fa'} id="playerRock" size="3x"
                    />
                </button>

                <FontAwesomeIcon icon={['far', 'hand-paper']} className={playerChoice === 'Paper' ? 'selected' : 'fa'} id="playerPaper" size="3x" onClick={() => {
                    process('Paper')
                }} />
                <FontAwesomeIcon icon={['far', 'hand-scissors']} className={playerChoice === 'Scissors' ? 'selected' : 'fa'} id="playerScissors" size="3x" onClick={() => {
                    process('Scissors')
                }}
                />
                <FontAwesomeIcon icon={['far', 'hand-lizard']} className={playerChoice === 'Lizard' ? 'selected' : 'fa'} id="playerLizard" size="3x" onClick={() => {
                    process('Lizard')
                }}
                />
                <FontAwesomeIcon icon={['far', 'hand-spock']} className={playerChoice === 'Spock' ? 'selected' : 'fa'} id="playerSpock" size="3x" onClick={() => {
                    process('Spock')
                }}
                />
            </div>
            <div className="player-container" id="computer">
                <h2>Computer -
                    <span className="choice" id="computer-choice">{computerChoice}</span>
                </h2>
                <FontAwesomeIcon icon={['far', 'hand-rock']} className={computerChoice === 'Rock' ? 'selected' : 'fa'} id="computerRock" size="3x" />
                <FontAwesomeIcon icon={['far', 'hand-paper']} className={computerChoice === 'Paper' ? 'selected' : 'fa'} id="computerPaper" size="3x" />
                <FontAwesomeIcon icon={['far', 'hand-scissors']} className={computerChoice === 'Scissors' ? 'selected' : 'fa'} id="computerScissors" size="3x" />
                <FontAwesomeIcon icon={['far', 'hand-lizard']} className={computerChoice === 'Lizard' ? 'selected' : 'fa'} id="computerLizard" size="3x" />
                <FontAwesomeIcon icon={['far', 'hand-spock']} className={computerChoice === 'Spock' ? 'selected' : 'fa'} id="computerSpock" size="3x" />
            </div>
            <div>{result}</div>
        </div>
    )
}