class User < ApplicationRecord
  has_secure_password
  attribute :is_admin, :boolean, default: false

  has_many :events
  has_many :tickets

  validates :password, length: { minimum: 6 }
  validates :email, presence: true, uniqueness: true
  # Add any additional custom validations or methods as needed
end
