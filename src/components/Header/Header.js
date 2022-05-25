import React, { Fragment, useState } from 'react'
import { SideNav } from './SideNav/SideNav'
import { TopHeader } from './TopHeader/TopHeader'

export const Header = () => {
  const [ShowSideNav, setShowSideNav] = useState(false)

  const SideNavTogglerHandler = () => {
    setShowSideNav(prevState => !prevState)
  }
  return (
    <Fragment>
        <TopHeader SideNavTogglerHandler={SideNavTogglerHandler}/>
        <SideNav ShowSideNav={ShowSideNav} SideNavTogglerHandler={SideNavTogglerHandler}/>
    </Fragment>
  )
}
