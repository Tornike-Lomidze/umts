import React from 'react'
import Header from '../Header'
import Summary from '../Summary'
import Transfer from '../Transfer'
import TransferHistory from '../TransferHistory'
function Layout() {
  return (
    <div>
      <Header />
      <Summary />
      <Transfer />
      <TransferHistory />
    </div>
  )
}

export default Layout