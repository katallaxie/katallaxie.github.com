import React from 'react'
import Header from './Header'
import Head from './Head'
import useLayoutContext from '@hooks/useLayout'
import Container from './Container'

type DefaultLayoutProps = {
  children: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps): JSX.Element => {
  const layout = useLayoutContext()

  return (
    <>
      <Head {...{ seoTitle: layout?.page.title }} />
      <Header />
      <Container>{children}</Container>
      <div id="modal-root"></div>
    </>
  )
}

export default DefaultLayout
