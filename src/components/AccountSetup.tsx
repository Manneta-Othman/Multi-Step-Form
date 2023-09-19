
type DataProps ={
  data:{email: string, password: string }
  updateData: ({}) => void
}


export function AccountSetup({data, updateData}:DataProps) {

  return (
          <>
            <h1>Account Details</h1>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input type="email" required id="email" value={data.email} onChange={e => updateData({email: e.target.value})}/>
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input type="password" required id="password" value={data.password} onChange={e => updateData({password: e.target.value})}/>
            </div>
          </>
        );
}
  