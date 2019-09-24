class ShareMailer < Mail::Notify::Mailer
  def share_plan
    @recipient = params[:recipient]
    @toDoList = params[:toDoList]

    view_mail(
      ENV['SHARE_PLAN_TEMPLATE_ID'],
      to: @recipient,
      subject: 'Your Adoption Ready Plan'
    )
  end
end
