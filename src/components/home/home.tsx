import Vue from 'vue'
import Component from 'vue-class-component'
import { Getter } from 'vuex-class'
import { Teaser } from '../teaser'
import { Tile } from '../tile'
import { twentyPercent, openSource, dataCol, styledTable, StyledData } from './style'
import { classNames } from '../../utils/style'
import bRow from 'bootstrap-vue/es/components/layout/row'
import bCol from 'bootstrap-vue/es/components/layout/col'
import bTable from 'bootstrap-vue/es/components/table/table'

@Component
export class Home extends Vue {
  @Getter('teaser') public teaser
  @Getter('experience') public experience
  @Getter('education') public education
  @Getter('coding') public coding
  @Getter('devOps') public devOps
  @Getter('tech') public tech

  public render(h) {
    return (
      <div class={classNames('container-fluid')}>
        <Teaser text={this.teaser} />

        <Tile className={twentyPercent}>
          <h1>Working on great ideas and solving the last 20%.</h1>
        </Tile>

        <bRow>
          <bCol lg='6' xl='6' class={dataCol}>
            <h2>Experience</h2>
            <bTable items={this.experience} class={styledTable}>
            </bTable>
          </bCol>
          <bCol lg='5' offset-lg='1' offset-xl='2' class={dataCol}>
            <h2>Education</h2>
            <bTable items={this.education} class={styledTable}>
            </bTable>
          </bCol>
        </bRow>

        <Tile className={openSource}>
          <h1>Big fan of new and open tech.</h1>
        </Tile>

        <bRow>
          <bCol sm='6' lg='4' class={dataCol}>
            <h2>Coding</h2>
            {this.coding.map(el => (<StyledData>{el}</StyledData>))}
          </bCol>
          <bCol sm='6' lg='4' class={dataCol}>
            <h2>Tech</h2>
            {this.tech.map(el => (<StyledData>{el}</StyledData>))}
          </bCol>
          <bCol sm='6' lg='4' class={dataCol}>
            <h2>DevOps</h2>
            {this.devOps.map(el => (<StyledData>{el}</StyledData>))}
          </bCol>
        </bRow>
      </div>
    )
  }
}
