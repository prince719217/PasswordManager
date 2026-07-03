import React from 'react'

const PassOP = (props) => {
  return (
        <div className={`font-extrabold ${props.textSize} ${props.mt} ${props.center}`}>
                <span className='text-green-400'>&lt;</span>
                <span className={`${props.textColor}`}>Pass</span>
                <span className='text-green-400'>OP</span>
                <span className='text-green-400'>/&gt;</span>
            </div>
  )
}

export default PassOP