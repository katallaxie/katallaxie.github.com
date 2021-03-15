import React from 'react'
import clsx from 'clsx'

type PostLayoutWrapProps = {
  children: React.ReactNode
}

export const styles = clsx([
  'col-span-full',
  'py-6',
  'md:py-12',
  'lg:col-span-10',
  'xl:col-span-8'
])

const PostLayoutContent = ({ children }: PostLayoutWrapProps): JSX.Element => {
  return <div className={styles}>{children}</div>
}

export default PostLayoutContent
