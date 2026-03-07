import Slider from './slider/slider'
import Circle from './circle/circle'

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="container">
        <span className="gradient-line"></span>
        <h1 className="title">
          Исторические <br /> даты
        </h1>
        <Circle />
      </div>
    </div>
  )
}

export default App
