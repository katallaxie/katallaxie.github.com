import { style, media } from 'typestyle'
import { percent, rem, viewWidth } from 'csx'
import { h1 } from '../../style/headings'
import size from '../../style/sizes'

export const tile = style(
  {
    $nest: {
      'h1': {
        width: percent(85),
        padding: rem(2),
        paddingTop: viewWidth(33.333),
        paddingBottom: rem(2),
        ...h1.xs
      }
    }
  },
  media(
    { minWidth: size.lg },
    {
      $nest: {
        'h1': {
          paddingTop: viewWidth(23.333),
          ...h1.lg
        }
      }
    }
  )
)

export const twentyPercent = style(
  {
    background: 'radial-gradient(at 60% bottom, #6c388e, #38458e)',
  }
)

export const openSource = style(
  {
    background: 'radial-gradient(at 60% top, #64e2d1, #026469)'
  }
)
