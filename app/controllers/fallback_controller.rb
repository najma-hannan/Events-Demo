# Controller logic: fallback requests for React Router.
# Leave this here to help deploy your app later!
class FallbackController < ActionController::Base

  def index
    # React app index page
    render file: 'public/index.html'
    # render file: Rails.root.join('app/views/devise/sessions/new.html.slim')
  end
end
