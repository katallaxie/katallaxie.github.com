import { style, media } from 'typestyle'
import { percent, rem, viewWidth } from 'csx'
import { h1 } from '../../style/headings'
import size from '../../style/sizes'

export const tileStyle = style(
  {
    marginTop: rem(1.333),
    marginBottom: rem(1.333),
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
      marginTop: rem(3.333),
      marginBottom: rem(3.333),
      $nest: {
        'h1': {
          paddingTop: viewWidth(23.333),
          ...h1.lg
        }
      }
    }
  )
)
