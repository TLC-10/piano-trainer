export type AvailableScreensType = 'practice' | 'quiz'
export type AvailablePracticeModesType = 'scales' | 'chords'
const AVAILABLE_MODES: {
  [key in AvailablePracticeModesType]: { value: string; label: string }
} = {
  scales: {
    label: 'Scales',
    value: 'scales',
  },
  chords: {
    label: 'Chords',
    value: 'chords',
  },
} as const

const AVAILABLE_SCREENS: AvailableScreensType[] = ['practice', 'quiz']

export { AVAILABLE_MODES, AVAILABLE_SCREENS }
