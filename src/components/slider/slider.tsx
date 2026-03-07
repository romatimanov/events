import React, { useEffect, useRef } from 'react'
import style from './slider.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { gsap } from 'gsap'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import { useCircleStore } from '@/store/store'
import icon from '@/images/icon.svg'

export const history = [
  {
    id: 1,
    name: 'История',
    info: [
      { year: 1991, text: 'Распад СССР и образование независимых государств.' },
      { year: 1993, text: 'Подписание Маастрихтского договора — создание Европейского союза.' },
      { year: 1994, text: 'Начало первой Чеченской войны.' },
      { year: 1995, text: 'Подписание Дейтонских соглашений, завершивших войну в Боснии.' }
    ]
  },
  {
    id: 2,
    name: 'Литература',
    info: [
      { year: 1997, text: 'Выход книги «Гарри Поттер и философский камень» Дж. К. Роулинг.' },
      { year: 1998, text: 'Публикация романа «Бойцовский клуб» Чака Паланика.' },
      { year: 2000, text: 'Выход романа «Ангелы и демоны» Дэна Брауна.' },
      { year: 2001, text: 'Нобелевская премия по литературе присуждена В. С. Найполу.' }
    ]
  },
  {
    id: 3,
    name: 'Кино',
    info: [
      { year: 2002, text: 'Премьера фильма «Властелин колец: Две крепости».' },
      { year: 2003, text: 'Выход фильма «Пираты Карибского моря: Проклятие Чёрной жемчужины».' },
      { year: 2005, text: 'Выход фильма «Бэтмен: Начало» Кристофера Нолана.' },
      { year: 2008, text: 'Премьера фильма «Тёмный рыцарь».' }
    ]
  },
  {
    id: 4,
    name: 'Музыка',
    info: [
      {
        year: 2009,
        text: 'Смерть Майкла Джексона — одного из самых влиятельных артистов поп-музыки.'
      },
      {
        year: 2010,
        text: 'Леди Гага становится мировой поп-иконой после альбома «The Fame Monster».'
      },
      { year: 2012, text: 'PSY выпускает вирусный хит «Gangnam Style».' },
      { year: 2013, text: 'Daft Punk выпускают альбом «Random Access Memories».' }
    ]
  },
  {
    id: 5,
    name: 'Технологии',
    info: [
      { year: 2015, text: 'Запуск Windows 10 компанией Microsoft.' },
      { year: 2016, text: 'Популярность игры Pokémon GO с использованием дополненной реальности.' },
      { year: 2018, text: 'Активное развитие искусственного интеллекта и нейросетей.' },
      { year: 2020, text: 'Массовый переход компаний на удалённую работу из-за пандемии.' }
    ]
  },
  {
    id: 6,
    name: 'Наука',
    info: [
      { year: 2020, text: 'Разработка и массовое применение вакцин против COVID-19.' },
      { year: 2021, text: 'Первый полёт вертолёта Ingenuity на Марсе.' },
      { year: 2023, text: 'Развитие генеративного искусственного интеллекта.' },
      { year: 2024, text: 'Активные исследования в области квантовых вычислений.' }
    ]
  }
]

const Slider: React.FC = () => {
  const { active, setSwiper, setActiveSlide } = useCircleStore()

  const currentHistory = history.find((item) => item.id === active)
  if (!currentHistory) return null

  const sliderRef = useRef<HTMLDivElement | null>(null)
  const prevRef = useRef<HTMLButtonElement | null>(null)
  const nextRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    gsap.fromTo(
      sliderRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        delay: 1,
        duration: 0.5,
        ease: 'power2.out'
      }
    )
  }, [active])

  return (
    <div className={style.slider} ref={sliderRef}>
      <button ref={prevRef} className={`${style.sliderBtn} ${style.sliderBtnPrev}`}>
        <img src={icon} alt="next" />
      </button>

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        breakpoints={{
          0: {
            slidesPerView: 1.5,
            spaceBetween: 20
          },

          1024: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }}
        onSwiper={(swiper) => {
          setSwiper(swiper)

          setTimeout(() => {
            if (!swiper.params.navigation || typeof swiper.params.navigation === 'boolean') return

            swiper.params.navigation.prevEl = prevRef.current
            swiper.params.navigation.nextEl = nextRef.current

            swiper.navigation.destroy()
            swiper.navigation.init()
            swiper.navigation.update()
          })
        }}
        onSlideChange={(swiper) => {
          setActiveSlide(swiper.activeIndex)
        }}
      >
        {currentHistory.info.map((item) => (
          <SwiperSlide key={item.year}>
            <div className={style.slide}>
              <span className={style.slideYear}>{item.year}</span>
              <span className={style.slideText}>{item.text}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button ref={nextRef} className={`${style.sliderBtn} ${style.sliderBtnNext}`}>
        <img src={icon} alt="next" />
      </button>
    </div>
  )
}
export default Slider
