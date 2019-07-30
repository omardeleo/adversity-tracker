class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name, limit: 30, null: false
      t.string :email, limit: 30, null: false
      t.string :password_digest, null: false
      t.string :session_token

      t.timestamps
    end
      add_index :users, :email, unique: true
      add_index :users, :session_token, unique: true
  end
end