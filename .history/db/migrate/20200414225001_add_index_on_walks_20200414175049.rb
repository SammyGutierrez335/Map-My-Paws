class AddIndexOnWalks < ActiveRecord::Migration[5.2]
  def change
  def change
    add_index :walks, :title
  end
end
