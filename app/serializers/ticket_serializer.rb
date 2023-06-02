class TicketSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :quantity, :available_until, :total_ordered_quantity

  def total_ordered_quantity
    object.order_items.sum('order_items.quantity')
  end
end
