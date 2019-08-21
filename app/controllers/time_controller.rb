class TimeController < ApplicationController
  def index
    @timeTopicContent = TimeTopicQuestion.all
    @timeContent = TimeContentPage.instance
  end
end
