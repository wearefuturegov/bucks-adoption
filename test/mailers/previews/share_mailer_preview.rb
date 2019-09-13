# Preview all emails at http://localhost:3000/rails/mailers/share_mailer
class ShareMailerPreview < ActionMailer::Preview
  def share_plan
    ShareMailer.with(recipient: "test@test.test", toDoList: [["####Review website/gain experience with Children\r\n", "content goes here\r\n", "####Quit smoking\r\n", "Adopting a child is a great reason to quit smoking  Theere are lots of services to help you take the next step including the Live Well Stay Well Bucks Stop Smoking Service.\r\n", "####Review your employer’s adoption and parental leave policies\r\n", "You may be entitled to time off to help you adopt (e.g. to attend session with your chosen adoption agency etc).  \r\n\r\nYou are also entitled to time off afterwards. Citizens Advice provides a good explanation of information about [adoption leave entitlement](https://www.citizensadvice.org.uk/work/rights-at-work/parental-rights/parental-rights-at-work/#h-adoption-leave-and-pay).\r\n\r\n", "####Read advice for people adopting with existing children\r\n", "Learning from others' experiences can be a helpful way to reflect on your own situation. National adoption website [First4Adoption](https://www.first4adoption.org.uk/who-can-adopt-a-child/how-do-i-decide/thinking-about-adoption-if-you-already-have-children/) has helpful starting advice to consider.\r\n", "####Volunteer with children\r\n", "We advise people to gain as much volunteering experience with Children as possible.  \r\n\r\n[Do-it.org](http://www.do-it.org/) is a database of UK volunteering opportunities. You can search more than a million volunteering opportunities by interest, activity or location and then apply online.\r\n\r\n"]]).share_plan
  end
end
