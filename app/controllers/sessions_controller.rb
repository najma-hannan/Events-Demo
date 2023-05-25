class SessionsController < ApplicationController
  skip_before_action :authenticate_user, only: :create

  def create
    user = User.find_by(email: params[:email])
    if user&.authenticate(params[:password])
      token = JwtService.encode_token(user_id: user.id)
      render json: { user: user, token: token }, status: :created
    else
      render json: { error: 'Invalid email or password' }, status: :unauthorized
    end
  end
end
