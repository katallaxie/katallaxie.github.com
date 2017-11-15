import { style, media } from 'typestyle'
import { rem } from 'csx'
import size from '../../style/sizes'
import { h1 } from '../../style/headings'

export const teaser = style(
  {
    marginTop: rem(1.333),
    marginBottom: rem(2.333),
    $nest: {
      'h1': h1.xs
    }
  },
  media(
    { minWidth: size.md },
    {
      marginTop: rem(2.333),
      marginBottom: rem(4.333)
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

// .brand, .mission {
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-end;
//   width: 100%;

//   margin-bottom: 2.333rem;

//   h1 {
//     width: 85%;
//     font-size: 9.333vw;
//     line-height: 11.333vw;
//     padding: 2rem;
//     padding-top: 33.333vw;
//     padding-bottom: 2rem;
//   }
// }
