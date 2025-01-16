import React, { useState, useEffect } from 'react';
import { Shuffle, Trophy, LogIn, LogOut, User, Star, Lock } from 'lucide-react';

const MemoryGame = () => {
  // User state
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginInput, setLoginInput] = useState('');
  
  // Game state
  const [level, setLevel] = useState(1);
  const [theme, setTheme] = useState('animals');
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [unlockedLevels, setUnlockedLevels] = useState([1]);
  const [score, setScore] = useState(0);
  
  // Leaderboard state
  const [leaderboard, setLeaderboard] = useState({});
  const [personalBest, setPersonalBest] = useState({});

  // Define levels configuration
  const levels = {
    1: { name: "Beginner", cards: 8, timeLimit: 60, scoreToUnlock: 0 },
    2: { name: "Easy", cards: 12, timeLimit: 90, scoreToUnlock: 100 },
    3: { name: "Medium", cards: 16, timeLimit: 120, scoreToUnlock: 300 },
    4: { name: "Hard", cards: 24, timeLimit: 180, scoreToUnlock: 600 },
    5: { name: "Expert", cards: 32, timeLimit: 240, scoreToUnlock: 1000 },
    6: { name: "Master", cards: 40, timeLimit: 300, scoreToUnlock: 1500 },
    7: { name: "Champion", cards: 48, timeLimit: 360, scoreToUnlock: 2000 },
    8: { name: "Legend", cards: 52, timeLimit: 420, scoreToUnlock: 2500 },
  };

  // Theme configuration with emojis for each level
  const themes = {
    animals: {
      name: 'Animals',
      emojis: ['🐶', '🐱', '🐰', '🐼', '🦊', '🦁', '🐨', '🐯', '🦒', '🐘', '🦓', '🦔', '🦘', '🦬', 
               '🦣', '🦏', '🦛', '🐪', '🦒', '🦭', '🐄', '🦫', '🦦', '🦡', '🦨', '🐗'],
      colors: {
        primary: 'bg-green-500 hover:bg-green-600',
        secondary: 'bg-green-100',
        accent: 'border-green-500',
        text: 'text-green-800'
      },
      pattern: 'bg-gradient-to-r from-green-50 to-green-100'
    },
    ocean: {
      name: 'Ocean',
      emojis: ['🐠', '🐋', '🦈', '🐡', '🦀', '🐙', '🦑', '🐚', '🐳', '🐟', '🦞', '🦐', '🐌', '🦪', 
               '🐋', '🐬', '🐊', '🦭', '🦫', '🦦', '🐢', '🐍', '🦎', '🐸', '🐉', '🦕'],
      colors: {
        primary: 'bg-blue-500 hover:bg-blue-600',
        secondary: 'bg-blue-100',
        accent: 'border-blue-500',
        text: 'text-blue-800'
      },
      pattern: 'bg-gradient-to-r from-blue-50 to-blue-100'
    },
    fantasy: {
      name: 'Fantasy',
      emojis: ['🧚', '🧙', '🦄', '🐉', '🧜', '🧝', '🧞', '🧛', '🧟', '🧌', '👻', '👽', '👾', '🤖', 
               '🎭', '🌟', '✨', '💫', '⭐', '🌙', '☀️', '🌈', '🔮', '⚡', '🪄', '🎪'],
      colors: {
        primary: 'bg-purple-500 hover:bg-purple-600',
        secondary: 'bg-purple-100',
        accent: 'border-purple-500',
        text: 'text-purple-800'
      },
      pattern: 'bg-gradient-to-r from-purple-50 to-purple-100'
    }
  };

  // Timer effect
  useEffect(() => {
    let interval;
    if (isPlaying && timer < levels[level].timeLimit) {
      interval = setInterval(() => {
        setTimer(prev => {
          if (prev + 1 >= levels[level].timeLimit) {
            handleGameOver();
            return levels[level].timeLimit;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, timer, level]);

  // Load saved data
  useEffect(() => {
    const savedUsername = localStorage.getItem('memoryGameUsername');
    const savedUnlockedLevels = JSON.parse(localStorage.getItem('memoryGameUnlockedLevels')) || [1];
    const savedScore = parseInt(localStorage.getItem('memoryGameScore')) || 0;
    
    if (savedUsername) {
      setUsername(savedUsername);
      setIsLoggedIn(true);
      setUnlockedLevels(savedUnlockedLevels);
      setScore(savedScore);
      loadPersonalBest(savedUsername);
    }
  }, []);

  const loadPersonalBest = (user) => {
    const savedBest = localStorage.getItem(`memoryGame_${user}_best`);
    if (savedBest) {
      setPersonalBest(JSON.parse(savedBest));
    }
  };

  const handleLogin = () => {
    if (loginInput.trim()) {
      setUsername(loginInput);
      setIsLoggedIn(true);
      localStorage.setItem('memoryGameUsername', loginInput);
      loadPersonalBest(loginInput);
      setLoginInput('');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    localStorage.removeItem('memoryGameUsername');
    setUnlockedLevels([1]);
    setScore(0);
    setPersonalBest({});
  };

  const initializeGame = () => {
    const numPairs = levels[level].cards / 2;
    const gameCards = [];
    const themeEmojis = [...themes[theme].emojis];
    
    // Create pairs of cards
    for (let i = 0; i < numPairs; i++) {
      const emoji = themeEmojis[i];
      gameCards.push(emoji);
      gameCards.push(emoji);
    }
    
    const shuffledCards = [...gameCards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setGameWon(false);
    setTimer(0);
    setIsPlaying(true);
  };

  const calculateScore = () => {
    const timeBonus = Math.max(0, levels[level].timeLimit - timer);
    const movesPenalty = moves * 2;
    const levelBonus = level * 50;
    return Math.max(0, 100 + timeBonus + levelBonus - movesPenalty);
  };

  const handleGameOver = () => {
    setIsPlaying(false);
    if (matched.length !== cards.length) {
      setGameWon(false);
    }
  };

  const handleCardClick = (index) => {
    if (!isPlaying || flipped.length === 2 || flipped.includes(index) || matched.includes(index)) {
      return;
    }

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(moves + 1);
      const [first, second] = newFlipped;
      
      if (cards[first] === cards[second]) {
        setMatched([...matched, first, second]);
        setFlipped([]);
        
        if (matched.length + 2 === cards.length) {
          handleGameWin();
        }
      } else {
        setTimeout(() => setFlipped([]), 1000);
      }
    }
  };

  const handleGameWin = () => {
    setGameWon(true);
    setIsPlaying(false);
    
    if (isLoggedIn) {
      const gameScore = calculateScore();
      const newTotalScore = score + gameScore;
      setScore(newTotalScore);
      
      // Update unlocked levels
      const newUnlockedLevels = [...unlockedLevels];
      Object.entries(levels).forEach(([levelNum, config]) => {
        if (newTotalScore >= config.scoreToUnlock && !newUnlockedLevels.includes(parseInt(levelNum))) {
          newUnlockedLevels.push(parseInt(levelNum));
        }
      });
      
      setUnlockedLevels(newUnlockedLevels);
      localStorage.setItem('memoryGameUnlockedLevels', JSON.stringify(newUnlockedLevels));
      localStorage.setItem('memoryGameScore', newTotalScore.toString());
      
      // Update personal best
      const currentScore = { moves, time: timer, score: gameScore };
      if (!personalBest[level] || gameScore > personalBest[level].score) {
        const newPersonalBest = { ...personalBest, [level]: currentScore };
        setPersonalBest(newPersonalBest);
        localStorage.setItem(`memoryGame_${username}_best`, JSON.stringify(newPersonalBest));
      }
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`max-w-6xl mx-auto p-4 min-h-screen ${themes[theme].pattern}`}>
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className={`text-3xl font-bold ${themes[theme].text}`}>Memory Game</h1>
        
        {/* User Section */}
        <div className="flex items-center gap-4">
          {!isLoggedIn ? (
            <div className="flex gap-2">
              <input
                type="text"
                value={loginInput}
                onChange={(e) => setLoginInput(e.target.value)}
                placeholder="Enter username"
                className="px-3 py-2 border rounded"
              />
              <button
                onClick={handleLogin}
                className={`flex items-center gap-2 px-4 py-2 ${themes[theme].primary} text-white rounded`}
              >
                <LogIn className="w-4 h-4" />
                Login
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {username}
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                Score: {score}
              </span>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Game Controls */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-4">
          <select
            value={level}
            onChange={(e) => setLevel(parseInt(e.target.value))}
            className="px-3 py-2 border rounded"
          >
            {Object.entries(levels).map(([num, config]) => (
              <option 
                key={num} 
                value={num}
                disabled={!unlockedLevels.includes(parseInt(num))}
              >
                {config.name} ({config.cards} cards) {!unlockedLevels.includes(parseInt(num)) && '🔒'}
              </option>
            ))}
          </select>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="px-3 py-2 border rounded"
          >
            {Object.entries(themes).map(([key, value]) => (
              <option key={key} value={key}>{value.name}</option>
            ))}
          </select>
          <button
            onClick={initializeGame}
            className={`flex items-center gap-2 px-4 py-2 ${themes[theme].primary} text-white rounded`}
          >
            <Shuffle className="w-4 h-4" />
            New Game
          </button>
        </div>
        
        <div className="flex gap-4 items-center">
          <span>Moves: {moves}</span>
          <span>Time: {formatTime(timer)} / {formatTime(levels[level].timeLimit)}</span>
        </div>
      </div>

      {/* Game Grid */}
      <div className={`grid gap-4 mb-6 ${
        cards.length <= 12 ? 'grid-cols-4' :
        cards.length <= 20 ? 'grid-cols-5' :
        cards.length <= 30 ? 'grid-cols-6' :
        'grid-cols-8'
      }`}>
        {cards.map((card, index) => (
          <button
            key={index}
            onClick={() => handleCardClick(index)}
            className={`aspect-square text-4xl flex items-center justify-center rounded-lg transition-all duration-300 transform 
              ${flipped.includes(index) || matched.includes(index)
                ? `${themes[theme].secondary} ${themes[theme].accent} border-2`
                : themes[theme].primary}`}
            disabled={!isPlaying}
          >
            {(flipped.includes(index) || matched.includes(index)) ? (
              <span className="text-4xl">{card}</span>
            ) : '?'}
          </button>
        ))}
      </div>

      {/* Level Progress Section */}
      {isLoggedIn && (
        <div className="mb-6 p-4 bg-white rounded-lg shadow">
          <h2 className={`text-xl font-bold mb-4 ${themes[theme].text}`}>Level Progress</h2>
          <div className="grid grid-cols-4 gap-4">
            {Object.entries(levels).map(([num, config]) => (
              <div 
                key={num}
                className={`p-4 rounded-lg border ${
                  unlockedLevels.includes(parseInt(num))
                    ? themes[theme].accent
                    : 'border-gray-300'
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold">{config.name}</span>
                  {!unlockedLevels.includes(parseInt(num)) && (
                    <Lock className="w-4 h-4 text-gray-500" />
                  )}
                </div>
                <div className="text-sm text-gray-600">
                  <p>Cards: {config.cards}</p>
                  <p>Time: {formatTime(config.timeLimit)}</p>
                  <p>Required Score: {config.scoreToUnlock}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Personal Best Section */}
      {isLoggedIn && Object.keys(personalBest).length > 0 && (
        <div className="mb-6">
          <h2 className={`text-xl font-bold mb-4 ${themes[theme].text}`}>Your Best Scores</h2>
          <div className="grid grid-cols-4 gap-4">
            {Object.entries(personalBest).map(([level, stats]) => (
              <div key={level} className="p-4 bg-white rounded-lg shadow">
                <h3 className="font-bold mb-2">{levels[level].name}</h3>
                <p>Moves: {stats.moves}</p>
                <p>Time: {formatTime(stats.time)}</p>
                <p>Score: {stats.score}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Game Over Modal */}
      {(gameWon || (!isPlaying && timer >= levels[level].timeLimit)) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg text-center max-w-md">
            <h2 className={`text-2xl font-bold mb-4 ${
              gameWon ? 'text-green-600' : 'text-red-600'
            }`}>
              {gameWon ? 'Congratulations!' : 'Time\'s Up!'}
            </h2>
            {gameWon && (
              <>
                <p className="mb-2">
                  Moves: {moves} | Time: {formatTime(timer)}
                </p>
                <p className="mb-4">
                  Score: {calculateScore()}
                </p>
                {level < Object.keys(levels).length && (
                  <p className="mb-4">
                    {unlockedLevels.includes(level + 1) 
                      ? 'Next level unlocked!'
                      : `Score ${levels[level + 1].scoreToUnlock} points to unlock next level`}
                  </p>
                )}
              </>
            )}
            <div className="flex gap-4 justify-center">
              <button
                onClick={initializeGame}
                className={`px-4 py-2 ${themes[theme].primary} text-white rounded`}
              >
                Play Again
              </button>
              {gameWon && level < Object.keys(levels).length && unlockedLevels.includes(level + 1) && (
                <button
                  onClick={() => {
                    setLevel(level + 1);
                    initializeGame();
                  }}
                  className={`px-4 py-2 ${themes[theme].primary} text-white rounded`}
                >
                  Next Level
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemoryGame;
