class AddLikesCountToArtworks < ActiveRecord::Migration[5.2]
  def change
    add_column :artworks, :likes_count, :integer
  end
end
