import { useState, useEffect } from 'react'
import everything from "./api/ArticlesAPI" 
import './App.css'
import axios from "axios"
import AppNav from './components/AppNav'
import HomePage from './pages/HomePage'
import ArticlePage from './pages/ArticlePage'
import SectionPage from './pages/SectionPage'

import NewsData from './data/news.json'

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// console.log(everything)

function App() {
  const[articles, setArticles] = useState([])


  useEffect(() => {
    axios.get('http://hn.algolia.com/api/v1/search_by_date?', {
      params:{
      tags: ('front_page'),
      hitsPerPage:50}
    }).then((result)=>{
    setArticles(result.data.hits.map((article, index)=>{
      
      return {
          id: index,
          title: article.title,
          abstract: article.abstract,
          byline: article.byline,
          created_date: article.created_date,
          url: article.url,
          section: article.section,
          tags: article._tags}}))
      
    })}
  , []);



  
  return (
    <div className="App">

      <AppNav />
      <Router> 
        <Routes>
          <Route path='/' element={<HomePage articles = {articles}/>} />
          <Route path='/articles/:articleID' element={<ArticlePage  articles = {articles} />} />
          <Route path='/sections/:sectionName' element={<SectionPage articles={articles} /> } />

        </Routes>
      </Router>   
  
    </div>
  )
}

export default App