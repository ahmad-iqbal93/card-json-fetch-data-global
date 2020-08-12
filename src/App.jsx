import React, { useEffect, useState } from 'react';
import './App.css';
import { useStoreActions, useStoreState } from 'easy-peasy'

function App() {

  let setUserData = useStoreActions(action => action.setUserData)
  let userData = useStoreState(state => state.userData)
  let [mouse, setMouse] = useState(false)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'appliaction/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        setUserData(data)
      })
  }, [])
  return (
    <div className="App" style={{
      width: '100vw',
      height: 'auto',
      minHeight: '100vh',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      padding: '60px 10%'
    }}>
      {userData.length === 0 ? (< h3 > Wait</h3>) : userData.map((e) => {
        return (
          <div className="card" key={e.id} style={{
            width: 'calc(130% / 3)',
            minHeight: '200px',
            height: 'auto',
            boxShadow: '5px 5px 8px rgba(0,0,0,0.300)',
            display: 'flex',
            flexDirection: 'space-beetwen',
            margin: '20px 0px',
            borderRadius: '8px'
          }}>
            <div className="left" style={{
              width: '30%',
              backgroundImage: `url(https://picsum.photos/id/${e.id}/200/300)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
            </div>

            <div className="right" style={{
              width: '70%',
              padding: '20px',
              textAlign: 'left'
            }}>
              <h3>{e.name}</h3>
              <p>{e.email}</p>
              <small>{e.address.city}</small>
            </div>
          </div>
        )
      })}
    </div >
  );
}

export default App;
