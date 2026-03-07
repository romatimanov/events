import style from './circleBtns.module.scss'
import { useCircleStore } from '@/store/store'
import prev from '@/images/prev.svg'
import next from '@/images/next.svg'
import { points } from '../circle/circle'
import { gsap } from 'gsap'

export default function CircleBtns() {
  const { active, setActive, rotation, setRotation, startDate, setStartDate, endDate, setEndDate } =
    useCircleStore()

  const handleClickNext = () => {
    if (active === points.length) return
    const step = 360 / points.length

    const next = active === points.length ? 1 : active + 1
    const point = points.find((p) => p.id === next)!

    setRotation(rotation - step)
    setActive(next)

    const startObj = { value: startDate }
    const endObj = { value: endDate }

    gsap.to(startObj, {
      value: point.start,
      duration: 1,
      ease: 'power1.out',
      onUpdate: () => setStartDate(Math.round(startObj.value))
    })

    gsap.to(endObj, {
      value: point.end,
      duration: 1,
      ease: 'power1.out',
      onUpdate: () => setEndDate(Math.round(endObj.value))
    })
  }
  const handleClickPrev = () => {
    if (active === 1) return
    const step = 360 / points.length

    const prev = active === 1 ? points.length : active - 1
    const point = points.find((p) => p.id === prev)!
    setRotation(rotation + step)
    setActive(prev)

    const startObj = { value: startDate }
    const endObj = { value: endDate }

    gsap.to(startObj, {
      value: point.start,
      duration: 1,
      ease: 'power1.out',
      onUpdate: () => setStartDate(Math.round(startObj.value))
    })

    gsap.to(endObj, {
      value: point.end,
      duration: 1,
      ease: 'power1.out',
      onUpdate: () => setEndDate(Math.round(endObj.value))
    })
  }
  return (
    <div className={style.mainBtns}>
      <p className={style.counter}>
        {active < 9 ? `0${active}` : active} /{' '}
        {points.length < 9 ? `0${points.length}` : points.length}
      </p>
      <div className={style.circleBtns}>
        <button
          className={`${style.btn} ${active === 1 ? style.disabled : ''}`}
          onClick={handleClickPrev}
        >
          <img src={prev} alt="prev" />
        </button>
        <button
          className={`${style.btn} ${active === 6 ? style.disabled : ''}`}
          onClick={handleClickNext}
        >
          <img src={next} alt="next" />
        </button>
      </div>
    </div>
  )
}
