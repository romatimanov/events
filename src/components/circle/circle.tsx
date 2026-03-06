import { useState } from 'react'
import style from './circle.module.scss'

export default function Circle() {
  const points = [
    { id: 1, start: 2010, end: 2016 },
    { id: 2, start: 2013, end: 2019 },
    { id: 3, start: 2016, end: 2022 },
    { id: 4, start: 2019, end: 2025 },
    { id: 5, start: 2022, end: 2028 },
    { id: 6, start: 2025, end: 2031 }
  ]

  const [active, setActive] = useState(6)
  const [rotation, setRotation] = useState(0)
  const [startDate, setStartDate] = useState(2025)
  const [endDate, setEndDate] = useState(2031)

  const animateNumber = (from: number, to: number, setter: (v: number) => void) => {
    const step = from < to ? 1 : -1
    let current = from

    const interval = setInterval(() => {
      current += step
      setter(current)

      if (current === to) clearInterval(interval)
    }, 40)
  }

  const handleClick = (point: (typeof points)[number], index: number) => {
    if (point.id === active) return

    const step = 360 / points.length
    const activeIndex = points.findIndex((p) => p.id === active)

    const diff = activeIndex - index

    setRotation((prev) => prev + diff * step)
    setActive(point.id)

    animateNumber(startDate, point.start, setStartDate)
    animateNumber(endDate, point.end, setEndDate)
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
          </span>
        ))}
      </div>

      <div className={style.dates}>
        <div className={style.startDate}>
          <span className={style.dateText}>{startDate}</span>
        </div>

        <div className={style.endDate}>
          <span className={style.dateText}>{endDate}</span>
        </div>
      </div>
    </div>
  )
}
