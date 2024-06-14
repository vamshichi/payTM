import React, { useState } from 'react'
import { Appbar } from '../components/Appbar'
import { Balance } from '../components/Balance'
import { Users } from '../components/Users'
import axios from 'axios'

export const Dashboard = () => {
  const [balance , setBalance] = useState(0);
  const userBalance = async()=>{
      const response = await axios.get('https://paytm-backeng-1.onrender.com/api/v1/account/balance',{
          headers:{
              Authorization:'Bearer '+localStorage.getItem('token')
          }
      })
      
      setBalance(response.data.balance)
    }

    useState(()=>{
      userBalance()
    },[userBalance])

    return (
      <div>
          <Appbar />
          <Balance value={balance} />
          <Users />
      </div>
    )
  }
  


