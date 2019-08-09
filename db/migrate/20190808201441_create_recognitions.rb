class CreateRecognitions < ActiveRecord::Migration[5.2]
  def change
    create_table :recognitions do |t|
      t.integer :adversity_id, null: false

      t.timestamps
    end
  end
end
