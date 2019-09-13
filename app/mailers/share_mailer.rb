class ShareMailer < ApplicationMailer
  def share_plan
    @recipient = params[:recipient]
    @actions = params[:_json]

    mail(to: @recipient, subject: "Your Adoption Ready Plan", actions: @actions)
  end
end
