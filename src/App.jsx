import { createContext, useEffect, useState } from "react"
import ButtonFilters from "./components/ButtonFilters"
import Movies from "./components/Movies"
import { AnimatePresence } from "framer-motion"

// Create Context 
export const MovieContext = createContext()

function App() {
  const [popularMovies , setPopularMovies] = useState([])
  const [filter ,setFilter] = useState([])

  const getData = async () =>{
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=29b60b13bdadd17d0338bfbb62b90a33&language=en-US&page=1')
    const data = await response.json()
    setPopularMovies(data.results)
    setFilter(data.results)

  }

  useEffect(()=>{
    getData()
  },[])

  const value = {
   popularMovies,
   filter,
   setFilter,
  }

  return (
    <MovieContext.Provider value={value}>
      <div className="app">
        <ButtonFilters />
          <div className="image-container">
              <AnimatePresence>
                <Movies />
              </AnimatePresence>
          </div>
      </div>
    </MovieContext.Provider>
  )
}

export default App
