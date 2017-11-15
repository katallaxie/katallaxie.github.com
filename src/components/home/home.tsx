import Vue from 'vue'
import Component from 'vue-class-component'
import { Getter } from 'vuex-class'
import { Teaser } from '../teaser'
import { twentyPercent, openSource, tile } from './style'

@Component
export class Home extends Vue {
  @Getter('teaser') public teaser

  public render(h) {
    return (
      <div class={['container-fluid']}>
        <Teaser text={this.teaser} />
        <div class={['row', 'experience']}>
          <div class={['col']}>
            <div class={[twentyPercent, tile]}>
              <h1>Burning for great ideas and solving the last 20%.</h1>
            </div>
          </div>
        </div>
        <div class={['row']}>
          <div class={['col-xl-6']}>
            <h2>Experience</h2>
            <table class="table">
              <tbody>
                <tr>
                  <th scope="row">Axel Springer SE<br /><span class="meta">Senior Frontend Developer</span></th>
                  <td style="float:right">2017&mdash;Present</td>
                </tr>
                <tr>
                  <th scope="row">Axel Springer SE <span class="meta">Senior Frontend Developer</span></th>
                  <td style="float:right">2017&mdash;Present</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class={['col-xl-6']}>
            <h2>Experience</h2>
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
        <div class={['row']}>
          <div class={['col']}>
            <div class={[openSource, tile]}>
              <h1>Big fan of new and open tech.</h1>
            </div>
          </div>
        </div>
        <div class={['row']}>
          <div class="col-lg-6">
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
