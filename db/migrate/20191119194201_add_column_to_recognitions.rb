class AddColumnToRecognitions < ActiveRecord::Migration[5.2]
  def change
    add_column :recognitions, :recognition_date, :timestamp
  end
end
