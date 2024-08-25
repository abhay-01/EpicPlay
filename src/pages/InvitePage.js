import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { useNavigate } from 'react-router-dom';
import  openSocket from 'socket.io-client';
import axios from 'axios';

const socket = io('https://gamemate.onrender.com');

const InvitePage = () => {
    const [email, setEmail] = useState('');
    const [invites, setInvites] = useState([]);
    const [matchedInvite, setMatchedInvite] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("PEHLE WALA USEEFECT");
      socket.on('matchmaking', (data) => {
          console.log('Received matchmaking data:', data);
          setInvites((prevInvites) => [...prevInvites, data]);
      });

    
  socket.on("matchmaking", "HELLO");
      return () => {
          socket.off('matchmaking');
      };
  }, []);
  

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    const handleAcceptInvite = async () => {
        if (matchedInvite) {
            const { sender, target, url, type } = matchedInvite;


            try {
                // await fetch('https://cors-anywhere.herokuapp.com/https://gamemate.onrender.com/accept-matchmaking', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json',
                //     },
                //     body: JSON.stringify({ sender, target, url, type }),
                // });

                 axios.post('https://cors-anywhere.herokuapp.com/https://gamemate.onrender.com/accept-matchmaking', {
                    
                    sender, target, url, type
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )

                window.location.href = 'http://localhost:3001';
            } catch (error) {
                console.error('Error accepting matchmaking:', error);
            }
        }
    };

    useEffect(() => {
        const foundInvite = invites.find(invite => invite.target === email);
        setMatchedInvite(foundInvite);

        console.log('Invites:', invites);
    }, [email, invites]);

    return (
        <div style = {{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            marginLeft: '300px' 
        }}>
            <h2>Invite Page</h2>
            <input
                type="email"
                value={email}
                onChange={handleInputChange}
                placeholder="Enter your email to check invites"
                style={{
                    padding: '10px',
                    margin: '10px',
                    borderRadius: '5px',
                }}
            />
            <button style = {{
                padding: '10px',
                margin: '10px',
                backgroundColor: 'blue',
                color: 'white',
                borderRadius: '5px',
                cursor: 'pointer'
            }} onClick = {()=> window.location.reload()}>
              CHECK
            </button>
            {matchedInvite ? (
                <div>
                    <p>Invite received from: {matchedInvite.sender}</p>
                    <button onClick={handleAcceptInvite} style={{
                        padding: '10px',
                        margin: '10px',
                        backgroundColor: 'green',
                        color: 'white',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        marginLeft: '300px'
                    }}>
                        Accept Invite
                    </button>
                </div>
            ) : (
                <p>No invites found</p>
            )}
        </div>
    );
};

export default InvitePage;
