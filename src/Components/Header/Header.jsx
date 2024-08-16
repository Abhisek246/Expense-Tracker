import React, { useState } from 'react'
import './Header.css'
import Form from '../Form/Form';

const Header = () => {
  const [incomeDetails, setIncomeDetails] = useState(0);
  const [expenseDetails, setExpenseDetails] = useState(0);


  const update = (income, expense)=>{
    if(income == undefined && expense == undefined){
      setIncomeDetails(0);
      setExpenseDetails(0);
    }else{
      setIncomeDetails(income);
      setExpenseDetails(expense);
    }
  }


  return (
    <>
      <div className='header'>
        <h2>Expense Tracker</h2>
        <div className='amount-cards'>
          <div className='card incomeCard'>Income: &#x20B9;{incomeDetails}</div>
          <div className='card expenseCard'>Expense: &#x20B9;{expenseDetails}</div>
          <div className='card balanceCard'>Balance: &#x20B9;{incomeDetails - expenseDetails}</div>
        </div>
      </div>
      <Form update={update}/>
    </>

  )
}

export default Header;