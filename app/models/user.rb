
class User < ApplicationRecord
  has_secure_password

  has_many :events, foreign_key: :organizer_id
  has_many :tickets, foreign_key: :user_id

  validates :username, presence: true, uniqueness: true
  validates :password, presence: true, length: { minimum: 6 }
  validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }

  # Add any additional custom validations or methods as needed
end
