import spinner from './spinner.gif'

const Loader = () => {
    return (
        <div className="loader">
            <img src={spinner} alt="Loading"/>            
            <h1>Looking For Fire Events</h1>
        </div>
    )
}

export default Loader
