import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'

const AdminScopus = ({ user_info, article }) => {
  const [eISSN, setEISSN] = useState('')

  return (
    <div className='text-black'>
      <div className='mb-6'>
        <h1 className='text-xl font-semibold mb-4 text-[#edf6f9]'>
          1. Information about Applicant
        </h1>
        <div className='mb-4'>
          <label className='block text-[#edf6f9] text-sm font-bold mb-2'>
            Personnel No
          </label>
          <input
            type='text'
            className='border p-2 rounded w-full'
            value={article.UserPersonnelNumber}
          />
        </div>
      </div>
      <div className='mb-6'>
        <h1 className='text-xl font-semibold mb-4 text-[#edf6f9]'>
          2. Information about Publication
        </h1>
        <div className='mb-4'>
          <label className='block text-[#edf6f9] text-sm font-bold mb-2'>
            DOI Number
          </label>
          <input
            type='text'
            className='border p-2 rounded w-full'
            value={article.DOI}
          />
        </div>
      </div>
      <div className='mb-6'>
        <label
          className='block text-[#edf6f9] text-sm font-bold mb-2'
          htmlFor='title'
        >
          Title
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
          id='title'
          value={article.Title}
          type='text'
          placeholder=''
        />
      </div>
      <div className='flex mb-6'>
        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
          <label
            className='block text-[#edf6f9] text-sm font-bold mb-2'
            htmlFor='publication-date'
          >
            Publication Date
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
            id='publication-date'
            value={article.PublicationDate}
            type='text'
            placeholder=''
          />
        </div>
        <div className='w-full md:w-1/4 px-3'>
          <label
            className='block text-[#edf6f9] text-sm font-bold mb-2'
            htmlFor='vol'
          >
            Vol.:
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
            id='vol'
            value={article.Vol}
            type='text'
            placeholder=''
          />
        </div>
        <div className='w-full md:w-1/4 px-3'>
          <label
            className='block text-[#edf6f9] text-sm font-bold mb-2'
            htmlFor='no'
          >
            No.:
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
            id='no'
            value={article.No}
            type='text'
            placeholder=''
          />
        </div>
        <div className='w-full md:w-1/4 px-3'>
          <label
            className='block text-[#edf6f9] text-sm font-bold mb-2'
            htmlFor='pages'
          >
            Pages:
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
            id='pages'
            value={article.Pages}
            type='text'
            placeholder=''
          />
        </div>
      </div>
      <div className='flex mb-6'>
        <div className='w-full md:w-1/2 px-3'>
          <label
            className='block text-[#edf6f9] text-sm font-bold mb-2'
            htmlFor='number-of-authors'
          >
            Number of Authors
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
            id='number-of-authors'
            value={article.AuthorsNo}
            type='text'
            placeholder=''
          />
        </div>
      </div>
      <div className='mb-6'>
        <label
          className='block text-[#edf6f9] text-sm font-bold mb-2'
          htmlFor='authors'
        >
          Authors
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
          id='authors'
          value={article.Authors}
          type='text'
          placeholder=''
        />
      </div>
      <div className='mb-6'>
        <h3 className='text-lg font-semibold mb-2 text-[#edf6f9]'>
          3. Information about Journal
        </h3>
        <div className='mb-4'>
          <label
            className='block text-[#edf6f9] text-sm font-bold mb-2'
            htmlFor='title-of-journal'
          >
            Title of Journal
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
            id='title-of-journal'
            value={article.JournalTitle}
            type='text'
            placeholder=''
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-[#edf6f9] text-sm font-bold mb-2'
            htmlFor='citescore-percentile'
          >
            CiteScore Percentile
          </label>
          <div className='flex justify-between text-[#edf6f9]'>
            <label className='inline-flex items-center'>
              <input
                type='radio'
                id='p4'
                name='radioGroup'
                className='form-radio'
                checked={article.Scopus_CiteScore === 'p4'}
              />
              <span className='ml-2'>0-25 (P4)</span>
            </label>

            <label className='inline-flex items-center'>
              <input
                type='radio'
                id='p3'
                name='radioGroup'
                className='form-radio'
                checked={article.Scopus_CiteScore === 'p3'}
              />
              <span className='ml-2'>26-50 (P3)</span>
            </label>

            <label className='inline-flex items-center'>
              <input
                type='radio'
                id='p2'
                name='radioGroup'
                className='form-radio'
                checked={article.Scopus_CiteScore === 'p2'}
              />
              <span className='ml-2'>51-75 (P2)</span>
            </label>

            <label className='inline-flex items-center'>
              <input
                type='radio'
                id='p1'
                name='radioGroup'
                className='form-radio'
                checked={article.Scopus_CiteScore === 'p1'}
              />
              <span className='ml-2'>76-99 (P1)</span>
            </label>

            <label className='inline-flex items-center'>
              <input
                type='radio'
                id='na'
                name='radioGroup'
                className='form-radio'
                checked={article.Scopus_CiteScore === 'na'}
              />
              <span className='ml-2'>N/A</span>
            </label>
          </div>
        </div>
        <div className='flex mb-4'>
          <div className='w-full md:w-1/2 px-3'>
            <label
              className='block text-[#edf6f9] text-sm font-bold mb-2'
              htmlFor='issn'
            >
              ISSN
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
              id='issn'
              type='text'
              placeholder=''
              value={article.JournalISSN}
            />
          </div>
          <div className='w-full md:w-1/2 px-3'>
            <label
              className='block text-[#edf6f9] text-sm font-bold mb-2'
              htmlFor='e-issn'
            >
              e-ISSN
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
              id='e-issn'
              type='text'
              placeholder=''
              value={eISSN}
              onChange={e => setEISSN(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminScopus
