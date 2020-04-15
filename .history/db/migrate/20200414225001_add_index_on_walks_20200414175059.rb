class AddIndexOnWalks < ActiveRecord::Migration[5.2]
  def change
    add_index :walks, :title
  end
end
