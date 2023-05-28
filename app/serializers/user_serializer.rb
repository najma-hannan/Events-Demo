class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email

  has_many :events
  has_many :orders
end
