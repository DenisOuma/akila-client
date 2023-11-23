import React, { useState } from 'react';
import { Icon } from '@iconify/react';

export const ChatSectionTextArea = () => {
  const [question, setQuestion] = useState<string>('');
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuestion(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <div className="absolute bottom-0 w-[100%] bg-light-color p-5">
      <div className="relative">
        <textarea
          className="h-auto w-full resize-none rounded  border-none bg-reaction-icons-color p-2  text-[1.2rem] leading-5  outline-none"
          name="body"
          onChange={handleInputChange}
          placeholder="WHat do you want to know?"
          rows={3}
          value={question}
        />
        <Icon
          className={`absolute right-3 top-[20%] cursor-pointer rounded-full `}
          icon="mingcute:send-fill"
          width="50"
        />
      </div>
    </div>
  );
};
