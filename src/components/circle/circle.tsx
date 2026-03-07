import { useCircleStore } from '@/store/store'
import style from './circle.module.scss'
import Dates from '@/components/date/dates'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
const points = [
  { id: 1, start: 1990, end: 1996, name: 'История' },
  { id: 2, start: 1996, end: 2002, name: 'Литература' },
  { id: 3, start: 2002, end: 2008, name: 'Кино' },
  { id: 4, start: 2008, end: 2014, name: 'Музыка' },
  { id: 5, start: 2014, end: 2020, name: 'Технологии' },
  { id: 6, start: 2020, end: 2026, name: 'Наука' }
]

export default function Circle() {
  const { active, rotation, startDate, endDate, setActive, setRotation, setStartDate, setEndDate } =
    useCircleStore()
  const isFirstRender = useRef(true)
  const activeNameRef = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      gsap.set(activeNameRef.current, { opacity: 1 })
      return
    }

    gsap.fromTo(
      activeNameRef.current,
      { opacity: 0, x: -10 },
      {
        opacity: 1,
        x: 0,
        delay: 1,
        duration: 0.5,
        ease: 'power2.out'
      }
    )
  }, [active])

  const handleClick = (point: (typeof points)[number], index: number) => {
    if (point.id === active) return

    const step = 360 / points.length
    const activeIndex = points.findIndex((p) => p.id === active)

    const diff = activeIndex - index

    setRotation(rotation + diff * step)
    setActive(point.id)

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
    <div className={style.containerCircle}>
      <div
        className={style.circle}
        style={{ '--rotation': `${rotation}deg` } as React.CSSProperties}
      >
        {points.map((point, i) => (
          <span
            key={point.id}
            onClick={() => handleClick(point, i)}
            className={`${style.circleNum} ${active === point.id ? style.circleNumActive : ''}`}
            style={{ '--i': i } as React.CSSProperties}
          >
            <span className={style.circleText}>{point.id}</span>

            {active === point.id && (
              <span ref={activeNameRef} className={style.circleName}>
                {point.name}
              </span>
            )}
          </span>
        ))}
      </div>

      <Dates />
    </div>
  )
}
