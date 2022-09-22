class ChildrenController < ApplicationController
    def index
      @childrenTopicContent = ChildrenTopicQuestion.all
      @healthContent = LifestyleContentPage.instance
      @timeContent = TimeContentPage.instance
      @familyContent = FamilyContentPage.instance
      @skillsContent = SkillsContentPage.instance
      @childrenContent = ChildrenContentPage.instance
      @homeContent = HomeContentPage.instance
      @sitehome = AdoptionHomePage.instance
    end
  end