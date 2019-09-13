class ShareMailer < ApplicationMailer
  def share_plan
    @recipient = params[:recipient]
    @actions = params[:_json]
  end
end
