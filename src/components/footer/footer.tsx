import Vue from 'vue'
import Component from 'vue-class-component'
import bCol from 'bootstrap-vue/es/components/layout/col'
import bRow from 'bootstrap-vue/es/components/layout/row'
import { StyledFooter } from './style'

@Component({
  props: { name: null, job: null }
})
export class Footer extends Vue {

  public render(h) {
    return (
      <StyledFooter fluid>
        <bRow>
          <bCol>
            <p>&copy; 2017&mdash;present.</p>
          </bCol>
        </bRow>
      </StyledFooter>
    )
  }
}
