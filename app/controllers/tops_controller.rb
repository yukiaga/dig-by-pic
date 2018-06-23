class TopsController < ApplicationController

  def about
  end

  def show
    @artworks = []
    likes = current_user.likes
    likes.each do |like|
      @artworks << Artwork.find_by(id: like.artwork_id)
    end
    @artworks = @artworks.reverse
    @likes = Like.where(user_id: current_user.id)
  end

  def contact
    @inquiry = Inquiry.new
  end

  def confirm
    @inquiry = Inquiry.new(inquiry_params)
    if @inquiry.valid?
      render action: 'confirm'
    else
      render action: 'contact'
    end
  end

  def thanks
    @inquiry = Inquiry.new(inquiry_params)
    InquiryMailer.received_email(@inquiry).deliver
  end

  private

    def inquiry_params
      params.require(:inquiry).permit(:name, :email, :message)
    end

end
