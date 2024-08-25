import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import io from 'socket.io-client';

const socket = io('https://gamemate.onrender.com');

const Matchmaking = () => {
    const [friendEmail, setFriendEmail] = useState('');
    const [selectedGame, setSelectedGame] = useState('');
    const [myEmail, setMyEmail] = useState('');
    const navigate = useNavigate();

    const handleInitiateMatchmaking = async () => {
        try {
            const response = await fetch('https://gamemate.onrender.com/initiate-matchmaking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    sender: myEmail,
                    target: friendEmail,
                    url: 'http://localhost:3001', 
                    type: selectedGame 
                })
            });

            

            if (response.ok) {
                console.log('Matchmaking initiated');
                //  socket.emit('matchmaking', { sender: myEmail, target: friendEmail, url: 'http://localhost:3001', type: selectedGame });
                socket.on('matchmaking-accepted', ({ sender, target, url, type }) => {
                    if (target === sender ) { 
                        window.location.href = url;
                    }
                });
            } else {
                console.error('Failed to initiate matchmaking');
            }
        } catch (error) {
            console.error('Error initiating matchmaking:', error);
        }
    };

    return (
        <div style ={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            marginLeft: '300px'
        }}>
            <h2>Start a Game</h2>
            <input
                type="string"
                placeholder="Enter your email"
                value={myEmail}
                onChange={(e) => setMyEmail(e.target.value)}
            />
            <input
                type="string"
                placeholder="Enter friend's email"
                value={friendEmail}
                onChange={(e) => setFriendEmail(e.target.value)}
            />
            <select value={selectedGame} onChange={(e) => setSelectedGame(e.target.value)}>
                <option value="">Select a game</option>
                <option value="chess">Chess</option>
                <option value="checkers">Checkers</option>
            </select>
            <button onClick={handleInitiateMatchmaking}>Initiate Matchmaking</button>
        </div>
    );
};

export default Matchmaking;
