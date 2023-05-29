class OrderSerializer < ActiveModel::Serializer
  attributes :id, :event_id, :user_id, :created_at

  has_many :order_items, serializer: OrderItemSerializer
end
