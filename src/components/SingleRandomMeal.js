import React from 'react'

const SingleRandomMeal = ({name, image, area, category, instructions, source, ingredients}) => {
    return <section className='section meals-section random-meals-section'>
      <h2 className='section-title'>{name}</h2>
      <div className="meal-food">
        <img src={image} alt={name} />
        <div className='meal-info'>
          <p>
            <span className="meal-data">name :</span>
            {name}
          </p>
          <p>
            <span className="meal-data">Area :</span>
            {area}
          </p>
          <p>
            <span className="meal-data">Category :</span>
            {category}
          </p>
          <p>
            <span className="meal-data">Instructions :</span>
            {instructions}
          </p>
          <p class="meal-url">
            <span className="meal-data">source :</span>
            {source}
          </p>
          <p>
            <span className="meal-data">ingredients :</span>
            {ingredients ?`${ingredients} `: ''}
          </p>
        </div>
      </div>
    </section> 
  }

  export default SingleRandomMeal;
