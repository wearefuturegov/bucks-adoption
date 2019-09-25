class ShareMailer < Mail::Notify::Mailer
  def share_plan
    @recipient = params[:recipient]
    @toDoList = params[:toDoList]

    view_mail(
      ENV['GOVUK_NOTIFY_TEMPLATE_ID'],
      to: @recipient,
      subject: 'Your Adoption Ready Plan',
      reply_to_id: ENV['GOVUK_NOTIFY_REPLY_TO_ID']
    )
  end
end
