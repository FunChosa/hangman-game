# Hangman Game

A classic Hangman game built with React and Vite, challenging players to guess a hidden programming-related word before running out of attempts.

## Project Setup

1. **Clone the repository:** `git clone https://github.com/FunChosa/hangman-game.git`
2. **Navigate to the project directory:** `cd hangman-game`
3. **Install dependencies:** `npm install`
4. **Start the development server:** `npm run dev`

## Game Mechanics

The game follows the classic Hangman rules:

* The player guesses letters one at a time to reveal a hidden word related to programming.
* Used letters (both correct and incorrect) are deactivated, preventing repeated guesses.
* Incorrect guesses add a body part to the hangman drawing.
* Correct guesses reveal the letter in its correct position within the hidden word, without adding to the hangman drawing.
* The game ends when the player either correctly guesses the word or runs out of attempts.
* Upon game completion, a modal window displays the correct word and the player's win/lose status.


## Technology Stack

* React: ^18.3.1
* Vite: ^5.4.1
* CSS


## State Management

The game's state is managed using the `useState` hook.

## Data Storage

The game words are currently stored in a local JSON file.

## Deployment

The application is deployed on Netlify: https://funchosa-hangman-game.netlify.app


## Future Enhancements

* Add keyboard input for letter guessing.
* Replace the local JSON data with an external API for fetching words.


## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
