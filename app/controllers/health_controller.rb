class HealthController < ApplicationController
  def index
    @healthTopicContent = HealthTopicQuestion.all
    @healthContent = LifestyleContentPage.instance
  end
end
