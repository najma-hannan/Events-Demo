class ApplicationController < ActionController::API
  before_action :authenticate_user

  def authenticate_user
    token = request.headers['Authorization']
    if token
      begin
        @current_user = User.find(decode_token(token)['user_id'])
      rescue JWT::DecodeError
        render json: { error: 'Invalid token' }, status: :unauthorized
      rescue ActiveRecord::RecordNotFound
        render json: { error: 'Invalid user' }, status: :unauthorized
      end
    else
      render json: { error: 'No authorization token provided' }, status: :unauthorized
    end
  end

  def current_user
    @current_user
  end

  def logout
    # JWT doesn't have built-in session invalidation, you need to handle it on client side
    render json: { message: 'Logged out successfully' }
  end

  private

  def decode_token(token)
    JwtService.decode_token(token)
  end

end
