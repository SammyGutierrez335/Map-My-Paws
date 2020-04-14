Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only:[:create]
      resources :walks, only: [:create, :index, :patch]
    resources :walks, only:[:show] do
        resources :waypoints, only: [:create]
    end
    resource :session, only: [:create, :destroy, :show]
  end    
  root "static_pages#root"
end
