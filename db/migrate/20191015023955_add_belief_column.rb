class AddBeliefColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :beliefs, :created_at, :datetime, null: false
    add_column :beliefs, :updated_at, :datetime, null: false
  end
end
