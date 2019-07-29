class CreateAdversities < ActiveRecord::Migration[5.2]
   def change
    create_table :adversities do |t|
      t.string :title, null: false
      t.string :story, null: false
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :adversities, :user_id
  end
end
