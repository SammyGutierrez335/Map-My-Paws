Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only:[:create]
    resources :users, only:[:index, :show] do
      resources :walks, only: [:index, :show, :create]
    end
    
    resources :walks, only:[:show] do
        resources :waypoints, only: [:create]
    end
    resource :session, only: [:create, :destroy, :show]
  end    
  root "static_pages#root"
end
