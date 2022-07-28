import React from 'react'
import Logo from '../../assets/instagram.png'
import { InputSearch } from '../inputsearch'
import { OPTIONS } from './options'

export const NavBar = () => {
  return (
    <nav className="h-[60px] flex items-center justify-center border-b-[1px]">
      <div className="flex items-center justify-around max-w-[1000px] w-[100%]">
        <img className="max-h-[60px]" src={Logo} />
        <InputSearch />
        <div className="flex items-center gap-[20px]">
          {OPTIONS.map((option) => (
            <div key={option.name}>
              <option.icon className="w-[24px] h-[24px] cursor-pointer" />
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}
