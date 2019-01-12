import React from 'react'
import PropTypes from 'prop-types'
const Card = ({slide}) => {
  const {
    index, title, content, button1, button2,
    mobile_image, desktop_image } = slide

  const bgHero={
      backgroundRepeat: `no-repeat`,
      backgroundSize: `contain`,
      backgroundPosition: `center`
  };

  return(
   <div id={`slide-${index}`} className="slide"
       style={bgHero}>
          <div className="slide-body">
             <h3 className="slide-title">{title}</h3>
             <p className="slide-text">{content}</p>
             {
               (`${button2}`!= '')? (
                 <>
                   <button className="btn mr-5">{button1}</button>
                   <button className="btn">{button2}</button>
                </>
             ):(
               <button className="btn">{button1}</button>
             )
           }

          </div>
      </div>

   )
}
export default Card
