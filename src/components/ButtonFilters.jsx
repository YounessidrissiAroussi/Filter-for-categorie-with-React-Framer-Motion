import { useContext, useState } from "react"
import { genres } from "../Untils"
import { MovieContext } from "../App"

const ButtonFilters = () => {
  const [active,setActive] = useState(0)
  const {popularMovies , setFilter} = useContext(MovieContext)

  const HandelClickForFilter =(id) => {
    setActive(id)
    const filterMovie = popularMovies.filter(item => item.genre_ids.includes(id))
   
    if (id === 0) {
       setFilter(popularMovies)
    }
    else{
    setFilter(filterMovie)
    }
  }
  return (
    <div className="button-wrapper">
    {
      genres.map((item) => (
        <button key={item.id} className={active === item.id ? "active": ""}  onClick={()=>HandelClickForFilter(item.id)}>
          {
            item.name
          }
        </button>
      ))
    }
    </div>
  )
}

export default ButtonFilters