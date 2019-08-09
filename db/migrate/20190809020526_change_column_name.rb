class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :feelings, :adversity_id, :recognition_id
  end
end
