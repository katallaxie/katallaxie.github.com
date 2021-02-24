import React from 'react'

import { NextPage } from 'next'
import DefaultLayout from '@components/layout/DefaultLayout'
import { SSGPageProps } from '@type/page/SSGPageProps'
import { OnlyBrowserPageProps } from '@type/page/OnlyBrowserPageProps'
import { getCommonStaticProps, getCommonStaticPaths } from '@utils/nextjs/SSG'
import hydrate from 'next-mdx-remote/hydrate'

const components = {}

type Props = SSGPageProps<Partial<OnlyBrowserPageProps>>

export const getStaticProps = getCommonStaticProps
export const getStaticPaths = getCommonStaticPaths

const Page: NextPage<Props> = ({ mdxSource }): JSX.Element => {
  const content = mdxSource ? hydrate(mdxSource, { components }) : null

  return <DefaultLayout>{content}</DefaultLayout>
}

export default Page