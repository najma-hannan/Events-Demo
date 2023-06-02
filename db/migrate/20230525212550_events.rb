class Events < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :title
      t.text :description
<<<<<<< HEAD
      t.date :start_date
      t.date :end_date
=======
      t.datetime :start_date
      t.datetime :end_date
>>>>>>> bd336383ee53fcc85a929df26905abdff4f5495f
      t.string :location
      t.references :organizer, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end
