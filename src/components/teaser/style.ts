import { style, media } from 'typestyle'
import { rem } from 'csx'
import size from '../../style/sizes'
import { h1 } from '../../style/headings'

export const teaserStyle = style(
  {
    marginTop: rem(2.333),
    marginBottom: rem(2.333),
    $nest: {
      'h1': h1.xs
    }
  },
  media(
    { minWidth: size.md },
    {
      marginTop: rem(4.333),
      marginBottom: rem(2.333)
    }
  ),
  media(
    { minWidth: size.lg },
    {
      // marginTop: rem(2.333),
      // marginBottom: rem(2.333),
      $nest: {
        'h1': h1.lg
      }
    }
  )
)


