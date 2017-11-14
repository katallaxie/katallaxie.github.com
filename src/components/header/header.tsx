import Vue from 'vue'
import Component from 'vue-class-component'
import { header } from './style'

interface IHeaderProps {
  name: string
  job: string
}

@Component({
  props: { name: null, job: null }
})
export class Header extends Vue<IHeaderProps> {

  public render(h) {
    return (
      <header class={[header, 'container-fluid']}>
        <div class='row'>
          <div class='col'>
            <h3>{this.name}<br />{this.job}</h3>
          </div>
        </div>
      </header>
    )
  }
}
