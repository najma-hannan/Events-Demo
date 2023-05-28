Rails.application.routes.draw do
  resources :users, only: [:create, :show, :update, :destroy]

  resources :events do
    resources :tickets, only: [:index, :create, :update, :destroy]
    post '/orders', to: 'events#order_tickets'
  end

  post '/login', to: 'sessions#create'
  get '/profile', to: 'sessions#profile'
  patch '/profile', to: 'sessions#update'

  post '/signup', to: 'registrations#create'
  delete '/logout', to: 'application#logout'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
