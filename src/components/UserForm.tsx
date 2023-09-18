
type DataProps ={
  data:{firstName: string, lastName: string, age: string }
  updateData: ({}) => void
}

export function UserForm({data, updateData}:DataProps) {


  return (
          
          <form action="submit" className='user-details'>

            <h1>User Details</h1>
            <div className="fname">
              <label htmlFor="fname">First name</label>
              <input type="text" required id="fname" value={data.firstName} onChange={e => updateData({firstName: e.target.value})} />
            </div>
            <div className="lname">
              <label htmlFor="lname">last name</label>
              <input type="text" required id="lname" value={data.lastName} onChange={e => console.log(e.target.value)}/>
            </div>
            <div className="age">
              <label htmlFor="age">Age</label>
              <input type="number" required id="age" min={10} max={100} value={data.age} onChange={e => console.log(e.target.value)}/>
            </div>
            

          </form>
        );
}
  