class AddImageColumn < ActiveRecord::Migration
  def change
    add_column :genres, :image_url, :string
  end
end
