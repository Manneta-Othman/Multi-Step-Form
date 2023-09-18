import { AccountSetup } from './components/AccountSetup';
import { Address } from './components/Address';
import { UserForm } from './components/UserForm';
import './App.css'
import { useState } from 'react';

type InitialDataProps={
  firstName: string
  lastName: string
  age: string
  street: string
  city: string 
  state: string
  zip: string
  email: string 
  password: string
}

const InitialData:InitialDataProps = {
  firstName: '',
  lastName: '', 
  age: '',
  street: '',
  city: '', 
  state: '',
  zip: '',
  email: '', 
  password: ''
}

function App() {

  const [data, setData] = useState(InitialData)

  const pagesLength = 3

  const [pages, setPages] = useState(1)

  function updateData(data:{}) {
    setData(prevData => {
      return {...prevData, ...data}
    })
  }

// Buttons Functions
  function Next () {
      pages === pagesLength ? pages : setPages(page => page + 1)
  }

  function Back () {
    pages === 1 ? pages : setPages(page => page - 1)
  }

  function Finish () {
    alert('You are now signed up')
  }

  return (
    <>
      <div className="App">
        <div className='container'>
          <div className='page'>{ pages } / { pagesLength }</div>
          {
            (pages ===1 && <UserForm data={data} updateData={updateData}/> || pages === 2 && <Address data={data} /> || pages === pagesLength && <AccountSetup data={data} />)
          }

          <div className="buttons">
            {pages > 1 && <button onClick={Back}>Back</button>}
            {pages < pagesLength && <button onClick={Next}>Next</button>}
            {pages === pagesLength && <button onClick={Finish}>Finish</button>}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
