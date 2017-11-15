import { style, media } from 'typestyle'
import { percent } from 'csx'
import size from '../../style/sizes'

export const wrap = style(
  {
    margin: '2.333rem',
  },
  media(
    { minWidth: size.md },
    {
      margin: '6.333rem auto 0',
      maxWidth: percent(79)
    }
  ),
  media(
    { minWidth: size.lg },
    {
      margin: '8.3333rem auto 0',
      maxWidth: percent(77)
    }
  ),
  media(
    { minWidth: size.xl },
    {
      margin: '8.3333rem auto 0',
      maxWidth: percent(75)
    }
  )
)
