class ApplicationController < ActionController::API
  rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response

  rescue_from ActiveRecord::RecordNotFound, with: :not_found_response

  before_action :authenticate_user

  def authenticate_user
    token = request.headers['Authorization']
    message =  "vhchgcyhchchchchgchgc cghcghcchgc" + token
    puts message
    if token
      begin
        @current_user = User.find(decode_token(token)['user_id'])
        puts @current_user.inspect
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

  def unprocessable_entity_response(invalid)
    render json: {errors: invalid.record.errors.to_hash(true)}, status: :unprocessable_entity
  end

  def not_found_response
    render json: {errors: "Not Found"}, status: :not_found
  end

end
