/* eslint-disable camelcase */
/* global google */

// @vendors
import React from 'react';
import { compose, withProps, lifecycle } from 'recompose';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    DirectionsRenderer
} from 'react-google-maps';
import { connect } from 'react-redux';

export const AddressMap = compose(
    withProps({
        googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCtJUNx9yMHeFXIFA2BWIX8z8t007rCpU0&v=3.exp&libraries=geometry,drawing,places',
        loadingElement: <div style={{ height: '400px' }} />,
        containerElement: <div style={{ width: '100%' }} />,
        mapElement: <div style={{ height: '50vh', width: '100%' }} />
    }),
    withScriptjs,
    withGoogleMap,
    lifecycle({
        componentDidMount() {
            const {
                latitude_address_Origin,
                longitude_address_Origin,
                latitude_address_Destination,
                longitude_address_Destination
            } = this.props;
            const directionsService = new google.maps.DirectionsService();
            directionsService.route({
                origin: new google.maps.LatLng(latitude_address_Origin, longitude_address_Origin),
                destination: new google.maps.LatLng(latitude_address_Destination, longitude_address_Destination),
                travelMode: google.maps.TravelMode.DRIVING
            }, (response, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    this.setState({
                        directions: { ...response },
                        markers: true
                    });
                } else {
                    console.error(`error fetching directions ${response}`);
                }
            });
        }
    })
)((props) => {
    const { directions, markers } = props;
    return (
        <GoogleMap defaultZoom={3}>
            {directions && <DirectionsRenderer directions={directions} suppressMarkers={markers} />}
        </GoogleMap>
    );
});

const mapStateToProps = state => ({
    latitude_address_Origin: state.latitude_address_Origin,
    longitude_address_Origin: state.longitude_address_Origin,
    latitude_address_Destination: state.latitude_address_Destination,
    longitude_address_Destination: state.longitude_address_Destination
});

export default connect(mapStateToProps, null)(AddressMap);
