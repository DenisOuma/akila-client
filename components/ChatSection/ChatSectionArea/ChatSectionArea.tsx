import React from 'react';

interface Message {
  text: string;
  isUser: boolean;
}

interface ChatSectionAreaProps {
  messages: Message[];
}

export const ChatSectionArea: React.FC<ChatSectionAreaProps> = ({
  messages,
}) => {
  return (
    <div className="flex h-[80%] flex-col-reverse items-start space-y-2 p-4">
      {messages.map((message) => (
        <div
          key={message.text}
          className={`rounded-lg p-3 ${
            message.isUser
              ? 'mt-3 self-end bg-blue-500 text-white'
              : 'self-start bg-gray-300 text-black'
          }`}
        >
          {message.text}
        </div>
      ))}
    </div>
  );
};
