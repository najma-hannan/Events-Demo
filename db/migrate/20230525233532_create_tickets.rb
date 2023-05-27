class CreateTickets < ActiveRecord::Migration[6.1]
  def change
    create_table :tickets do |t|
      t.string :name
      t.integer :price
      t.integer :quantity
      t.datetime :available_until
      t.references :event, null: false, foreign_key: true

      t.timestamps
    end
  end
end
