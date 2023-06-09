import React from "react";
import GoogleMapReact from "google-map-react";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Maps(lat, long, zoom) {
    const defaultProps = {
        center: {
            lat: { lat },
            lng: { long },
        },
        zoom: 11,
    };

    return (
        // Important! Always set the container height explicitly

        <div className="p-2 rounded" style={{ height: "40vh", width: "100%" }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent lat={lat} lng={long} text="My Marker" />
            </GoogleMapReact>
        </div>
    );
}
