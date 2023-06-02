class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user
    else
      render json: { error: 'Error creating account' }, status: :unprocessable_entity
    end
  end

  def show
    render json: @user
  end

  def update
    if @user == current_user || current_user.is_admin?
      if @user.update(user_params)
        render json: @user
      else
        render json: { error: 'Error updating account' }
      end
    else
      render json: { error: 'Not authorized' }, status: :unauthorized
    end
  end

  def destroy
    if @user == current_user || current_user.is_admin?
      if @user.destroy
        render json: { message: 'User successfully deleted' }
      else
        render json: { error: 'Error deleting account' }
      end
    else
      render json: { error: 'Not authorized' }, status: :unauthorized
    end
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end
