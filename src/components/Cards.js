import React from 'react';
import { locations } from '../data/db';

export default function Cards() {
  return (
    <div className="cards">
      {locations.map((location, index) => {
        return (
          <div className="card">
            <div className="card--column1">
              <img className="card--img" src={location.image} />
            </div>
            <div className="card--column2">
              <div className="card--location--row">
                <i class="fa fa-map-marker-alt" aria-hidden="true"></i>
                <p>{(location.country).toUpperCase()}</p>
                <a href={location.link}>
                  <p key={index}>View on Google Maps</p>
                </a>
              </div>
              <h1>{location.destination}</h1>
              <p className="card--date">
                {location.startDate.toLocaleDateString('en-UK')} -{' '}
                {location.endDate.toLocaleDateString('en-UK')}
              </p>
              <p>{location.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
