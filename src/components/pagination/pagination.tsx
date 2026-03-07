import { useCircleStore } from '@/store/store'
import style from './pagination.module.scss'
import { history } from '../slider/slider'

export default function Pagination() {
  const { active, swiper, activeSlide } = useCircleStore()

  const currentHistory = history.find((item) => item.id === active)

  return (
    <div className={style.pagination}>
      {currentHistory?.info.map((_, index) => (
        <button
          key={index}
          className={`${style.bullet} ${activeSlide === index ? style.active : ''}`}
          onClick={() => swiper?.slideTo(index)}
        />
      ))}
    </div>
  )
}
