class FamilyController < ApplicationController
  def index
    @familyTopicContent = FamilyTopicQuestion.all
    @familyContent = FamilyContentPage.instance
  end
end
