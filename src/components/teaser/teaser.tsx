import Vue from 'vue'
import Component from 'vue-class-component'
import bRow from 'bootstrap-vue/es/components/layout/row'
import bCol from 'bootstrap-vue/es/components/layout/col'
import { teaserStyle } from './style'

interface IHeaderProps {
  text: string
}

@Component({
  props: { text: null }
})
export class Teaser extends Vue<IHeaderProps> {

  public render(h) {
    return (
      <bRow class={teaserStyle}>
        <bCol lg='9'>
          <h1>{this.text}</h1>
        </bCol>
      </bRow>
    )
  }
}
