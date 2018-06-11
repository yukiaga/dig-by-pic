class Artwork < ApplicationRecord
  # mount_uploader :image, ImageUploader
  validates :image, presence: true

  # has_many :artwork_collections
  # has_many :collections, through: artwork_collections
  belongs_to :user

end
