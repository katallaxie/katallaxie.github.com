import { style, media } from 'typestyle'
import { rem, viewWidth } from 'csx'
import size from '../../style/sizes'

export const teaser = style(
  {
    marginTop: rem(1.333),
    marginBottom: rem(2.333),
    $nest: {
      'h1': {
        fontSize: viewWidth(9.333),
        lineHeight: viewWidth(10.333)
      }
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
        'h1': {
          fontSize: viewWidth(6.333),
          lineHeight: viewWidth(7.333)
        }
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
