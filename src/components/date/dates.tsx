import { useCircleStore } from '@/store/store'
import style from './dates.module.scss'

export default function Dates() {
  const { startDate, endDate } = useCircleStore()
  return (
    <div className={style.dates}>
      <div className={style.startDate}>
        <span className={style.dateTextStart}>{startDate}</span>
      </div>

      <div className={style.endDate}>
        <span className={style.dateTextEnd}>{endDate}</span>
      </div>
    </div>
  )
}
