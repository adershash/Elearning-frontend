import React from 'react'

const Button = ({type,children,classes, onclick, ...rest}) => {
  return (
    <button type={type} className={classes} onClick={onclick} {...rest} >
        <span className='flex justify-center items-center gap-2'>{children}</span>
    </button>
  )
}

export default Button
