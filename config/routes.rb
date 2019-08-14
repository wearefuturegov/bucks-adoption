Rails.application.routes.draw do

  get 'lifestyle/index'
  get 'static_pages/home'
  root "static_pages#show", page: 'home'

  namespace :admin do
    resources :lifestyle_sections
    get '/', to: redirect('/admin/pages')
  end
  # mount Fae below your admin namespec
  mount Fae::Engine => '/admin'

  get "/pages/:page" => "static_pages#show"
end
