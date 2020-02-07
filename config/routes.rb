Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resource :routes, only: [:index, :create, :show]
  end
  
  root "static_pages#root"
end
