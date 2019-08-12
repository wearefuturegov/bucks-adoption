Rails.application.routes.draw do

  get 'static_pages/home'
  namespace :admin do
    resources :lifestyle_sections
    get '/', to: redirect('/admin/pages')
  end
  # mount Fae below your admin namespec
  mount Fae::Engine => '/admin'

  root "static_pages#show", page: 'home'
  get "/pages/:page" => "static_pages#show"
end
