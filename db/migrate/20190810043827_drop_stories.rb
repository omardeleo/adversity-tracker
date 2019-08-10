class DropStories < ActiveRecord::Migration[5.2]
  def change
    drop_table :stories
  end
end
