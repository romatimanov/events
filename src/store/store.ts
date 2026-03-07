import { create } from 'zustand'

interface CircleState {
  active: number
  rotation: number
  startDate: number
  endDate: number
  swiper: any
  activeSlide: number
  setActive: (id: number) => void
  setRotation: (rotation: number) => void
  setStartDate: (date: number) => void
  setEndDate: (date: number) => void
  setSwiper: (swiper: any) => void
  setActiveSlide: (index: number) => void
}

export const useCircleStore = create<CircleState>((set) => ({
  active: 6,
  rotation: 0,
  startDate: 2020,
  endDate: 2026,
  swiper: null,
  activeSlide: 0,

  setActive: (id) => set({ active: id }),
  setRotation: (rotation) => set({ rotation }),
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
  setSwiper: (swiper) => set({ swiper }),
  setActiveSlide: (index) => set({ activeSlide: index })
}))
