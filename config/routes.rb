Rails.application.routes.draw do
  devise_for :users
  resources :users, only: :show

  root to: "artworks#index"

  resources :artworks, only: [:index, :new, :create, :show] do
    resources :likes, only: [:create, :destroy]
  end


end
