
type DataProps ={
  data:{street: string, city: string, state: string, zip: string }
}

export function Address({data}:DataProps) {
  return <form action="submit" className='user-details'>
            <h1>Address Details</h1>
            <div className="street">
              <label htmlFor="street">Street</label>
              <input type="text" id="street" value={data.street}/>
            </div>
            <div className="city">
              <label htmlFor="city">City</label>
              <input type="text" id="city" value={data.city}/>
            </div>
            <div className="state">
              <label htmlFor="state">State</label>
              <input type="text" id="state" value={data.state}/>
            </div>
            <div className="zip">
              <label htmlFor="zip">Zip Code</label>
              <input type="number" id="zip" value={data.zip}/>
            </div>
          </form>;
}
  