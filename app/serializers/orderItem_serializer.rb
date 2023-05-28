class OrderItemSerializer < ActiveModel::Serializer
  attributes :id, :ticket_id, :quantity

  belongs_to :ticket, serializer: TicketSerializer
end
