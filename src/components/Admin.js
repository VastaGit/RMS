import React, { useState, useEffect } from 'react'
import ArticleList from './ArticleList'
import ArticleDetails from './ArticleDetails'
import axios from 'axios'
import { ToastContainer, toast, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AdminPanel = ({ user }) => {
  const [articles, setArticles] = useState([])
  const [selectedArticle, setSelectedArticle] = useState(null)

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

  const handleArticleSelect = article => {
    setSelectedArticle(article)
  }

  const handleApproval = async (articleDOI, isApproved) => {
    try {
      await axios
        .post(`http://localhost:3000/status/`, {
          doi: articleDOI,
          approved: isApproved
        })
        .then(response => {
          toast.info('Publication status succesfully changed!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
          console.log('User status changed:', response.data)
        })
    } catch (error) {
      console.error('Error changing status:', error)
    }

    // setArticles(prevArticles =>
    //   prevArticles.map(article =>
    //     article.DOI === articleDOI ? { ...article, isApproved } : article
    //   )
    // )
    setSelectedArticle(null)
  }

  return (
    <div className='min-h-screen p-8 text-[#edf6f9]'>
      <ToastContainer />
      <div
        className='max-w-7xl mx-auto bg-[#004e98] p-8 rounded-lg border-4 border-black'
        style={{ boxShadow: '6px 6px 0px 0px rgba(0, 0, 0, 1)' }}
      >
        <h2 className='mb-2'>Admin Panel</h2>
        <div className='flex-cl'>
          <div className='mb-6'>
            <ArticleList articles={articles} onSelect={handleArticleSelect} />
          </div>
          <div>
            {selectedArticle ? (
              <ArticleDetails
                article={selectedArticle}
                onApproval={handleApproval}
                user={user}
              />
            ) : (
              <p>Select an article to view details</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminPanel
