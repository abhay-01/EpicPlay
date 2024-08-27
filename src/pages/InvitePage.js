import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const socket = io('http://localhost:3005', {
    transports: ['websocket'],
});

const InvitePage = () => {
    const [email, setEmail] = useState('');
    const [invites, setInvites] = useState([]);
    const [matchedInvite, setMatchedInvite] = useState(false);
    const navigate = useNavigate();
    const [inviteSender, setInviteSender] = useState('');
    const [inviteTarget, setInviteTarget] = useState('');
    const [inviteUrl, setInviteUrl] = useState('');
    const [inviteType, setInviteType] = useState('');

    const socket = io('http://localhost:3005', {
        transports: ['websocket'],
    });
    if(socket.on('matchmaking', (data)=>{
        console.log("THIS IS INVITE PAGE-->", data);
        setMatchedInvite(true);

        // const foundInvite = invites.find(invite => invite.target === email);
        // console.log("IT'S A INVITE-->", foundInvite);

        if(data.target === email){
            setMatchedInvite(true);
            setInviteSender(data.sender);
            setInviteTarget(data.target);
            setInviteUrl(data.url);
            setInviteType(data.type);
            
        }
        // setMatchedInvite(foundInvite);
        

    }));


    

    

//     useEffect(() => {
//         console.log("PEHLE WALA USEEFECT");
//         console.log("socket", socket.id);

//         socket.emit('matchmaking', { sender: 'test', target: 'test2', url: 'http://localhost:3001', type: 'invite' });

//       socket.on('matchmaking', (data) => {
//             console.log('invite initiated:', data);
//             setInvites([...invites, data]);
//         });



    
//       return () => {
//           socket.off('matchmaking');
//       };
//   }, []);
  

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    const handleAcceptInvite = async () => {
        if(matchedInvite){
console.log("EK BAR DATA-->", matchedInvite);
            try {
                const response = await fetch("http://localhost:3005/accept-matchmaking",{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        sender: inviteTarget,
                        target: inviteSender,
                        url: inviteUrl,
                        type: inviteType
                })
            });

            socket.emit('matchmaking-accepted', { sender: inviteTarget, target: inviteSender, url: inviteUrl, type: inviteType });
                if(response.ok){
                    console.log('INVITE PAGE KA RESPONSE-->', response);
                }else{
                    console.error('Failed to accept invite');
                }
            } catch (error) {
                console.error('Error accepting invite:', error);

        }

    }
};

 

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
