Rails.application.routes.draw do

  get 'health/index'
  get 'time/index'
  get 'family/index'
  get 'skills/index'
  get 'home/index'

  get 'results/index'

  get 'static_pages/home'
  root "static_pages#show", page: 'home'

  get 'static_pages/cookies'

  namespace :admin do
    resources :home_topic_questions
    resources :skills_topic_questions
    resources :family_topic_questions
    resources :time_topic_questions
    resources :health_topic_questions
    get '/', to: redirect('/admin/pages')
  end
  # mount Fae below your admin namespec
  mount Fae::Engine => '/admin'

  get "/pages/:page" => "static_pages#show"
end
