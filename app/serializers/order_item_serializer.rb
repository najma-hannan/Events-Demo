class OrderItemSerializer < ActiveModel::Serializer
  attributes :id, :ticket, :quantity, :price

  belongs_to :ticket
end
