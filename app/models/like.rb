class Like < ApplicationRecord
  belongs_to :artwork, counter_cache: :likes_count
  belongs_to :user
end
