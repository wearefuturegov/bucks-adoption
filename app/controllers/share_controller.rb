class ShareController < ApplicationController
  require 'kramdown'

  def index
      ShareMailer.with(recipient: params[:recipient], todos: params[:toDoList]).share_plan.deliver_later

      render json: { status: "sent" }
  end
end
