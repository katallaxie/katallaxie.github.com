import { style, media } from 'typestyle'
import size from '../../style/sizes'

export const wrap = style(
  media(
    { minWidth: size.md },
    {
      margin: '2rem auto 0',
      maxWidth: '92%'
    }
  ),
  media(
    { minWidth: size.lg },
    {
      margin: '4rem auto 0',
      maxWidth: '97%'
    }
  ),
  media(
    { minWidth: size.xl },
    {
      margin: '6rem auto 0',
      maxWidth: '87%'
    }
  )
)
