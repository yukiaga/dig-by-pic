Rails.application.routes.draw do
  devise_for :users

  get 'about', to: 'tops#about'
  get 'users/:id', to: 'tops#show'
  get 'contact', to: 'tops#contact'
  post 'contact/confirm', to: 'tops#confirm'
  post 'contact/thanks', to: 'tops#thanks'

  root to: "artworks#index"

  resources :artworks, only: [:index, :new, :create, :show] do
    resources :likes, only: [:create, :destroy]
  end


end
