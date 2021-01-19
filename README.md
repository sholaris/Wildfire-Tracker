# Wildfire Tracker (Powered by NASA)

> React application using NASA API to fetch wildfires data and Google Maps to display location.

## NASA API Used

https://eonet.sci.gsfc.nasa.gov/docs/v2.1

## Installation

```bash
# Install required dependencies
npm install

# Starting app
npm start

# Build
npm run build
```
## Configuration

Add your own Google Maps API key in the Map component.

> src/components/Map.js

```javascript
const Map = ({fireEventsData, center, zoom}) => {

   ... 
       
  <GoogleMapReact
    bootstrapURLKeys={{key: 'YOUR_GOOGLE_MAPS_API_KEY'}}
    defaultCenter={center}
    defaultZoom={zoom}
   >
      {markers}
   </GoogleMapReact>
   
   ... 
}

```
