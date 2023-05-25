class User < ApplicationRecord
  has_secure_password

  has_many :events, foreign_key: 'organizer_id'

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true, length: { minimum: 6 }
  validates :password_confirmation, presence: true

  def self.authenticate(username, password)
    user = find_by(username: username)
    return user if user&.authenticate(password)
  end

  def admin?
    role == 'admin'
  end
end

