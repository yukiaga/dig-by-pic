class ArtworksController < ApplicationController
  before_action :set_artwork, only: [:show, :edit, :update, :destroy]

  def index
    @artworks = Artwork.order("RAND()").includes(:likes).page(params[:page]).per(150)
    if user_signed_in?
      @likes = Like.where(user_id: current_user.id)
    end
    # @artworks = Kaminari.paginate_array(Artwork.includes(:like).shuffle).page(params[:page]).per(10)
  end

  def show
  end

  def new
    @artwork = Artwork.new
  end

  def edit
  end

  def create
    @artwork = Artwork.new(artwork_params)
    if @artwork.save
      redirect_to root_path, notice: "artwork作成できました！"
    else
      render :new
    end
  end

  def update
  end

  def destroy
  end

  private

    def set_artwork
      @artwork = Artwork.find(params[:id])
    end

    def artwork_params
      params.require(:artwork).permit(:title, :image, :link, :artist).merge(user_id: current_user.id)
    end
end
