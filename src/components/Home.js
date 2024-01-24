import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ToastContainer, toast, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Home = ({ user }) => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:3000/articles')
        setArticles([...articles, ...response.data])
      } catch (error) {
        console.error('Error fetching articles:', error)
      }
    }
    fetchArticles()
  }, [])

  const handleDeleteArticle = async index => {
    console.log(articles[index], index)
    try {
      await axios
        .post(`http://localhost:3000/delete/`, { doi: articles[index].DOI })
        .then(response => {
          toast.success('Publication succesfully deleted!', {
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
          console.log('User deleted successfully:', response.data)
        })
    } catch (error) {
      // Handle error
      console.error('Error deleting user:', error)
    }
    const updatedArticles = [...articles]
    updatedArticles.splice(index, 1)
    setArticles(updatedArticles)
  }

  return (
    <div className='container mx-auto p-8'>
      <ToastContainer />
      <div
        className='max-w-full mx-auto bg-[#004e98] p-8 rounded-lg border-4 border-black'
        style={{ boxShadow: '6px 6px 0px 0px rgba(0, 0, 0, 1)' }}
      >
        <div className='text-lg text-[#edf6f9]'>
          <table className='w-full border-collapse border rounded border-black max-w-full'>
            <thead>
              <tr className='bg-black'>
                <th className='p-2 text-center'>DOI</th>
                <th className='p-2 text-center'>Title</th>
                <th className='p-2 text-center'>Authors</th>
                <th className='p-2 text-center'>Journal</th>
                <th className='p-2 text-center'>Publication Date</th>
                <th className='p-2 text-center'>Status</th>
                <th className='p-2 text-center'>Actions</th>
              </tr>
            </thead>
            <tbody className='border-black'>
              {articles.map((article, index) =>
                article.UserPersonnelNumber === user.PersonnelNumber ? (
                  <tr
                    key={index}
                    className='border-b border-r bg-white text-black'
                  >
                    <td className='p-2 text-center  border-r'>{article.DOI}</td>
                    <td className='p-2 text-center  border-r'>
                      {article.Title}
                    </td>
                    <td className='p-2 text-center  border-r'>
                      {article.Authors.join(', ')}
                    </td>
                    <td className='p-2 text-center  border-r'>
                      {article.JournalTitle}
                    </td>
                    <td className='p-2 text-center  border-r'>
                      {article.PublicationDate}
                    </td>
                    <td className='p-2 text-center  border-r'>
                      {article.Status}
                    </td>
                    <td className='p-2 text-center  border-r'>
                      <button
                        onClick={() => handleDeleteArticle(index)}
                        className='text-red-500 hover:text-red-700'
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ) : null
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Home
