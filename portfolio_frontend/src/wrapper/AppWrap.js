import React from 'react';

import {NavigationDots, SocialMedia} from '../components'

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      
      {/* Section One  */}
      <SocialMedia />
      
      {/* Section Two */}
      <div className='app__wrapper app__flex'>
        <Component /> 
      <div className="copyright">
        <p className="p-text">@2020 MICHAEL</p>
        <p className="p-text">All rights reserved</p>
      </div> 
      </div>
      
      {/* Section Three */}
      <NavigationDots active={idName} />
      
    </div>
  )
}

export default AppWrap;