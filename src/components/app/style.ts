import { style, media } from 'typestyle'
import { percent, rem } from 'csx'
import size from '../../style/sizes'

export const wrap = style(
  {
    marginTop: rem(2.333),
    marginBottom: rem(2.333),
    marginLeft: rem(0.333),
    marginRight: rem(0.333)
  },
  media(
    { minWidth: size.sm },
    {
      margin: '4.333rem auto 0',
      maxWidth: percent(81)
    }
  ),
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
