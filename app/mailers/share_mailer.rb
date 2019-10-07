class ShareMailer < Mail::Notify::Mailer
  def share_plan
    @recipient = params[:recipient]
    @toDoList = params[:toDoList]

    view_mail(
      ENV['GOVUK_NOTIFY_TEMPLATE_ID'],
      to: @recipient,
      subject: 'Your Adoption Readiness Plan'
    )
  end
end
