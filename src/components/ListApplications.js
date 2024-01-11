import React, { useState } from 'react'
import Scopus from './Scopus'
import WebOfScience from './WebOfScience'

const ListApplications = () => {
  const [selectedOption, setSelectedOption] = useState(null)

  const handleChange = e => {
    setSelectedOption(e.target.value)
    
  }

  return (
    // <div className="min-h-screen flex items-center justify-center">
    // <div className="bg-[#004e98] p-8 rounded-lg border-4 border-black w-6/12"
    //   style={{ boxShadow: '6px 6px 0px 0px rgba(0, 0, 0, 1)', }}>
    <div className='min-h-screen p-8'>
      <div
        className='max-w-7xl mx-auto bg-[#004e98] p-8 rounded-lg border-4 border-black'
        style={{ boxShadow: '6px 6px 0px 0px rgba(0, 0, 0, 1)' }}
      >
        <div className='mb-4'>
          <label
            className='block text-[#edf6f9] text-sm font-bold mb-2'
            htmlFor='academicTerm'
          >
            Academic Term
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-[#edf6f9] leading-tight focus:outline-none focus:shadow-outline'
            id='academicTerm'
            type='text'
            placeholder='2023-24'
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-[#edf6f9] text-sm font-bold mb-2'
            htmlFor='semester'
          >
            Semester
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-[#edf6f9] leading-tight focus:outline-none focus:shadow-outline'
            id='semester'
            type='text'
            placeholder='1'
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-[#edf6f9] text-sm font-bold mb-2'
            htmlFor='awards'
          >
            Awards
          </label>

          <select
            onChange={handleChange}
            value={selectedOption}
            defaultValue={'Web of Science'}
            className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
            id='awards'
          >
            <option value='WebOfScience'>Web of Science</option>
            <option value='Scopus'>Scopus</option>
          </select>
          <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black'>
            <i className='fas fa-chevron-down'></i>
          </div>
        </div>
        {selectedOption === 'Scopus' ? <Scopus /> : <WebOfScience />}
      </div>
    </div>
  )
}

export default ListApplications
