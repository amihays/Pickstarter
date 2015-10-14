class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string    :title, null: false
      t.text      :description, null: false
      t.integer   :user_id, null: false
      t.integer   :genre_id, null: false
      t.datetime  :deadline, null: false
      t.string    :artist_name, null: false
      t.float     :funding_goal, null: false

      t.timestamps null: false
    end

    add_index :projects, :user_id
    add_index :projects, :genre_id
  end
end
