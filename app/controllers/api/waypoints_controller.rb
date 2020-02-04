class Api::WaypointsController < ApplicationController
    before_action :require_logged_in, only: [:create]

  def index
    @waypoints = 
    render :index
  end

  def show
    @waypoint = Waypoint.find(params[:id])
  end

  def create
    @waypoint = Waypoint.create!(waypoint_params)
    render :show
  end

  private

  def waypoint_params
    params.require(:waypoint).permit(:lat,:lng,)
  end

end

end
