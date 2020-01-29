class CreateWaypoints < ActiveRecord::Migration[5.2]
  def change
    create_table :waypoints do |t|
      t.integer :route_id, null: false
      t.decimal :latitude, null: false
      t.decimal :longitude, null: false
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
      t.timestamps
      t.index ["route_id"], name: "index_waypoints_on_route_id", unique: true
    end
  end
end
