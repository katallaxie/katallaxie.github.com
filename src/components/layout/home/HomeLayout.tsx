import React from 'react'
import Header, {
  HomeLink
} from '@components/layout/default/DefaultLayoutHeader'
import usePageContext from '@hooks/usePage'
import DefaultLayout from '@components/layout/default/DefaultLayout'
import Container from '@components/layout/default/DefaultLayoutContainer'
import Wrap from '@components/layout/default/DefaultLayoutWrap'
import PageList from '@components/layout/PageList'
import PostList from '@components/layout/PostList'
import Footer from '@components/mdx/page/Footer'
import ProjectList from '@components/layout/ProjectList'
import { MenuProvider } from '@state/menu'
import { guardFactory } from '@utils/graphql'

interface HomeLayoutProps {
  children?: React.ReactNode
}

const HomeLayout = ({}: HomeLayoutProps): JSX.Element => {
  const { page } = usePageContext()

  const pages = page?.refs.filter(guardFactory('__typename', 'Page'))
  const posts = page?.refs.filter(guardFactory('__typename', 'Post'))
  const links = page?.refs.filter(guardFactory('__typename', 'Link'))
  const menuItem = page?.pageMenu?.menu.filter(
    guardFactory('__typename', 'Link')
  )

  return (
    <>
      <MenuProvider items={menuItem}>
        <DefaultLayout>
          <Wrap>
            <Container className="col-span-full lg:col-span-10 xl:col-span-4 px-8 pt-24">
              <Header>
                <HomeLink />
              </Header>
              <PageList pages={pages} />
            </Container>
            <Container className="col-span-full lg:col-span-10 xl:border-l xl:border-gray-700 xl:col-start-5 py-12 px-8 xl:pr-12 xl:py-24 xl:pl-24 xl:col-span-7">
              <PostList posts={posts} />
              <ProjectList projects={links} />
              <Footer />
            </Container>
          </Wrap>
        </DefaultLayout>
      </MenuProvider>
    </>
  )
}

export default HomeLayout
