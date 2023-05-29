class OrderSerializer < ActiveModel::Serializer
  attributes :id, :created_at

  belongs_to :event
  belongs_to :user
  has_many :order_items
end
