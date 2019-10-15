class AddNeedToBelief < ActiveRecord::Migration[5.2]
  def change
    add_column :beliefs, :need, :string
    add_column :beliefs, :need_reason, :string
  end
end
