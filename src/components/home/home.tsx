import Vue from 'vue'
import Component from 'vue-class-component'
import { Getter } from 'vuex-class'

@Component
export class Home extends Vue {

  public render(h) {
    return (
      <div>
        <h1>Crafting software with great user experiences.</h1>
      </div >
    )
  }
}
