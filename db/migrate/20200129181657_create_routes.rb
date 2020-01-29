class CreateRoutes < ActiveRecord::Migration[5.2]
  def change
    create_table :routes do |t|
      t.string :title, null: false
      t.string :center_coords, null: false
      t.integer :author_id, null: false
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
      t.timestamps

      t.index ["title"], name: "index_routes_on_title", unique: true
      t.index ["author_id"], name: "index_routes_on_author_id"
    end
  end
end
