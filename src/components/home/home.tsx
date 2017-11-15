import Vue from 'vue'
import Component from 'vue-class-component'
import { Getter } from 'vuex-class'
import { Teaser } from '../teaser'
import { twentyPercent, openSource, h1 } from './style'

@Component
export class Home extends Vue {
  @Getter('teaser') public teaser

  public render(h) {
    return (
      <div class={['container-fluid']}>
        <Teaser text={this.teaser} />
        <div class={['row', 'experience']}>
          <div class={['col-xl-6']}>
            <div class={twentyPercent}>
              <h1 class={h1}>Burning for great ideas and solving the last 20%.</h1>
            </div>
          </div>
          <div class="col-xl-6">
            <h3>Experience</h3>
            <table class="table">
              <tbody>
                <tr>
                  <th scope="row">Axel Springer SE <span class="meta">Senior Frontend Developer</span></th>
                  <td style="float:right">2017&mdash;Present</td>
                </tr>
                <tr>
                  <th scope="row">Axel Springer SE <span class="meta">Senior Frontend Developer</span></th>
                  <td style="float:right">2017&mdash;Present</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class={['row', 'experience']}>
          <div class={['col-xl-6', openSource]}>
            <div class={openSource}>
              <h1 class={h1}>Big fan of new and open tech.</h1>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="row">
              <div class="col-12 col-sm-6">
                <h3>Frontend</h3>
                <div class="row">
                  <div class="col">JavaScript</div>
                  <div class="col">TypeScript</div>
                  <div class="col">CSS</div>
                  <div class="col">JavaScript</div>
                  <div class="col">TypeScript</div>
                  <div class="col">CSS</div>
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <h3>Backend</h3>
                <div class="row">
                  <div class="col">JavaScript</div>
                  <div class="col">TypeScript</div>
                  <div class="col">CSS</div>
                  <div class="col">JavaScript</div>
                  <div class="col">TypeScript</div>
                  <div class="col">CSS</div>
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <h3>DevOps</h3>
                <div class="row">
                  <div class="col">JavaScript</div>
                  <div class="col">TypeScript</div>
                  <div class="col">CSS</div>
                  <div class="col">JavaScript</div>
                  <div class="col">TypeScript</div>
                  <div class="col">CSS</div>
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <h3>Backend</h3>
                <div class="row">
                  <div class="col">JavaScript</div>
                  <div class="col">TypeScript</div>
                  <div class="col">CSS</div>
                  <div class="col">JavaScript</div>
                  <div class="col">TypeScript</div>
                  <div class="col">CSS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
