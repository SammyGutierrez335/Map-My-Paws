Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only:[:create] do
      resources :walks, only: [:index, :show, :create]
    end
    
    resources :walks, only:[:show] do
        resources :waypoints, only: [:create]
    end
  end    
    resource :session, only: [:create, :destroy, :show]
  root "static_pages#root"
end
