/*global google*/

import React from "react";
import lodash from "lodash";
import {findDOMNode} from "react-dom";
import {LoggerFactory} from "darch/src/utils";
import Location from "darch/src/location";
import Select from "../select";
import Spinner from "darch/src/spinner";
import styles from "./styles";

let Logger = new LoggerFactory("field.location", {level:"debug"});

/**
 * Main component class.
 */
export default class Component extends React.Component {
    /** React properties **/
    static displayName = "field.location";
    
    static defaultProps = {
        width: "100%",
        height: "50pt",
        centerCurrentLocationOnMount: true,
        zoom: 10,
        searchLimit: 3
    };
    
    static propTypes = {
        value: React.PropTypes.object,
        width: React.PropTypes.string,
        height: React.PropTypes.string,
        centerCurrentLocationOnMount: React.PropTypes.bool,
        zoom: React.PropTypes.number,
        searchLimit: React.PropTypes.number,
        searchType: React.PropTypes.string
    };

    /**
     * This function constructs a new instance of the component.
     */
    constructor(props) {
        super(props);

        this.state = {
            locations: null
        };

        this.geocoder = new google.maps.Geocoder();
    }

    /**
     * LYFECICLE : This function is called when component
     * got mounted in the view.
     */
    componentDidMount() {
        let logger = Logger.create("componentDidMount");
        logger.info("enter");

        //console.log(["google", google]);

        // Initialize the map.
        /*this.map = new mapboxgl.Map({
            container: findDOMNode(this.mapRef),
            style: "mapbox://styles/mapbox/streets-v9"
        });*/

        this.map = new google.maps.Map(findDOMNode(this.mapRef), {
            backgroundColor: "#f9f9f9",
            center: {lng: -43.940933, lat: -19.912998},
            mapTypeControl: false,
            streetViewControl: false,
            zoom: 1
        });

        this.map.addListener("bounds_changed", () => {
            //console.log(["bounds changed", this.map.getBounds()]);
            this.currentBounds = this.map.getBounds();
        });

        this.places = new google.maps.places.PlacesService(this.map);

        // Ask browser for it's location.
        if(this.props.centerCurrentLocationOnMount) {
            Location.utils.getCurrentLocation().then((location) => {
                logger.debug("getCurrentLocation success", location);

                // Register current coords.
                this.currentCoords = {
                    longitude: location.coords.longitude,
                    latitude: location.coords.latitude
                };

                // Add marker to current location.
                /*new google.maps.Marker({
                    position: {
                        lat: location.coords.latitude,
                        lng: location.coords.longitude
                    },
                    animation: google.maps.Animation.DROP,
                    map: this.map
                });*/

                this.currentCoords = {
                    lat: location.coords.latitude,
                    lng: location.coords.longitude
                };

                // Center around the marker
                this.map.panTo(this.currentCoords);

                // Zoom
                this.map.setZoom(10);
            });
        }
    }

    /**
     * LYFECICLE : This function is called when component
     * props or state has changed.
     */
    componentDidUpdate(prevProps) {
        let logger = Logger.create("componentDidUpdate");
        logger.info("enter", {
            value: this.props.value,
            preValue: prevProps.value
        });

        // If value changed, the update map marker.
        if(!lodash.isEqual(this.props.value, prevProps.value)) {
            // Remove previous marker
            if(this.marker) {
                this.marker.setMap(null);
            }

            // Center around the marker
            this.map.panTo(this.props.value.coords);

            // Zoom
            this.map.setZoom(15);

            // Add marker to selected location.
            this.marker = new google.maps.Marker({
                position: this.props.value.coords,
                animation: google.maps.Animation.DROP,
                map: this.map
            });
        }
    }

    /**
     * This function load locations
     */
    loadLocations(value) {
        let logger = Logger.create("loadLocations");
        logger.info("enter", {value, currentCoords: this.currentCoords});

        this.setState({loadingLocations: true});

        let bounds = this.currentBounds || this.map.getBounds();
        let locations = [];

        //console.log(["bounds", bounds]);

        // First find places.
        this.places.nearbySearch({
            bounds,
            name: value
        }, (results, status) => {
            if(status != google.maps.places.PlacesServiceStatus.OK) {
                logger.error("places nearbySearch error", {status,results});
            }
            else {
                logger.debug("places nearbySearch success", results);
                //console.log("places nearbySearch success", results);

                results.slice(0,2).forEach((result) => {
                    locations.push({
                        label: result.vicinity?`${result.name} - ${result.vicinity}`:`${result.name}`,
                        value: JSON.stringify({
                            name: result.name,
                            placeId: result.place_id,
                            address: result.vicinity,
                            coords: {
                                lat: result.geometry.location.lat(),
                                lng: result.geometry.location.lng()
                            }
                        })
                    });
                });
            }

            // Now find addresses
            this.geocoder.geocode({
                address: value,
                bounds: bounds
            }, (results, status) => {
                if(status != google.maps.GeocoderStatus.OK) { 
                    logger.error("geocode error", {status,results});
                    this.setState({loadingLocations: false});
                }
                else {
                    logger.debug("geocode success", results);
                    //console.log("geocode success", results);

                    // Push the first 3 results.
                    results.slice(0,2).forEach((result) => {
                        locations.push({
                            label: result.formatted_address,
                            value: JSON.stringify({
                                name: result.formatted_address,
                                placeId: result.place_id,
                                address: result.formatted_address,
                                addressComponents: (result.address_components||[]).map((component) => {
                                    return {
                                        shortName: component.short_name,
                                        longName: component.long_name,
                                        types: component.types
                                    };
                                }),
                                coords: {
                                    lat: result.geometry.location.lat(),
                                    lng: result.geometry.location.lng()
                                }
                            })
                        });
                    });
                }

                logger.debug("locations", locations);
                this.setState({locations, loadingLocations: false});
            });
        });
    }

    /**
     * This function handle select value change.
     */
    onSelectChange(value) {
        let logger = Logger.create("onSelectChange");
        logger.info("enter", {value});

        let data = JSON.parse(value);

        logger.debug("parsed value", {data});

        this.props.onChange(data);
    }

    /**
     * This function is responsible for generating the component's view.
     */
    render() {
        let {
            width,
            height,
            placeholder,
            isValid
        } = this.props;

        let {
            locations,
            loadingLocations
        } = this.state;

        let valueStr = this.props.value?JSON.stringify(this.props.value):null;

        return (
            <div className={styles.main}>
                <Select placeholder={placeholder}
                    value={valueStr}
                    options={locations}
                    loadOptions={this.loadLocations}
                    loading={loadingLocations}
                    creatable={false}
                    multi={false}
                    scale={1}
                    onChange={this.onSelectChange}
                    isValid={isValid}
                    loaderComponent={<Spinner.CircSide color="#555" />}/>

                <div className={styles.mapContainer}>
                    <div style={{width,height}} 
                        ref={(ref) => { this.mapRef = ref; }}></div>
                </div>
            </div>
        );

        /*return (
            <div>oi</div>
        );*/
    }
}
