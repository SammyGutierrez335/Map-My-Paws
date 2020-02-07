class Api::RoutesController < ApplicationController
    def create
        @route = Route.new(route_params)

        if @route.save
            render "api/routes/show"
        else
            render json: @route.errors.full_messages, status: 422
        end
  end

  private

  def route_params
    params.require(:route).permit(:title, :center_coords, :author_id)
  end
end
