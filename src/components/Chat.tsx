import React, { useCallback, useEffect, useState } from "react"
const Chat: React.FC = () => {
    const chatsChannel = new BroadcastChannel('chats');
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<string[]>([]);

    useEffect(() => {
        return () => {
            chatsChannel.close();
        }
    }, []);

    chatsChannel.onmessage = useCallback((event: { data: { action: string, message: string } }) => {
        if (event.data.action === 'send') {
            const events = [...messages];
            events.push(event.data.message);
            setMessages(events);
        }
    }, [messages])

    const handleMessageChange = useCallback((e: any) => {
        setMessage(e.target.value);
    }, []);

    const addMessage = useCallback(() => {
        chatsChannel.postMessage({ action: 'send', message });
        setMessage("");
    }, [message]);

    return (
        <div>
            Chat
            <section>
                <input type="text" onChange={handleMessageChange} value={message} />
                <button onClick={() => addMessage()}>Send</button>
            </section>
            <section>
                {messages.map((message, index) => <p key={index}>{message}</p>)}
            </section>
        </div>
    )
}


export default Chat;