class Api::WaypointsController < ApplicationController
   def create
    @waypoint = Waypoint.new(waypoint_params)

    if @waypoint.save
        render "api/waypoints/show"
    else
      render json: @waypoint.errors.full_messages, status: 422
    end
  end


  private

  #latitude and longitude should be passed in as decimals
  def waypoint_params
    params.require(:waypoint).permit(:walk_id, :latitude, :longitude)
  end
end
