class JwtService
  SECRET_KEY = Rails.application.secrets.secret_key_base.to_s

  def self.encode_token(payload)
    JWT.encode(payload, SECRET_KEY)
  end

  def self.decode_token(token)
    JWT.decode(token, SECRET_KEY).first
  end
end
