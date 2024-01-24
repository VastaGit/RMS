import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const WebOfScience = ({ user_info }) => {
  const navigate = useNavigate()

  const [eISSN, setEISSN] = useState('')
  const [DOI_num, setDOI_num] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [article, setArticle] = useState({
    title: '',
    authors: [],
    journal: '',
    publication_date: '',
    number_of_authors: 0,
    volume: '',
    issue: '',
    page: ''
  })

  const handleClearButtonClick = () => {
    setEISSN('')
    setDOI_num('')
    setSelectedIndex(null)
    setSelectedCategory(null)
    setArticle({
      title: '',
      authors: [],
      journal: '',
      publication_date: '',
      number_of_authors: 0,
      volume: '',
      issue: '',
      page: '',
      issn: ''
    })
  }
  const handleIndexChange = event => {
    setSelectedIndex(event.target.id)
  }
  const handleCategoryChange = event => {
    setSelectedCategory(event.target.id)
  }

  const onSubmit = async () => {
    try {
      const dataToSend = {
        user_info,
        DOI_num,
        selectedIndex,
        selectedCategory,
        article,
        eISSN,
        type: 'WOS'
      }
      const response = await axios.post(
        'http://localhost:3000/publication-submit',
        dataToSend
      )
      console.log('Response from server:', response.data)

      toast.success('Succesfully submitted!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce
      })
    } catch (error) {
      console.error('Error submitting data:', error)
    }
  }
  const handleDOI = async () => {
    axios
      .get(`https://api.crossref.org/works/${DOI_num}`)
      .then(response => {
        const paper_details = response.data
        console.log(paper_details)
        setArticle({
          title: paper_details.message.title[0] || '',
          authors: paper_details.message.author
            ? paper_details.message.author.map(function (author) {
                return author.given + ' ' + author.family
              })
            : [],
          journal: paper_details.message['container-title'][0] || '',
          publication_date: paper_details.message.created
            ? paper_details.message.created['date-time'] || ''
            : '',
          number_of_authors: paper_details.message.author
            ? paper_details.message.author.length
            : 0,
          volume: paper_details.message.volume || 'Null',
          issue: paper_details.message.issue || 'Null',
          page: paper_details.message.page || 'Null',
          issn: paper_details.message.ISSN[0] || 'Null'
        })
      })
      .catch(error => {
        console.error(error)
        setArticle({
          title: '',
          authors: [],
          journal: '',
          publication_date: '',
          number_of_authors: 0,
          volume: '',
          issue: '',
          page: ''
        })
      })
  }
  return (
    <div>
      <div className='bg-gray-100 p-4 rounded-lg mb-6'>
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
            value={user_info.PersonnelNumber}
          />
        </div>
        <div className='mb-4'>
          <label className='block text-[#edf6f9] text-sm font-bold mb-2'>
            Title, Name
          </label>
          <input
            type='text'
            className='border p-2 rounded w-full'
            value={user_info.Name}
          />
        </div>
        <div className='mb-4'>
          <label className='block text-[#edf6f9] text-sm font-bold mb-2'>
            Surname
          </label>
          <input
            type='text'
            className='border p-2 rounded w-full'
            value={user_info.Surname}
          />
        </div>
        <div className='mb-4'>
          <label className='block text-[#edf6f9] text-sm font-bold mb-2'>
            Status
          </label>
          <input
            type='text'
            className='border p-2 rounded w-full'
            value={user_info.Status}
          />
        </div>
        <div className='mb-4'>
          <label className='block text-[#edf6f9] text-sm font-bold mb-2'>
            Faculty/School
          </label>
          <input
            type='text'
            className='border p-2 rounded w-full'
            value={user_info.Faculty}
          />
        </div>
        <div className='mb-4'>
          <label className='block text-[#edf6f9] text-sm font-bold mb-2'>
            Department
          </label>
          <input
            type='text'
            className='border p-2 rounded w-full'
            value={user_info.Department}
          />
        </div>
        <div className='mb-4'>
          <label className='block text-[#edf6f9] text-sm font-bold mb-2'>
            Phone
          </label>
          <input
            type='text'
            className='border p-2 rounded w-full'
            value={user_info.PhoneNumber}
          />
        </div>
        <div className='mb-4'>
          <label className='block text-[#edf6f9] text-sm font-bold mb-2'>
            E-mail
          </label>
          <input
            type='text'
            className='border p-2 rounded w-full'
            value={user_info.Email}
          />
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
              value={new Date()
                .toLocaleDateString('en-GB')
                .split('/')
                .reverse()
                .join('/')}
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
          <input
            type='text'
            className='border p-2 rounded w-full'
            value={DOI_num}
            onChange={e => setDOI_num(e.target.value)}
          />
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
          onClick={handleDOI}
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
          className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
          id='title'
          value={article.title}
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
            value={article.publication_date}
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
            value={article.volume}
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
            value={article.issue}
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
            value={article.page}
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
            value={article.number_of_authors}
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
            className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
            id='total-addresses'
            value={article.reference_count}
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
          className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
          id='authors'
          value={article.authors}
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
            type='text'
            value={article.journal}
            placeholder=''
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-[#edf6f9] text-sm font-bold mb-2'
            htmlFor='index-covered'
          >
            Index Covered
          </label>
          <div className='flex justify-between text-[#edf6f9]'>
            <label className='inline-flex items-center'>
              <input
                type='radio'
                id='ahci'
                name='indexGroup'
                className='form-radio'
                onChange={handleIndexChange}
                checked={selectedIndex === 'ahci'}
              />
              <span className='ml-2'>AHCI</span>
            </label>

            <label className='inline-flex items-center'>
              <input
                type='radio'
                id='ssci'
                name='indexGroup'
                className='form-radio'
                onChange={handleIndexChange}
                checked={selectedIndex === 'ssci'}
              />
              <span className='ml-2'>SSCI</span>
            </label>

            <label className='inline-flex items-center'>
              <input
                type='radio'
                id='sci'
                name='indexGroup'
                className='form-radio'
                onChange={handleIndexChange}
                checked={selectedIndex === 'sci'}
              />
              <span className='ml-2'>SCI</span>
            </label>

            <label className='inline-flex items-center'>
              <input
                type='radio'
                id='sci-e'
                name='indexGroup'
                className='form-radio'
                onChange={handleIndexChange}
                checked={selectedIndex === 'sci-e'}
              />
              <span className='ml-2'>SCI-E</span>
            </label>

            <label className='inline-flex items-center'>
              <input
                type='radio'
                id='esci'
                name='indexGroup'
                className='form-radio'
                onChange={handleIndexChange}
                checked={selectedIndex === 'esci'}
              />
              <span className='ml-2'>ESCI</span>
            </label>
          </div>
        </div>

        {/* JCR Category */}
        <div className='mb-4'>
          <label
            className='block text-[#edf6f9] text-sm font-bold mb-2'
            htmlFor='jcr-category'
          >
            JCR Category
          </label>
          <div className='flex justify-between text-[#edf6f9]'>
            <label className='inline-flex items-center'>
              <input
                type='radio'
                id='q1'
                name='categoryGroup'
                className='form-radio'
                onChange={handleCategoryChange}
                checked={selectedCategory === 'q1'}
              />
              <span className='ml-2'>Q1</span>
            </label>

            <label className='inline-flex items-center'>
              <input
                type='radio'
                id='q2'
                name='categoryGroup'
                className='form-radio'
                onChange={handleCategoryChange}
                checked={selectedCategory === 'q2'}
              />
              <span className='ml-2'>Q2</span>
            </label>

            <label className='inline-flex items-center'>
              <input
                type='radio'
                id='q3'
                name='categoryGroup'
                className='form-radio'
                onChange={handleCategoryChange}
                checked={selectedCategory === 'q3'}
              />
              <span className='ml-2'>Q3</span>
            </label>

            <label className='inline-flex items-center'>
              <input
                type='radio'
                id='q4'
                name='categoryGroup'
                className='form-radio'
                onChange={handleCategoryChange}
                checked={selectedCategory === 'q4'}
              />
              <span className='ml-2'>Q4</span>
            </label>

            <label className='inline-flex items-center'>
              <input
                type='radio'
                id='na-category'
                name='categoryGroup'
                className='form-radio'
                onChange={handleCategoryChange}
                checked={selectedCategory === 'na-category'}
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
              value={article.issn}
              // onChange={e => setISSN(e.target.value)}
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
        <div className='flex items-center justify-between'>
          <button
            className=' bg-[#edf6f9] text-lg font-bold text-black py-2 px-4 rounded-lg border-4 border-black  transition duration-300 hover:scale-105 '
            onMouseEnter={e =>
              (e.target.style.boxShadow = '6px 6px 0px 0px rgba(0, 0, 0, 1)')
            }
            onMouseLeave={e => (e.target.style.boxShadow = 'none')}
            onClick={onSubmit}
          >
            Submit
          </button>
          <button
            className=' bg-[#edf6f9] text-lg font-bold text-black py-2 px-4 rounded-lg border-4 border-black  transition duration-300 hover:scale-105 '
            onMouseEnter={e =>
              (e.target.style.boxShadow = '6px 6px 0px 0px rgba(0, 0, 0, 1)')
            }
            onMouseLeave={e => (e.target.style.boxShadow = 'none')}
            onClick={handleClearButtonClick}
          >
            Clear Form
          </button>
          <button
            className=' bg-[#edf6f9] text-lg font-bold text-black py-2 px-4 rounded-lg border-4 border-black  transition duration-300 hover:scale-105 '
            onMouseEnter={e =>
              (e.target.style.boxShadow = '6px 6px 0px 0px rgba(0, 0, 0, 1)')
            }
            onMouseLeave={e => (e.target.style.boxShadow = 'none')}
            onClick={() => navigate('/home')}
          >
            Back
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  )
}

export default WebOfScience
