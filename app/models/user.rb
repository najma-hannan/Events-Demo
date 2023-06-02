class User < ApplicationRecord
  has_secure_password

  has_many :events
  has_many :tickets

  validates :password, length: { minimum: 6 }
  validates :email, presence: true, uniqueness: true
end
