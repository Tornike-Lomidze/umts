import React from 'react'
import Loader from '../../elements/Loader'
import Modal from '../../elements/Modal'
import Header from '../Header'
import Summary from '../Summary'
import Transfer from '../Transfer'
import TransferHistory from '../TransferHistory'
function Layout() {
  return (
    <div className="layout_style">
      <Header />
      <Modal />
      <Loader />
      <Summary />
      <Transfer />
      <TransferHistory />
    </div>
  )
}

export default Layout