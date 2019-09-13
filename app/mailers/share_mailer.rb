class ShareMailer < ApplicationMailer
  def share_plan
    @recipient = params[:recipient]
    @toDoList = params[:toDoList]

    mail(to: @recipient, subject: "Your Adoption Ready Plan", toDoList: @toDoList)
  end
end
