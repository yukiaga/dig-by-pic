class UsersController < ApplicationController

  def show
    @artworks = []
    likes = current_user.likes
    likes.each do |like|
      @artworks << Artwork.find_by(id: like.artwork_id)
    end
    @likes = Like.where(user_id: current_user.id)
  end

end
