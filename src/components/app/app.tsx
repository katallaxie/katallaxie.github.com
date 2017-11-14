import Vue from 'vue'
import Component from 'vue-class-component'
import { Home } from '../home'
import { wrap } from './style'

@Component
export class App extends Vue {

  public props = {
    show: false
  }

  public mounted() {
    this.props.show = true
  }

  public render(h) {
    if (this.props.show) {
      return (
        <div class={wrap}>
          <transition name='fade'>
            <Home />
          </transition>
        </div>
      )
    }
  }
}
