
type DataProps ={
  data:{street: string, city: string, state: string, zip: string }
  updateData: ({}) => void
}

export function Address({data, updateData}:DataProps) {
  return (
          <>
            <h1>Address Details</h1>
            <div className="street">
              <label htmlFor="street">Street</label>
              <input type="text" id="street" value={data.street} onChange={e => updateData({street: e.target.value})}/>
            </div>
            <div className="city">
              <label htmlFor="city">City*</label>
              <input type="text" required id="city" value={data.city} onChange={e => updateData({city: e.target.value})}/>
            </div>
            <div className="state">
              <label htmlFor="state">State*</label>
              <input type="text" required id="state" value={data.state} onChange={e => updateData({state: e.target.value})}/>
            </div>
            <div className="zip">
              <label htmlFor="zip">Zip Code*</label>
              <input type="number" required id="zip" value={data.zip} onChange={e => updateData({zip: e.target.value})}/>
            </div>
          </>
        );
}
  
