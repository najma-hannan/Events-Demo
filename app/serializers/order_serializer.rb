class OrderSerializer < ActiveModel::Serializer
  attributes :id, :created_at, :total_amount

  belongs_to :event
  belongs_to :user
  has_many :order_items

  def total_amount
    object.order_items.sum { |order_item| order_item.price * order_item.quantity }
  end
end
