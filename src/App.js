import Map from './components/Map'
import Loader from './components/Loader'
import Header from './components/Header'
import {useState, useEffect} from 'react'

function App() {

  const [fireEvents, setFireEvents] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchFireEvents = async () => {
      setLoading(true)
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      const { events } = await res.json();
      setFireEvents(events) 
      setLoading(false)
    }
    
    fetchFireEvents()
  }, [])
  
  return (
    <div className="App">
      <Header/>
      { !loading ? <Map fireEventsData = {fireEvents}/> : <Loader />}
    </div>
  );
}

export default App;
