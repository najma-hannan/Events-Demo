class UsersController < ApplicationController
  def create
      @user = User.new(user_params)
      if @user.save
          render json: @user
      else
          render json: {error: 'Error creating account'}
      end
  end

  def show
      @user = User.find(params[:id])
      render json: @user
  end

  def update
      @user = User.find(params[:id])
      if @user.update(user_params)
          render json: @user
      else
          render json: {error: 'Error updating account'}
      end
  end

  def destroy
      @user = User.find(params[:id])
      if @user.destroy
          render json: {message: 'User successfully deleted'}
      else
          render json: {error: 'Error deleting account'}
      end
  end

  private
  def user_params
      params.require(:user).permit(:name, :email, :password)
  end
end
