class AddValuesToReflections < ActiveRecord::Migration[5.2]
  def change
    add_column :reflections, :value, :string
    add_column :reflections, :value_phrase, :string
    add_column :reflections, :value_action, :string
    add_column :reflections, :value_origin, :string
  end
end
