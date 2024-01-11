import React from 'react'

const WebOfScience = () => {
  return (
    <div>
      <div className='bg-gray-100 p-4 rounded-lg'>
        <h2 className='font-bold text-lg mb-4'>
          APPLICATION FORM FOR PUBLICATION AWARD (Web of Science)
        </h2>
        <p className='mb-2'>
          1. The researchers who wish to apply for the Publication Award as
          defined in the{' '}
          <span className='font-bold'>
            ___: Scientific Research Budget Application Principles
          </span>{' '}
          should fill out this form.
        </p>
        <p className='mb-2'>
          2. This form is used for the application of publication award for the
          articles that have their latest versions published in journals covered
          by AHCI, SSCI, SCI-Expanded and ESCI.
        </p>
        <p className='mb-2'>
          In order to apply for the Publication Award, the publication in
          concern should already have been published during the current or
          previous year.
        </p>
        <p className='mb-2'>
          4. The award is granted to full or part-time academic staff members as
          well as master and Ph.D. students studying in the{' '}
          <span className='font-bold'>___</span>. The person applying for the
          award should either be a student or be employed at{' '}
          <span className='font-bold'>___</span>.
        </p>
        <p className='mb-2'>
          5. In order to be eligible to receive support for the Publication
          Award, the name <span className='font-bold'>___</span> needs To be
          specified As the author's institution on their published work.
        </p>
        <p className='mb-2'>
          6. In order to be eligible to apply for the Publication Award, the
          document type of the publication should be listed as article or review
          in Web of Science Core Collection data base.
        </p>
        <p className='mb-2'>
          7. In order to apply for the Publication Award, it is not enough to
          submit a letter of acceptance showing that the publication is going to
          be published.
        </p>
      </div>
      <div className='flex justify-between items-center mb-6'>
        <p className='text-sm text-[#edf6f9]'>
          Please use "List Applications" button to modify/delete records.
        </p>
        <button
          className=' bg-[#edf6f9] text-lg font-bold text-black py-2 px-4 rounded-lg border-4 border-black transition duration-300 hover:scale-105'
          onMouseEnter={e =>
            (e.target.style.boxShadow = '6px 6px 0px 0px rgba(0, 0, 0, 1)')
          }
          onMouseLeave={e => (e.target.style.boxShadow = 'none')}
        >
          List Applications
        </button>
      </div>
      <div className='mb-6'>
        <h1 className='text-xl font-semibold mb-4 text-[#edf6f9]'>
          1. Information about Applicant
        </h1>
        <div className='mb-4'>
          <label className='block text-[#edf6f9] text-sm font-bold mb-2'>
            Personnel No
          </label>
          <input type='text' className='border p-2 rounded w-full' />
        </div>
        <div className='mb-4'>
          <label className='block text-[#edf6f9] text-sm font-bold mb-2'>
            Title, Name
          </label>
          <input type='text' className='border p-2 rounded w-full' />
        </div>
        <div className='mb-4'>
          <label className='block text-[#edf6f9] text-sm font-bold mb-2'>
            Surname
          </label>
          <input type='text' className='border p-2 rounded w-full' />
        </div>
        <div className='mb-4'>
          <label className='block text-[#edf6f9] text-sm font-bold mb-2'>
            Status
          </label>
          <input type='text' className='border p-2 rounded w-full' />
        </div>
        <div className='mb-4'>
          <label className='block text-[#edf6f9] text-sm font-bold mb-2'>
            Faculty/School
          </label>
          <input type='text' className='border p-2 rounded w-full' />
        </div>
        <div className='mb-4'>
          <label className='block text-[#edf6f9] text-sm font-bold mb-2'>
            Department
          </label>
          <input type='text' className='border p-2 rounded w-full' />
        </div>
        <div className='mb-4'>
          <label className='block text-[#edf6f9] text-sm font-bold mb-2'>
            Phone
          </label>
          <input type='text' className='border p-2 rounded w-full' />
        </div>
        <div className='mb-4'>
          <label className='block text-[#edf6f9] text-sm font-bold mb-2'>
            E-mail
          </label>
          <input type='text' className='border p-2 rounded w-full' />
        </div>
        <div className='mb-4'>
          <label className='block text-[#edf6f9] text-sm font-bold mb-2'>
            Date
          </label>
          <div className='flex justify-between items-center'>
            <input
              type='text'
              placeholder='23.10.2023'
              className='border p-2 rounded w-full mr-2'
            />
            <i className='far fa-calendar-alt text-gray-400'></i>
          </div>
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
          <input type='text' className='border p-2 rounded w-full' />
        </div>
        <div className='mb-4'>
          <label className='block text-[#edf6f9] text-sm font-bold mb-2'>
            Web of Science Number
          </label>
          <input type='text' className='border p-2 rounded w-full' />
        </div>
      </div>

      <div className='mb-4'>
        <button
          className=' bg-[#edf6f9] text-lg font-bold text-black py-2 px-4 rounded-lg border-4 border-black  transition duration-300 hover:scale-105 '
          onMouseEnter={e =>
            (e.target.style.boxShadow = '6px 6px 0px 0px rgba(0, 0, 0, 1)')
          }
          onMouseLeave={e => (e.target.style.boxShadow = 'none')}
        >
          Get from DOI
        </button>
        <p className='text-sm mt-2 text-[#edf6f9]'>
          If there is no DOI number given for your electronic article use the
          application form available on our website.
        </p>
      </div>
      <div className='mb-6'>
        <label
          className='block text-[#edf6f9] text-sm font-bold mb-2'
          htmlFor='title'
        >
          Title
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-[#edf6f9] leading-tight focus:outline-none focus:shadow-outline'
          id='title'
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
            className='shadow appearance-none border rounded w-full py-2 px-3 text-[#edf6f9] leading-tight focus:outline-none focus:shadow-outline'
            id='publication-date'
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
            className='shadow appearance-none border rounded w-full py-2 px-3 text-[#edf6f9] leading-tight focus:outline-none focus:shadow-outline'
            id='vol'
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
            className='shadow appearance-none border rounded w-full py-2 px-3 text-[#edf6f9] leading-tight focus:outline-none focus:shadow-outline'
            id='no'
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
            className='shadow appearance-none border rounded w-full py-2 px-3 text-[#edf6f9] leading-tight focus:outline-none focus:shadow-outline'
            id='pages'
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
            className='shadow appearance-none border rounded w-full py-2 px-3 text-[#edf6f9] leading-tight focus:outline-none focus:shadow-outline'
            id='number-of-authors'
            type='text'
            placeholder=''
          />
        </div>
        <div className='w-full md:w-1/2 px-3'>
          <label
            className='block text-[#edf6f9] text-sm font-bold mb-2'
            htmlFor='total-addresses'
          >
            Total Number of Addresses of Author
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-[#edf6f9] leading-tight focus:outline-none focus:shadow-outline'
            id='total-addresses'
            type='text'
            placeholder='1'
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
          className='shadow appearance-none border rounded w-full py-2 px-3 text-[#edf6f9] leading-tight focus:outline-none focus:shadow-outline'
          id='authors'
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
            className='shadow appearance-none border rounded w-full py-2 px-3 text-[#edf6f9] leading-tight focus:outline-none focus:shadow-outline'
            id='title-of-journal'
            type='text'
            placeholder=''
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-[#edf6f9] text-sm font-bold mb-2'
            htmlFor='citescore-percentile'
          >
            Index Covered
          </label>
          <div className='flex justify-between'>
            <span>AHCI</span>
            <span>SSCI</span>
            <span>SCI</span>
            <span>SCI-E</span>
            <span>ESCI</span>
          </div>
        </div>
        <div className='mb-4'>
          <label
            className='block text-[#edf6f9] text-sm font-bold mb-2'
            htmlFor='citescore-percentile'
          >
            JCR Category
          </label>
          <div className='flex justify-between'>
            <span>Q1</span>
            <span>Q2</span>
            <span>Q3</span>
            <span>Q4</span>
            <span>N/A</span>
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
              className='shadow appearance-none border rounded w-full py-2 px-3 text-[#edf6f9] leading-tight focus:outline-none focus:shadow-outline'
              id='issn'
              type='text'
              placeholder=''
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
              className='shadow appearance-none border rounded w-full py-2 px-3 text-[#edf6f9] leading-tight focus:outline-none focus:shadow-outline'
              id='e-issn'
              type='text'
              placeholder=''
            />
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <button
            className=' bg-[#edf6f9] text-lg font-bold text-black py-2 px-4 rounded-lg border-4 border-black  transition duration-300 hover:scale-105 '
            onMouseEnter={e =>
              (e.target.style.boxShadow = '6px 6px 0px 0px rgba(0, 0, 0, 1)')
            }
            onMouseLeave={e => (e.target.style.boxShadow = 'none')}
          >
            Submit
          </button>
          <button
            className=' bg-[#edf6f9] text-lg font-bold text-black py-2 px-4 rounded-lg border-4 border-black  transition duration-300 hover:scale-105 '
            onMouseEnter={e =>
              (e.target.style.boxShadow = '6px 6px 0px 0px rgba(0, 0, 0, 1)')
            }
            onMouseLeave={e => (e.target.style.boxShadow = 'none')}
          >
            Clear Form
          </button>
          <button
            className=' bg-[#edf6f9] text-lg font-bold text-black py-2 px-4 rounded-lg border-4 border-black  transition duration-300 hover:scale-105 '
            onMouseEnter={e =>
              (e.target.style.boxShadow = '6px 6px 0px 0px rgba(0, 0, 0, 1)')
            }
            onMouseLeave={e => (e.target.style.boxShadow = 'none')}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  )
}

export default WebOfScience
