Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resource :walks, only: [:index, :create, :show]
    resource :waypoints, only: [:create, :index]
  end
  
  root "static_pages#root"
end
