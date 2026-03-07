import { create } from 'zustand'

interface CircleState {
  active: number
  rotation: number
  startDate: number
  endDate: number
  setActive: (id: number) => void
  setRotation: (rotation: number) => void
  setStartDate: (date: number) => void
  setEndDate: (date: number) => void
}

export const useCircleStore = create<CircleState>((set) => ({
  active: 6,
  rotation: 0,
  startDate: 2020,
  endDate: 2026,

  setActive: (id) => set({ active: id }),
  setRotation: (rotation) => set({ rotation }),
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date })
}))
