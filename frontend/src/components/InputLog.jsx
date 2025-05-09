import React from 'react'

export default function InputLog( {type, place,name, valeur, handleChange} ) {
  return (
    <div>
      <input 
        type={type} 
        name={name}
        value={valeur}
        placeholder={place} 
        className='h-11 w-72 ring-1 rounded ring-zinc-400  outline-none px-2 '
        required={true}
        onChange={handleChange}
      />
      <div>{}</div>
    </div>
  )
}
