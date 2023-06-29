import { useState, useEffect } from 'react';
import NoteImage from '../assets/Notes.svg';

const CompanyNews  = () => {
  const [news, setNews] = useState([]);
  const [newNews, setNewNews] = useState('');

  useEffect(() => {
    const storedNews = localStorage.getItem('news');
    if (storedNews) {
      setNews(JSON.parse(storedNews));
    } 
  }, []);

  useEffect(() => {
    localStorage.setItem('news', JSON.stringify(news));
  }, [news]);

  const addNews = () => {
    if (newNews.trim() !== '') {
      setNews([...news, newNews]);
      setNewNews('');
    }
  };

  const deleteNews = (index) => {
    const updatedNews = news.filter((_, i) => i !== index); 
    setNews(updatedNews);
  };

  return (
    <div 
    className='bg-gradient-to-tl from-[#b572b2] to-[#8549f4] fixed top-96 left-64 w-[52%] h-1/2 mt-5 border border-gray-300 rounded-xl'>
      <img src={NoteImage} alt='Book' className='w-64 h-72 absolute top-40 left-1/2 mt-11 ml-56'/> 
      <h1 className='text-white text-left mt-7 ml-6'>Company News</h1>
      <input
        type="text"
        value={newNews}
        onChange={(e) => setNewNews(e.target.value)}
        className='w-48 h-8 mt-5 ml-5 border border-gray-300 rounded-xl bg-transparent text-white'
      />
      <button onClick={addNews} className='w-24 h-8 mt-5 ml-5 border border-gray-300 rounded-xl text-white'>Add</button>
      <ul>
        {news.map((news, index) => (
          <li className='w-48 h-8 mt-5 ml-5 text-white'key={index}>
            {news}
            <button onClick={() => deleteNews(index)}><svg
            className="w-4 h-4 fill-current ml-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              className="heroicon-ui"
              d="M6 6h2V4c0-1.1.9-2 2-2h4a2 2 0 012 2v2h2a1 1 0 010 2h-1v12a2 2 0 01-2 2H6a2 2 0 01-2-2V8H3a1 1 0 010-2zm2-2v2h8V4H8zm2 10a1 1 0 100 2h4a1 1 0 100-2h-4zm-4 0a1 1 0 100 2h4a1 1 0 100-2H8zm5-8H9v2h2V4z"
            />
          </svg></button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyNews;
