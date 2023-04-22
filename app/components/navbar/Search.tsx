"use client"

import { BiSearch } from "react-icons/bi"

const Search = () => {
  return (
    <div className="border w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex items-center justify-between text-sm">
        <div className="font-semibold px-6">anywhere</div>
        <div className="hidden sm:block font-semibold px-6 border-x text-center">
          Any week
        </div>
        <div className="pl-6 pr-2 text-gray-600 flex items-center gap-3">
          <div className="hiden sm:block">Add Guests</div>
          <div className="p-2 bg-rose-500 rounded-full text-white">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Search
