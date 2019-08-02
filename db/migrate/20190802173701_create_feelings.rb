class CreateFeelings < ActiveRecord::Migration[5.2]
  def change
    create_table :feelings do |t|
      t.string :name, null: false
      t.integer :intensity, null: false
      t.integer :adversity_id, null: false

      t.timestamps
    end
  end
end