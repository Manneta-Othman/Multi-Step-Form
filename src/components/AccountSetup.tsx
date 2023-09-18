
type DataProps ={
  data:{email: string, password: string }
}


export function AccountSetup({data}:DataProps) {

  return <form action="submit" className='user-details'>
            <h1>Account Details</h1>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input type="email" required id="email" value={data.email}/>
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input type="password" required id="password" value={data.password}/>
            </div>
          </form>;
}
  