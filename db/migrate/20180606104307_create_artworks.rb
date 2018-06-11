class CreateArtworks < ActiveRecord::Migration[5.2]
  def change
    create_table :artworks do |t|
      t.string :title
      t.string :image
      t.string :link
      t.string :artist
      t.timestamps
    end
  end
end
