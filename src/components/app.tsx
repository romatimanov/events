import Slider from './slider/slider'
import Circle from './circle/circle'
import CircleBtns from './circle-btns/circleBtns'

import Pagination from './pagination/pagination'

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="container">
        <span className="gradient-line"></span>
        <h1 className="title">
          Исторические <br /> даты
        </h1>
        <Circle />
        <div className="btn-group">
          <CircleBtns />
          <Pagination />
        </div>
        <div className="slider">
          <Slider />
        </div>
      </div>
    </div>
  )
}

export default App
