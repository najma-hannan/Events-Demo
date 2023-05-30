class CreateCarts < ActiveRecord::Migration[6.1]
  def change
    create_table :carts do |t|
      t.string :name
      t.string :url
      t.date :date
      t.string :location
      t.string :description
      t.integer :rating
      t.integer :price
      t.integer :quantity
      t.integer :total

      t.timestamps
    end
  end
end
