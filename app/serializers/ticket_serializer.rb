class TicketSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :quantity, :available_until, :event
end
