class AddStartDateToAdversities < ActiveRecord::Migration[5.2]
  def change
    add_column :adversities, :adversity_date, :timestamp
  end
end
