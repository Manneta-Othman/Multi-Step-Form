import { AccountSetup } from './components/AccountSetup';
import { Address } from './components/Address';
import { UserForm } from './components/UserForm';
import './App.css'
import { FormEvent, useState } from 'react';
import useMultiStepsForm from './components/useMultiStepsForm';

type FormData={
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

const InitialData:FormData = {
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
  
  const {steps, currentStepIndex, step, isFirstStep, isLastStep, back, next, goto} = 
  useMultiStepsForm([
    <UserForm data={data} updateData={updateData}/>,
    <Address data={data} updateData={updateData} />,
    <AccountSetup data={data} updateData={updateData} />
  ])

  function updateData(data:Partial<FormData>) {
    setData(prevData => {
      return {...prevData, ...data}
    })
  }

  function onSubmit(e:FormEvent) {
    e.preventDefault()
    if(!isLastStep){
      next()
    }else{
      setData(InitialData)
      goto(0)
      console.log(data)
      alert("You've been successfully signed up")
    }
  }

  return (
    <>
      <div className="App">
        <div className='container'>
          <div className='page'>{ currentStepIndex + 1 } / { steps.length}</div>
          <form onSubmit={onSubmit}>
            {step}
            <div className="buttons">
              {!isFirstStep && <button type='button' onClick={back}>Back</button>}
              <button type='submit'>
                { isLastStep ? 'Finish' : 'Next'}
                </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
