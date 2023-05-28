class User < ApplicationRecord
  has_secure_password
  attribute :is_admin, :boolean, default: false

  has_many :events, foreign_key: 'organizer_id'
  has_many :orders
  has_many :order_items, through: :orders
  has_many :tickets, through: :order_items

  validates :password, length: { minimum: 6 }, on: :create
  validates :email, presence: true, uniqueness: true
  # Add any additional custom validations or methods as needed
end
