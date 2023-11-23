import React from 'react';
import { ChatSectionNavBar } from './ChatSectionNavBar/ChatSectionNavBar';
import { ChatSectionTextArea } from './ChatSectionTextArea/ChatSectionTextArea';

export const ChatSection = () => {
  return (
    <div className="relative w-[100%] bg-dark-color">
      <ChatSectionNavBar />
      <ChatSectionTextArea />
    </div>
  );
};
