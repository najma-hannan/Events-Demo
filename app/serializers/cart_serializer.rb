class CartSerializer < ActiveModel::Serializer
  attributes :id, :name,  :price,:quantity,:created_at,:updated_at

 belongs_to :user
 has_many :cartItems

end
