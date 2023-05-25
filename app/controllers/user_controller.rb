class UsersController < ApplicationController
  before_action :authenticate_user
  before_action :authorize_admin, except: [:index, :show]

  # POST /users
  def create
    user = User.new(user_params)

    if user.save
      render json: { message: 'User created successfully' }, status: :created
    else
      render json: { error: user.errors.full_messages.join(', ') }, status: :unprocessable_entity
    end
  end

  # GET /users
  def index
    users = User.all
    render json: users
  end

  # DELETE /users/:id
  def destroy
    user = User.find(params[:id])
    user.destroy
    head :no_content
  end
  def manage_users
    # Code to manage users (e.g., create, update, delete)
  end

  def manage_vendors
    # Code to manage vendors (e.g., create, update, delete)
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end

  def authorize_admin
    unless current_user && current_user.role == 'admin'
      render json: { error: 'Unauthorized access' }, status: :unauthorized
    end
  end
end

