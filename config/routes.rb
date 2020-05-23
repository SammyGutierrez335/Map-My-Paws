Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only:[:create]
    resources :walks, only: [:create, :index, :edit, :show]
    resources :waypoints, only: [:index, :create]
    resource :session, only: [:create, :destroy, :show]
  end    
  root "static_pages#root"
end
