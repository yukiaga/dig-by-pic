class ArtworksController < ApplicationController
  before_action :set_artwork, only: [:show, :edit, :update, :destroy]

  def index
    @artworks = Artwork.all
    @artwork_resize = []
    @artworks.each do |artwork|
      random = Random.new
      i = random.rand(1..6)
      artwork[:size] = i
      @artwork_resize << artwork
    end
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
