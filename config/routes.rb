Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :walks, only: [:index, :create, :show]
    resources :waypoints, only: [:create, :index]
  end
  root "static_pages#root"
end
