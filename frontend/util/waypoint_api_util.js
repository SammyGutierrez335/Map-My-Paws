export const createWaypoint = (waypoint) => {
    return $.ajax({
        url: '/api/waypoints',
        method: 'POST',
        data: { waypoint}
    })
}

export const fetchWaypoints = (walkId) => {
    return $.ajax({
        url: '/api/waypoints',
        method: 'GET',
        data: {walkId}
    })
}