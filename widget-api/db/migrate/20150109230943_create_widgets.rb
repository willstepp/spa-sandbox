class CreateWidgets < ActiveRecord::Migration
  def change
    create_table :widgets do |t|
      t.string :name
      t.text :desc
      t.integer :price

      t.timestamps null: false
    end
  end
end
