class Api::WaypointsController < ApplicationController

  def index
    @waypoints = Waypoint.where(walk_id: params[:id])
  end

  def create
    @waypoint = Waypoint.new(waypoint_params)
    
    if @waypoint.save
        render :show
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
