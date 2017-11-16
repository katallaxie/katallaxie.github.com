import Vue from 'vue'
import Component from 'vue-class-component'
import { tileStyle } from './style'

interface ITileProps {
  className?: string
}

@Component({
  props: { className: null }
})
export class Tile extends Vue<ITileProps> {

  public render(h) {
    return (
      <bRow>
        <bCol>
          <div class={[tileStyle, this.className]}>
            {this.$slots.default}
          </div>
        </bCol>
      </bRow>
    )
  }
}
