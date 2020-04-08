class Api::WalksController < ApplicationController
    
  def index
    @walks = Walk.all
  end

  def show
    @walk = Walk.find(params[:id])
  end

  def create
    @walk = Walk.new(walk_params)

    if @walk.save
        render "api/walk/show"
    else
        render json: @walk.errors.full_messages, status: 422
    end

      
  end

  private

  def walk_params
    params.require(:walk).permit(:title, :center_coords, :author_id)
  end
end
