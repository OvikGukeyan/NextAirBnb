"use client";

import React, { FC } from "react";
import { cn } from "@/lib/utils";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import { useCountries } from "@/lib";

type Props = {
  className?: string;
  location?: string;
};

const Map: FC<Props> = ({ className, location }) => {
  const {getCountryByValue} = useCountries();
  const latlang = getCountryByValue(location as string)?.latLang as LatLngExpression;
  return (
    <div className={cn("", className)}>
      <MapContainer
        scrollWheelZoom={false}
        className="h-[50vh] rounded-lg relative z-0"
        center={latlang || [52.505, -0.09]}
        zoom={13}
      >
        <TileLayer
          attribution='&amp;copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};

export default Map;