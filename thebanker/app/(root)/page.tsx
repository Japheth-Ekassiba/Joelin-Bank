
import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: 'Japheth', lastName: 'Ochuku', email: 'joelindevs@gmail.com' }
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Bank at the convinience of your home"
          />

          <TotalBalanceBox
          accounts = {[]}
          totalBanks = {1}
          totalCurrentBalance = {17686.79}/>
        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSideBar
       user = {loggedIn}
       transactions = {[]}
       banks = {[{currentBalance: 343.65}, {currentBalance: 876.65}]}
      />
    </section>
  )
}

export default Home