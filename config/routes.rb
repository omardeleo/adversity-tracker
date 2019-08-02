Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create, :show, :update] do 
        resources :adversities, only: [:index, :create, :show]
      end
      resources :feelings, only: [:index, :create, :show]
      resource :session, only: [:create, :destroy]
    end
  end 
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
