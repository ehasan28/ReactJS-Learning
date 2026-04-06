import React from 'react'

const Card = (props) => {
    return (
        <div>
            <a href={props.elem.url} target='_blank'>
                <div className='mb-2 overflow-hidden h-48 w-full rounded'>
                    <img className='h-full w-full object-cover' src={props.elem.download_url} alt="Gallery image" />
                </div>
                <h3 className='text-black font-medium'>{props.elem.author}</h3>
            </a>
        </div>
    )
}

export default Card