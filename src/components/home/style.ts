import { style } from 'typestyle'
import { percent, rem, viewWidth } from 'csx'

export const h1 = style(
  {
    width: percent(85),
    fontSize: viewWidth(9.333),
    lineHeight: viewWidth(11.33),
    padding: rem(2),
    paddingTop: viewWidth(33.333),
    paddingBottom: rem(2)
  }
)

export const twentyPercent = style(
  {
    background: 'radial-gradient(at 60% bottom, #6c388e, #38458e)'
  }
)

export const openSource = style(
  {
    background: 'radial-gradient(at 60% top, #64e2d1, #026469)'
  }
)
