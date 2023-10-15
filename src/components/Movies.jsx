import { useContext } from "react"
import { MovieContext } from "../App"
import { motion } from "framer-motion"

const Movies = () => {
    const {filter} = useContext(MovieContext)
    return filter?.map(item =>(
            <motion.div key={item.id} className="image-card"
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 5 }}
            exit={{ opacity: 0 }}
            transition={{duration: 0.5 }}
             >
            <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt={item.title} />
            <h2>
                {item.title}
            </h2>
          </motion.div>
    
    ))
}
export default Movies