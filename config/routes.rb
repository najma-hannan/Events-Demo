Rails.application.routes.draw do
  scope '/api' do
    resources :users, only: [:create, :show, :update, :destroy]

    resources :events do
      resources :tickets, only: [:index, :create]
      resources :orders, only: [:index, :create]
    end

    resources :tickets, only: [:update, :destroy]

    post '/login', to: 'sessions#create'
    get '/profile', to: 'sessions#profile'
    patch '/profile', to: 'sessions#update'

    post '/signup', to: 'registrations#create'
    delete '/logout', to: 'application#logout'
  end

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end