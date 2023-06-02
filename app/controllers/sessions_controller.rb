class SessionsController < ApplicationController
  skip_before_action :authenticate_user, only: :create

  def create
    user = User.find_by(email: params[:email])
    if user&.authenticate(params[:password])
      token = JwtService.encode_token(user_id: user.id)
      render json: { user: user, token: token }, status: :ok
    else
      render json: { errors: ['Invalid email or password'] }, status: :unprocessable_entity
    end
  end

  def profile
    render json: @current_user.to_json(only: [:id, :name, :email, :is_admin])
  end

  def update
    user = @current_user

    if user.update(profile_params)
      render json: user.to_json(only: [:id, :name, :email, :is_admin])
    else
      render json: {errors: user.errors.to_hash(true)}, status: :unprocessable_entity
    end
  end

  private

  def profile_params
    params.permit(:name, :email)
  end
end
