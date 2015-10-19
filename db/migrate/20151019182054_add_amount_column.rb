class AddAmountColumn < ActiveRecord::Migration
  def change
    add_column :contributions, :amount, :float, null: false
  end
end
