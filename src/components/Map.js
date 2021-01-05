import {useState} from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import InfoBox from './InfoBox'

const Map = ({fireEventsData, center, zoom}) => {

    const [locationInfo, setLocationInfo] = useState(null)

    const markers = fireEventsData.map((ev, index) => {
        if(ev.categories[0].id === 8){
            return <LocationMarker key={index} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() =>
            setLocationInfo({id: ev.id, date: ev.geometries[0].date, title: ev.title})}/>
        }
        return null;
    })

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyAYbt_L11QqB0sPKpvR3y2VX2daPKoTir8'}}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <InfoBox info={locationInfo}/>}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

export default Map
