import React from 'react'
import './SpecialMenu.css'

import { images ,data } from '../../constants/index'
import { SubHeading, MenuItem } from '../../components/index'

const SpecialMenu = () => {
  return (
    <div className='app__specialMenu flex__center section__padding' id='menu'>
      <div className='app__specialMenu-title'>
        <SubHeading title={"Menu that fits you palatte"}/>
        <h1 className='headttext__cormorant'  style={{ color: '#DCCA87' }}>Today's Special</h1>
      </div>

      <div className='app__specialMenu-menu'>
        <div className='app__specialMenu-menu_wine flex__center'>
          <p className='app__specialMenu_menu_heading'>Wine & Beer</p>
          <div className='app__specialMenu-menu_items'>
              {data.wines.map((wine,index) => (
                <MenuItem key={wine.title + index} title={wine.title} tags={wine.tags} price={wine.price}/>
              ))}
          </div>
        </div>

        <div className='app__specialMenu-menu_img'>
            <img src={images.menu} alt='menu_img'/>
        </div>

        <div className='app__specialMenu-menu_cocktails flex__center'>
          <p className='app__specialMenu_menu_heading'>Cocktails</p>
          <div className='app__specialMenu-menu_items'>
              {data.cocktails.map((cocktail,index) => (
                <MenuItem key={cocktail.title + index} title={cocktail.price} tags={cocktail.tags}/>
              ))}
          </div>
        </div>
      </div>

      <div style={{marginTop: '15px'}}>
          <button type='button' className='custom__button'>View More</button>
      </div>
    </div>
  )
}

export default SpecialMenu