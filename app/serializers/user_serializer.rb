class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email  # Changed :name to :username

  has_many :events
  has_many :tickets

end
