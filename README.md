# Pokemon Memory Card Game 🎮

A React-based memory card game that challenges players to click on different Pokemon cards without clicking the same one twice. Built as part of The Odin Project curriculum to practice React hooks and API integration.

## 🔗 Live Demo

**[Play the Game Here!](https://memory-card-8klg92cmt-luisdaniel0s-projects.vercel.app/)**d

## 🎯 Game Objective

Click on as many different Pokemon cards as possible without clicking the same card twice. Each click shuffles the cards, making it increasingly challenging to remember which Pokemon you've already selected.

## ✨ Features

- **Dynamic Card Shuffling**: Cards randomly shuffle after each click to increase difficulty
- **Score Tracking**:
  - Current score displays your streak of unique selections
  - Best score tracks your highest achievement across sessions
- **Pokemon API Integration**: Fetches real Pokemon data and images from the PokeAPI
- **Responsive Design**: Clean, modern UI that works on various screen sizes
- **Game State Management**: Uses React hooks (useState, useEffect) for state management

## 🛠️ Technologies Used

- **React** - Component-based UI library
- **JavaScript (ES6+)** - Modern JavaScript features
- **Pokemon API** - External API for Pokemon data and sprites
- **CSS3** - Styling and animations
- **Vite** - Build tool and development server

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <your-repo-url>
cd pokemon-memory-game
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎮 How to Play

1. The game starts with a set of Pokemon cards displayed on screen
2. Click on any Pokemon card to start the game
3. After each click, the cards will shuffle randomly
4. Continue clicking on Pokemon you haven't selected yet
5. If you click the same Pokemon twice, your current score resets to 0
6. Try to beat your best score!

## 📁 Project Structure

```
pokemon-memory-game/
├── src/
│   ├── components/
│   │   ├── Card.jsx          # Individual Pokemon card component
│   │   ├── Scoreboard.jsx    # Score display component
│   │   └── CardGrid.jsx      # Grid container for cards
│   ├── App.jsx               # Main application component
│   ├── App.css               # Application styles
│   └── main.jsx              # Entry point
├── public/
├── index.html
└── package.json
```

## 🧩 Key Concepts Learned

- **React Hooks**:
  - `useState` for managing game state (score, clicked cards, card data)
  - `useEffect` for fetching data from API on component mount
- **API Integration**: Fetching and handling data from external APIs
- **Component Architecture**: Breaking down UI into reusable components
- **State Management**: Managing complex application state
- **Array Manipulation**: Shuffling arrays and tracking user selections
- **Conditional Rendering**: Displaying different UI based on game state

## 🎨 Customization Ideas

Want to make this project your own? Try:

- Adding difficulty levels (more/fewer cards)
- Implementing a timer
- Adding sound effects
- Using a different API (Giphy, Rick and Morty, etc.)
- Adding animations and transitions
- Creating themed card sets
- Adding localStorage to persist best scores

## 🐛 Challenges Faced

- Implementing proper card shuffling algorithm
- Managing state without clicking the same card twice
- Fetching and handling async data from the Pokemon API
- Creating responsive card layouts
- Resetting game state properly

## 📚 Resources

- [The Odin Project - Memory Card](https://www.theodinproject.com/lessons/node-path-react-new-memory-card)
- [PokeAPI Documentation](https://pokeapi.co/)
- [React Documentation](https://react.dev/)

## 🎓 Acknowledgments

This project was completed as part of [The Odin Project](https://www.theodinproject.com/)'s React curriculum, an excellent open-source coding education platform.

---

**Note**: This is a learning project created to practice React fundamentals and API integration. Feel free to use it as inspiration for your own projects!
