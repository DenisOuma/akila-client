import React, { useState } from 'react';
import { ChatSectionNavBar } from './ChatSectionNavBar/ChatSectionNavBar';
import { ChatSectionTextArea } from './ChatSectionTextArea/ChatSectionTextArea';
import { ChatSectionArea } from './ChatSectionArea/ChatSectionArea';

export const ChatSection = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I help you?', isUser: false },
    { text: 'Hi there!', isUser: true },
    // Add more messages as needed
  ]);

  const addMessage = (text: string, isUser: boolean) => {
    setMessages((prevMessages) => [{ text, isUser }, ...prevMessages]);
  };

  return (
    <div className="relative w-[100%] bg-dark-color">
      <ChatSectionNavBar />
      <ChatSectionArea messages={messages} />
      <ChatSectionTextArea addMessage={addMessage} />
    </div>
  );
};
