class AddBeliefsRows < ActiveRecord::Migration[5.2]
  def change
    add_column :beliefs, :control_energy_level, :integer
    add_column :beliefs, :physical_energy_level, :integer
  end
end
