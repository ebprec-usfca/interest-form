'use client'

import { FC, useState } from 'react'
import ChatInput from './ChatInput'
import ChatMessages from './ChatMessages'
import ChatHeader from './ChatHeader'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'
import Image from 'next/image';


const Chat: FC = () => {
  const [openItem, setOpenItem] = useState<string>(''); // Empty array means all items are closed

  const handleOpenChange = (value: string) => {
    setOpenItem(value);
   
  };

  const isChatOpen = openItem === 'chat';
  

  return (
    <Accordion
      type='single'
      value={openItem}
      onValueChange={handleOpenChange}
      collapsible
      className='relative bg-white z-40 shadow'>
      <AccordionItem value='chat'>
        <div className={`fixed right-8 bottom-8 transition-all duration-300 ${isChatOpen ? 'w-80 bg-white border border-gray-200 rounded-md' : 'rounded-full'} overflow-hidden`}>
          <AccordionTrigger className='py-0 border-b border-zinc-300'>
            {isChatOpen ? (
              <div className='px-6 py-4 '>
                <ChatHeader />
              </div>
            ) : (
              // Render an image when the chat is closed
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden' }}>
                <Image src="/chat.jpg"
                  alt="chatbot"
                  width={40}
                  height={40}
                  layout="responsive" />
              </div>
            )}
            </AccordionTrigger>
            <AccordionContent>
              {isChatOpen && ( <div className='flex flex-col h-80'>
                <ChatMessages className='px-2 py-3 flex-1' />
                <ChatInput className='px-4' />
              </div>)}
            </AccordionContent>
          
        </div>
      </AccordionItem>
    </Accordion>
  )
}

export default Chat
