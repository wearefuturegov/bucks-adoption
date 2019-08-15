class LifestyleController < ApplicationController
  def index
    @lifestylesectionscontent = LifestyleTopicQuestion.all
    @lifestylecontent = LifestyleContentPage.instance
  end
end
