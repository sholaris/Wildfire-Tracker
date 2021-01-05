

const InfoBox = ({info}) => {
    const date = new Date(info.date).toLocaleString()
    return (
        <div className="location-info">
            <h2>Event Location Info</h2>
            <ul>
                <li>ID: <strong>{info.id}</strong></li>
                <li>DATE: <strong>{date}</strong></li>
                <li>TITLE: <strong>{info.title}</strong></li>
            </ul>
        </div>
    )
}

export default InfoBox
