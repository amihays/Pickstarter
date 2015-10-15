class ChangeProjectsDateColumn < ActiveRecord::Migration
  def change
    change_column :projects, :deadline, :date
  end
end
