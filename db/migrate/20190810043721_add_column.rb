class AddColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :recognitions, :story, :string, {:null => false}
  end
end
