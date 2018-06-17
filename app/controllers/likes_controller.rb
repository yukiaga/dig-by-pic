class LikesController < ApplicationController
  def create
    @like = Like.create(user_id: current_user.id, artwork_id: params[:artwork_id])
    @artwork = Artwork.find(params[:artwork_id])
    @likes = Like.where(user_id: current_user.id)
  end

  def destroy
    like = Like.find_by(user_id: current_user.id, artwork_id: params[:artwork_id])
    like.destroy
    @artwork = Artwork.find(params[:artwork_id])
    @like = nil
    @likes = Like.where(user_id: current_user.id)
  end
end
