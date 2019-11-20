class RenameBeliefsToReflections < ActiveRecord::Migration[5.2]
  def change
    rename_table :beliefs, :reflections
  end
end
