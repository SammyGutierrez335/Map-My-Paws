import { $CombinedState } from "redux"

export const createWaypoint = (waypoint) => {
    return $.ajax({
        url: '/api/waypoints',
        method: 'POST'
        data: { waypoint}
    })
}