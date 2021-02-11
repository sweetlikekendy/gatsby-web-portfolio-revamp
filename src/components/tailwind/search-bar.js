import React from "react"
import "twin.macro"
import { HiOutlineSearch } from "react-icons/hi"

export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <form
      action="/"
      method="GET"
      autoComplete="off"
      className="relative max-w-2xl mx-auto"
    >
      <label htmlFor="search">
        <span className="sr-only">Search blog posts</span>
      </label>
      <input
        className="pr-10 w-full rounded-md border-blueGray-400"
        // className={`${textSize} ${fontWeight} ${backgroundColor} ${border}`}
        value={searchQuery}
        onInput={e => setSearchQuery(e.target.value)}
        type="text"
        name="search"
      />
      <button type="submit" className="absolute right-0 top-0 mr-4 mt-3">
        <HiOutlineSearch className="text-blueGray-500" />
        <span className="sr-only">Search</span>
      </button>
    </form>
  )
}
