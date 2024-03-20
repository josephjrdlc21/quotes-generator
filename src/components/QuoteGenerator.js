import { useState } from 'react';
import Robot from '../assets/hi-robot.gif';

const Quote = () => {

  const [quotes] = useState([
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", author: "Mother Teresa" },
    { text: "In the end, it's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln" },
    { text: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
    { text: "Many of life's failures are people who did not realize how close they were to success when they gave up.", author: "Thomas A. Edison" },
    { text: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.", author: "Dr. Seuss" },
   
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "It is our choices, that show what we truly are, far more than our abilities.", author: "J.K. Rowling" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Life is like riding a bicycle. To keep your balance, you must keep moving.", author: "Albert Einstein" },
    { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
    { text: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", author: "Helen Keller" },
    { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
    { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },

    { text: "Life isn't about finding yourself. Life is about creating yourself.", author: "George Bernard Shaw" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Change your thoughts and you change your world.", author: "Norman Vincent Peale" },
    { text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", author: "Albert Schweitzer" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
    { text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison" }
  ])

  const [randomQuote, setRandomQuote] = useState("");

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  };

  return ( 
    <div className="border rounded-md w-full lg:w-[880px] py-16 md:py-20 lg:py-40 h-auto mx-auto flex items-center justify-center">
      <div className="text-center mx-5">
        <h1 className="text-3xl md:text-5xl font-semibold text-gray-800">Quotes <span className="text-teal-400">Generator</span></h1>
        <div className="w-20 h-20 mx-auto mt-5">
          <img src={Robot} alt="Robot Saying Hello"/>
        </div>
        <p className="mt-8 text-slate-500 text-sm md:text-base">This is a transformative tool that generates insightful quotes, and providing fuel for personal growth.</p>
        <p className="text-slate-500 text-sm md:text-base">With each generated phrase, it encourages positive change in every individual who encounters it.</p>
        <p className="mt-10 text-slate-500 text-sm md:text-base">Click the button below to get started.</p>
        {randomQuote && (
          <div className="w-full bg-teal-700 shadow-sm text-center rounded-md mt-10 p-5 text-gray-100">
            <p className="font-semibold text-sm md:text-base">{randomQuote.text}</p>
            <p className="font-semibold text-sm md:text-base">- {randomQuote.author}</p>
          </div>
        )}
        <button onClick={getRandomQuote} className=" text-sm md:text-base mt-10 bg-teal-400 hover:bg-teal-300 text-white font-semibold py-2 px-6 border-b-4 border-teal-600 hover:border-teal-500 rounded-3xl">
          Generate
        </button>
        <div className="mt-10 flex justify-center items-center gap-1">
          <p className="text-slate-500 font-semibold text-sm md:text-base">Made by <span className="text-teal-700">Joseph </span></p>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><g fill="none"><path fill="#30f8ab" d="M6 6c4.665-2.332 8.5.5 10 2.5c1.5-2 5.335-4.832 10-2.5c6 3 4.5 10.5 0 15c-2.196 2.196-6.063 6.063-8.891 8.214a1.764 1.764 0 0 1-2.186-.041C12.33 27.08 8.165 23.165 6 21C1.5 16.5 0 9 6 6"></path><path fill="#0bcb92" d="M16 8.5v3.05c1.27-2.685 4.425-6.27 9.658-5.713c-4.51-2.03-8.195.712-9.658 2.663m-4.054-2.963C10.26 4.95 8.225 4.887 6 6C0 9 1.5 16.5 6 21c2.165 2.165 6.33 6.08 8.923 8.173a1.764 1.764 0 0 0 2.186.04c.254-.193.516-.4.785-.618c-2.854-2.143-6.86-5.519-9.035-7.462c-4.957-4.431-6.61-11.815 0-14.769a9.706 9.706 0 0 1 3.087-.827"></path><ellipse cx={23.477} cy={12.594} fill="#67f4b2" rx={2.836} ry={4.781} transform="rotate(30 23.477 12.594)"></ellipse></g></svg>
        </div>
        <p className="mt-5 text-xs md:text-sm text-slate-700 uppercase font-semibold"><span className="p-1 bg-slate-200 rounded-md">React.js</span> + <span className="p-1 bg-teal-200 rounded-md">TailwindCSS</span></p>
      </div>
    </div>
  );
}
 
export default Quote;