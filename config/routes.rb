Rails.application.routes.draw do
  resources :users, only: [:create, :show, :update, :destroy]
  resources :events, only: [:index, :show, :create] do
    resources :tickets, only: [:index, :create]
  end
  resources :tickets, only: [:update, :destroy]

  post '/login', to: 'sessions#create'
  post '/signup', to: 'registrations#create'
  delete '/logout', to: 'application#logout'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
