import 'react-redux'
import { RootState } from '../src/store'

// https://qiita.com/Takepepe/items/6addcb1b0facb8c6ff1f
declare module 'react-redux' {
  interface DefaultRootState extends RootState {}
}
