import React from 'react'
import classNames from 'classnames'

const Button = ({type,children,classname, onclick,varient,isload, ...rest}) => {
  const fixedclass='bg-primary px-4 py-2 rounded-md bg-blue-500'
  const buttonClasses=classNames(
    fixedclass,
    {
      'bg-red-500':varient==='primary',
      'bg-green-500':varient==='secondary',
      'bg-blue-500':varient==='ternary',
    },
    classname,
    
  )
  return (
    <button type={type} className={buttonClasses} onClick={onclick} {...rest} >
        <span className='flex justify-center items-center gap-2'>{children}
         {isload && <span className='w-6 h-6 border-gray-500 border-4 border-t-blue-500 rounded-full animate-spin'></span>}
        </span>
        
    </button>
  )
}

export default Button
