class CreateWalks < ActiveRecord::Migration[5.2]
  def change
    create_table :walks do |t|
      t.string :title, null: false
      t.integer :author_id, null: false
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
      t.timestamps

      t.index ["title"], name: "index_walks_on_title", unique: true
      t.index ["author_id"], name: "index_walks_on_author_id"
      t.timestamps
    end
  end
end
