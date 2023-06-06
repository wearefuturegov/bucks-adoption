class ApplicationController < ActionController::Base
    devise_parameter_sanitizer.permit(:account_update, keys: [:name, :hero_image])
end
