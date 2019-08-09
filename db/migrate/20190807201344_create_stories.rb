class CreateStories < ActiveRecord::Migration[5.2]
  def change
    create_table :stories do |t|
      t.string :text, null: false
      t.integer :recognition_id, null: false

      t.timestamps
    end
  end
end
