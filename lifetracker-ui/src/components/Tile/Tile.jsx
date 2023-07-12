import React from 'react'
import "./Tile.css"
import { useState } from 'react'


const Tile = ({tileObject}) => {
    
  //currentTypes is an array of the names each value from the tileObject should be assigned to
  //TileOject changed depending on the object given
  // We need to handle which data we are going to display

  const convert = (militaryTime) => {
    const [hours, minutes, seconds] = militaryTime.split(':');
    return `${(hours > 12) ? hours - 12 : hours}:${minutes}${seconds ? `:${seconds}` : ''} ${(hours >= 12) ? 'PM' : 'AM'}`;
}

  //usestate variables 
  // T07:00:00.000Z
  let startTime = null
  let endTime = null
  let date = null
  if(tileObject.date){
    date = tileObject.date.replace("T07:00:00.000Z", "") 
  }

  if(tileObject.start_time){

    startTime = convert(tileObject.start_time)
    endTime = convert(tileObject.end_time)

    console.log(`startTime ${startTime}`)
  }







  return (
    <div className='tile-border'>

      <div className= "tile-data">date: {date}</div>

      <div className= "tile-data" >startTime: {startTime}</div>

      <div className= "tile-data">endTime: {endTime}</div>

    </div>
  )
}

export default Tile