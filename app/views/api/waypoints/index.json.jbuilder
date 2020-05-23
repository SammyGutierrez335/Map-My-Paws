json.array @waypoints do |waypoint|
    json.extract! @waypoint, :walk_id, :latitude, :longitude
end