class Events < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :title
      t.text :description
      t.date :start_date
      t.date :end_date
      t.string :location
      t.references :organizer, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end
