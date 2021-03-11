import React from 'react'
import { getPageStaticProps, PageProvider } from '@state/page'
import { MdxProvider } from '@state/mdx'
import { NextPage } from 'next'
import { OnlyBrowserPageProps } from '@type/page/OnlyBrowserPageProps'
import { SSGPageProps } from '@type/page/SSGPageProps'
import { HeadProvider, MultiversalPageHeadProps } from '@state/head'
import Head from '@components/layout/Head'
import compose from '@utils/compose'
import MdxRenderer from '@components/layout/MdxRenderer'

type Props = SSGPageProps<
  Partial<OnlyBrowserPageProps> & Partial<MultiversalPageHeadProps>
>

export const getStaticProps = compose(getPageStaticProps)

const Home: NextPage<Props> = ({ mdxSource, head }): JSX.Element => {
  return (
    <>
      <PageProvider>
        <HeadProvider data={head}>
          <Head />
          <MdxProvider source={mdxSource}>
            <MdxRenderer />
          </MdxProvider>
        </HeadProvider>
      </PageProvider>
    </>
  )
}

export default Home
