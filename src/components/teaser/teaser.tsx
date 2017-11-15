import Vue from 'vue'
import Component from 'vue-class-component'
import { teaser } from './style'

interface IHeaderProps {
  text: string
}

@Component({
  props: { text: null }
})
export class Teaser extends Vue<IHeaderProps> {

  public render(h) {
    return (
      <div class={[teaser, 'row']}>
        <div class={['col', 'col-lg-9']}>
          <h1>{this.text}</h1>
        </div>
      </div>
    )
  }
}
