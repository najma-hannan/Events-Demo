class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :start_date, :end_date, :location, :created_at, :total_ordered_quantity

  belongs_to :organizer
  has_many :tickets

  def total_ordered_quantity
    object.orders.joins(order_items: :ticket).sum('order_items.quantity')
  end
end
