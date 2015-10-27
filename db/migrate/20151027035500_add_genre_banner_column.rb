class AddGenreBannerColumn < ActiveRecord::Migration
  def change
    add_column :genres, :banner_url, :string
  end
end
