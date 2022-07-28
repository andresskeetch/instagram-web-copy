import React from 'react'

export const InputSearch = () => {
  return (
    <div className="h-[36px]">
      <input
        placeholder="Search"
        className="px-[16px] py-[3px] outline-0 bg-[#efefef] rounded-md h-[100%]"
        type={'text'}
        autoCapitalize={'none'}
      />
    </div>
  )
}
