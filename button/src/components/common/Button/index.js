import './Button.css' ;
import { useEffect, useState } from 'react';
import classnames from 'classnames' ;

Button.defaultProps ={
    href      : '#',
    type      : 'a' ,
    className : 'btn btn-primary',
    target    : '',
    icon      : '',
}

export default function Button({
    type,
    value,
    className,
    href,
    target,
    icon,
}) 
{
    let typeIcon = null ;
    return(
      <>
            {   type === 'button' &&  (
                    <button  className={className} > {value} </button>
                )
            }     

            {   type === 'a' && (
                    <a href={href} className={className} target={target} > <i className={icon}></i>  {value} </a>
                )

            }

      </>
      
    );
}