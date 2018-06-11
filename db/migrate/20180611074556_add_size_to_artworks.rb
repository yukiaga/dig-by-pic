class AddSizeToArtworks < ActiveRecord::Migration[5.2]
  def change
    add_column :artworks, :size, :integer
  end
end
