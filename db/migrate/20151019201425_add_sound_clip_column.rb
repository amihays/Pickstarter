class AddSoundClipColumn < ActiveRecord::Migration
  def change
    add_column :projects, :sound_clip_url, :string
  end
end
