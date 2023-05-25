Rails.application.routes.draw do
  get 'events/index'
  get 'events/show'
  get 'events/create'
  get 'events/update'
  get 'events/destroy'
  resources :users, only: [:create, :show, :update, :destroy]

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

Rails.application.routes.draw do
  get 'events/index'
  get 'events/show'
  get 'events/create'
  get 'events/update'
  get 'events/destroy'
  resources :events, only: [:index, :show, :create, :update, :destroy]
  post '/login', to: 'authentication#login'
end
