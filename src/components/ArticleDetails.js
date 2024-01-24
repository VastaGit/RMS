import React from 'react'
import AdminScopus from './AdminScopus'
import AdminWebOfScience from './AdminWebOfScience'

const ArticleDetails = ({ article, onApproval, user }) => {
  return (
    <div>
      {article.Scopus_CiteScore !== null ? (
        <AdminScopus user_info={user} article={article} />
      ) : (
        <AdminWebOfScience user_info={user} article={article} />
      )}

      <div className='flex items-center justify-between'>
        <button
          className=' bg-[#edf6f9] text-lg font-bold text-black py-2 px-4 rounded-lg border-4 border-black  transition duration-300 hover:scale-105 '
          onMouseEnter={e =>
            (e.target.style.boxShadow = '6px 6px 0px 0px rgba(0, 0, 0, 1)')
          }
          onMouseLeave={e => (e.target.style.boxShadow = 'none')}
          onClick={() => onApproval(article.DOI, true)}
        >
          Approve
        </button>
        <button
          className=' bg-[#edf6f9] text-lg font-bold text-black py-2 px-4 rounded-lg border-4 border-black  transition duration-300 hover:scale-105 '
          onMouseEnter={e =>
            (e.target.style.boxShadow = '6px 6px 0px 0px rgba(0, 0, 0, 1)')
          }
          onMouseLeave={e => (e.target.style.boxShadow = 'none')}
          onClick={() => onApproval(article.DOI, false)}
        >
          Deny
        </button>
        {/* <ToastContainer /> */}
      </div>
    </div>
  )
}

export default ArticleDetails
