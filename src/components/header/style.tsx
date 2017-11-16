import { rem } from 'csx'
import bContainer from 'bootstrap-vue/es/components/layout/container'
import styled from 'vue-styled-components'

export const StyledHeader = styled(bContainer) `
  paddingTop: ${rem(2.333)};
  paddingBottom: ${rem(2.333)};
`
