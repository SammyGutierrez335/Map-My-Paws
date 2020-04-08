Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create]
    resource :user, only:[:create]
    resource :session, only: [:create, :destroy, :show]
    resources :walks, only: [:index, :create, :show]
    resources :waypoints, only: [:create, :index]
  end
  root "static_pages#root"
end
