import React from 'react'
import { Link } from 'react-router-dom'
import './RightSidebar.css'

const WidgetTags = () => {

  const tags = ['c','css','html','python','javascript','mangodb','sql','nodejs','reactjs']

  return (
    <div className='widget-tags'>
      <h3>Watched Tags</h3>
      <div className='widget-tags-div'>
        {
          tags.map((tag) => (
            <Link to='/Tags' key={tag} className='ans-tags'> {tag} </Link>
            // <p key={tag}>{tag}</p>
          ))
        }
      </div>
    </div>
  )
}

export default WidgetTags
