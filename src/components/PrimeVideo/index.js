import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const getActionMovies = moviesList.filter(
    each => each.categoryId === 'ACTION',
  )

  const getComedyMovies = moviesList.filter(
    each => each.categoryId === 'COMEDY',
  )

  return (
    <div className="bg-container">
      <img
        className="prime-img"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <div className="bottom-container">
        <h1 className="movies-head">Action Movies</h1>
        <MoviesSlider moviesList={getActionMovies} />
        <h1 className="movies-head">Comedy Movies</h1>
        <MoviesSlider moviesList={getComedyMovies} />
      </div>
    </div>
  )
}

export default PrimeVideo
