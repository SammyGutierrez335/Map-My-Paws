class CreateFriends < ActiveRecord::Migration[5.2]
  def change
    create_table :friends do |t|
      t.integer :friended_user_id, null: false
      t.integer :friending_user_id, null: false
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
      t.timestamps
    end
  end
end
