class Order < ApplicationRecord
  belongs_to :event
  belongs_to :user
  has_many :order_items
  has_many :tickets, through: :order_items
end
