class Api::WalksController < ApplicationController
  def index
    @walks = Walk.where(author_id: current_user().id)
    render :index
  end

  def show
    @walk = Walk.find(params[:id])
    render :show
  end

  def create
    @walk = Walk.new(walk_params)
    @walk.author_id = current_user().id
    if @walk.save
        render :show
    else
        render json: @walk.errors.full_messages, status: 422
    end   
  end

  def edit
    @walk = Walk.find(params[:id])
    @walk.title = params[:title]
       if @walk.save
        render :show
    else
        render json: @walk.errors.full_messages, status: 422
    end  
  end
  private

  def walk_params
    params.require(:walk).permit(:title)
  end
end
