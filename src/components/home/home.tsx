import Vue from 'vue'
import Component from 'vue-class-component'
import { Getter } from 'vuex-class'

import { biggerClass } from './style'

@Component
export class Home extends Vue {
  @Getter('message') public message

  public render(h) {
    return (
      <div class={biggerClass}>
        <h1>Crafting software with great user experiences.</h1>
      </div >
    )
  }
}
