import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3005", {
  transports: ["websocket"],
  reconnection: true,
  reconnectionAttempts: 10,
  reconnectionDelay: 1000,
});
const InvitePage = () => {
  const [email, setEmail] = useState("test2");
  const [invites, setInvites] = useState([]);
  const [matchedInvite, setMatchedInvite] = useState(false);
  const [inviteSender, setInviteSender] = useState("");
  const [inviteTarget, setInviteTarget] = useState("");
  const [inviteUrl, setInviteUrl] = useState("");
  const [inviteType, setInviteType] = useState("");


  const handleAcceptInvite = async () => {
    if (matchedInvite) {
    //   console.log("EK BAR DATA-->", matchedInvite);
      try {
        const response = await fetch(
          "http://localhost:3005/accept-matchmaking",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              sender: inviteTarget,
              target: inviteSender,
              url: inviteUrl,
              type: inviteType,
            }),
          }
        );

        if (response.ok) {
          if (
            socket.emit("accept-matchmaking", {
              sender: inviteTarget,
              target: inviteSender,
              url: inviteUrl,
              type: inviteType,
            })
          ) {
            console.log("EMITTED");
            window.open(inviteUrl, "_blank");
          } else {
            console.log("NOT EMITTED");
          }
          socket.on("registerEmail",inviteTarget);

        } else {
          console.error("Failed to accept invite");
        }
      } catch (error) {
        console.error("Error accepting invite:", error);
      }
    }
  };

  useEffect(() => {
    socket.on("matchmaking", (data) => {
      console.log("THIS IS INVITE PAGE-->", data);

    


      if (data.target === email) {
        console.log("YE MATCH HUA HAI", data.target, email);
        setMatchedInvite(true); 
        setInviteSender(data.sender);
        setInviteTarget(data.target);
        setInviteUrl(data.url);
        setInviteType(data.type);
      }
    });

    return () => {
      socket.off("matchmaking");
    };
  }, [email]); 

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        marginLeft: "300px",
      }}
    >
      <h2>Invite Page</h2>
      <input
        type="email"
        value={email}
        onChange={handleInputChange}
        placeholder="Enter your email to check invites"
        style={{
          padding: "10px",
          margin: "10px",
          borderRadius: "5px",
        }}
      />
      <button
        style={{
          padding: "10px",
          margin: "10px",
          backgroundColor: "blue",
          color: "white",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => window.location.reload()}
      >
        CHECK
      </button>
      {matchedInvite ? (
        <div>
          <p>Invite received from: {inviteSender}</p>
          <button
            onClick={handleAcceptInvite}
            style={{
              padding: "10px",
              margin: "10px",
              backgroundColor: "green",
              color: "white",
              borderRadius: "5px",
              cursor: "pointer",
              marginLeft: "300px",
            }}
          >
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
