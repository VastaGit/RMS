// ArticleList.jsx
import React from 'react'

const ArticleList = ({ articles, onSelect }) => {
  return (
    <select
      className='block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-black'
      onChange={e => onSelect(articles[e.target.selectedIndex - 1])}
    >
      <option disabled selected>
        Select an Article
      </option>
      {articles.map(article => (
        <option key={article.DOI} value={article.DOI}>
          {article.Title} - {article.Authors[0]}
        </option>
      ))}
    </select>
  )
}

export default ArticleList
