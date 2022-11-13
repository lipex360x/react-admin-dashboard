import { tokens } from '@/theme'

const teste = tokens('dark')
type Theme = typeof teste

declare module '@mui/material/styles' {
  export interface ThemeOptions extends Theme {}
}

// InputBase.Theme
