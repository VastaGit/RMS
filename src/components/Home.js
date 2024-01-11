import React, { useState } from 'react';

const Register = () => {
  const [DOI, setDOI] = useState('');
  const [title, setTitle] = useState('');
  const [authors, setAuthors] = useState('');
  const [journal, setJournal] = useState('');
  const [number_of_authors, setNumberOfAuthors] = useState('');
  const [publication_date, setPublicationDate] = useState('');
  const [volume, setVolume] = useState('');
  const [issue, setIssue] = useState('');
  const [page, setPage] = useState('');

  const handleRegister = () => {
    // Add your authentication logic here
    console.log(`Logging in with ${DOI} and ${title}`);
  };
  // green 81b29a
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-[#004e98] p-8 rounded-lg border-4 border-black w-6/12"
        style={{ boxShadow: '6px 6px 0px 0px rgba(0, 0, 0, 1)', }}>
        <div className="mb-4">
          <label className="block text-[#edf6f9] text-sm font-bold mb-2" htmlFor="DOI">
            DOI
          </label>
          <input
            className="w-full border-2 border-black rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
            type="text"
            id="DOI"
            value={DOI}
            onChange={(e) => setDOI(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#edf6f9] text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            disabled="true"
            className="w-full border-2 border-black rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#edf6f9] text-sm font-bold mb-2" htmlFor="authors">
            Authors
          </label>
          <input
            disabled="true"
            className="w-full border-2 border-black rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
            type="text"
            id="authors"
            value={authors}
            onChange={(e) => setAuthors(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#edf6f9] text-sm font-bold mb-2" htmlFor="journal">
            Journal
          </label>
          <input
            disabled="true"
            className="w-full border-2 border-black rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
            type="text"
            id="journal"
            value={journal}
            onChange={(e) => setJournal(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#edf6f9] text-sm font-bold mb-2" htmlFor="publication_date">
            Publication date
          </label>
          <input
            disabled="true"
            className="w-full border-2 border-black rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
            type="text"
            id="publication_date"
            value={publication_date}
            onChange={(e) => setPublicationDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#edf6f9] text-sm font-bold mb-2" htmlFor="number_of_authors">
            Number of authors
          </label>
          <input
            disabled="true"
            className="w-full border-2 border-black rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
            type="text"
            id="number_of_authors"
            value={number_of_authors}
            onChange={(e) => setNumberOfAuthors(e.target.value)}
            />
        </div>
        <div className="mb-4">
          <label className="block text-[#edf6f9] text-sm font-bold mb-2" htmlFor="volume">
            Volume
          </label>
          <input
            disabled="true"
            className="w-full border-2 border-black rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
            type="text"
            id="volume"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#edf6f9] text-sm font-bold mb-2" htmlFor="issue">
            Issue
          </label>
          <input
            disabled="true"
            className="w-full border-2 border-black rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
            type="text"
            id="issue"
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#edf6f9] text-sm font-bold mb-2" htmlFor="page">
            Page
          </label>
          <input
            disabled="true"
            className="w-full border-2 border-black rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
            type="text"
            id="page"
            value={page}
            onChange={(e) =>  setPage(e.target.value)}
          />
        </div>
        <button
          className=" bg-[#edf6f9] text-lg font-bold text-black py-2 px-4 rounded-lg border-4 border-black  transition duration-300 hover:scale-105 "
          onClick={handleRegister}
          onMouseEnter={(e) => (e.target.style.boxShadow = '6px 6px 0px 0px rgba(0, 0, 0, 1)')}
          onMouseLeave={(e) => (e.target.style.boxShadow = 'none')}
        >
          Register
        </button>
      </div>
    </div >
  );
}

export default Register;
