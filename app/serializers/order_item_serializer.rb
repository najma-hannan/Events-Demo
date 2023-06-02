class OrderItemSerializer < ActiveModel::Serializer
  attributes :id, :ticket, :quantity, :price, :total_amount

  belongs_to :ticket

  def total_amount
    object.price * object.quantity
  end
end
