class HomeController < ApplicationController
  def index
    @homeTopicContent = HomeTopicQuestion.all
    @homeContent = HomeContentPage.instance
  end
end
