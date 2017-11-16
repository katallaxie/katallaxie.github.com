import { style, media } from 'typestyle'
import { rem, percent, rgba } from 'csx'
import sizes from '../../style/sizes'
import styled from 'vue-styled-components'

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

export const dataCol = style(
  {
    marginTop: rem(1.333),
    marginBottom: rem(1.333)
  }
)

export const StyledData = styled.span`
  display: block;
`

export const styledTable = style(
  {
    $nest: {
      'tbody td:nth-last-child(1)': {
        width: percent(30)
      }
    }
  },
  media({
    minWidth: sizes.lg
  }, {
      $nest: {
        'tbody td:nth-last-child(1)': {
          float: 'right',
          width: percent(50)
        }
      }
    }),
  {
    width: percent(100),
    $nest: {
      'tbody td': {
        paddingTop: rem(0.333),
        paddingBottom: rem(0.333),
      },
      'tbody td > span': {
        display: 'block',
        fontWeight: 400,
        color: rgba(200, 200, 200, 1).toString()
      },

      'thead': {
        display: 'none'
      }
    }
  }
)
