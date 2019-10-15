class CreateBeliefs < ActiveRecord::Migration[5.2]
  def change
    create_table :beliefs do |t|
      t.integer "adversity_id", null: false
      t.text "belief_text"
      t.integer "control_level"
      t.integer "ability_level"
      t.integer "need_level"
      t.integer "pressure_level"
    end
  end
end
