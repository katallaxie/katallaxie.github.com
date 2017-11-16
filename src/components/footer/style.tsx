import { rem, rgba } from 'csx'
import bContainer from 'bootstrap-vue/es/components/layout/container'
import styled from 'vue-styled-components'

export const StyledFooter = styled(bContainer) `
  margin-top: ${rem(4.333)};
  margin-bottom: ${rem(4.3333)};
  color: ${rgba(53, 53, 53, 1).toString()};
`
